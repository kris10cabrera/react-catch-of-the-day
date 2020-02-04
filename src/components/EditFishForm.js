import React from 'react';

class EditFishForm extends React.Component {
  handleChange = event => {
    // update the fish!
    const updatedFish = { 
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish);
  }
  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange} />
        <input type="text" name="price" value={this.props.fish.price} onChange={this.handleChange} />
        <select type="text" name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={this.props.fish.desc} onChange={this.handleChange} />
        <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange} />
        {/* we have to pass the key in as an index not a key */}
        <button onClick={()=>this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )

  }
}

export default EditFishForm;