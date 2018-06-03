import React, { Component } from 'react';
import '../../css/examples/StyledTable.css';

class StyledTable extends Component {
  render() {
    return (
      <div className="styled-table">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
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
  }
}

export default StyledTable;
