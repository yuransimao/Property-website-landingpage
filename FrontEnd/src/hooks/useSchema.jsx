import {useForm} from 'react-hook-form'
import {zodResolver} from "@hookform/resolvers/zod"
import z from 'zod';

const schema = z.object({

    userName: z.string().nonempty('O nome de usuario  é obrigatório')
    .transform(userName => userName.trim().split(' ').map(name => name[0].toLocaleUpperCase().concat(name.substring(1))).join(' ')),
    userEmail: z.string().nonempty('O  email é obrigatório').email('Formato de e-mail inválido'),
  
    userPassword: z.string().min(6,'Deve conter 6 caracteres no mínimo'),
  
    userconfPassword: z.string().min(6, 'Deve conter 6 caracteres no mínimo')
  
  }).refine((data) => data.userPassword === data.userconfPassword,{
    message:'A senha não coresponde',
    path:['userconfPassword']
  });


  function UseSchema (){
    const { register, 
        handleSubmit, 
        reset,formState: { errors } } = useForm({ resolver: zodResolver(schema) });
        const createUser = (data) => {
  
  
        }


        return{
            register, handleSubmit,reset, errors, createUser

        }
  }

  export {UseSchema}