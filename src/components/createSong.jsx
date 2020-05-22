import React,{useState} from "react";
import {Form,Button} from 'react-bootstrap';

const CreateSong = ({addSong}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addSong(title);
        setTitle(''); 
    }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Song Name</Form.Label>
          <Form.Control type="text" placeholder="Enter New Song Name" value={title} required onChange={(e)=>{setTitle(e.target.value)}} />
        </Form.Group>


        <Button variant="primary" type="submit" className="form-control">
          Add
        </Button>
      </Form>
    </div>
  );
};
export default CreateSong;
