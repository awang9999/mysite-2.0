import React from 'react';

function BlogIndexItem(props){
	return (
		<>
			<li className='index__item'>
				<figure className='index__item_pic-wrap' data-category={props.label}>
					<img
						className='index__item_img'
						alt='Blog Article Cover Image'
						src={props.src}
					/>
				</figure>
				<div className='index__item_header'>
					<h3
						className='index__item_title'>
						{props.title}
					</h3>
				</div>
				<div className='index__item_body'>
					<p className='index__item_text'>
						{props.summary}
					</p>
					<a className='index__item_link'
					   href={props.path}>
					    <p>Read More...</p>
					</a>
				</div>
			</li>
		</>
	);
}

export default BlogIndexItem;
