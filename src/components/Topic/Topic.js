import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

Topic.propTypes = {

};

function Topic(props) {
    let { topicId } = useParams();
    return (
        <div>
            <h3>Requested topic ID: {topicId}</h3>
        </div>
    );
}

export default Topic;