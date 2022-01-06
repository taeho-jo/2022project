import React from "react";
// Styles
import styled from "@emotion/styled";
//Components
import FormTitle from "./FormTitle";
// Libraries
import {SubmitHandler, useForm, } from "react-hook-form";
import {CommonColor, CommonFont} from "../../assets/styles/common.styles";
import FormLabel from "./FormLable";
import FormErrorMsg from "./FormErrorMsg";
// Types
type GenderType = 'male' | 'female' | 'other';
interface FormType {
  email: string,
  password: string,
  password_confirm: string,
  firstname: string,
  age: number,
  phone: string,
  gender: GenderType,
  agree1?: boolean,
  agree2?: boolean,
  select: string
}


const FormLoginField = () => {
  const {register, handleSubmit, watch, formState:{errors}} = useForm<FormType>()
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data)

  return (
    <>
      <FormTitle title={'Login Field'} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormLabel label={'이메일'} />
          <Input autoComplete={'off'} {...register('email', {
            required: '가나다라',
            pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
          })}/>
          {errors.email && <FormErrorMsg errorMsg={'이메일을 입력해주세요.'}/>}
        </div>

        <div>
          <FormLabel label={'비밀번호'} />
          <Input type={'password'} autoComplete={'off'} {...register('password', {
            required: true,
            pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$@!%*#?&])[a-zA-Z0-9$@!%*#?&]{8,20}$/
          })}/>
          {errors.password && <FormErrorMsg errorMsg={'비밀번호를 입력해주세요.'}/>}
        </div>

        <div>
          <FormLabel label={'비밀번호 확인'} />
          <Input type={'password'} autoComplete={'off'} {...register('password_confirm', {
            required: true,
            validate: value => value === watch('password')
          })}/>
          {errors.password_confirm && <FormErrorMsg errorMsg={'비밀번호가 일치하지 않습니다.'}/>}
        </div>

        <div>
          <FormLabel label={'이 름'} />
          <Input autoComplete={'off'} {...register('firstname', {required: true})}/>
          {errors.firstname && <FormErrorMsg errorMsg={'이름을 입력해주세요.'}/>}
        </div>

        <div>
          <FormLabel label={'전화번호'} />
          <Input autoComplete={'off'} {...register('phone', {required: true})}/>
          {errors.phone && <FormErrorMsg errorMsg={'전화번호를 입력해주세요.'}/>}
        </div>

        <div>
          <FormLabel label={'나 이'} />
          <Input autoComplete={'off'} type='number' {...register('age', {required: true, min: 18, max: 99 })}/>
          {errors.age && <FormErrorMsg errorMsg={'나이를 입력해주세요.'}/>}
        </div>

        <div>
          <FormLabel label={'성 별'} />
          <div>
            <select {...register('gender', {required: true})}>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
            {errors.gender && <FormErrorMsg errorMsg={'성별을 선택해주세요.'}/>}
          </div>
        </div>

        <div>
          <input type="submit"/>
        </div>
      </Form>
    </>
  )
}

export default FormLoginField

const Form = styled('form')`
  width: 100%;
  div {
    padding: 10px 0;  
  }
`

const Input = styled('input')`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${CommonColor.grey2};
  padding: 10px 10px;
  font-size: ${CommonFont.fs14};
  outline: none;
`
