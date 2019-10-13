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
var element = React.createElement('h1', { className: 'greeting' }, 'Welcome to Expediency with the right API');

ReactDOM.render(element, document.getElementById('thugil'));

ReactDOM.render(<Welcome />, document.getElementById('root'));

serviceWorker.unregister();

class Header{
    constructor (){
        this.color ="Blue";
    }
    changeColor =()=>{
        document.getElementById("thugil").innerHTML+=this;
    }
}

var myheader = new Header();
window.addEventListener("load",myheader.changeColor);
document.getElementById("btn").addEventListener("click",myheader.changeColor);
