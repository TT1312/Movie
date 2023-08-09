import DetailsBanner from "./DetailsBanner";
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router-dom";

const MainDetailsPages = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);  //fetch movie trailer video from server
  console.log(data);
  return (
    <div>
      <DetailsBanner video = {data?.results?.[0]}/>
    </div>
  );
};

export default MainDetailsPages;
