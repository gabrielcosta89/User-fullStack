// Signup.jsx
import { SytlesMainLogin } from "../Login/styles";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  nomeCompleto: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name should have at least 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should have at least 8 characters"),

  telefone: yup
    .string()
    .required("Phone number is required")
    .max(11, "Maximum 11 digits allowed for phone")
    .min(8, "Minimun 8 digits allowed for phone"),
});

export const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/api/clients", data);

      toast.success("Successfully signed up!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/")
    } catch (error) {
      const outcome = error.response?.data?.message || error;

      toast.error(outcome, {
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
      <SytlesMainLogin>
        <section>
          <h1>Signup</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              label="Full Name"
              type="text"
              placeholder="Enter your full name..."
              {...register("nomeCompleto")}
            />
            {errors.nomeCompleto && (
              <p className="errorMessage">{errors.nomeCompleto.message}</p>
            )}
            <input
              label="Email"
              type="email"
              placeholder="Enter your email..."
              {...register("email")}
            />
            {errors.email && (
              <p className="errorMessage">{errors.email.message}</p>
            )}
            <input
              label="Password"
              type="password"
              placeholder="Enter your password..."
              {...register("password")}
            />
            {errors.password && (
              <p className="errorMessage">{errors.password.message}</p>
            )}
            <input
              label="Phone"
              type="tel"
              placeholder="Enter your phone number..."
              {...register("telefone")}
            />
            {errors.telefone && (
              <p className="errorMessage">{errors.telefone.message}</p>
            )}
            <button type="submit">Signup</button>
          </form>
          <h3>already have an account?</h3>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Sign in
          </button>
        </section>
      </SytlesMainLogin>
      <ToastContainer />
    </>
  );
};
