import React from 'react';

export const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <span>
        {/* Our logic for the star system
        If the review value is greater than 1 -> Full star. Else if value is greater than 0.5 -> Half Star. Else -> Empty star
        This is also star number 1
         */}
        <i
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far-fa-star'
          }
        ></i>
      </span>
      <span>
        {/* This is also star number 2
        If the review value is greater than 1 -> Full star. Else if value is greater than 0.5 -> Half Star. Else -> Empty star
         */}
        <i
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far-fa-star'
          }
        ></i>
      </span>
      <span>
        {/* This is also star number 3
        If the review value is greater than 1 -> Full star. Else if value is greater than 0.5 -> Half Star. Else -> Empty star
         */}
        <i
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far-fa-star'
          }
        ></i>
      </span>
      <span>
        {/* This is also star number 4
        If the review value is greater than 1 -> Full star. Else if value is greater than 0.5 -> Half Star. Else -> Empty star
         */}
        <i
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far-fa-star'
          }
        ></i>
      </span>
      <span>
        {/* This is also star number 5
        If the review value is greater than 1 -> Full star. Else if value is greater than 0.5 -> Half Star. Else -> Empty star
         */}
        <i
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far-fa-star'
          }
        ></i>
      </span>

      {/* Neat trick here -> If there's text then show it -> && */}
      <span>{text && text}</span>
    </div>
  );
};
