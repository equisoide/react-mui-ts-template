import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './app';

const htmlRoot = document.getElementById('root');
const reactRoot = ReactDOMClient.createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
