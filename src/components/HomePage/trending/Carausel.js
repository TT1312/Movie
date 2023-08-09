import React from 'react'
import noposter from '../../../assets/no-poster.png'
import { useSelector } from 'react-redux'
import './Carausel.css'
import { useNavigate } from 'react-router-dom'


const Carausel = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className='Carausel'>
      {
        !loading ? (
          <div className="carouselItems">
            {
              data?.map((element) => {


                const posterUrl = element.poster_path ? url.poster_sizes + element.poster_path : noposter;
                return (

                  <div key={element.id} className='Carauselitem' onClick={()=>{navigate(`/${element.media_type}/${element.id}`)}}>
                    <div className='posterBlock'>
                      <img src={posterUrl} alt="Img Loading..." />
                      
                    </div>
                    <div className="textBlock">
                        <span className="title">
                          {element.title || element.name}
                        </span>
                        <span className="date">
                          {element.release_date || element.first_air_date}
                        </span>
                        <span className="vote">
                          Rating : {element.vote_average}
                        </span>
                      </div>
                  </div>
                )

              })

            }
          </div>
        ) : (

          <div className='loading'>
            <span>Loading...</span>

          </div>
        )







      }
    </div>

  )





}

export default Carausel
                
