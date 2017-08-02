import React from 'react';
import { render } from 'react-dom';
import App from './App';

const appElement = document.getElementById('app');

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(<NextApp />, appElement);
    });
}

render(<App />, appElement);
