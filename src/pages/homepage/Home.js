import React from 'react';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Bar from '../../components/Bar';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright';

import Homepage from './Homepage';
import ForAZFinance from './ForAZFinance';
import FounderTalks from './FounderTalks';
import AZ101 from './AZ101';
import Course from './Course';
import DiscountCourse from './DiscountCourse';
import Participants from './Participants';
import Feedback from './Feedback';
import Question from './Question';
import Videos from './Videos';
import Register from './Register';

const Home = () => {
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
};

export default Home;
