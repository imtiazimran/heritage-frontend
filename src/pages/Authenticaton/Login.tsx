import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import Container from "@/utils/Container";
import { FaHome } from "react-icons/fa";
import illustration from "@/assets/illustration.avif";
import { useLoginMutation } from "@/redux/features/authentication/authenticationApi";
import { setUser } from "@/redux/features/authentication/authSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

type LoginFormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate for redirection
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "iamimran@example.com",
      password: "123456",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await login(data).unwrap();
      if (result) {
        dispatch(setUser(result.data)); // Dispatch the action to set user and token

        // Show success alert with SweetAlert2
        Swal.fire({
          title: "Login Successful!",
          text: "You will be redirected to the homepage.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        // Redirect to home after the alert
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      console.log(isLoading, "Login Data:", result);
    } catch (error) {
      console.error("Login failed:", error);

      // Show error alert with SweetAlert2
      Swal.fire({
        title: "Login Failed!",
        text: "Invalid email or password.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <Container className="bg-white p-6 flex justify-center items-center rounded-lg shadow-md w-full relative">
      <Link to="/" className="absolute top-4 left-4 text-primary">
        <FaHome />
      </Link>
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 block w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full mb-4 hover:bg-blue-950">
            Login
          </Button>
        </form>
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register here
          </Link>
          .
        </p>
      </div>
      {/* Illustration */}
      <div className="hidden md:block flex-1 bg-blue-800">
        <img src={illustration} alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </Container>
  );
};

export default Login;
