import { FC, useState } from "react";
import InputComponent from "../component/InputComponent";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../component/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routesConstant } from "../router/constant";
import { useMutation } from "@tanstack/react-query";
import axios from "../utils/axios";

const ManageRecipe: FC = () => {
  const navigate = useNavigate();

  const [isIngredient, setIsIngredient] = useState(false);
  const [isCuisine, setIsCuisine] = useState(false);
  const [ingredientArray, setIngredientArray] = useState([
    {
      amount: "",
      unit: "",
      originalName: "",
    },
  ]);
  const [cuisinesArray, setCuisinesArray] = useState([
    {
      cuisine: "",
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>();

  const { mutate } = useMutation({
    mutationFn: (newTodo) => {
      return axios.post("/recipe/create", newTodo);
    },
    onSuccess(data) {
      if (data?.data?.status === 201) {
        navigate(routesConstant?.recipe?.path);
      }
    },
  });

  const addInputField = () => {
    setIngredientArray([
      ...ingredientArray,
      {
        amount: "",
        unit: "",
        originalName: "",
      },
    ]);
  };

  const addCuisineField = () => {
    setCuisinesArray([
      ...cuisinesArray,
      {
        cuisine: "",
      },
    ]);
  };

  const removeIngredientArrayFields = (index: any) => {
    const rows = [...ingredientArray];
    rows.splice(index, 1);
    setIngredientArray(rows);
  };

  const removeCuisineFields = (index: any) => {
    const rows = [...cuisinesArray];
    rows.splice(index, 1);
    setCuisinesArray(rows);
  };

  const onSubmit: any = (data: any) => {
    const cuisinesArray: any = [];
    if (data?.cuisines?.length > 0) {
      data?.cuisines?.map((dd: any) => {
        return cuisinesArray.push(dd?.cuisine);
      });
    } else {
      cuisinesArray.push([]);
    }
    const newObj = {
      ...data,
      imageType: "jpg",
      cuisines: cuisinesArray,
    };
    mutate(newObj);
  };

  const handleNavigate = () => {
    navigate(routesConstant?.recipe?.path);
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-3 flex mb-5">
          <h1 className="text-red-400 text-5xl font-bold">Recipe</h1>
        </div>
        <div>
          <InputComponent
            name="title"
            placeholder="Title"
            register={register("title", { required: true })}
          />

          <textarea
            placeholder="Instructions"
            className="w-full p-2 mb-10 rounded-xl border-solid border border-slate-600 px-4 focus:border-red-400 outline-none"
            {...register("instructions")}
          />
        </div>

        <div className="flex flex-row space-x-4">
          <div className="w-2/4">
            <InputComponent
              className={"w"}
              placeholder="Ready in minute"
              register={register("readyInMinutes")}
            />
          </div>
          <div className="w-2/4">
            <InputComponent
              placeholder="Servings"
              register={register("servings")}
            />
          </div>
        </div>

        <div>
          <InputComponent placeholder="Image" register={register("image")} />
        </div>

        <div className="mb-10">
          <Accordion
            sx={{
              borderRadius: "0.75rem !important",
              border: "1px solid #535d6c",
            }}
            onChange={() => {
              setIsIngredient(!isIngredient);
            }}
            expanded={isIngredient}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Extend Ingredient</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="flex mb-5">
                  <Button onClick={addInputField}>Add</Button>
                </div>

                {ingredientArray?.map((data: any, index: any) => {
                  const { unit, amount, originalName } = data;
                  return (
                    <>
                      <div className="flex flex-row justify-end mb-5">
                        <button
                          className="py-1 px-3 bg-[#acb9a2] hover:bg-[#fb693c] rounded-lg text-white font-bold"
                          onClick={() => removeIngredientArrayFields(index)}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="flex flex-row space-x-4">
                        <div className="w-2/4">
                          <InputComponent
                            placeholder="Amount"
                            name={"amount"}
                            register={register(
                              `extendedIngredients.${index}.amount`
                            )}
                          />
                        </div>
                        <div className="w-2/4">
                          <InputComponent
                            placeholder="Unit"
                            name={"unit"}
                            register={register(
                              `extendedIngredients.${index}.unit`
                            )}
                          />
                        </div>
                      </div>

                      <div>
                        <InputComponent
                          placeholder="Original Name"
                          name={"originalName"}
                          register={register(
                            `extendedIngredients.${index}.originalName`
                          )}
                        />
                      </div>

                      <div className="border-b-[1px] border-red-400 mb-5"></div>
                    </>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion
            sx={{
              borderRadius: "0.75rem !important",
              border: "1px solid #535d6c",
            }}
            onChange={() => {
              setIsCuisine(!isCuisine);
            }}
            expanded={isCuisine}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Cuisines</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="flex mb-5">
                  <Button onClick={addCuisineField}>Add</Button>
                </div>

                {cuisinesArray?.map((data: any, index: any) => {
                  return (
                    <>
                      <div className="flex flex-row justify-end mb-5">
                        <button
                          className="py-1 px-3 bg-[#acb9a2] hover:bg-[#fb693c] rounded-lg text-white font-bold"
                          type="submit"
                          onClick={() => removeCuisineFields(index)}
                        >
                          Delete
                        </button>
                      </div>
                      <div>
                        <InputComponent
                          placeholder="cuisine"
                          name={"cuisine"}
                          register={register(`cuisines.${index}.cuisine`)}
                        />
                      </div>

                      <div className="border-b-[1px] border-red-400 mb-5"></div>
                    </>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex my-5 space-x-5">
          <Button type="submit">Create</Button>
          <Button type="submit" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleNavigate}>
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ManageRecipe;
