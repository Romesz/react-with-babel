// https://strongloop.com/strongblog/the-foundations-of-universal-or-isomorphic-javascript/

import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return <p>Hello world! It is coming from React...:)</p>;
  }
}

React.render(<HelloWorld />,
  document.body
);