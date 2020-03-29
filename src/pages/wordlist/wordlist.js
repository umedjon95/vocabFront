import React from 'react';
import ReactDOM from 'react-dom';

import './wordlist.css';


import Wordlist from 'components/Wordlist/Wordlist';
import Menu from 'components/Menu/Menu';

//import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Wordlist />, document.getElementById('wordlist'));
