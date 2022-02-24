import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

//Add Secondary Component to this component???
  // Not really a secondary component but rather works as the css in the same file as the js
    // Instead of the div className = form-control, replace with <FormControl> but keep this middle content the same</FormControl>
      //Props dynamically changes parts of the css via styled components based on props values sent up
// const FormControl = styled.div`
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red': 'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background-color:  ${props => (props.invalid ? '#ffd7d7' : 'white')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `
//  Replaced by dynamic props sent below via invalid and received above with using ternary operator and template literal
//&.invalid input {
//   border-color: red;
//   background: #ffd7d7;
// }
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [userTyped, userTypedNotSpaces] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0 ) {
      userTypedNotSpaces(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0 ) {
      userTypedNotSpaces(false);
      return;
    }
    //userTypedNotSpaces(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* `` - These are template literals and allow for ${} to be put in which is js in css, COOL FEATURE! 
          Adds invalid string to the className if userTyped is false, or else it keeps the className the same as it was
      */}
      {/* Will not show invalid unless className property added with ternary operator(?) and template literal(``) with dynamic wrap({}) 
        or can do simpler way of just the && since blank is the preset value anyway 
        className={`${!userTyped && 'invalid'}`} - This becomes by replace dynamic props with CSS, can send props to styled components
        and based on the value of the props, CSS will be styled differently based on the props
        */
      }
      {/* different syntax for dashes(-) in CSS module classnames: need to use array brackets 
        Can also have a template literal next to the one still in the (``) that checks the state to see if it should add another CSS className
        This is the dynamic ness, I don't think that props would work that well considering a css file is being used and you probably couldn't
        set props in css to be read to the component js file.
      */}
      <div className={`${styles["form-control"]} ${!userTyped && styles.invalid}`}>
        {/* style={{ color : !userTyped ? 'red' : 'black'}} */}
        <label>Course Goal</label>
        {/* style={{ backgroundColor : !userTyped ? 'salmon' : 'transparent', borderColor : !userTyped ? 'red' : 'black'}} */}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
