import React, { ChangeEvent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { ContactsType } from '../../../types/types';
import { Input, TextArea } from '../../common/FormsControls/FormsControls';
import Preloader from '../../common/Preloader/Preloader';
import PostsContainer from '../Posts/PostsContainer';
import s from './AboutMe.module.css';

type PropsType = {
  contacts: ContactsType
  savePhoto: (photo: any) => void
  photo: () => string | undefined
  isFetching: boolean
  isAuth: boolean
  fullName: string
  aboutMe: string
  lookingForAJob: boolean
  onChangeAboutMe: (values: any) => void
}

function AboutMe(props: PropsType) {
  const getPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files[0].name.length);
    if (e.target.files) {
      if (e.target.files[0]) {
        if (e.target.files[0].name.length > 10) {
          if (e.target.nextSibling) {
            let nameFile = e.target.files[0].name.slice(0, 10) + "..." + e.target.files[0].name.slice(-4);
            e.target.nextSibling.textContent = nameFile;
          }  
        } else 
          if (e.target.nextSibling) {
            e.target.nextSibling.textContent = e.target.files[0].name;
          }
    
        let photo = e.target.files[0];
        props.savePhoto(photo);
      }
    }
  }
  const Contacts = ({ contact, valContact }: {contact: string, valContact: string | null}) => {
    return <div className={s.contacts}><b>{contact}:</b> {valContact}</div>
  }
  const ContactsForForm = ({ contact, valContact }: {contact: string, valContact: string | null}) => {
    return <div className={s.contacts}>
              <b>{contact}:</b> 
              <div>
                <Field name={contact} defaultValue={valContact} component={Input} />
              </div>
            </div>
  }

  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
  }

  return (
    <div className={s.formAboutMe}>
      {!editMode &&
        <div className={s.formInfo}>
          <div className={s.logo_photo}>
            <div className={s.logo_img}>
              {props.isFetching ? <Preloader /> : <img src={props.photo()} alt="logoCurrentUser" />}
              {props.isAuth && 
                <div>
                  <input type="file" id="uploadFile" className={s.hide} onChange={getPhoto} />
                  <label htmlFor="uploadFile">Сменить фото</label>
                </div>
              }
            </div>
            <p>{props.fullName}</p>
            {props.isAuth && <button onClick={activateEditMode}>Редактировать</button>}
          </div>
          <div className={s.info}>
            <p><b>Обо мне:</b> {props.aboutMe}</p>
            <p><b>Ищу ли работу:</b> {props.lookingForAJob ? "да" : "нет"}</p>
            <div><b>Контакты:</b></div>
            {Object.entries(props.contacts).map( (key, i) => {
              return <Contacts key={i} contact={key[0]} valContact={key[1]} />
            })}
            <PostsContainer />
          </div>
        </div>
      }

      {editMode &&
        <div>
          <Form
            initialValues={{
            }}
            onSubmit={values => {
              props.onChangeAboutMe(values);
              deactivateEditMode();
            }}
          >{({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={s.formInfo}>
              <div className={s.logo_photo}>
                <div className={s.logo_img}>
                  {props.isFetching ? <Preloader /> : <img src={props.photo()} alt="logoCurrentUser" />}
                  {props.isAuth && 
                    <div>
                      <input type="file" id="uploadFile" className={s.hide} onChange={getPhoto} />
                      <label htmlFor="uploadFile">Сменить фото</label>
                    </div>
                  }
                </div>
                <Field name="fullName" defaultValue={props.fullName} component={Input} />
              </div>
              <div className={s.info}>
                <div className={s.info_about_work}>
                  <div>
                    <div><b>Ищу ли работу:</b></div>
                    <div><b>Обо мне:</b></div>
                  </div>
                  <div>
                    <div><Field name="lookingForAJob" defaultValue={props.lookingForAJob ? "да" : "нет"} component={Input} /></div>
                    <div><Field name="aboutMe" defaultValue={props.aboutMe} component={TextArea} cols="40"/></div>
                  </div>
                </div>
                <div><b>Контакты:</b></div>
                {Object.entries(props.contacts).map( (key, i) => {
                  return <ContactsForForm key={i} contact={key[0]} valContact={key[1]} />
                })}
                <button>Подтвердить</button>
                <button onClick={deactivateEditMode}>Отмена</button>
              </div>
            </form>
          )}
          </Form>
        </div>
      }
    </div>
  );
}

export default AboutMe;