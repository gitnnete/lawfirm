import React from "react";

const FormContact = () => {
  return (
    <div>
      <div className="container my-5">
        <h2 className="mt-3"  data-aos="fade-up">Contact Us</h2>
        <h5 className="sub-profile-heading mb-3"  data-aos="fade-up">
          Schedule An Appoint with Us
        </h5>
        <div className="row">
          {/* Left div - Contact Form */}
          <div className="col-md-6 mb-4"  data-aos="fade-right">
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cellNumber" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cellNumber"
                  placeholder="Enter your cell number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter the subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger mt-4">
                Submit Message
              </button>
            </form>
          </div>

          {/* Right div - Embedded Map */}
          <div className="col-md-6 mb-4"  data-aos="fade-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1951243894624!2d-122.41941648435029!3d37.774929279758775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818b5f46c9c9%3A0x0d1d4ad1537a49e4!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1605062976989!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
