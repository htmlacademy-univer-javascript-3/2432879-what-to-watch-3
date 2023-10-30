import Logo from '../logo/logo';
import {ReactNode} from 'react';
import UserBlock from '../userBlock/userBlock';
import {User} from '../../types/user';

type HeaderProps = {
  user?: User;
  className?: string;
  children?: ReactNode;
}

function Header({user, className, children}: HeaderProps) {
  return (
    <header className={`page-header ${className ? className : ''}`}>
      <Logo/>
      {children}
      {user && <UserBlock user={user}/>}
    </header>
  );
}

export default Header;
