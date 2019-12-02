import React from "react";

class Groceryform extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addGrocery(this.state.name);
    this.setState({name: ""}); 
  }
  change = (e) => {
    this.setState({ name: e.target.value })
  }


  render() {
    return (
      <form onSubmit={this.submit}>
        <input required placeholder="add grocery item"
          value={this.state.name}
          name="name"
          onChange={this.change}
        />
      </form>
    );
  };
};

export default Groceryform;