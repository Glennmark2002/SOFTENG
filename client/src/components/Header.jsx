import { Link } from 'react-router-dom'; 
import Theme from './Theme'
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';
import { Menu } from 'lucide-react';

function Header() {

  const { currentUser } = useSelector(state => state.user);


  return (
    <div className='navbar fixed bg-base-100'>
      <div className='navbar-start'>
        <button className='btn btn-ghost'>
          <Menu/>
        </button>
        <Link  className='btn btn-ghost text-2xl font-bold'> My Logo </Link>
      </div>

      <div className='navbar-end'>
        <Theme />
        <Dropdown currentUser={currentUser} />
      </div>
    </div>
  );
}

export default Header;
