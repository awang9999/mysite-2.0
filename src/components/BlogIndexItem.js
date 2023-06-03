import React from 'react';
import { Link } from 'react-router-dom';

function BlogIndexItem(props){
	return (
		  <>
			    <li className='index_item'>
              <div className='index_item_img_wrapper'>
                  <img
                      className='index_item_img'
                      alt={props.alt}
                      src={props.src}
                  />
              </div>
              
              <div className='index_item_content'>
                  <h3 className='index_item_title'>
                      {props.title}
                  </h3>

                  <h5>Published: {props.pubdate} | {props.readingtime} min read</h5>
                  
                  <div className='index_item_description'>
                      <p className='index_item_text'>
                          {props.text}
                      </p>
                      <Link to={props.path}>
                          [Read More]
                      </Link>
                  </div>
              </div>
          </li>
		  </>
	);
}

export default BlogIndexItem;
