import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../ContactForm/ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Некоректна пошта')
      .required("Пошта є обов'язковою"),
    password: Yup.string()
      .required("Пароль є обов'язковим")
      .min(8, 'Пароль має бути мінімум в 8 символи')
      .max(100, 'Пароль має бути меншим за 100 символів'),
  });

  const onLogin = values => {
      dispatch(login(values));
      
    };
    
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onLogin}
      validationSchema={LoginSchema}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel}>
          <span className={css.contactLabelText}>Електронна пошта: </span>
          <Field className={css.contactInput} type="text" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.contactLabel}>
          <span className={css.contactLabelText}>Пароль: </span>
          <Field className={css.contactInput} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button className={css.contactBtn} type="submit">
          Залогінитися
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;