import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    return <li>{key}</li>;
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    // like a for loop or a Map, but instead of updated an external variable, it returns a specific subset. we're looking for a tally
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status == 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0); 
    // have to start with 0 or a number when using reduce 
    return (
      <div className="order">
        <div className="order-wrap">
          <h2>Order</h2>
          <ul>
            { orderIds.map(this.renderOrder)}
          </ul>
          
          <div className="total">
            Total: <strong>{formatPrice(total)}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;

