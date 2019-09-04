import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('test list component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <List key={2} 
      header='header string' 
      cards={[{id: 1, title: 'title 1', content: 'content 1'},
      {id: 2, title: 'title 2', content: 'content 2'}]} 
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const tree = renderer
    .create(
    <List key={2} 
      header='header string' 
      cards={[{id: 1, title: 'title 1', content: 'content 1'},
      {id: 2, title: 'title 2', content: 'content 2'}]} 
    />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})