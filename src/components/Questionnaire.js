import React from "react";
import PersonalDetails from './PersonalDetails'
import Questions  from "./Questions";

const Questionnaire = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <PersonalDetails />
      <Questions />
    </div>
  );
};
export default Questionnaire;
