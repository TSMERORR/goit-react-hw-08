import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from '../ContactForm/ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { selectAuthError } from '../../redux/auth/selectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Ім'я є обов'язковим"),
    email: Yup.string()
      .email('Некоректна пошта')
      .required("Пошта є обов'язковою"),
    password: Yup.string()
      .required("Пароль є обов'язковим")
      .min(8, 'Пароль має бути мінімум в 8 символи')
      .max(100, 'Пароль має бути меншим за 100 символів'),
  });

  const onLogin = values => {
    console.log(values);

    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Ви успішно зареєструвались!');
      });
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onLogin}
      validationSchema={LoginSchema}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel}>
          <span className={css.contactLabelText}>Ім&apos;я: </span>
          <Field className={css.contactInput} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
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
          Зареєструватись
        </button>
        {error && <p>Користувач з таким емейлом вже існує!</p>}
      </Form>
    </Formik>
  );
};

export default RegisterForm;