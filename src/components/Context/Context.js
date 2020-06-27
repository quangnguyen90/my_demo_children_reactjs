import React from 'react';
import NumberProvider from './NumberProvider';
import NumberContext from './Contexts/NumberContext';

function Context(props) {
    return (
        <NumberProvider>
            <div className="context">
                <NumberContext.Consumer>
                    {({ number, updateNumber }) => (
                        <div>
                            <h2>{number}</h2>
                            <button onClick={updateNumber}>Update Number</button>
                        </div>
                    )}
                </NumberContext.Consumer>
            </div>
        </NumberProvider>
    );
}

export default Context;