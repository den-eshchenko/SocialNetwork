import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import { Input } from '../../common/FormsControls/FormsControls';
import s from './Login.module.css';
import { composeValidators, required } from '../../../utils/validators/validators';
import { Redirect } from 'react-router-dom';

let LoginForm = (props) => {
  if (props.auth[0]) {return <Redirect to={`/profile/${props.auth[2]}`} />} 
  return (
    <Form
      initialValues={{
      }}
      onSubmit={values => {
        props.onAutorization(values);
      }}
    >{({ handleSubmit, pristine, reset, submitting }) => (
      <form onSubmit={handleSubmit} className={s.form_auth}>
        <div className={s.content_form}>
          <div className={s.description}>
            <div>Логин:</div>
            <div>Пароль:</div>
          </div>
          <div className={s.fields}>
            <div><Field name={"login"} placeholder={"Введите имя"} component={Input} validate={composeValidators(required)}/></div>
            <div><Field name={"password"} placeholder={"Введите пароль"} component={Input} type="password" validate={composeValidators(required)}/></div>
            {/* <div><Field type={"checkbox"} name={"rememberMe"} component={Input} />Remember me</div> */}
            {props.error && <div>{props.error}</div>}
          </div>
        </div>
        <div className={s.btn_submit}>
          <div><button>Авторизоваться</button></div>
          <div><NavLink to="/registration">Зарегистрироваться</NavLink></div>
        </div>
      </form>
    )}</Form>
  );
}

export default LoginForm;