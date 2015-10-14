import './app.css';

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
