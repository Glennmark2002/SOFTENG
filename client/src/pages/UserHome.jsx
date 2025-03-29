import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import axios from 'axios';

function UserHome() {

  const [imageURL, setImageURL] = useState([]);
  const { currentUser } = useSelector(state => state.user);

  useEffect(() => {

    const generateQRCode = async () => {
      
      const res = await axios.post('http://localhost:3000/api/request/get', { id : currentUser._id });
      const qr = await QRCode.toDataURL(res.data[0]._id);
      setImageURL(qr);
    }

    generateQRCode();

  }, []);

  return (
    <div className='max-h-screen h-screen flex justify-center items-center '>
      { imageURL && <img src={imageURL} className='rounded-2xl w-60' /> }
    </div>
  );
}

export default UserHome;
