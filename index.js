import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './App.css';

import Navigationbar from './Navigationbar';
import CoverImage from './CoverImage';
import HeaderFreelancer from './HeaderFreelancer';
import CardList from './Cardlist';
import Button from './Button'
import HeaderCustomer from './HeaderCustomer';
import CustomerCardList from './CustomerCardlist'
import Tutorialbutton from './Tutorialbutton'
import Mail from './Mail'
import Footer from './Footer'
import FooterDevLinks from './FooterDevLinks';



ReactDOM.render(<div>
  <Navigationbar />
  <CoverImage />
  <HeaderFreelancer />
  <CardList />
  <Button />
  <HeaderCustomer />
  <CustomerCardList />
  <Tutorialbutton />
  <Mail />
  <Footer />
  <FooterDevLinks />


  </div>
  , document.getElementById('root'));