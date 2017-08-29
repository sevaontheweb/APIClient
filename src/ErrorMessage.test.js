import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import TestUtils from 'react-dom/test-utils';
import ErrorMessage from './ErrorMessage';



it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ErrorMessage />, div);
});


it('renders error message if set', () => {
    var message = "this is error message";
    var markup = ReactDOMServer.renderToStaticMarkup(
        <ErrorMessage
            message = { message }
        />
    )
    expect(markup.includes(message));
})


it('renders empty tag if message is empty', () => {
    var message = "";
    var markup = ReactDOMServer.renderToStaticMarkup(
        <ErrorMessage
            message = { message }
        />
    )
    expect(markup).toEqual("<span></span>");
})