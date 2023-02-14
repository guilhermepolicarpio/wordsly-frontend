import {  useState } from 'react';
import { toast } from 'react-toastify';
import Input from './Form/Input';
import Button from './Form/Button';
import { Link,useNavigate } from 'react-router-dom';
import { FormWrapper, InputWrapper, SignUpText } from './Form/StyledForm';

import useSignUp from '../hooks/api/useSignUp';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userImage, setUserImage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { signUp } = useSignUp();

    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();
    
        if (password !== confirmPassword) {
            toast('As senhas devem ser iguais!');
        } else {
          try {
            await signUp(name,email, password, userImage);
            toast('Inscrito com sucesso! Por favor, faça login.');
            navigate('/');
          } catch (error) {
            toast('Não foi possível fazer o cadastro!');
          }
        }
      }

    return (

        <FormWrapper onSubmit={submit}  >
            <InputWrapper>
                <Input
                    name="name"
                    placeholder="name"
                    type="text"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
            </InputWrapper>
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
                    name="userImage"
                    placeholder="Profile picture link"
                    type="text"
                    value={userImage} 
                    onChange={e => setUserImage(e.target.value)} 
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

            <InputWrapper>
                <Input
                    name="confirmpassword"
                    placeholder="Password confirmation"
                    type="password"
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)} 
                />
            </InputWrapper>

            <Button type="submit" >Cadastrar</Button>
            <Link to="/">
                <SignUpText >
                    <p> Já tem cadastro ? Clique aqui</p>
                </SignUpText>
            </Link>
        </FormWrapper>
    );
}