import './App.css';
import Bar from './components/Bar';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import AZ101 from './pages/AZ101';
import Course from './pages/Course';
import DiscountCourse from './pages/DiscountCourse';
import Feedback from './pages/Feedback';
import ForAZFinance from './pages/ForAZFinance';
import FounderTalks from './pages/FounderTalks';
import Homepage from './pages/Homepage';
import Participants from './pages/Participants';
import Question from './pages/Question';
import Register from './pages/Register';
import Videos from './pages/Videos';

function App() {
  return (
    <div className=" flex flex-col">
      <Header />
      <Homepage />
      <ForAZFinance />
      <FounderTalks />
      <Nav />
      <AZ101 />
      <Bar />
      <Course />
      <DiscountCourse />
      <Participants />
      <Feedback />
      <Question />
      <Videos />
      <Register />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
