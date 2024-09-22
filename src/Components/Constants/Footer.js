import React, { useState } from "react";

const Footer = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleOpenPopup = (expertise) => {
    setActivePopup(expertise);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };
  return (
    <>
      <footer className="footer-section bg-dark text-light p-4">
        <div className="container my-5"  data-aos="fade-up">
          <div className="row">
            {/* Left Div: Social Media Icons */}
            <div className="col-md-4 col-12 text-center text-md-start mb-4 mb-md-0">
              <h5 className="footer-heading mb-4">Follow Us</h5>
              <div className="social-icons">
                <a href="www.instagram.com" className="me-4 text-light">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="www.instagram.com" className="me-4 text-light">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="www.instagram.com" className="me-4 text-light">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="www.instagram.com" className="text-light">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              {/* Address Section */}
              <p className="mt-4">Paul Kruger & Madiba Str, Pretoria Central, </p>
            </div>

            {/* Right Div: Expertise Buttons */}
            <div className="col-md-8 col-12 text-center text-md-start">
              <h5 className="footer-heading mb-4">Our Expertise</h5>
              <div className="expertise-buttons">
                <button
                  className="btn btn-outline-light me-2 mb-2"
                  onClick={() => handleOpenPopup("Commercial Litigation")}
                >
                  Commercial Litigation
                </button>
                <button
                  className="btn btn-outline-light me-2 mb-2"
                  onClick={() => handleOpenPopup("Contractual Disputes")}
                >
                  Contractual Disputes
                </button>
                <button
                  className="btn btn-outline-light me-2 mb-2"
                  onClick={() => handleOpenPopup("Family Law, Divorce")}
                >
                  Family Law, Divorce
                </button>
                <button
                  className="btn btn-outline-light me-2 mb-2"
                  onClick={() =>
                    handleOpenPopup("Contractual Drafting, and Compliance")
                  }
                >
                  Contractual Drafting, and Compliance
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Popup Window */}
        {activePopup && (
          <>
            <div className="popup-overlay" onClick={handleClosePopup}></div>
            <div className="popup-window">
              <div className="popup-header">
                <h5>{activePopup}</h5>
                <button className="btn-close" onClick={handleClosePopup}>
                  &times;
                </button>
              </div>
              <div className="popup-body">
                {activePopup === "Commercial Litigation" && (
                  
                  <p>
                    <h4>Commercial Litigation</h4>
                    We offer expert services in resolving business disputes
                    through litigation.
                  </p>
                )}
                {activePopup === "Contractual Disputes" && (
                  <p>
                    <h4>Contractual Disputes</h4>
                    Our team specializes in resolving disputes arising from
                    contract breaches.
                  </p>
                )}
                {activePopup === "Family Law, Divorce" && (
                  <p>
                    <h4>Family Law, Divorce</h4>
                    We provide legal support for family law cases including
                    divorce, custody, and more.
                  </p>
                )}
                {activePopup === "Contractual Drafting, and Compliance" && (
                  <p>
                    <h4>Contractual Drafting, and Compliance</h4>
                    We provide legal support for family law cases including
                    divorce, custody, and more.
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </footer>
      <div className="text-center bg-white p-1">
        <p>© 2024 Commodor Law. Website created by <span className="fw-bold">Nnete Phasha</span>.</p>
      </div>
    </>
  );
};

export default Footer;
