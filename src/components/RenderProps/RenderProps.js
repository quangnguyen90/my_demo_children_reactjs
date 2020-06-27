import React from 'react';
import List from './List';

const data = ['A', 'B', 'C']
function RenderProps(props) {
    return (
        <div className="RenderProps">
            <List data={data} render={item => <div>{item}</div>} />
        </div>
    );
}

export default RenderProps;