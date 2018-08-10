import React from 'react';
import BlockColor from './BlockColor';

class ColorCart extends React.Component {
    constructor(props) {
        super(props);
    }

    renderAddedColors() {
        let temp = this.props.data.length > 5
            ? this.props.data.slice(this.props.data.length - 5)
            : this.props.data;

        return (
            temp.map(element => {
                return <BlockColor
                    callbackFn={this.props.callbackFn}
                    key={element.id}
                    id={element.id}
                    color={element.color}
                    icon={'clear'}
                />
            })
        )
    }

    emptyCart() {
        return (
            <div className="empty-cart">
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    render() {
        return (
            <div className="color-cart">
                {this.props.data.length !== 0 ? this.renderAddedColors() : this.emptyCart()}
            </div>
        );
    }
}

export default ColorCart;