import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "router/constant";
import InputComponent from "component/InputComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "utils/axios";

const Profile: FC = () => {
  const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);

  const { data: userProfile } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => {
      return axios.get("/auth/profile");
    },
  });

  const { mutate, isLoading, data } = useMutation({
    mutationKey: ["update-user-profile"],
    mutationFn: (newObj) => {
      return axios.put("auth/update-profile", newObj);
    },
  });
  console.log("🚀 ~ file: index.tsx:26 ~ data:", data)

  useEffect(() => {
    if (userProfile?.data?.status == 200) {
      if (Object.keys(userProfile?.data?.data)?.length > 0) {
        const { fname, lname, city, email } = userProfile?.data?.data;
        setValue("fname", fname);
        setValue("lname", lname);
        setValue("city", city);
        setValue("email", email);
      }
    }
  }, [userProfile]);

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    setValue,
  } = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      city: "",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <div>
      <div
        data-testid="form-data"
        className="max-h-full max-w-md md:max-w-full"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col max-w-3xl ml-48 -mr-32 md:mx-auto mt-1 md:mt-32 rounded-xl overflow-hidden bg-red-100 md:flex md:flex-row">
            <div className="w-full md:mt-2">
              <div className="flex justify-start px-4 py-4">
                <h1 className="text-red-400 text-4xl font-bold">Profile</h1>
              </div>

              <div className="flex-col ml-5 mr-16 md:mx-8 md:ml-3">
                <div>
                  <InputComponent
                    name="fname"
                    placeholder="First Name"
                    register={register("fname", {
                      required: true,
                    })}
                  />
                  <div
                    className={`${
                      errors?.fname?.type !== "required" ? "py-4" : "py-1"
                    } text-left`}
                  >
                    <p className="ml-[5px] text-slate-400">
                      {errors?.fname?.type === "required"
                        ? "Password is required."
                        : ""}
                    </p>
                  </div>
                </div>

                <div>
                  <InputComponent
                    name="lname"
                    placeholder="Last Name"
                    register={register("lname", {
                      required: true,
                    })}
                  />
                  <div
                    className={`${
                      errors?.lname?.type !== "required" ? "py-4" : "py-1"
                    } text-left`}
                  >
                    {
                      <p className="ml-[5px] text-slate-400">
                        {errors?.lname?.type === "required"
                          ? "Password is required."
                          : ""}
                      </p>
                    }
                  </div>
                </div>

                <div>
                  <InputComponent
                    name="city"
                    placeholder="City"
                    register={register("city")}
                  />

                  <div className={`py-4 text-left`}>
                    <p className="text-slate-400">{""}</p>
                  </div>
                </div>

                <div>
                  <InputComponent
                    name="email"
                    placeholder="Email"
                    register={register("email", {
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                  />
                  {
                    <div
                      className={`${
                        errors?.email?.type !== "required" &&
                        errors?.email?.type !== "pattern"
                          ? "py-4"
                          : "py-1"
                      } text-left`}
                    >
                      <p className="ml-[5px] text-slate-400">
                        {" "}
                        {errors?.email?.type === "required"
                          ? "Email is required."
                          : ""}
                      </p>
                    </div>
                  }

                  {
                    <div
                      className={`${
                        errors?.email?.type !== "pattern" ? "py-0" : "py-1"
                      } text-left`}
                    >
                      <p className="ml-[5px] text-slate-400">
                        {errors?.email?.type === "pattern"
                          ? "Please enter the valid email adddress."
                          : ""}
                      </p>
                    </div>
                  }
                </div>
              </div>

              <div className="flex flex-row justify-start space-x-3 my-5 ml-5">
                <button
                  className="py-1 px-5 bg-[#acb9a2] hover:bg-[#fb693c] rounded-lg text-white font-bold"
                  type="submit"
                >
                  {isLoading ? "Loading..." : "Update"}
                </button>

                <button
                  className="py-1 px-5 border border-[#acb9a2] text-[#fb693c] hover:text-[#acb9a2] hover:border-[#fb693c] rounded-lg font-bold"
                  type="submit"
                  onClick={() => reset()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
