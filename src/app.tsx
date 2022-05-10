import './styles.css';

function App() {
  return (
    <div>
      <div>React App</div>
      <div>
        <strong>Env: </strong>
        <span>{process.env.REACT_APP_ENV}</span>
      </div>
    </div>
  );
}

export default App;
