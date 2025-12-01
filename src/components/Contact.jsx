import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_opg8l2b',
        'template_7xkr7to',
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        '1ngaBrr_wWsIjBdIo'
      )
      .then(() => {
        alert('Message sent successfully! 🚀');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.log(error);
        alert('Something went wrong!');
      });
  };

  return (
    <div id="Contact" className="text-gray-600 container mx-auto">
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-400 text-center my-12"
      >
        Contact
      </motion.h1>

      <div className="grid sm:grid-cols-2 max-w-2xl gap-2 mx-auto space-y-5 p-10 md:max-w-4xl">
        {/* Left Section Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-gray-300 text-4xl">Have a project?</h2>
          <h2 className="text-gray-300 text-xl my-2">Let's talk!</h2>
        </motion.div>

        {/* Form Animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 space-y-4  p-5"
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="Enter name"
                className="border-b p-2 text-gray-300 w-full outline-0"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Enter email"
                className="border-b p-2 text-gray-300 w-full outline-0"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={form.message}
                placeholder="Enter message"
                className="border p-4 text-gray-300 w-full resize-none scrollbar-hide"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white py-1 rounded cursor-pointer hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
