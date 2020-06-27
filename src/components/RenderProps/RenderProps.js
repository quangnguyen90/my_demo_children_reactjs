import React from 'react';
import List from './List';
import Counter from './Counter';

const data = ['A', 'B', 'C'];

function RenderProps(props) {
    return (
        <div className="RenderProps">
            <List data={data} render={(item, idx) => <div key={idx}>{item}</div>} />
            <List data={data} render={(item, idx) => <div key={idx}>+ {item}</div>} />
            <List data={data} render={(item, idx) => <div key={idx}>- {item}</div>} />
            {/* Provider */}
            <Counter>
                {
                    ({ count }) =>
                        // Consumer 
                        <h1>{count}</h1>
                }
            </Counter>
        </div>
    );
}

export default RenderProps;