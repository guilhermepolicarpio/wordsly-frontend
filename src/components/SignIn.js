import {  useState } from 'react';
import Input from './Form/Input';
import { toast } from 'react-toastify';
import Button from './Form/Button';
import { Link,useNavigate } from 'react-router-dom';
import { FormWrapper,InputWrapper,SignUpText } from './Form/StyledForm';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
    
       
          try {
            //await signIn(email, password);
            toast('Login com sucesso!');
            navigate('/sign-in');
          } catch (error) {
            toast('Não foi possível fazer o cadastro!');
          }
      }

    return (

        <FormWrapper onSubmit={submit}>
            <InputWrapper>
                <Input
                name="email"
                placeholder="E-mail"
                type="text"
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                 name="password"
                 placeholder="Password"
                 type="password"
                 value={password} 
                 onChange={e => setPassword(e.target.value)} 
                />
            </InputWrapper>
            <Button type="submit" >Login</Button>
            <Link  to="/sign-up">
                <SignUpText >
                    <p> Não tem cadastro ? Clique aqui</p>
                </SignUpText>
            </Link>
        </FormWrapper>
    );
};