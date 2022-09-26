import React from 'react';
import PropTypes from 'prop-types';

// Adding in a color prop that's not defined in the products object. Look below for defaultProp Example
export const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {/* Our logic for the star system
        If the review value is greater than 1 -> Full star. Else if value is greater than 0.5 -> Half Star. Else -> Empty star
        This is also star number 1
         */}
        <i
          style={{ color: color }}
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
          style={{ color }}
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
          style={{ color }}
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
          style={{ color }}
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
          style={{ color }}
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

//* Setting default prop values
Rating.defaultProps = {
  color: '#f8e825'
};

/** Type checking our pops
 * * We're setting out prop types so that it takes in a specific type -> string, number, boolean, function etc
 * For example, if we pass in a number into our 'text' field, then we get an error on our browser console. This is building in type Checking
 */
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};
