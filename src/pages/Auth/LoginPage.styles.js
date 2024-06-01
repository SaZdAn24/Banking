import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const SignUpText = styled.div`
  margin-top: 10px;
  color: #888;

  a {
    color: #1e90ff;
    text-decoration: none;
  }
`;
