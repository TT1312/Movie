import InfiniteScroll from "react-infinite-scroll-component"
import noresult from '../../assets/no-results.png'
import { fetchdataFromApi } from "../../utils/Api"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './SearchResult.css'
import MovieCard from "./MovieCard"

const SearchResult = () => {

  const [data, setdata] = useState(null);
  const [pagenum, setpagenum] = useState(1);     //we are using pagination. By default in first page only 20 results seen
  const [loading, setloading] = useState(false);
  const { query } = useParams();

  const fetchdata = () => {
    setloading(true)
    fetchdataFromApi(`/search/multi?query=${query}&page=${pagenum}`).then((res) => {
      setdata(res);
      setpagenum((prev) => prev + 1);
      setloading(false)
    })

  }

  const fetchNextData = () => {
    fetchdataFromApi(`/search/multi?query=${query}&page=${pagenum}`).then((res) => {
      if (data?.results) {
        setdata({
          ...data, results:[ ...data?.results, ...res?.results] 
        })

      } else {
        setdata(res);
      }
      setpagenum((prev) => prev + 1);

    })
  }

  useEffect(() => {
    setpagenum(1);
    fetchdata();
  }, [query])


  return (
    <div className="searchResultsPage">
      {loading && <h3 className="loading">Loading...</h3>}
      {!loading && (
        <div>

          {data?.results?.length > 0 ? (
            <div>
              <div className="pageTitle">
                {`Search results of "${query}"`}
              </div>

              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextData}
                hasMore={pagenum <= data?.total_pages}
                loader={loading }
              >
                {data.results.map((element, index) => {
                  if (element?.media_type === 'person') return;
                  
                  return (
                    <MovieCard key={index} data={element}/>
                  )
                })}
              </InfiniteScroll>
            </div>

          ) : (
            <span className="resultNotFound">
              Sorry... Result Not Found!!
            </span>

          )}
        </div>
      )}
    </div>
  )
}

export default SearchResult