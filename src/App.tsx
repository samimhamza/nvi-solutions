import './App.css';
import CheckBox from './components/CheckBox';
import Footer from './components/Footer';
import Graph from './components/Graph';

function App() {
  return (
    <div>
      <div className='main'>
        <CheckBox />
        <Graph />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
