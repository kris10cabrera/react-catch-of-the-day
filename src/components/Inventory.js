import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm'

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} fish={this.props.fishes[key]}
        updateFish={this.props.updateFish} 
        index={key}
        />)}
        {/* this.props.addFishForm because it doesn't live on inventory, it's coming from the props */}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;