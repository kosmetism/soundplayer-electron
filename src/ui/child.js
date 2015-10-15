import React from 'react';
import webFrame from 'web-frame';
import { env } from 'c0nfig';

class Child extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#1E2022',
                color: 'orange',
                width: 500,
                height: 500,
                overflow: 'hidden'
            }}>
                Hello World React - {env}!
                <img src="./assets/soundcloud.png" />
                {process.versions['electron']}
                &nbsp; {webFrame.getZoomLevel()}
            </div>
        );
    }
}

export default Child;
