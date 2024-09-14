import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

function ContactForm() {
  const dispatch = useDispatch();

  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const ContactSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Мінімум від 3 символів!')
      .max(50, 'Максимум 50 символів!')
      .required('Required'),
    phoneNumber: Yup.string()
      .min(3, 'Мінімум від 3 символів!')
      .max(50, 'Максимум 50 символів!')
      .matches(
        phoneRegExp,
        "Номер телефону має співпадати з форматом 'xxx-xx-xx'"
      )
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    const finalContact = {
      name: values.username,
      number: values.phoneNumber,
    };

    dispatch(addContact(finalContact))
      .unwrap()
      .then(() => {
        toast.success('Контакт успішно доданий!');
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        phoneNumber: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <label className={css.contactLabel}>
          <span className={css.contactLabelText}>І&apos;мя: </span>
          <Field className={css.contactInput} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </label>
        <label className={css.contactLabel}>
          <span className={css.contactLabelText}>Номер: </span>
          <Field className={css.contactInput} type="text" name="phoneNumber" />
          <ErrorMessage
            className={css.error}
            name="phoneNumber"
            component="span"
          />
        </label>
        <button className={css.contactBtn} type="submit">
          Додати контакт
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;