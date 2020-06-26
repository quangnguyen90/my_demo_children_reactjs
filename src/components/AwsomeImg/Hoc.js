import React from 'react';
import WithHoverOpacity from './WithHoverOpacity';
import AwsomeImage from './AwsomeImage';

const HoverOpacityAwesomeImage = WithHoverOpacity(AwsomeImage, 0.8);

function Hoc() {
    return (
        <div className="hoc">
            <HoverOpacityAwesomeImage src="https://idichthuat.com/wp-content/uploads/2020/03/hoc-duoc-gi-tu-su-kien-hello-work-800x232.jpg" />
        </div>
    );
}

export default Hoc;