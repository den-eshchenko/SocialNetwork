import React from 'react';
import DialogContainer from './Dialog/DialogContainer';
import s from './Dialogs.module.css';

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <DialogContainer />
    </div>
  );
}

export default Dialogs;