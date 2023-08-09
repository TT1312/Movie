import '../Homepage.css'
import useFetch from '../../customHooks/useFetch'
import Carausel from '../trending/Carausel'


const TopRated = () => {

  const { data, loading } = useFetch('/movie/top_rated')
  
  
  return (
    <div className="carauselSection">

      <div className="carausel">
        <span className="carauselTitle">Top Rated</span>
      </div>
        
      <Carausel data={data?.results} loading={loading} />

      

    </div>

  )
}

export default TopRated



