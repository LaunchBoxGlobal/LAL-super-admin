import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/authApi";
import Cookies from "js-cookie";
import { setUser } from "../../features/slices/userSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();

  const validateFields = (field, value) => {
    let message = "";

    if (field === "email") {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) message = "Email is required";
      else if (!emailReg.test(value)) message = "Enter a valid email.";
    }

    if (field === "password") {
      if (!value.trim()) message = "Password is required.";
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((values) => ({ ...values, [name]: value }));
    validateFields(name, value);
  };

  const validateAllFields = () => {
    validateFields("email", data.email);
    validateFields("password", data.password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateAllFields();
    if (!isFormValid) return;
    try {
      const payload = {
        email: data?.email,
        password: data?.password,
        role: "admin",
      };
      const res = await login(payload).unwrap();
      Cookies.set("look_alike_admin_token", res?.token);
      Cookies.set("look_alike_admin", JSON.stringify(res?.user));
      dispatch(setUser(res?.user));
      navigate("/");
    } catch (error) {
      console.log("login err >>> ", error);
    }
  };

  const isFormValid =
    !errors.email && !errors.password && data.email && data.password;
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[350px] space-y-5 mt-4"
    >
      <div className="w-full space-y-1">
        <input
          type="email"
          id="email"
          name="email"
          value={data?.email}
          onChange={handleOnChange}
          placeholder="davegray@gmail.com"
          className="w-full bg-white outline-none h-[49px] rounded-[12px] px-4 text-[var(--secondary-text)]"
        />
        {errors.email && (
          <small style={{ color: "red" }} className="px-1">
            {errors.email}
          </small>
        )}
      </div>

      <div className="w-full space-y-1">
        <div className="w-full bg-white h-[49px] rounded-[12px] px-4 flex items-center justify-between gap-4">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={data?.password}
            onChange={handleOnChange}
            placeholder="Password"
            className="w-full bg-white outline-none h-full text-[var(--secondary-text)]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <IoMdEye className="text-[#D9D9D9]" size={20} />
            ) : (
              <IoMdEyeOff className="text-[#D9D9D9]" size={20} />
            )}
          </button>
        </div>
        {errors.password && (
          <small style={{ color: "red" }} className="px-1">
            {errors.password}
          </small>
        )}
      </div>

      <div className="w-full pt-2">
        <Button text={"Login"} type={"submit"} isPending={isLoading} />
      </div>
    </form>
  );
};

export default LoginForm;
