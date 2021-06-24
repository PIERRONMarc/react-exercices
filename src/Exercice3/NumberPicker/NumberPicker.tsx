import React from "react";
import NumberInput from "./NumberInput";
import Number from "../Number";

interface Props {
  renderNumber(n: number): React.ReactElement;
}

export const NumberPicker: React.FunctionComponent<Props> = (props) => {
  const [index, setIndex] = React.useState<number>(0);

  return (
    <div>
      <div className="standard-margin">
        <NumberInput onChange={setIndex} />
      </div>
      <div className="standard-margin">
        Your input: {props.renderNumber(index)}
      </div>
    </div>
  );
};
