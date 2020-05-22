import React, { useState,useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import {Button} from 'react-bootstrap'
import CreateSong from "./createSong";
import shortid from 'shortid'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Amar Pothchola", id: 1 },
    { title: "Obak Bhalobasa", id: 2 },
    { title: "Jodi Konodin", id: 3 },
    { title: "Hasimukh", id: 4 },
  ]);
  const [show, setShow] = useState(false);
  const [age,setAge] = useState(10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addSong = (title)=>{
  setSongs([...songs,{title,id:shortid.generate()}]);
  }

  useEffect(()=>{
    console.log('useEffect hook ran only for songs!',songs);
  },[songs])

  return (
    <div className="container-fluid">
      <ListGroup variant="flush">
        {songs.map((song) => {
          return <ListGroup.Item key={song.id}>{song.title}</ListGroup.Item>;
        })}
      </ListGroup>
        <Button className="my-3 mr-5 form-control" variant="outline-danger" onClick={handleShow}>Add a new Song</Button>

      <Button className="my-3 mr-5 form-control" variant="outline-secondary" onClick={()=>setAge(age + 1)}>Age Increment {age}</Button>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateSong addSong={addSong}/>
        </Modal.Body>

      </Modal>
    </div>
  );
};
export default SongList;
