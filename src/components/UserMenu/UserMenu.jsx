import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectAuthUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userMenu}>
      <h3>{user.name}</h3>
      <button type="button" onClick={onLogout}>
        Вийти
      </button>
    </div>
  );
};

export default UserMenu;