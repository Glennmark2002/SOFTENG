import { Link } from 'react-router-dom'; 
import Theme from './Theme'

function Header() {
  return (
    <div className='navbar fixed'>
      <div className='navbar-start'>
        <Link  className='btn btn-ghost text-2xl font-bold'> My Logo </Link>
      </div>

      <div className='navbar-end'>
        <Theme />
        <Link className='btn btn-neutral text-base'> Sign-In </Link>
      </div>
    </div>
  );
}

export default Header;
