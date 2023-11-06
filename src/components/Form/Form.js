
// import { Formik } from 'formik';

import Fade from "react-reveal/Fade";

function Form(){
    /*return (<Formik
                initialValues={{ name: '', email: '', message: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }else if (!values.message) {
                        errors.message = 'Required';
                    } else if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /!* and other goodies *!/
                  }) => (
                    <form className="contact-form contact-form--template-2col" onSubmit={handleSubmit}>
                        <div className="contact-form__field">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <label htmlFor="name">Your Name</label>
                            {errors.name && touched.name && errors.name}
                        </div>
                        <div className="contact-form__field">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <label htmlFor="email">Your email</label>
                            {errors.email && touched.email && errors.email}
                        </div>
                        <div className="contact-form__field contact-form__field--message">
                            <textarea
                                name="message"
                                id="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            ></textarea>
                            <label htmlFor="message">Your message</label>
                            {errors.message && touched.message && errors.message}
                        </div>

                        <input type="hidden" name="_next" value="https://amvmkrtich.github.io/contactform-thanks.html" />
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_captcha" value="false" />
                        <button type="submit" disabled={isSubmitting}>
                            Send message
                        </button>
                    </form>
                )}
            </Formik>);*/


    return <Fade cascade right distance='50px' delay={500}>
    <form action="https://formsubmit.co/amv.mkrtich@gmail.com" method="POST" className="contact-form contact-form--template-2col">
        <div className="contact-form__field">
            <input type="text" name="name" id="name" required />
            <label htmlFor="name">Your Name</label>
        </div>
        <div className="contact-form__field">
            <input type="email" name="email" id="email" required />
            <label htmlFor="email">Your email</label>
        </div>
        <div className="contact-form__field contact-form__field--message">
            <textarea name="message" id="message" required></textarea>
            <label htmlFor="message">Your message</label>
        </div>
        <div className="contact-form__field contact-form__field--privacy">
            <input required type="checkbox" name="privacy" id="privacy" />
            <label htmlFor="privacy">I am agree with <a href="/privacy.html"> Privacy
                    Policy</a></label>
        </div>
        <input type="hidden" name="_next" value="https://amvmkrtich.github.io/contactform-thanks.html" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit">Send message</button>
    </form>
    </Fade>
}

export default Form;