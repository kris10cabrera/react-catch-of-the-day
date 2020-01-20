import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // reinstate local storage :) 
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)});
    }

    // refs in firebase are references to pieces of data
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // take a copy of the existing state, makes a spread
    const fishes = {...this.state.fishes};
    // add new fish to fishes variables
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes });
  };

  updateFish = (key, updatedFish) => {
    // take copy of current fish
    const fishes = {...this.state.fishes};
    // it's not props because we're in the component where the state is living!!!!!!!!
    // update that state
    fishes[key] = updatedFish;
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };

  addToOrder = (key) => {
    // take a copy of state
    const order = {...this.state.order};
    // add to the order or update the number in the order
    order[key] = order[key] + 1 || 1;
    // call set state to update state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
            <Fish 
            // have to pass key as prop and needs to be something other than key, because key is for React
            key={key} 
            index={key}
            details={this.state.fishes[key]}
            addToOrder={this.addToOrder}
            />
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory fishes={this.state.fishes} addFish={this.addFish} updateFish={this.updateFish} loadSampleFishes={this.loadSampleFishes}/>
        
      </div>
    );
  }
}

export default App;