import React, { Component } from 'react';
import TraffictLight from './TrafficLight';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class ShowTrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: RED
        };

        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 3000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return ORANGE
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        const { currentColor } = this.state;
        return (
            <TraffictLight currentColor={currentColor} />
        );
    }

}

export default ShowTrafficLight;