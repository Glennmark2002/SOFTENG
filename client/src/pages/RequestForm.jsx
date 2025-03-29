import { useSelector } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from 'axios';
import { useState } from "react";

function RequestForm() {

  const { currentUser } = useSelector(state => state.user);
  const [formData, setFormData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:3000/api/request/create', {
      id : currentUser._id,
      username : currentUser.username,
      picture : currentUser.picture,
      date : formData.date,
      purpose : formData.purpose
    }) 
  };

  const handleChange = (e) => setFormData({...formData, [e.target.id] : e.target.value}); 

  return (
    <div className='max-h-screen h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='max-w-lg p-4 flex flex-col items-center gap-4 w-full'>
        <Input type='date' id='date' onChange={handleChange} />
        <Input type='text' placeholder='Purpose of visit' id='purpose' onChange={handleChange} />
        <Button text='Submit' />
      </form>
    </div>
  );
}

export default RequestForm;
