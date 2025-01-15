import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().required('Bu alan zorunludur'),
    email: Yup.string().email('Geçersiz e-posta adresi').required('Bu alan zorunludur'),
    message: Yup.string().required('Bu alan zorunludur'),
  });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">İletişime Geçin</h2>

        {/* Create a grid layout with better spacing and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form on the left side */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Bize Mesaj Gönderin</h3>
            <p className="text-center mb-6">Aşağıdaki formu doldurarak bize mesaj gönderebilirsiniz.</p>

            {/* Formik Form */}
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const response = await axios.post('http://localhost:5000/send', values);
                  setStatusMessage({ type: 'success', text: 'Mesajınız başarıyla gönderildi!' });
                  resetForm(); // Clear the form after submission
                } catch (error) {
                  setStatusMessage({ type: 'error', text: 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.' });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto dark:bg-gray-800">
                  {/* Name Input */}
                  <div className="mb-4">
                    <Field
                      type="text"
                      name="name"
                      placeholder="İsim"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 mt-2" />
                  </div>

                  {/* Email Input */}
                  <div className="mb-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="E-posta"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
                  </div>

                  {/* Message Input */}
                  <div className="mb-6">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Mesajınız"
                      rows="5"
                      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-2" />
                  </div>

                  {/* Status Message */}
                  {statusMessage && (
                    <p className={`text-center mb-4 ${statusMessage.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                      {statusMessage.text}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                    >
                      {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Google Map with Rounded Corners and Address under the map */}
          <div className="w-full">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg mb-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509084!2d144.9556513153183!3d-37.81721397975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1df7b01%3A0x2f2b6b6b7b3e69f4!2sGoogle!5e0!3m2!1sen!2sus!4v1612335565710!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }} // Added rounded corners here
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Address block directly under the map */}
            <div className="text-center text-lg mt-4">
              <p>
                Adres: 123 Sağlık Sokak, İstanbul<br />
                Telefon: +90 555 555 5555<br />
                Email: info@doktorwebsitesi.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
