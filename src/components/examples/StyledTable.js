import React from 'react';
import '../../css/examples/StyledTable.css';

const StyledTable = () => (
  <div className="styled-table">
    <div className="code-view-link"><a href="https://codepen.io/steve-warren/pen/jKWVzM" target="_blank" rel="noopener noreferrer">View the code on codepen.io</a></div>

    <table>
      <thead>
        <tr>
          <th className="col-item-name">Item Name</th>
          <th className="col-quantity">Quantity</th>
          <th className="col-price">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oranges</td>
          <td>5</td>
          <td>$3.00</td>
        </tr>
        <tr>
          <td>Celery</td>
          <td>2</td>
          <td>$2.50</td>
        </tr>
        <tr>
          <td>Garlic</td>
          <td>2</td>
          <td>$1.90</td>
        </tr>
        <tr>
          <td>Bananas</td>
          <td>6</td>
          <td>$2.99</td>
        </tr>
        <tr>
          <td>Onions</td>
          <td>4</td>
          <td>$3.00</td>
        </tr>
        <tr>
          <td>Very long awkwardly named yet still delicious item here</td>
          <td>4</td>
          <td>$3.00</td>
        </tr>
        <tr>
          <td>Carrots</td>
          <td>12</td>
          <td>$2.99</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default StyledTable;
