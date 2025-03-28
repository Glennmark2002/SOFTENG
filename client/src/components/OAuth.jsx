import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../utils/firebase';

function OAuth() {

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const result = await signInWithPopup(auth, provider);

    console.log(result);

  }

  return <button onClick={handleClick}> Google </button>
}

export default OAuth;
