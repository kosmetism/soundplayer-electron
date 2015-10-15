import './app.css';

import ipc from 'ipc';
import React from 'react';
import ReactDOM from 'react-dom';

import Child from './child';

class App extends React.Component {
    render() {
        return <Child />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

setTimeout(() => {
    ipc.send('ready');
}, 10);
