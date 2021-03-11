import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'
import FilterBar from './FilterBar'

import { connect } from 'react-redux'
import { getItemsFetch } from './actions/itemActions'

class ItemsContainer extends React.Component {

    state = {
      searchTerm: ""
    }

    componentDidMount(){
        console.log("Items Container mounted")
        this.props.getItemsFetch()
      }

    filterItems = (e) => {
      const searchTerm = e.target.value
      console.log(searchTerm)
      this.setState({searchTerm: searchTerm})
    }

    displayItems(){

      const itemsToDisplay = this.props.items.filter(i => i.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

      return itemsToDisplay.map(item => <Item  key={item.id} cart={this.props.cart}  addToCart={this.props.addToCart} name={item.name} price={item.price} id={item.id} image1={item.image1} image2={item.image2} />) 
    }

    render(){
        return(
            <div id="ItemsContainer">
              <FilterBar filterItems={this.filterItems} />
              <ItemForm addToItems={this.props.addToItems} />
              { this.displayItems()}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { getItemsFetch })(ItemsContainer)