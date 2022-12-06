import React from "react";
import './ReadMe.css';
import { GrCheckmark } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";


const ReadMe = ({ celeb,editFormData,handleEditFormChange,handleCancelClick}) => {

  return (
    <>
      <div>
        <div className='row1'>
          <div className="col1">Age <input type='number' className='rad form-group row w-50 mt-1' value={editFormData.age} onChange={handleEditFormChange} name='age'></input></div>

          <div className="col2">Gender
          <input type='text' name='gender' className='rad form-group row w-50 mt-1' value={editFormData.gender} onChange={handleEditFormChange}></input>
          </div>

          <div className="col3">Country<input type='text' name='country' className='rad form-group row w-50 mt-1' value={editFormData.country} onChange={handleEditFormChange}></input>
          </div>
        </div>

        <div className="row2">
          <div className="answer col11">&nbsp;&nbsp;&nbsp; Description
            <textarea type='text' name='description' className='rad area form-group row'value={editFormData.description} onChange={handleEditFormChange}></textarea>
          </div>
        </div>
        <i className="bi bi-check"></i>
      </div>
      <div className="buttons gap-3">
        <button className="noborder" type="submit"><GrCheckmark color="green" size={23}/></button>
        <button className="noborder" onClick={handleCancelClick}><RxCross1 color="red" size={23}/></button>
      </div>
    </>

  );
};

export default ReadMe;