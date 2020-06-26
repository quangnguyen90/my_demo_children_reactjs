import React from 'react';
import HoverOpacity from './HoverOpacity';
import AwsomeImage from './AwsomeImage';

class NotHoc extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <HoverOpacity>
                    <AwsomeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS20vlgDb8rg7SFcenUbhSO5xT9rcr7meh0iA&usqp=CAU" />
                </HoverOpacity>
            </div>
        );
    }
}
export default NotHoc;