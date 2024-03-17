import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SignUpFormType } from "src/utils/validators/sign-up-form-validator";

import { SignInFormScheme, SignInFormType } from "@/validators";

import { ButtonConfirm, ConfirmEmail } from "@/components";

import { ICONS } from "@/constants";

import Rectangle6 from "@/assets/images/Rectangle6.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";

import "./SignIn.scss";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [confirmEmailActive, setConfirmEmailActive] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({ resolver: zodResolver(SignInFormScheme), mode: "onSubmit" });

  const SignInUser: SubmitHandler<SignInFormType> = async data => {
    console.log(data);
    try {
      setConfirmEmailActive(true);
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <section className="login">
      <div className="login__img-half">
        <img src={Rectangle6} alt="Main Photo" className="login__img" />
        <Link to={"/SignUp"} className="login__img-link">
          Sign up{ICONS.cardArrow()}
        </Link>
      </div>
      {!confirmEmailActive ? (
        <form onSubmit={handleSubmit(SignInUser)} className="login__text-half">
          {ICONS.menuClose({ onClick: () => navigate("/") })}
          <Link to={"/SignUp"} className="login__img-link login__img-link-phone">
            Sign up{ICONS.cardArrow()}
          </Link>
          <div className="login__title">Sign in</div>
          <div className="login__subtitle">Welcome back to Homey!</div>
          <div className="login__text">
            Enter your credentials to continue using our services and get access to the best rental
            deals.
          </div>
          <div className="login__fields-list">
            <div className="login__list-item">
              {/* <div className="login__list-item-text">Email</div> */}
              <TextField
                {...register("email")}
                error={Boolean(errors.email?.message)}
                label="Enter your Email"
                helperText={errors.email?.message}
                fullWidth
              />
            </div>
            <div className="login__list-item">
              {/* <div className="login__list-item-text">Password</div> */}
              <TextField
                {...register("password")}
                error={Boolean(errors.password?.message)}
                label="Enter password"
                helperText={errors.password?.message}
                fullWidth
                type="password"
              />
            </div>
          </div>
          <ButtonConfirm text="Continue" type="submit" />
          <div className="login__or">or</div>
          <div className="login__icons-list">
            {ICONS.facebook()}
            {ICONS.gmail()}
            {ICONS.apple()}
          </div>
        </form>
      ) : (
        <ConfirmEmail />
      )}
    </section>
  );
};
