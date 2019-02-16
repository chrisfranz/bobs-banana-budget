/**
 * ************************************
 *
 * @module  MainContainer
 * @description stateful component that renders Form and TotalDisplay and SPINNING BANANAS!
 *
 * ************************************
 */

import React, { Component } from 'react';

import Form from '../components/Form';
import TotalDisplay from '../components/TotalDisplay';
import BananaLeft from '../components/BananaLeft';
import BananaRight from '../components/BananaRight';

import trasformFormDate from '../../utils/transformFormDate'

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCost: ''
    }
  }

  handleFormSubmit = (e) => {
    // prevent page refresh on submit
    e.preventDefault();
    // convert formDate to match endpoint's expected input (DD/MM/YYYY)
    const date = trasformFormDate(e.target.elements.date.value);
    // store submitted numDays value, coerce to type 'number' to match endpoint's expected input type
    const numDays = e.target.elements.numDays.value * 1;
    
    const url = 'http://localhost:3333/total-cost' + '?date=' + date + '&numDays=' + numDays;
    // posts date, numDays to endpoint, receives totalCost
    fetch(url)
    .then(res => res.json())
    .then(amount => {
      const formattedAmount = amount.toFixed(2);
      this.setState({ totalCost: '$' + formattedAmount })
    })
    .catch(error => console.error('Error: ', error));
  }

  render() {
    return(
      <div className="main-container">
        <div>
          <BananaRight />
        </div>
        <div>
          <Form 
            onFormSubmit={this.handleFormSubmit}
          />
          <TotalDisplay 
            totalCost={this.state.totalCost}
          />
        </div>
        <div>
          <BananaLeft />
        </div>
      </div>
    )
  }
}

export default MainContainer;