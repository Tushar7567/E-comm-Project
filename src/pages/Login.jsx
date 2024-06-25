import { useState } from "react";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
// import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import localStorage from "redux-persist/es/storage";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userRedux";

// https://images.pexels.com/photos/3193731/pexels-photo-3193731.jpeg?auto=compress&cs=tinysrgb&w=600

// url("https://images.pexels.com/photos/2881785/pexels-photo-2881785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: Maroon;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;



const Login = () => {
  const [username, setUsername] = useState("Tushar@gmail.com");
  const [password, setPassword] = useState("prepbytes");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isFetching, error } = useSelector((state) => state.user);

  // const handleClick = async() => {
  //   // e.preventDefault();
  //   // login(dispatch, { username, password });
  //   ;

  //   // const res = await publicRequest.post("/auth/login", user);

  // };
  const postData = async (e) => {
    e.preventDefault();
    // const {email, password } = data;

    await publicRequest.post("/auth/", {
      username,
      password,
    })
     
    .then(async (res) => {
        console.log(username, password);
        // const data = await res.json();
        console.log(res.data);
        window.alert("Login Successfull");
        console.log("Successfull Login");

        const {email, accessToken} = res.data;
        // if()
        localStorage.setItem("userToken", JSON.stringify([{email},{accessToken}]))
        dispatch(loginSuccess(res.data));
        navigate("/home");
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
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            type="email"
            defaultValue={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button onClick={postData} >
            LOGIN
          </Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
          <Link href="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
