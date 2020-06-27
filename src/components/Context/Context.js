import React from 'react';

const NumberContext = React.createContext();

function Context(props) {
    return (
        <NumberContext.Provider value={5}>
            <div className="RenderProps">
                <NumberContext.Consumer>
                    {(context) => <h2>{context}</h2>}
                </NumberContext.Consumer>
            </div>
        </NumberContext.Provider >
    );
}

export default Context;