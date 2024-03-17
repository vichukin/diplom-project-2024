import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SignUpFormScheme, SignUpFormType } from "@/validators";

import { ButtonConfirm, ConfirmEmail } from "@/components";

import { ICONS } from "@/constants";

import Rectangle6 from "@/assets/images/Rectangle6.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox, TextField } from "@mui/material";

import "./SignUp.scss";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [confirmEmailActive, setConfirmEmailActive] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({ resolver: zodResolver(SignUpFormScheme), mode: "onSubmit" });

  const createUser: SubmitHandler<SignUpFormType> = async data => {
    const { confirmPassword, ...user } = data;
    console.log(user);
    try {
      setConfirmEmailActive(true);
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <section className="login register">
      <div className="login__img-half">
        <img src={Rectangle6} alt="Main Photo" className="login__img" />
        <Link to={"/SignIn"} className="login__img-link">
          Sign in{ICONS.cardArrow()}
        </Link>
      </div>
      {!confirmEmailActive ? (
        <form onSubmit={handleSubmit(createUser)} className="login__text-half">
          {ICONS.menuClose({ onClick: () => navigate("/") })}
          <Link to={"/SignIn"} className="login__img-link login__img-link-phone">
            Sign in{ICONS.cardArrow()}
          </Link>
          <div className="login__title">Sign up</div>
          <div className="login__subtitle">Welcome to Homey!</div>
          <div className="login__text">
            Welcome! Sign up to access our rental database and manage your bookings easily and
            conveniently.
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
            <div className="login__list-item">
              {/* <div className="login__list-item-text">Confirm password</div> */}
              <TextField
                {...register("confirmPassword")}
                error={Boolean(errors.confirmPassword?.message)}
                label="Enter password"
                helperText={errors.confirmPassword?.message}
                fullWidth
                type="password"
              />
            </div>
            <div className="register__list-item">
              <Checkbox
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  color: errors.consent ? "#d32f2f" : "inherit",
                }}
                {...register("consent")}
              />
              <div className="login__list-item-text">
                By clicking the “Continue” button, I agree to the <span>Terms of Use</span> and
                <span>Privacy Policy</span> of the company. I confirm that I have read and accept
                all terms and conditions regarding registration and use of this website.
              </div>
            </div>
          </div>
          <ButtonConfirm text="Continue" type="submit" />
        </form>
      ) : (
        <ConfirmEmail />
      )}
    </section>
  );
};
