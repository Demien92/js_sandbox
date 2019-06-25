import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();



function readCookie() {
    const result = {};
    const  pairs = document.cookie.split(';').map(str => str.trim());

    for(const pair of pairs){
        const [name, value] = pair.split('=')
    }
    result[name] = value;

    console.log(result);
    console.log(pairs);

}

readCookie();