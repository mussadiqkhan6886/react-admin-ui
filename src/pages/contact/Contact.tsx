import "./contact.scss";
import { useMenuContext } from "../../hooks/MenuContext";

const ContactUs = () => {

  const {mode} =  useMenuContext()
  return (
    <main className="contact-container">
      <h1 style={mode == "light" ? {color: "black"} : {}}>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Enter subject" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message..." rows={5}></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </main>
  );
};

export default ContactUs;
