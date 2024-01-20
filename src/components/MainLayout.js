import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTittle from './AppTittle';

const MainLayout = () => {
  return (
    <div>
      <Navs />
      <AppTittle tittle="Box Office" subTittle="Are you looking for a movie or an actor ?" />
      <Outlet />
    </div>
  );
};
export default MainLayout;
