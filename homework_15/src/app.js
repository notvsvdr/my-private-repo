import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import ColorsContainer from './features/ColorsContainer';
import './index.scss';
import SearchColor from './features/SearchColor';
import ColorCart from './features/ColorCart';

class App extends Component {

	constructor() {
		super();
		this.state = {
			isLoaded: false,
			items: [],
			currentItems: [],
			addedItems: [],
			phrase: ''
		}

		this.filterItems = this.filterItems.bind(this);
		this.addItemToCart = this.addItemToCart.bind(this);
		this.removeItemFromCart = this.removeItemFromCart.bind(this);
	}

	sortItemsById(arr) {
		arr.sort((i, j) => {
			return i.id - j.id;
		});
	}

	addItemToCart(id) {
		let searchedItem = this.state.items.find(item => item.id === id);
		let indexOfSearchedItem = this.state.items.indexOf(searchedItem);

		let updatedItems = this.state.items;
		updatedItems.splice(indexOfSearchedItem, 1);

		let updatedAddedItems = this.state.addedItems;
		updatedAddedItems.push(searchedItem);
		this.sortItemsById(updatedAddedItems);

		this.filterItems(this.state.phrase);

		this.setState({
			items: updatedItems,
			addedItems: updatedAddedItems
		});
	}

	removeItemFromCart(id) {
		let searchedItem = this.state.addedItems.find(item => item.id === id);
		let indexOfSearchedItem = this.state.addedItems.indexOf(searchedItem);

		let updatedAddedItems = this.state.addedItems;
		updatedAddedItems.splice(indexOfSearchedItem, 1);

		let updatedItems = this.state.items;
		updatedItems.push(searchedItem);
		this.sortItemsById(updatedItems);

		this.filterItems(this.state.phrase);

		this.setState({
			items: updatedItems,
			addedItems: updatedAddedItems
		});
	}

	filterItems(value) {
		let updatedList = this.state.items;
		updatedList = updatedList.filter((item) => {
			return item['tags'].toString().toLowerCase().indexOf(
				value.toLowerCase()) !== -1;
		});

		this.setState({
			currentItems: updatedList,
			phrase: value
		});
	}

	componentDidMount() {
		fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result,
						currentItems: result
					});
				}
			)
			.catch(e => console.error(e));
	}

	render() {
		return (
			<div className="main-container">
				<div className="options">
					<SearchColor
						callbackFn={this.filterItems}
					/>

					<ColorCart
						data={this.state.addedItems}
						callbackFn={this.removeItemFromCart}
					/>
				</div>

				<ColorsContainer
					callbackFn={this.addItemToCart}
					data={this.state.currentItems}
					loaded={this.state.isLoaded}
				/>

				{!this.state.isLoaded && <p className="loading">Loading...</p>}
			</div>
		);
	}
}


// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);