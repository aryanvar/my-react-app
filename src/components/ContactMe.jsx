import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactMe.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful form submission (replace this with your actual logic)
    console.log(formData);
    toast.success("Message sent successfully!", {
      position: "top-center", // Use the correct property here
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="ContactMe" data-aos="zoom-in-up">
      <h1>CONTACT ME</h1>
      <p>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible.
      </p>

      <div className="ContactMe_Form">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xkndzada"
          method="POST"
        >
          <div className="formElementName">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formElementEmail">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formElementMessage">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
