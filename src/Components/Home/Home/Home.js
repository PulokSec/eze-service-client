import React from 'react';
import Blogs from '../Blogs/Blogs';
import Featured from '../Featured/Featured';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts'
import Services from '../Services/Services';
import Teams from '../Teams/Teams';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Header/>
      <Featured/>
      <Services/>
      <Testimonials/>
      <Teams/>
      <Blogs/>
      <Contacts/>
      <Footer/>
    </div>
  );
};

export default Home;