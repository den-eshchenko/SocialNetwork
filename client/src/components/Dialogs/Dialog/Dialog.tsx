import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';
import { TDialogsProps } from './DialogContainer';

const Dialog = (props: TDialogsProps) => {
  let state = props.dialogsPage;
  let outInterlocutorData = state.interlocutorData.map((elem) => { 
    return (
      <div className={`${s.interlocutor} ${s.active}`} key={elem.id}>
        <NavLink to={"/dialogs/" + elem.id}>{elem.name}</NavLink>
      </div>
    );
  });
  let outInterlocutorText = props.dialogsPage.dialogsTextData.map((elem) => {
    return (
      <div key={elem.id}>
        {elem.message}
      </div>
    );
  });

  let sendMessage = () => {
    props.sendMessage();
  };

  let updateDialogText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.target.value;
    props.updateDialogText(text); 
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.interlocutors}>
          {outInterlocutorData}
        </div>
        <div className={s.interlocutorText}>
          {outInterlocutorText}
          <div>
            <textarea onChange={ updateDialogText } name="" id="" cols={30} rows={2} value={props.dialogsPage.dialogCurrentText}></textarea>
            <div><button onClick={sendMessage}>send</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;