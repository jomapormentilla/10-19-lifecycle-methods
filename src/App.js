import React from 'react';
import Header from './Header'
import ItemsContainer from './ItemsContainer'
import CartContainer from './CartContainer'
import './App.css';

class App extends React.Component{

  state = {
    page: "items",
    items: [],
    cart: [],
    term: ""
  }

  changePage = (e) => {

    const page = e.target.id.split("-")[0]
    this.setState({
      page: page
    })
  }

  addToCart = (id) => {
    // find the Item with that id 
    const foundItem = this.state.items.find(item => item.id === id)
    // update state to show that the item is in the cart
    this.setState((prevState) => ({
      cart: [...prevState.cart, foundItem]
    }), () => console.log(this.state) )
  }

  addToItems = (item) => {
    this.setState((prevState) => {
        return { items: [...prevState.items, item] };
    });
  };

  // LCM can ONLY be used in a class component 
  componentDidMount(){
    // typcially fetch requests happen in a componentDidMount
    console.log("app mounted")

    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(json => {
      this.setState({items: json})
    })
  }



  render(){
    return (
      <div className="App">
        <Header changePage={this.changePage} />
        {this.state.page === "items" ? <ItemsContainer  addToCart={this.addToCart} addToItems={this.addToItems} items={this.state.items} cart={this.state.cart}/> : <CartContainer cart={this.state.cart}/>}
      </div>
    );
  }
}


export default App;