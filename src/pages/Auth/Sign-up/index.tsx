import { FC, useState } from "react";
import {
  OutlinedInput,
  IconButton,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import deskImage from "../../../assets/images/image-desktop.jpg";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "../../../router/constant";

const SignUp: FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleNavigate = () => {
    navigate(routesConstant?.signIn?.path);
  };
  return (
    <div>
      <>
        <div
          data-testid="form-data"
          className="max-h-full max-w-md md:max-w-full"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col max-w-3xl ml-48 -mr-32 md:mx-auto mt-1 md:mt-32 rounded-xl overflow-hidden bg-red-100 md:flex md:flex-row">
              <div className="w-full md:w-1/2">
                <img src={deskImage} className="w-full h-52 md:h-96" />
              </div>
              <div className="w-full md:mt-10 md:w-1/2">
                <div className="px-8 py-3">
                  <h1 className="text-red-400 text-4xl font-bold">Sign Up</h1>
                </div>

                <div className="space-y-6 flex-col ml-5 mr-16 md:mx-8 md:ml-3">
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    }}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        {...field}
                      />
                    )}
                  />
                  {errors?.email?.type === "required" && (
                    <div className="!mt-0 ml-[5px] text-left">
                      <p className="text-slate-400">Email is required.</p>
                    </div>
                  )}

                  {errors?.email?.type === "pattern" && (
                    <div className="!mt-0 ml-[5px] text-left">
                      <p className="text-slate-400">
                        Please enter the valid email adddress.
                      </p>
                    </div>
                  )}

                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>

                    <Controller
                      name="password"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <OutlinedInput
                          {...field}
                          id="standard-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      )}
                    />
                  </FormControl>
                </div>
                {errors?.password?.type === "required" && (
                  <div className="!mt-0 ml-[16px] text-left">
                    <p className="text-slate-400">Password is required.</p>
                  </div>
                )}

                <div className="flex flex-row justify-start space-x-3 mt-8 ml-5">
                  <button
                    className="py-1 px-5 bg-[#acb9a2] hover:bg-[#fb693c] rounded-lg text-white font-bold"
                    type="submit"
                  >
                    Sign Up
                  </button>

                  <button
                    className="py-1 px-5 border border-[#acb9a2] text-[#fb693c] hover:text-[#acb9a2] hover:border-[#fb693c] rounded-lg font-bold"
                    type="submit"
                    onClick={() => reset()}
                  >
                    Cancel
                  </button>
                </div>

                <div className="mt-5">
                  <p className="text-gray-500">
                    Already have an account ?{" "}
                    <a
                      className="font-bold text-[#fb693c]"
                      href={routesConstant?.signIn?.path}
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default SignUp;
