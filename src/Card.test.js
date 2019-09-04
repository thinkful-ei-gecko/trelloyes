import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import Card from './Card.js';


describe('Card test', () => {
  // shadow test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key={1} title='sample title' content='sample content'/>, div);
    ReactDOM.unmountComponentAtNode(div);

  });

  // snapshot test
  it('renders same UI', () => {
    const tree = renderer.create(<Card key={1} title='sample title' content='sample content' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});