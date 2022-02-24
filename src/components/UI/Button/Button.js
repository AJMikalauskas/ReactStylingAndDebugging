import React from "react";
import styles from './Button.module.css'
// import styled from 'styled-components';

// //This is called a tag template literal, JS feature not specific to React
//   // Styled is an object and button is one of its methods we are importing - cal also use method of h2, h1, div, etc...
//     // button styles are between the back ticks, add button styled from Button.css in between the back ticks
      
    
//       // Presets button width to 100% if the media or screen isn't bigger than 768px; - For Mobile
//         // For PC - since PC has gereater than the media width, the width becomes auto for the button
// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
const Button = props => {
  return (
    // className="button" - replaced with dynamic styles.button in className with CSS modules
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;