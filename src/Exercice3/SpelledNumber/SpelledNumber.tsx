import React from "react";
import { minmax } from "../../util/minmax";

const SPELLED_NUMBERS = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

interface Props {
  n: number;
}

export const SpelledNumber: React.FunctionComponent<Props> = ({ n }) => {
  return <span>{SPELLED_NUMBERS[minmax(0, 9)(n)]}</span>;
};
