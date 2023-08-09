import ReactPlayer from "react-player/youtube"


const VideoPopUp = ({show,setshow,videoid,setvideoid}) => {
    const hidePopUp =()=>{
        setshow(false);
        setvideoid(null);
    }
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
    <div className="opacityLayer" onClick={hidePopUp}></div>
    <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopUp}>
            Close
        </span>
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoid}`}
            controls
            width="100%"
            height="100%"
            // playing={true}
        />
    </div>
</div>
  )
}

export default VideoPopUp