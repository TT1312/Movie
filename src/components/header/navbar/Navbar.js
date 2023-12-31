import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import movielogo from '../../../assets/movix-logo.png'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);           // navigate used for user entered movie name pass to url.
    }
  };

 
  return (
    <div className="navbar">
      <div className="logo_moviename" onClick={()=>{navigate('/')}}>
        <img className="logo" src={movielogo} alt="" />
        <h3>MovieShows</h3>
      </div>

      <div>
        <ul>
          <li >
            <NavLink to={"/explore/movies"} style={{ textDecoration: 'none' }}>
              <p className="movies">Movies</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/explore/tv"} style={{ textDecoration: 'none' }}>
              <p>TvShows</p>
            </NavLink>
          </li>

          <div className="searchinput">
            <input
              className="input"
              type="text"
              placeholder="Search Movies..."
              onKeyUp={searchQueryHandler}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button className="button" >Search</button>
            <SearchIcon className="searchIcon"/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
