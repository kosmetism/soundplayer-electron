import './app.css';

import { ipcRenderer } from 'electron';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>SoundPlayer</h1>
                {/*<img src="https://a-v2.sndcdn.com/assets/images/header/cloud@2x-e5fba4.png" />
                <img src="https://a-v2.sndcdn.com/assets/images/header/wordmark@2x-8fdb34.png" />*/}
                <button type="button" className="btn btn-primary h5 sc-button bg-orange relative">
                    Sign in with SoundCloud
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

setTimeout(() => {
    ipcRenderer.send('ready');
}, 10);
