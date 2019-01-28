/**
 * ************************************
 *
 * @module  TotalDisplay
 * @description presentational component that renders totalCost
 *
 * ************************************
 */

import React from 'react';

const TotalDisplay = ({ totalCost }) => (
  <div id="total-display">
    {totalCost && (
      <div id="total-display-items">
        <h4>Total Cost</h4>
        <h4>{totalCost}</h4>
      </div>
    )}
  </div>
  
)

export default TotalDisplay;