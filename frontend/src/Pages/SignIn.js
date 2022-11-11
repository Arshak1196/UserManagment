import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import {useDispatch} from 'react-redux'
import {login} from '../redux/auth/authActions'
import { AuthForm } from '../Components/Styles/AuthForm.styled'
import { AuthFormContainer } from '../Components/Styles/AuthFormContainer.styled'
import { AuthFormContent } from '../Components/Styles/AuthFormContent.styled'
import { AuthFormTitle } from '../Components/Styles/AuthFormTitle.styled'
import { Button } from '../Components/Styles/Button.styled'
import { FormField } from '../Components/Styles/FormField.styled'
import { FormInput } from '../Components/Styles/FormInput.styled'
import { TextLink } from '../Components/Styles/TextLink.styled'
import { TextRed } from '../Components/Styles/TextRed.styled'


function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data))
    
  }
  return (
    <AuthFormContainer>
      <AuthForm>
        <AuthFormContent>
          <AuthFormTitle>Sign In</AuthFormTitle>
          <FormField>
            <label>Email</label><br />
            <FormInput type='text'
              {...register("email", {
                required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email?.type === 'required' && <TextRed>Email is required</TextRed>}
            {errors.email?.type === 'pattern' && <TextRed>Invaid Email</TextRed>}
          </FormField>
          <FormField>
            <label>Password</label><br />
            <FormInput type='password'
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password?.type === 'required' && <TextRed>Password is required</TextRed>}
            {errors.password?.type === 'minLength' && <TextRed>Atleast 8 characters</TextRed>}
          </FormField>
          <FormField align='center'>
            <Button type='submit' color='green'
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </Button>
          </FormField>
          <span>Don't have an account? </span><TextLink onClick={() => { navigate('/signup') }}>Register here</TextLink>
        </AuthFormContent>
      </AuthForm>
    </AuthFormContainer>
  )
}

export default SignIn 