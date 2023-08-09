import '../Homepage.css'
import useFetch from '../../customHooks/useFetch'
import Carausel from '../trending/Carausel'


const Upcoming = () => {

  const { data, loading } = useFetch('/movie/upcoming')
  
  
  return (
    <div className="carauselSection">

      <div className="carausel">
        <span className="carauselTitle">Upcoming</span>
      </div>
        
      <Carausel data={data?.results} loading={loading} />

      

    </div>

  )
}

export default Upcoming



