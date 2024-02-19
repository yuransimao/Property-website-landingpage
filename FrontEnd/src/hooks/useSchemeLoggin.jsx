import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod';
import { auth } from '../service/service';
import { signInWithEmailAndPassword } from 'firebase/auth';








function UseSchemaLoggin() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
 




  
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