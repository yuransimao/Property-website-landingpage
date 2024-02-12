import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod';
import { useState } from 'react';
import { supabase } from '../service/service';
import { useContext } from 'react';
import { UserProviderContext } from '../Context/context';
const schema = z.object({

  userName: z.string().nonempty('O nome de usuario  é obrigatório').min(2, 'O Nome de usuario deve conter mais de 2 caracteres no mínimo')
    .transform(userName => userName.trim().split(' ')
      .map(name => name[0].toLocaleUpperCase().concat(name.substring(1))).join(' ')),

  userEmail: z.string().nonempty('O  email é obrigatório')
    .email('Formato de e-mail inválido'),

  userPassword: z.string().nonempty('Digite uma password').min(6, 'Deve conter 6 caracteres no mínimo'),

  userconfPassword: z.string().nonempty('Digite uma password correspondente').min(6, 'Deve conter 6 caracteres no mínimo')

}).refine((data) => data.userPassword === data.userconfPassword, {
  message: 'A senha não coresponde',
  path: ['userconfPassword']
});


const TextBtnSignin = 'Sign in';
const TextBtnSignup = 'Sign up';





function UseSchema() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const [state,Dispach] =useContext(UserProviderContext)


  const [ChangeForms, setChangeForms] = useState(TextBtnSignin);

  const handleChangeForms = (e) => {
    const buttonText = e.target.textContent;
    setChangeForms(buttonText);
    reset()
  }



  const createUser = async (datas) => {

    
    const {userEmail,userName, userPassword} = datas
    const response = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    })

    Dispach({type:'User_active', payload:{userEmail: response.data.user.email,userId: response.data.user.id}})
    console.log(response.data);

  }


  const Login = () =>{

  }


  return {
    register, handleSubmit, errors, createUser, handleChangeForms, TextBtnSignin, TextBtnSignup, ChangeForms

  }
}

export { UseSchema }