import React from 'react';
import webFrame from 'web-frame';
import { env } from 'c0nfig';

class Child extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: 'red',
                color: 'white',
                width: 500,
                height: 500,
                overflow: 'hidden'
            }}>
                Hello World React - {env}!
                <img src="./assets/soundcloud.png" />
                22{process.versions['electron']}22
                Zoom level - {webFrame.getZoomLevel()}
            </div>
        );
    }
}

export default Child;
