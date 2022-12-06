import React, { Fragment, useState } from 'react'
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import profilepic from '../Images/profilepic.jpg'
import './celebrity.css';
import data from '../celebrities.json'
import EditMe from './EditMe';
import ReadMe from './ReadMe';
import {Modal,Button} from 'react-bootstrap'

const Celebrity = () => {
 
  const [clicked, setClicked] = useState("0");
  const [celebs, setCelebs] = useState(data);
  const [editCelebId, setEditCelebId] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [editFormData, setEditFormData] = useState({
    first:"",
    last:"",
    age: "",
    gender: "",
    country: "",
    description: "",
  });

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCeleb = {
      id: editCelebId,
      first:editFormData.first,
      last:editFormData.last,
      age: editFormData.age,
      gender: editFormData.gender,
      country: editFormData.country,
      description: editFormData.description,
    };

    const newCelebs = [...celebs];

    const index = celebs.findIndex((celeb) => celeb.id === editCelebId);

    newCelebs[index] = editedCeleb;

    setCelebs(newCelebs);
    setEditCelebId(null);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, celeb,Age) => {
    event.preventDefault();
    setEditCelebId(celeb.id);

    const formValues = {
      age:Age,
      first: celeb.first,
      last: celeb.last,
      gender: celeb.gender,
      country: celeb.country,
      description: celeb.description,
    };

    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditCelebId(null);
  };

  const handleDeleteClick = (celebId) => {
    setShow(true)
    const newCelebs = [...celebs];

    const index = celebs.findIndex((celeb) => celeb.id === celebId);

    newCelebs.splice(index, 1);

    setCelebs(newCelebs);
  };



  const renderList =  celebs.map((celeb, index) => {
    // const { first, last } = celeb;

    return (
      <>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" style={{backgroundColor:'#FF5733'}} onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        <form key={celeb.id} onSubmit={handleEditFormSubmit}>
        <div className={`mx-auto d-grid gap-3 accordion_item  ${clicked === index ? "active" : ""}`} style={{ width: '34rem' }}>

          <button className=" w-100 p-2 d-flex align-items-center justify-content-between" style={{ backgroundColor: 'white' }} onClick={() => handleToggle(index)}>

            <div ><img id="img" src={profilepic} alt=''></img>  {celeb.first} {celeb.last}</div>
            <span className="control">{clicked === index ? <BsChevronUp /> : <BsChevronDown />}
            </span>

          </button>
          <div className={`answer_wrapper ${clicked === index ? "open" : ""}`}>
            {/* <form onSubmit={handleEditFormSubmit}> */}
              <Fragment>
                {
                  editCelebId === celeb.id ?
                    (<ReadMe celeb={celeb}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange} 
                      handleCancelClick={handleCancelClick}/>)
                    :
                    (<EditMe celeb={celeb}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick} />)
                }

              </Fragment>
          </div>
        </div>
        </form>
       </>
             )
           }
         )


  return <>{renderList}</>

};

export default Celebrity