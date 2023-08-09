
import './MovieCard.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import noposter from '../../assets/no-poster.png';

const MovieCard = ({ data, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster_sizes + data.poster_path
        : noposter;
    return (
        <div
            className="movieCard"
            onClick={() =>
                navigate(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock">
                <img className="posterImg" src={posterUrl} />
                
            </div>
            <div className="textBlock">
                <span className="title">{data.title || data.name}</span>
                <span className="date">
                    {data.release_date}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;