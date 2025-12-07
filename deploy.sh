#!/bin/bash

# Portfolio Website Deployment Script
# This script builds the React app and deploys it to AWS S3 + CloudFront

set -e  # Exit on any error

# Configuration - Update these values for your deployment
BUCKET_NAME="your-bucket-name"
CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"
AWS_PROFILE="default"
BUILD_DIR="build"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Portfolio Website Deployment${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Step 1: Clean previous build
echo -e "${YELLOW}[1/5] Cleaning previous build...${NC}"
if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
    echo "✓ Removed old build directory"
else
    echo "✓ No previous build to clean"
fi
echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}[2/5] Installing dependencies...${NC}"
npm install
echo "✓ Dependencies installed"
echo ""

# Step 3: Build the React app
echo -e "${YELLOW}[3/5] Building React application...${NC}"
npm run build
echo "✓ Build completed successfully"
echo ""

# Step 4: Sync to S3
echo -e "${YELLOW}[4/5] Syncing files to S3...${NC}"
aws s3 sync "$BUILD_DIR" "s3://$BUCKET_NAME" \
    --profile "$AWS_PROFILE" \
    --delete \
    --exact-timestamps \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "manifest.json" \
    --exclude "robots.txt"

# Upload HTML files with no-cache to ensure updates are immediate
aws s3 sync "$BUILD_DIR" "s3://$BUCKET_NAME" \
    --profile "$AWS_PROFILE" \
    --delete \
    --exact-timestamps \
    --cache-control "no-cache, no-store, must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --include "manifest.json" \
    --include "robots.txt" \
    --content-type "text/html"

echo "✓ Files synced to S3"
echo ""

# Step 5: Invalidate CloudFront cache
echo -e "${YELLOW}[5/5] Invalidating CloudFront cache...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --profile "$AWS_PROFILE" \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

echo "✓ CloudFront invalidation created: $INVALIDATION_ID"
echo ""

# Summary
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment Complete!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo "Your website has been deployed to:"
echo "  • S3 Bucket: s3://$BUCKET_NAME"
echo ""
echo "CloudFront cache invalidation in progress..."
echo "Changes should be visible within 1-5 minutes."
echo ""
echo "To check invalidation status:"
echo "  aws cloudfront get-invalidation --profile $AWS_PROFILE --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --id $INVALIDATION_ID"
echo ""
