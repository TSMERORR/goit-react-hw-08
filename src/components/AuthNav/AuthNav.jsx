import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Link to={`/register`}>Register</Link>
      <Link to={`/login`}>Login</Link>
    </div>
  );
};

export default AuthNav;