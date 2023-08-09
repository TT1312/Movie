import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import "./Explore.css";


import { fetchdataFromApi } from "../../utils/Api";

import MovieCard from "../searchResult/MovieCard";

let filters = {};

const sortbyData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchdataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchdataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    setPageNum(1);
    fetchInitialData();
  };

  return (
    <div className="explorePage">
      <div className="pageHeader">
        <div className="pageTitle">
          {mediaType === "movies" ? "Explore Movies" : "Explore TV Shows"}
        </div>
        <div className="filters">
          <Select
            name="sortby"
            value={sortby}
            options={sortbyData}
            onChange={onChange}
            isClearable={true}
            placeholder="Sort by"
            className="react-select-container sortbyDD"
            classNamePrefix="react-select"
          />
        </div>
      </div>
      {loading && <h3>Loading....</h3>}
      {!loading && (
        <>
          {data?.results?.length > 0 ? (
            <InfiniteScroll
              className="content"
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={pageNum <= data?.total_pages}
              loader={<h3>Loading....</h3>}
            >
              {data?.results?.map((item, index) => {
                if (item.media_type === "person") return;
                return (
                  <MovieCard key={index} data={item} mediaType={mediaType} />
                );
              })}
            </InfiniteScroll>
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </>
      )}
    </div>
  );
};

export default Explore;