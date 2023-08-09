import '../Homepage.css'
import useFetch from '../../customHooks/useFetch'
import Carausel from '../trending/Carausel'


const Popular = () => {

  const { data, loading } = useFetch('/movie/popular')
  console.log(data);
  
  return (
    <div className="carauselSection">

      <div className="carausel">
        <span className="carauselTitle">What's Popular</span>
      </div>
        
      <Carausel data={data?.results} loading={loading} />

      

    </div>

  )
}

export default Popular



