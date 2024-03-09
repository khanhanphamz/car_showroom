import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnStyles?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
