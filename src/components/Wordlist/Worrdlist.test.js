import React from 'react';
import ReactDOM from 'react-dom';
import Wordlist from './Wordlist';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wordlist />, div);
  ReactDOM.unmountComponentAtNode(div);
});
