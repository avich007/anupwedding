import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WishBox() {
  const initialFormData = Object.freeze({
    name: "",
    location: "",
    message: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const saveMessage = () => {
     db.collection("wishes").doc().set(formData);
     toast.success("Success!!!");
  };

  return (
    <WishForm>
      <Header>
        <p className="text3">
          W<u>ishU</u>s 💐
        </p>
        {/* <FontAwesomeIcon icon={faAddressCard} className="camera" /> */}
      </Header>
      <FormBody onClick={saveMessage} >
        <div>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="location"
            type="text"
            onChange={handleChange}
            placeholder="Location"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            onChange={handleChange}
            maxLength="130"
            type="text"
            placeholder="Message"
            required
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </FormBody>
      <ToastContainer />
    </WishForm>
  );
}

export default WishBox;

const WishForm = styled.div``;

const FormBody = styled.form`
  border-radius: 30px;
  margin: 20px;
  padding: 50px;
  background-color: silver;

  @media screen and (min-width: 601px) {
    div {
      width: 60%;
    }
  }
  @media screen and (max-width: 600px) {
    div {
      width: 100%;
    }
  }

  input,
  textarea,
  button {
    @media screen and (min-width: 601px) {
      width: 300px;
      margin: 30px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      margin-top: 20px;
    }
    height: 30px;
    padding-left: 10px;
    border-radius: 10px;
    text-decoration: none;
    border: none;
    outline: none;
  }

  span {
    @media screen and (min-width: 601px) {
      margin-left: 30px;
    }
    @media screen and (max-width: 600px) {
    }
  }

  textarea {
    padding: 20px;
    height: 40px;
    width: 88%;
  }

  button {
    @media screen and (min-width: 601px) {
      width: 200px;
    }

    background-color: peru;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
