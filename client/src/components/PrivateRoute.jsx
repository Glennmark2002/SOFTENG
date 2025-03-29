import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {

  const { currentUser } = useSelector(state => state.user);

  return (

    <div className='bg-base-100'>
      { currentUser ? <Outlet /> : <Navigate to='sign-in'/>}
    </div>
  );
}

export default PrivateRoute;
