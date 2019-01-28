/**
 * ************************************
 *
 * @module  Form
 * @description presentational component that takes in user input
 *
 * ************************************
 */

import React from 'react';

const Form = ({ onFormSubmit }) => (
  <div>
    <form onSubmit={onFormSubmit}>
      <div className="start-date">
        <h4>Start Date</h4>
        <input type="date" name="date" />
      </div>
      <div className="number-of-days">
        <h4>Number of Days</h4>
        <input type="number" name="numDays" min="1"  />
      </div>
      <button>Submit</button>
    </form>
  </div>
)

export default Form;