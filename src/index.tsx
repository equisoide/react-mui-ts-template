import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/App';
import initI18n from './lang';
import reportWebVitals from './util/report-web-vitals';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/site.css';

initI18n();

const htmlRoot = document.getElementById('root') as HTMLElement;
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);

if (process.env.REACT_APP_ENV !== 'production') {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
