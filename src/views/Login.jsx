import { useForm } from "react-hook-form";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = login(data);
    if (result?.success) {
      toast.success("Admin Login successfully!");
      navigate("/admin");
    }else{
      toast.error(result?.message)
    }
    console.log("Login Data:", data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-secondary/40">
      <div className="bg-primary p-8 rounded shadow-md md:w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            register={register}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            }}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            register={register}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            error={errors.password}
          />

          <Button onClick={handleSubmit(onSubmit)} fill label={"Login"} />
        </form>
      </div>
    </div>
  );
};

export default Login;
