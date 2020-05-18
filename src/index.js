import React from 'react';
import ReactDOM from 'react-dom';

// Components
import List from './containers/List';

const App = () => {
    return (
        <List/>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))