import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../utils/firebase';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/user/userSlice';

function OAuth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);

    const res = await axios.post('http://localhost:3000/api/auth/google', {
      username : result.user.displayName,
      email    : result.user.email,
      picture  : result.user.photoURL
    });

    dispatch(signInSuccess(res.data));
  }

  return <button onClick={handleClick}> Google </button>
}

export default OAuth;
