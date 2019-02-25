import React from 'react';
import ReactDOM from 'react-dom';
import CocaCola from './CocaCola';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CocaCola />, div);
  ReactDOM.unmountComponentAtNode(div);
});
