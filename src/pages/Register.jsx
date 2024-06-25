import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";



// https://images.pexels.com/photos/1123985/pexels-photo-1123985.jpeg?auto=compress&cs=tinysrgb&w=600



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1123985/pexels-photo-1123985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0px;
  background-color: Maroon;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    // const {email, password } = data;

    await publicRequest.post("/auth/register", {
      username,
      email,
      password
    })
     
    .then(async (res) => {
        console.log(username, email, password);
        // const data = await res.json();
        console.log(res.data);
        window.alert("Registered Successfull");
        console.log("Successfull register");

        // const {email, accessToken} = res.data;
        // if()
        // localStorage.setItem("userToken", JSON.stringify([{email},{accessToken}]))
        navigate("/login");
        // data.reset();
      })
      .catch((err) => {
        window.alert("Invalid Credentials");
        console.log("Invalid Credentials");
        console.log(err);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type='text' placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
          <Input type='email' placeholder="email" onChange={(e) => setEmail(e.target.value)} required/>
          <Input type='password' placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
          {/* <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement> */}
          <Button onClick={postData}>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
