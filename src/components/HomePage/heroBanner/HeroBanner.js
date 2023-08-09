
import "./HeroBanner.css";


const HeroBanner = () => {
  

  return (
    <div className="Herobanner">
      <div className="homeimgbackground">
        <img src="batman.jpg" alt="" />

        <div className="text">
          <h1 className="headline">Welcome.</h1>
          <h3 className="tagline">
            Millions of movies,TV shows and people to discover. Explore Now.
          </h3>
          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
