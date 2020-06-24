import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapse: true
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            isCollapse: !this.state.isCollapse
        })
    }

    render() {
        const {heading, children} = this.props;
        return (
            <div className="Accordion">
                <div className="heading" onClick={this.onClick}>
                    <h2>{heading}</h2>
                </div>
                {
                    !this.state.isCollapse && <div className="content">{children}</div>
                }
            </div>
        );
    }
}

export default Accordion;
