import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' target='_blank' href={props.path} >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__header'>
            <h3 className='cards__item__title'>{props.title}</h3>
          </div>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
