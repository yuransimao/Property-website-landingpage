import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod';
import { auth } from '../service/service';
import { signInWithEmailAndPassword } from 'firebase/auth';



const Scheme = z.object({
  email: z.string().nonempty('Verifica seu email').email(),
  password: z.string().nonempty('Verifica sua password').min(6, 'a password de conter no minimo 6 caracterter')
})





function UseSchemaLoggin() {
  const { register, handleSubmit,  formState: { errors } } = useForm({resolver :zodResolver(Scheme)});
 




  
  const Login = async (datas) => {
  
    const {email, password } = datas
    

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
    } catch(error) {
      console.log(error)
    }
    
  }


  return {
    register , handleSubmit, errors,Login

  }
}

export {UseSchemaLoggin}