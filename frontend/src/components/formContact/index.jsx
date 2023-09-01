import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm} from "react-hook-form";
import { toast } from 'react-toastify';
import { StylesSignUpForm } from "./style";
import { api } from "../../services/api";

const schema = yup.object().shape({
  nomeCompleto: yup.string()
    .required("Full name is required")
    .min(3, "Full name should have at least 3 characters"),
  
  email: yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  
  telefone: yup.string()
    .required("Phone number is required")
    .max(11, "Maximum 11 digits allowed").min(8,  "Minimum 8 digits allowed")
});



export const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
        const token = localStorage.getItem('token')
         await api.post('/api/contacts', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        toast.success('Added to contacts successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    } catch (error) {
        toast.warn(`${error.response.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
  };


  return (
    <StylesSignUpForm onSubmit={handleSubmit(onSubmit)}>
        <h2>New contact</h2>
      <input 
        type="text" 
        placeholder="Enter your full name..." 
        {...register("nomeCompleto")}
      />
      {errors.nomeCompleto && <p className="errorMessage">{errors.nomeCompleto.message}</p>}

      <input 
        type="email" 
        placeholder="Enter your email..." 
        {...register("email")}
      />
      {errors.email && <p className="errorMessage">{errors.email.message}</p>}

      <input 
        type="tel" 
        placeholder="Enter your phone number..." 
        {...register("telefone")}
      />
      {errors.telefone && <p className="errorMessage">{errors.telefone.message}</p>}

      <button >Add new contact</button>
   
    </StylesSignUpForm>
  );
};