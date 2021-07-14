import { Form, Field } from 'react-final-form'
import { composeValidators, maxLength, required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';
import s from './Registration.module.css';

const maxLength15 = maxLength(15);

let RegistrationForm = (props) => {
  return (
    <Form
      initialValues={{
      }}
      onSubmit={values => {
        console.log(values);
        props.onRegistration(values);
      }}>
      {({ handleSubmit, pristine, reset, submitting }) => (
      <form onSubmit={handleSubmit} className={s.form_auth}>
        <div className={s.content_form}>
          <div className={s.description}>
            <div>Полное имя:</div>
            <div>Логин:</div>
            <div>Email:</div>
            <div>Пароль:</div>
            <div>Подтверждение:</div>
          </div>
          <div className={s.fields}>
            <div><Field component={Input} type={"text"} name={"full_name"} placeholder={"Введите полное имя"} validate={composeValidators(required)} /></div>
            <div><Field component={Input} name={"login"} placeholder={"Введите логин"} validate={composeValidators(required, maxLength15)} /></div>
            {/* <div>Фото профиля: <Field component={"input"} type={"file"} name={"avatar"} /></div>  */}
            <div><Field component={Input} type={"text"} name={"email"} placeholder={"Введите E-mail"} validate={required  }/></div>
            <div><Field component={Input} type={"password"} name={"password"} placeholder={"Введите пароль"} validate={composeValidators(required)}/></div>
            <div><Field component={Input} type={"password"} name={"password_confirm"} placeholder={"Повторите пароль"} validate={composeValidators(required)}/></div>
          </div>
        </div>
        <div className={s.btn_submit}><button>Зарегистрироваться</button></div>
        {/* <NavLink to="/login">Авторизоваться</NavLink> */}
      </form>
    )}</Form>
  )
}

export default RegistrationForm;