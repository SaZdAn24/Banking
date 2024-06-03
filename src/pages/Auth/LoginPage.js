import React, { useState } from 'react';
import { LoginPageContainer, Form, Input, SignUpText } from './LoginPage.styles';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button/Button'; // Убедитесь, что путь к компоненту Button верен

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <LoginPageContainer>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign In</Button>
      </Form>
      <SignUpText>
        I'm a new user. <a href="/register">Sign Up</a>
      </SignUpText>
    </LoginPageContainer>
  );
};

export default LoginPage;
