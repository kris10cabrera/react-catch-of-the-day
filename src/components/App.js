import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // take a copy of the existing state, makes a spread
    const fishes = {...this.state.fishes};
    // add new fish to fishes variables
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({ fishes });
  };

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
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        
      </div>
    );
  }
}

export default App;