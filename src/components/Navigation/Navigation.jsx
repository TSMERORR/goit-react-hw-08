import { Link } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={css.nav}>
      <Link to={`/`}>Головна сторінка</Link>
      {isLoggedIn && <Link to={`/contacts`}>Контакти</Link>}
    </div>
  );
};

export default Navigation;