import React, { useState } from 'react';
import lawhandshake from "../../assets/lawhandshake.jpg";


const FAQ = () => {
    const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  const handleCloseOutsideClick = (e) => {
    if (e.target.className === 'faq-modal') {
      closeModal();
    }
  };
  return (
    <>
    <section className="faq-section">
      <div className="faq-container">
        {/* Left Div: Image */}
        <div className="faq-image-container"  data-aos="fade-right">
          <img src={lawhandshake} alt="FAQ" className="faq-image" />
        </div>

        {/* Right Div: FAQ Buttons */}
        <div className="faq-buttons-container"  data-aos="fade-left">
          <button className="faq-button" onClick={() => handleModal('Commercial Litigation helps resolve disputes involving business transactions and other commercial matters.')}>
            What is Commercial Litigation?
          </button>
          <button className="faq-button" onClick={() => handleModal('Contractual Disputes arise when two parties disagree on the terms or execution of a contract.')}>
            What are Contractual Disputes?
          </button>
          <button className="faq-button" onClick={() => handleModal('Family Law involves legal matters such as divorce, child custody, and adoption.')}>
            What is Family Law?
          </button>
          <button className="faq-button" onClick={() => handleModal('Divorce is the legal dissolution of a marriage by a court or other competent body.')}>
            How does Divorce work?
          </button>
          <button className="faq-button" onClick={() => handleModal('Intellectual Property Law protects the rights of creators to their inventions, designs, and artistic works.')}>
            What is Intellectual Property Law?
          </button>
          <button className="faq-button" onClick={() => handleModal('Employment Law governs the rights and duties between employers and workers.')}>
            What is Employment Law?
          </button>
        </div>

        {/* Modal Pop-up */}
        {showModal && (
          <div className="faq-modal" onClick={handleCloseOutsideClick}>
            <div className="faq-popup"> {/* Updated to use faq-popup class */}
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  )
}

export default FAQ
