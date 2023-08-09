import '../Homepage.css'
import useFetch from '../../customHooks/useFetch'
import Carausel from './Carausel'


const Trending = () => {

  const { data, loading } = useFetch('/trending/all/day')
  
  
  return (
    <div className="carauselSection">

      <div className="carausel">
        <span className="carauselTitle">Trending</span>
      </div>
        
      <Carausel data={data?.results} loading={loading} />

      

    </div>

  )
}

export default Trending



