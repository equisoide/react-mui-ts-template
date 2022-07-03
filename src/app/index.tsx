// Local imports
import HelloWorld from '../components/HelloWorld';

// Component definition
function App() {
  return (
    <HelloWorld
      box={{
        sx: {
          background: 'rgb(0, 30, 60)',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    />
  );
}

// Default export
export default App;
