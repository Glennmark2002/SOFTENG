import { Link } from "react-router-dom";

function Dropdown({ currentUser }) {

  const handleSignout = async () => {

  }

  return (
    <div className='dropdown dropdown-end'>
      { currentUser ? 
        (
          <div>
            <img src={currentUser.picture} tabIndex={0} className='btn btn-circle avatar'  />
            <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box z[1] mt-3 w-52 p-2'>
              <li><a onClick={handleSignout}> Logout </a></li>
            </ul>
          </div>
        ) : 
        <Link to='/sign-in' className='btn btn-neutral text-sm'> Sign-in </Link>
      }
    </div>
  );
}

export default Dropdown;
