import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Welcome() {
    return <h1>Hello Reactionary and be ready!</h1>;
}
function tick() {
    const element = (<h1>{new Date().toLocaleTimeString()}</h1>);
    ReactDOM.render(element, document.getElementById('time'));
}
setInterval(tick, 1000);
var element = React.createElement('h1', { className: 'greeting' }, 'Hello and welcome to a typical react site');

ReactDOM.render(element, document.getElementById('thugil'));

ReactDOM.render(<Welcome />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
