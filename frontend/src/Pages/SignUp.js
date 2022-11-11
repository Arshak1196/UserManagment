import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { AuthForm } from '../Components/Styles/AuthForm.styled'
import { AuthFormContainer } from '../Components/Styles/AuthFormContainer.styled'
import { AuthFormContent } from '../Components/Styles/AuthFormContent.styled';
import { AuthFormTitle } from '../Components/Styles/AuthFormTitle.styled';
import { Button } from '../Components/Styles/Button.styled';
import { FormField } from '../Components/Styles/FormField.styled';
import { FormInput } from '../Components/Styles/FormInput.styled';
import { TextLink } from '../Components/Styles/TextLink.styled';
import { TextRed } from '../Components/Styles/TextRed.styled';
import { signup } from '../redux/auth/authActions'

function SignUp() {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(signup(data))
  }

  return (
    <AuthFormContainer>
      <AuthForm>
        <AuthFormContent>
          <AuthFormTitle>Sign Up</AuthFormTitle>
          <FormField>
            <label>First Name</label><br />
            <FormInput type='text'
              {...register("fname", { required: true, pattern: /^[A-Za-z]+$/ })}
            />
            {errors.fname?.type === 'required' && <TextRed>First Name is required</TextRed>}
            {errors.fname?.type === 'pattern' && <TextRed>Alpahbet chararcters only</TextRed>}

          </FormField>
          <FormField>
            <label>Last Name</label><br />
            <FormInput type='text'
              {...register("lname", { required: true, pattern: /^[A-Za-z]+$/ })}
            />
            {errors.lname?.type === 'required' && <TextRed>Last Name is required</TextRed>}
            {errors.lname?.type === 'pattern' && <TextRed>Alpahbet chararcters only</TextRed>}


          </FormField>
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
            <Button type='submit'
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </FormField>
          <span>Already have an account? </span><TextLink onClick={()=>{navigate('/signin')}}>Signin here</TextLink>
        </AuthFormContent>
      </AuthForm>

    </AuthFormContainer>
  )
}

export default SignUp