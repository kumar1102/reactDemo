import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../store";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://example.com/background-image.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem;
`;

const FormTitle = styled.h2`
  margin: 0.5rem 0 1rem;
  font-size: 2rem;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

export const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", name: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClick();
  };
  const handleClick = async () => {
    console.log("handle click is clicked");
    store.dispatch({
      type: "LOGIN",
      payload: {
        name: credential.name,
        email: credential.email,
        image:
          "https://media.licdn.com/dms/image/D4D03AQHTaTNplYaz3A/profile-displayphoto-shrink_100_100/0/1683131363420?e=1692230400&v=beta&t=5wbExRnuLQ-IXySqugbTuOhY6tYsuEl_kLZDQEQ7SdA",
      },
    });
    navigate("/");
    console.log("successfully login.");
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <FormTitle>Login to Arthmate</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              value={credential.name}
              name="name"
              placeholder="Enter Your Name"
              onChange={onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={credential.password}
              name="email"
              placeholder="Enter Your Email"
              onChange={onChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </>
  );
};
