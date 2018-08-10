import React, { Component } from 'react';

class SearchColor extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    handleChange(e) {
        this.props.callbackFn(e.target.value);
    }

    render() {
        return (
            <div
                className="search-color">
                <input
                    className="search-color__input"
                    type="text" placeholder="Color's name, tags"
                    onChange={this.handleChange}
                    ref={(input) => { this.nameInput = input }}
                />
            </div>
        )
    }
}

export default SearchColor;