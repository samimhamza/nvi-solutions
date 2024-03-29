import './App.css';
import CheckBoxContainer from './components/CheckBoxContainer';
import Graph from './components/Graph';
import { CheckedCurrenciesProvider } from './context/DataContext';

function App() {
  return (
    <div>
      <CheckedCurrenciesProvider>
        <div className='main'>
          <CheckBoxContainer />
          <Graph />
        </div>
        {/* <Footer /> */}
      </CheckedCurrenciesProvider>
    </div>
  );
}

export default App;
