import { useQuery } from '@tanstack/react-query';
import { searchForShows } from '../api/apiGet';
import { searchForPeople } from '../api/apiGet';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useState } from 'react';
import { TextCenter } from '../components/common/TextCenter';
const Home = () => {
  
   const [filter,setFilter]=useState(null)

  // const reducerdn=(currentState,action)=>{
  //   switch (action.type){
  //     case 'increament':
  //       return currentState+1;
  //     case 'decreament':
  //       return currentState-1;
  //     case 'reset':
  //       return 0
  //   }
  //   return 0
    

  // }
  // const [counter,dispatch]=useReducer(reducerdn,0)
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error Occured:{apiDataError.message}</TextCenter>;
    }
    if(apiData?.length===0){
      return (
        <TextCenter>Result not found</TextCenter>
      )
    } 
    if (apiData && apiData.length > 0) {
      return apiData[0].show?(<ShowsGrid shows={apiData}/>):<ActorsGrid actors={apiData}/>
    } 
    return null;
  };

  // const onIncreament=()=>{
  //     dispatch({type:"increament"})
  // }
  // const onDecreament=()=>{
  //   dispatch({type:"decreament"})
  // }
  // const onReset=()=>{
  //   dispatch({type:"reset"})
  // }

  
  // console.log(searchOption)


  return (

    <div>
     {/* {counter}
      <button onClick={onIncreament}>Increament</button>
      <button onClick={onDecreament}>Decreament</button>
      <button onClick={onReset}>Reset</button> */}
    
    <div>
      <SearchForm onSearch={onSearch}/>
      <div>{renderApiData()}</div>
    </div>
    </div>
  );
};
export default Home;
