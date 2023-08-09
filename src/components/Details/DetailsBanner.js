import useFetch from "../customHooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./DetailsBanner.css";
import noposter from "../../assets/no-poster.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VideoPopUp from "./videopopup/VideoPopUp";

const DetailsBanner = ({video}) => {
  const [show, setShow] = useState(false);
  const [videoId, setvideoid] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`); // fetching data from url using useParams
  const { url } = useSelector((state) => state.home);

  return (
    <div className="detailsBanner">
      {!loading ? (
        <div>
          <div className="content">
            <div className="left">
              {data?.poster_path ? (
                <img
                  className="posterImg"
                  src={url.poster_sizes + data?.poster_path}
                  alt=""
                />
              ) : (
                <img className="posterImg" src={noposter} alt="" />
              )}
            </div>

            <div className="right">
              <div className="title">{`${data?.name || data?.title}`}</div>

              <div className="subtitle">{data?.tagline}</div>

              <div className="row">
                <div className="rating">Rating : {data?.vote_average}</div>

                <div className="playbtn" onClick={()=>{
                  setShow(true);
                  setvideoid(video.key);
                }}>
                  <PlayCircleOutlineIcon className="playbtnIcon" />
                  <span>Watch Trailer</span>
                </div>

                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="description">{data?.overview}</div>
                </div>

                <div className="info">
                  <div className="infoItem">
                    <span className="text bold">Status : </span>
                    <span className="text">{data?.status}</span>
                  </div>

                  <div className="infoItem">
                    <span className="text bold">Release Date : </span>
                    <span className="text">{data?.release_date}</span>
                  </div>

                  <div className="infoItem">
                    <span className="text bold">Runtime : {" 2. 30h "}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VideoPopUp
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setvideoid}
          />
        </div>
      ) : (
        <div className="loading">
          <span> Loading...</span>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
