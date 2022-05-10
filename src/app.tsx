import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles.css';

function App() {
  return (
    <div>
      <Button variant="contained">Hello World!</Button>
      <div>
        <strong>Env: </strong>
        <span>{process.env.REACT_APP_ENV}</span>
      </div>
    </div>
  );
}

export default App;
