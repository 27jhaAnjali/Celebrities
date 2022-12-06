import React from 'react'
import './EditMe.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
// import {Modal,Button} from 'react-bootstrap'

const EditMe =({celeb,handleEditClick,handleDeleteClick})=> {


  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  function getAge(dob ){
    return (
      Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e+10)
      )}
   const Age=getAge(celeb.dob).toString();

  return (
    <>
    <div>
   <div className='Editrow1'>
 <div className="Editcol1">Age <div type='text' className='rad'></div>{Age} Years</div>
 
   <div className="Editcol2">Gender  <div>{celeb.gender}</div> </div>
 
 <div className="Editcol3">Country<div type='text' className='cont rad'>{celeb.country}</div></div>
 
 </div>
 
 <div className="Editrow2">
 <div className="answer Editcol11">&nbsp;&nbsp;&nbsp; Description
 <div type='text' className='rad Editarea' >{celeb.description}</div>
 </div>
 </div>
 
 </div>
 <div className="buttons gap-3">
 <button type='button' className="noborder" onClick={(event)=>handleEditClick(event,celeb,Age)}><GrEdit color='skyblue' size={23}/></button>
   <button className="noborder" onClick={()=>handleDeleteClick(celeb.id)}><RiDeleteBin5Line color='red' size={23}/></button>
 </div>
   </>
)
}

export default EditMe