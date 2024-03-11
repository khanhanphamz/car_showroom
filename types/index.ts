import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnStyles?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
}
