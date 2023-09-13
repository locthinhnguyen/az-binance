import './App.css';
import Bar from './components/Bar';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import AZ101 from './pages/homepage/AZ101';
import Course from './pages/homepage/Course';
import DiscountCourse from './pages/homepage/DiscountCourse';
import Feedback from './pages/homepage/Feedback';
import ForAZFinance from './pages/homepage/ForAZFinance';
import FounderTalks from './pages/homepage/FounderTalks';
import Homepage from './pages/homepage/Homepage';
import Participants from './pages/homepage/Participants';
import Question from './pages/homepage/Question';
import Register from './pages/homepage/Register';
import Videos from './pages/homepage/Videos';

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
