import React from 'react';
import ReactDOM from 'react-dom';
import Mycomponent from './Mycomponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Mycomponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});