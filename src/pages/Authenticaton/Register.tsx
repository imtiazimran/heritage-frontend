/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/utils/Container";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import illustration from "@/assets/illustration.avif";
import { FaHome } from "react-icons/fa";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Swal from "sweetalert2";
import { useRegisterMutation } from "@/redux/features/authentication/authenticationApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authentication/authSlice";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
  role: string; // Add role here
};

const Register = () => {
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate(); // Add useNavigate hook
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegisterFormData>();
  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to register with these details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, register!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await register(data).unwrap();
          dispatch(setUser(result.data));
          Swal.fire("Registered!", "Your account has been created.", "success");
          reset(); // Clear form fields after successful registration
          navigate("/"); // Redirect to home page
        } catch (error: any) {
          Swal.fire("Error!", "There was a problem registering your account.", error);
        }
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center -mt-6">
      <Container className="bg-white p-5 rounded-lg shadow-md w-full max-w-xl">
        <Link to={"/"}>
          <Button variant={"ghost"} className="absolute top-0 left-0 text-primary">
            <FaHome />
          </Button>
        </Link>
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="mb-1">
              <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                {...formRegister("username", { required: "Username is required" })}
                className="mt-1 block w-full"
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
            </div>

            <div className="mb-1">
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...formRegister("email", { required: "Email is required" })}
                className="mt-1 block w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-1">
              <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...formRegister("password", { required: "Password is required" })}
                className="mt-1 block w-full"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="mb-1">
              <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...formRegister("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) => value === password || "Passwords do not match",
                })}
                className="mt-1 block w-full"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <div className="mb-1">
              <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                {...formRegister("firstName")}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-1">
              <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                {...formRegister("lastName")}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-1">
              <Label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </Label>
              <Input
                id="contactNumber"
                type="text"
                {...formRegister("contactNumber")}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </Label>
              <Input
                id="address"
                type="text"
                {...formRegister("address")}
                className="mt-1 block w-full"
              />
            </div>
          </div>
          <div className="mb-1">
            <Label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </Label>
            <Select {...formRegister("role")} defaultValue="">
              <SelectTrigger id="role" className="w-[260px] my-2 text-left px-2 py-1 border">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem disabled value="Admin">Admin</SelectItem>
                <SelectItem value="Bidder">Bidder</SelectItem>
                <SelectItem value="PropertyOwner">Property Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full mb-4 hover:bg-blue-950" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </Button>
          <Link to={"/login"}>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <span className="text-blue-500 cursor-pointer">Login here</span>.
            </p>
          </Link>
        </form>
      </Container>

      {/* Illustration */}
      <div className="hidden md:block flex-1 bg-blue-800">
        <img src={illustration} alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Register;
