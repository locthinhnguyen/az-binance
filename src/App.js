import './App.css';
import Header from './components/Header';
import ForAZFinance from './pages/ForAZFinance';
import FounderTalks from './pages/FounderTalks';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className=" flex flex-col">
      <Header />
      <Homepage />
      <ForAZFinance />
      <FounderTalks />
    </div>
  );
}

export default App;
