import React, { useState } from 'react';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = "mailto:mududabarbs2017@gmail.com";
    setIsFormSubmitted(true);
  };

  const resetForm = () => {
    // Reset the form 
    setIsFormSubmitted(false);
   
  };

  return (
    <section className='section bg-secondary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-5 before:-left-40 before:lg:block'>
            Contact Me
          </h2>
          <p>Discuss a project or just 'GET IN-TOUCH'? My inbox is open.</p>
        </div>
        {isFormSubmitted ? (
          <div className="bg-primary p-8 rounded-lg mt-8">
            <p>Thank you for your message! I will get back to you shortly.</p>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover" onClick={resetForm}>
              New Message
            </button>
          </div>
        ) : (
        <form className="bg-primary p-8 rounded-lg mt-8" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="text-white">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="input"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="input"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="textarea"
            ></textarea>
          </div>
          <button className="btn btn-lg bg-accent hover:bg-accent-hover" type="submit">
            Send Message
          </button>
        </form>
        )}
      </div>
    </section>
  );
};

export default Contact;