import React from "react";
import Layout from "../_lib/Layout";
import Number from "./Number";
import NumberPicker from "./NumberPicker";
import SpelledNumber from "./SpelledNumber";

interface Props {}

export const Exercice3: React.FunctionComponent<Props> = () => {
  return (
    <Layout title='Exercice 3: composition using the "render props" pattern'>
      <NumberPicker renderNumber={(index:number) => <SpelledNumber index={index}/>}/>
    </Layout>
  );
};
