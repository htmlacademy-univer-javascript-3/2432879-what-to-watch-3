import Logo from '../logo/logo';
import {ReactNode} from 'react';
import UserBlock from '../userBlock/userBlock';

type HeaderProps = {
  className?: string;
  children?: ReactNode;
}

function Header({className, children}: HeaderProps) {
  return (
    <header className={`page-header ${className ? className : ''}`}>
      <Logo/>
      {children}
      <UserBlock/>
    </header>
  );
}

export default Header;
