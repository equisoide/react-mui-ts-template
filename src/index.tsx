// External imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';

// Local imports
import App from './app';
import initI18n from './lang';
import reportWebVitals from './util/web-vitals';
import './styles/main.scss';

// Global initialization
initI18n();

const htmlRoot = document.getElementById('root') as HTMLElement;
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  process.env.REACT_APP_SCRICT_MODE === 'true' ? (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  ) : (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
);

if (process.env.REACT_APP_ENV !== 'production') {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
