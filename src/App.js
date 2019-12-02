import React from 'react';
import './App.css';
import Grocery from "./Grocery";
import Groceryform from "./Groceryform";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { grocerylists: [ {id: 1, name: "bananas", cost: "$.50", purchase: true },
        { id: 2, name: "apples", cost: "$2.50", purchase: false },
        { id: 3, name: "bread", cost: "$1.50", purchase: false }
      ]
    }
    this.addGrocery = this.addGrocery.bind(this); 
    this.handleClick = this.handleClick.bind(this); 
  };



  addGrocery = (name) => {
    const grocery = {name, 
      id: this.state.grocerylists[this.state.grocerylists.length -1].id + 1, 
      purchase: false}
    this.setState({ grocerylists: [...this.state.grocerylists, grocery] });
  }
  handleClick(id) {
    this.setState({grocerylists: this.state.grocerylists.map(grocery => {
      if (grocery.id === id) {
      return {...grocery, purchase: !grocery.purchase}
        }
        return grocery 
      })
    });
  };


  render() {
  return (
    <div>
      <Groceryform addGrocery={this.addGrocery}/>
      <Grocery name="Grocery list" items={this.state.grocerylists} todoClick={this.handleClick}/>
    </div>
    );
  };
};

export default App;
