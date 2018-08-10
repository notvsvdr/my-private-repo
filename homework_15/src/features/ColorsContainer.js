import React, { Component } from 'react';
import BlockColor from './BlockColor';

class ColorsContainer extends Component {
    constructor(props) {
        super(props);
    }

    isMessage() {
        if (this.props.data.length === 0 && this.props.loaded) {
            return (
                <p className="no-match">There are no colors found</p>
            )
        }
    }

    getColorsAmmount() {
        return (
            <div className="ammount">Colors: {this.props.data.length}</div>
        )
    }

    renderBlocks() {
        let temp = this.props.data;
        return (
            temp.map((element, i) => {
                return <BlockColor
                    callbackFn={this.props.callbackFn}
                    key={element.id}
                    id={element.id}
                    color={element.color}
                    content={"Add"}
                    icon={'add'}
                />
            })
        )
    }

    render() {
        return (
            <div className="colors-container">
                {this.getColorsAmmount()}
                {this.renderBlocks()}
                {this.isMessage()}
            </div>
        );
    }
}

export default ColorsContainer;