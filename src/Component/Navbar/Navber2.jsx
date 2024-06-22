import React from "react";
import "./Navbar.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  const handleNavigate2 = () => {
    navigate("/second");
  };
  return (
    <>
      <div className="Navbar-main">
        <div className="Navbar-Second">
          <span className="navbar-span" onClick={handleNavigate2}>
            <IoMdArrowRoundBack /> <h5>Go Back</h5>
          </span>

          <span className="navbar-span">
            <h5>Exit</h5>
            <MdCancel />
          </span>
        </div>
      </div>
        <hr className="navbar-hr" />
    </>
  );
};

export default Navbar2;
