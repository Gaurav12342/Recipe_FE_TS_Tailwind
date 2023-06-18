import { FC, useState } from "react";
import InputComponent from "../component/InputComponent";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "../component/Button";

const ManageRecipe: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>Create Recipe</h1>
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
            setIsOpen(!isOpen);
          }}
          expanded={isOpen}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Extend Ingredient</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="flex mb-5">
                <Button onClick={() => {}}>Add</Button>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="w-2/4">
                  <InputComponent
                    className={"w"}
                    placeholder="Amount"
                    name={"amount"}
                  />
                </div>
                <div className="w-2/4">
                  <InputComponent placeholder="Unit" name={"unit"} />
                </div>
              </div>

              <div>
                <InputComponent
                  placeholder="Original Name"
                  name={"originalName"}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ManageRecipe;
