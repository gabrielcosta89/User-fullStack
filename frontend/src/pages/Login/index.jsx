import { SytlesMainLogin } from "./styles";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const Login= () => {
  const navigate = useNavigate()
  const { register, handleSubmit, } = useForm();
  const onSubmit =async(data)  => {
    
    try {

      const response = await api.post("/api/login-clients",data);
      const {token} = response.data
      localStorage.setItem('token',token)

navigate('/dashboard')

    } catch (error) {
      toast.warn('make sure email and password are correct', {
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
    <>
      <SytlesMainLogin className="h-screen flex items-center justify-center bg-grey-scale-grey-8">
        <section>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
      <input
        label="Email"
        type="text"
        placeholder="Enter your email..."
        {...register("email")}
      />

      <input
        label="Senha"
        type='password'
        placeholder="Enter your password..."
        {...register("password")}
      />

      <button
        className="hover:bg-brand-brand-1
             hover:bg-opacity-90"
        type="submit"
      >
        Entrar
      </button>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

    </form>
          <h3>Dont have an account yet?</h3>
          <button onClick={()=>{navigate('/signup')}}>Sing up</button>
        </section>
      </SytlesMainLogin>
    </>
  );
};
