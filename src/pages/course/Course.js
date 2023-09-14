import React from 'react';
import { CourseCrypto } from './CourseCrypto';
import Header from '../../components/Header';

const Course = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <CourseCrypto />
    </div>
  );
};

export default Course;
