import { LoginForm } from 'components/LoginForm/LoginForm.js';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
