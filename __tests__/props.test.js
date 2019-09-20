import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import Message from '../src/components/message';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('up and down', () => {
  it('should show hello world', () => {
    const app = mount(<Message />);
    expect(app.state().text).toBe('hello world');
  });

 
  it('count should show a higher number in the DOM', () => {
    act(() => {
      ReactDOM.render(<Message />, container);
    });
    const label = container.querySelector('span');
    expect(label.textContent).toBe('0');
  });

  it('should show that the snapshot matches', () => {
    const tree = renderer.create(<Message />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
