import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link, useNavigate} from 'react-router-dom';
import {logoutAction} from '../../store/apiActions';

function UserBlock() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userProfile = useAppSelector((state) => state.userProfile);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img onClick={() => navigate(AppRoute.MyList)} src={userProfile.avatarUrl} alt="User avatar" width="63" height="63"/>
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
