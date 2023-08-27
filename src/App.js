
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { getApiConfuguration } from './Store/homeSlice';
import { fetchdataFromApi } from './utils/Api';

import PageNotFound from './components/404/PageNotFound';
import MainDetailsPages from './components/Details/MainDetailsPages';
import Homepage from './components/HomePage/Homepage';
import SearchResult from './components/searchResult/SearchResult'
import Explore from './components/explor/Explore';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ReactGA from "react-ga";          // Import google analytics


function App() { 
  
  ReactGA.initialize('G-JT9F3GVD1K');
  ReactGA.pageview(window.location.pathname);
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetchapiConfig()

  },[]);
 

  const fetchapiConfig=()=>{
    fetchdataFromApi("/configuration").then((res)=> {
      
      const url = {
        poster_sizes : res.images.secure_base_url + "original",      // w154 is the size of  movie poster
        profile_sizes : res.images.secure_base_url + "original",
      }

      dispatch(getApiConfuguration(url));

    })
  }
 


  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:mediaType/:id' element={<MainDetailsPages />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>

      <Footer />

    </Router>









  );
}

export default App;
