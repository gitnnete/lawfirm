import React from "react";
import lawyer1 from "../../assets/lawyer1.jpg";

const Profile = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center mt-5">
          <div className="col-md-6 col-12 text-center text-md-start mb-5"  data-aos="fade-right">
            {/* Lawyer Image */}
            <img
              src={lawyer1}
              alt="Lawyer Profile"
              className="profile-img img-fluid mb-4 mb-md-0 rounded-bottom" // {{ edit_1 }}
            />
          </div>
          <div className="col-md-6 col-12"  data-aos="fade-left">
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
              John Doe is a seasoned attorney with over 20 years of experience
              specializing in corporate law. He has successfully represented
              numerous high-profile clients and is known for his commitment to
              excellence in legal practice.
            </p>
            <button className="btn btn-danger mb-5">Contact Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
