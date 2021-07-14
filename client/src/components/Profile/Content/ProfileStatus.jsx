import React, { useEffect, useState } from 'react';


const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => { 
    setStatus(props.status);
  }, [props.status] ) 

  let activateEditMode = () => {
    setEditMode(true);
  }

  let deactivateEditMode = () => {
    setEditMode(false);
    props.changeStatusUser(status);
  }

  let changeCurrentStatus = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <>
      {!editMode && <span onDoubleClick={activateEditMode}>{props.status}</span>}
      {editMode &&
        <input
          onDoubleClick={deactivateEditMode}
          type="text"
          defaultValue={props.status}
          onChange={ (e)=>{ changeCurrentStatus(e)} } 
          onBlur={() => { deactivateEditMode()} } 
        />
      }

    </>
  )

}

export default ProfileStatus;
