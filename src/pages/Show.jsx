import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/apiGet';
import { TextCenter } from '../components/common/TextCenter';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Cast from '../components/shows/Cast';
import Seasons from '../components/shows/Seasons';

// const useShowById=(showid)=>{
//     const [showData,setShowData]=useState(null)
//     const [showError,setShowError]=useState(null)

//     useEffect(()=>{

//         async function fetchData(){
//             try{
//                 const data=await getShowById(showid)
//                 setShowData(data)
//                 console.log(data)
//             }
//             catch(err){
//                 setShowError(err)
//             }

//         }
//         fetchData()

//     },[showid])
//     return {
//         showData,showError
//     }
// }

const Show = () => {
  const { showid } = useParams();
  // const { showData, showError } = useShowById(showid);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showid],
    queryFn: () => getShowById(showid),
  });

  if (showError) {
    return <TextCenter>{`We have an error: ${showError}`}</TextCenter>;
  }

  if (!showData) {
    return <TextCenter>Loading...</TextCenter>;
  }

  return (
    <div>
      <ShowPageWrapper>
      <BackHomeWrapper>
        <Link to="/">Go to Home page</Link> {/*we can also use usenavigate instead of link */}
        </BackHomeWrapper>
        <div>
      <ShowMainData
        image={showData.image}
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}
      />
      </div>
      <div>
      <h2>Details</h2>
      <Details
        status={showData.status}
        premiered={showData.premiered}
        network={showData.network}
      />
      </div>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={showData._embedded.seasons}/>
        </InfoBlock>
        <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={showData._embedded.cast}/>
        </InfoBlock>
      </ShowPageWrapper>
    </div>
  );
};

export default Show;


const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;