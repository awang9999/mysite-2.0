# Deployment Guide

This guide explains how to deploy updates to your portfolio website hosted on AWS.

## Quick Deploy

The easiest way to deploy is using the automated script:

```bash
chmod +x deploy.sh
./deploy.sh
```

This script will:
1. Clean previous build artifacts
2. Install/update npm dependencies
3. Build the React application for production
4. Sync files to S3 with appropriate cache headers
5. Invalidate CloudFront cache to ensure changes are visible immediately

## Manual Deployment

If you prefer to deploy manually or need more control:

### Step 1: Build the Application

```bash
# Install dependencies (if needed)
npm install

# Create production build
npm run build
```

This creates an optimized production build in the `build/` directory.

### Step 2: Sync to S3

```bash
# Sync all files except HTML (with long cache)
aws s3 sync build s3://www.alexander-wang.net \
  --profile awang \
  --delete \
  --exact-timestamps \
  --cache-control "public, max-age=31536000" \
  --exclude "*.html" \
  --exclude "manifest.json" \
  --exclude "robots.txt"

# Sync HTML files with no-cache
aws s3 sync build s3://www.alexander-wang.net \
  --profile awang \
  --delete \
  --exact-timestamps \
  --cache-control "no-cache, no-store, must-revalidate" \
  --exclude "*" \
  --include "*.html" \
  --include "manifest.json" \
  --include "robots.txt" \
  --content-type "text/html"
```

**Flags explained:**
- `--delete`: Removes files from S3 that don't exist locally
- `--exact-timestamps`: Only uploads files that have changed
- `--cache-control`: Sets browser/CDN caching behavior
- `--profile awang`: Uses the AWS profile configured for your account

### Step 3: Invalidate CloudFront Cache

After syncing to S3, you must invalidate the CloudFront cache to see changes immediately:

```bash
aws cloudfront create-invalidation \
  --profile awang \
  --distribution-id d1oevywpg7h4uc \
  --paths "/*"
```

**Note:** CloudFront invalidations can take 1-5 minutes to complete. You get 1,000 free invalidation paths per month.

### Step 4: Verify Deployment

Check that files were uploaded:
```bash
aws s3 ls s3://www.alexander-wang.net/ --profile awang --recursive --human-readable
```

Check invalidation status:
```bash
aws cloudfront list-invalidations \
  --profile awang \
  --distribution-id d1oevywpg7h4uc
```

Visit your website:
- https://www.alexander-wang.net
- https://alexander-wang.net

## Cache Strategy

The deployment uses a two-tier caching strategy:

**Static Assets (JS, CSS, images, fonts):**
- Cache-Control: `public, max-age=31536000` (1 year)
- These files have content hashes in their names, so they can be cached forever
- When you rebuild, new hashes are generated for changed files

**HTML Files:**
- Cache-Control: `no-cache, no-store, must-revalidate`
- Always fetched fresh to ensure users get the latest version
- The HTML references the hashed static assets

This strategy ensures:
- Fast load times (assets cached)
- Instant updates (HTML always fresh)
- No stale content issues

## Troubleshooting

### Changes not visible after deployment

1. **Clear CloudFront cache:**
   ```bash
   aws cloudfront create-invalidation \
     --profile awang \
     --distribution-id d1oevywpg7h4uc \
     --paths "/*"
   ```

2. **Hard refresh your browser:**
   - Chrome/Firefox: Ctrl+Shift+R (Cmd+Shift+R on Mac)
   - Safari: Cmd+Option+R

3. **Check if files uploaded:**
   ```bash
   aws s3 ls s3://www.alexander-wang.net/static/js/ --profile awang
   ```

### Build fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### AWS credentials expired

If using assumed role credentials, they expire after 1 hour. Re-assume the role:

```bash
aws sts assume-role \
  --role-arn arn:aws:iam::488985706349:role/AgenticAIAccessRole \
  --role-session-name deployment \
  --duration-seconds 3600 \
  --profile awang
```

Then export the new credentials.

### S3 sync is slow

Use `--size-only` to skip timestamp checks:
```bash
aws s3 sync build s3://www.alexander-wang.net --profile awang --size-only
```

## CI/CD with CircleCI

Your project already has CircleCI configured (`.circleci/config.yml`). When you push to the `live` branch:

1. CircleCI automatically builds the app
2. Syncs to S3
3. No CloudFront invalidation (you may want to add this)

To add CloudFront invalidation to CircleCI, update `.circleci/config.yml`:

```yaml
- run:
    name: Invalidate CloudFront
    command: |
      if [ $CIRCLE_BRANCH = 'live' ]; then
        aws cloudfront create-invalidation \
          --distribution-id d1oevywpg7h4uc \
          --paths "/*"
      fi
```

## Cost Considerations

- **S3 Storage:** ~$0.023/GB per month (you're using ~32 MB = ~$0.001/month)
- **S3 Requests:** Minimal cost for static site
- **CloudFront:** First 1 TB of data transfer is free tier eligible
- **CloudFront Invalidations:** First 1,000 paths free per month
- **Route53:** $0.50/month per hosted zone

Total estimated cost: ~$1-2/month

## Best Practices

1. **Always test locally first:** Run `npm start` and verify changes
2. **Build before deploying:** Never deploy without building first
3. **Use the deployment script:** Automates the process and reduces errors
4. **Monitor invalidations:** Don't exceed 1,000 free paths/month
5. **Check the website:** Always verify deployment was successful
6. **Keep dependencies updated:** Run `npm audit` and `npm update` regularly

## Additional Resources

- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Invalidation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
