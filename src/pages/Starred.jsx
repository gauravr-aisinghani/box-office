import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/apiGet';
import { useStarredShows } from '../lib/useStarredShows';
import { TextCenter } from '../components/common/TextCenter';
import ShowGrid from '../components/shows/ShowsGrid';
const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  // useQuery hook should be placed before any return statement
  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <TextCenter>No shows were starred</TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <TextCenter>Error occurred: {starredShowsError.message}</TextCenter>;
  }

  // If none of the above conditions are met, show a loading message
  return <TextCenter>Shows are loading</TextCenter>;
};

export default Starred;