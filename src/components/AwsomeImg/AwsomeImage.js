import React from 'react';

function AwsomeImage({src, width = 800, height = 232}) {
    return (
        <div
            className="AwesomeImage"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px"
            }}
        />
    );
}

export default AwsomeImage;