import { FC, useState } from "react";
import InputComponent from "../component/InputComponent";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../component/Button";

const ManageRecipe: FC = () => {
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

  const handleIngredientChange = (index: any, evnt: any) => {
    const { name, value } = evnt.target;
    const list: any = [...ingredientArray];
    list[index][name] = value;
  };

  const handleCuisineChange = (index: any, evnt: any) => {
    const { name, value } = evnt.target;
    const list: any = [...cuisinesArray];
    list[index][name] = value;
  };

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("cuisinesArray =>", cuisinesArray);
  };

  return (
    <div>
      <div className="py-3 flex mb-5">
        <h1 className="text-red-400 text-5xl font-bold">Recipe</h1>
      </div>
      <div>
        <InputComponent placeholder="Title" name={"title"} />
        <textarea
          placeholder="Description"
          name={"description"}
          className="w-full p-2 mb-10 rounded-xl border-solid border border-slate-600 px-4 focus:border-red-400 outline-none"
        />
      </div>

      <div className="flex flex-row space-x-4">
        <div className="w-2/4">
          <InputComponent
            className={"w"}
            placeholder="Ready in minute"
            name={"readyInMinutes"}
          />
        </div>
        <div className="w-2/4">
          <InputComponent placeholder="Servings" name={"servings"} />
        </div>
      </div>

      <div>
        <InputComponent placeholder="Image" name={"image"} />
      </div>

      <div>
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
                    <div>
                      <button
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
                          handleChangeEvent={(evnt: any) =>
                            handleIngredientChange(index, evnt)
                          }
                          value={amount}
                        />
                      </div>
                      <div className="w-2/4">
                        <InputComponent
                          placeholder="Unit"
                          name={"unit"}
                          handleChangeEvent={(evnt: any) =>
                            handleIngredientChange(index, evnt)
                          }
                          value={unit}
                        />
                      </div>
                    </div>

                    <div>
                      <InputComponent
                        placeholder="Original Name"
                        name={"originalName"}
                        handleChangeEvent={(evnt: any) =>
                          handleIngredientChange(index, evnt)
                        }
                        value={originalName}
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
                    <div>
                      <button
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
                        handleChangeEvent={(evnt: any) =>
                          handleCuisineChange(index, evnt)
                        }
                        value={data?.cuisine}
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

      <div className="flex my-5">
        <Button onClick={handleSubmit}>Create</Button>
      </div>
    </div>
  );
};

export default ManageRecipe;
