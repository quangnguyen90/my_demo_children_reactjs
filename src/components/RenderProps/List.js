import React from 'react';

function List({ data, render }) {
    return (
        <div>
            {data.map(render)}
        </div>
    );
}

export default List;