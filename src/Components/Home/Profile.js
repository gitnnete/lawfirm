import React from "react";
import lawyer1 from "../../assets/lawyer1.jpg";
import { Link } from "react-router-dom"; // {{ edit_1 }}

const Profile = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center mt-5">
          <div
            className="col-md-6 col-12 text-center text-md-start mb-5"
            data-aos="fade-right"
          >
            {/* Lawyer Image */}
            <img
              src={lawyer1}
              alt="Lawyer Profile"
              className="profile-img img-fluid mb-4 mb-md-0 rounded-bottom" // {{ edit_1 }}
            />
          </div>
          <div className="col-md-6 col-12" data-aos="fade-left">
            {/* Profile Text */}
            <h2 className="mb-4">John Doe</h2>
            <h5 className="sub-profile-heading mb-4">
              Company Director | Head Lawyer
            </h5>
            <p className="lead">
              John Doe is a seasoned attorney with over 20 years of experience
              specializing in corporate law. He has successfully represented
              numerous high-profile clients and is known for his commitment to
              excellence in legal practice.
            </p>
            <p className="lead mb-4">
              John Doe's extensive legal expertise extends beyond corporate law;
              he has a proven track record in negotiations, compliance, and risk
              management. His analytical skills and strategic approach have
              earned him a reputation as a trusted advisor among clients and
              peers alike. John is dedicated to staying abreast of industry
              trends and regulatory changes, ensuring that his clients receive
              informed and proactive legal counsel tailored to their unique
              needs. His passion for justice and commitment to ethical practice
              make him a respected figure in the legal community
            </p>
            <button className="btn btn-danger mb-5">
              <Link to="/contact" className="text-white">
                Contact Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
