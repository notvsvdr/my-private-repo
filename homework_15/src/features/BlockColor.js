import React from 'react';

class BlockColor extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.callbackFn(this.props.id);
    }

    render() {
        const divStyle = {
            background: this.props.color
        }

        return (
            <div style={divStyle} className="block-color">
                <button
                    onClick={this.handleClick}
                    className="block-color__button"
                ><i className="material-icons">{this.props.icon}</i><span>{this.props.content}</span></button>
            </div>
        );
    }
}

export default BlockColor;