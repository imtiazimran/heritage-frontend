/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Container from "@/utils/Container";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import illustration from "@/assets/illustration.avif"; 
import { FaHome } from "react-icons/fa";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  address: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();
  const password = watch("password");

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center -mt-20">
      <Container className="bg-white p-5 rounded-lg shadow-md w-full max-w-xl">
        <Link to={"/"}>
          <Button
            variant={"ghost"}
            className="absolute top-0 left-0 text-primary"
          >
            <FaHome />
          </Button>
        </Link>
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <Label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <Input
                id="username"
                type="text"
                {...register("username", { required: "Username is required" })}
                className="mt-1 block w-full"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mt-1 block w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="mt-1 block w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value: any) =>
                    value === password || "Passwords do not match",
                })}
                className="mt-1 block w-full"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                {...register("firstName")}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-4">
              <Label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-4">
              <Label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </Label>
              <Input
                id="contactNumber"
                type="text"
                {...register("contactNumber")}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mb-6">
              <Label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </Label>
              <Input
                id="address"
                type="text"
                {...register("address")}
                className="mt-1 block w-full"
              />
            </div>
          </div>

          <Button type="submit" className="w-full mb-4">
            Register
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
        <img
          src={illustration}
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
