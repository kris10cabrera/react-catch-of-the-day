import React from 'react';
import { getFunName } from '../helpers';



class StorePicker extends React.Component {
  myInput = React.createRef();
  // if you need to access this inside of a custom method, must use following syntac
  goToStore = event => {
    // stop form from submitting, get text from input, change page to /store/whatever
    event.preventDefault();
    this.props.history.push(`/store/${this.myInput.current.value}`)
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store </h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()} />
        <button type="submit">Visit Store → </button>
      </form>
    )
  }
}

export default StorePicker;