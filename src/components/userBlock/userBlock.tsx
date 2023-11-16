import {User} from '../../types/user';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/apiActions';

type UserBlockProps = {
  user: User;
}

function UserBlock({user}: UserBlockProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user.avatarImg} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <Link onClick={(event) => {
              event.preventDefault();
              dispatch(logoutAction());
            }} to={AppRoute.SignIn} className="user-block__link"
            >
              Sign out
            </Link>
          </li>
        </> :
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </li>}
    </ul>
  );
}

export default UserBlock;
