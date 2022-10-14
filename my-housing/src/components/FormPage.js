import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  elements: [
    {
      name: "smoke",
      title: "Do you smoke? (orange)",
      type: "dropdown",
      choices: ["Yes", "No"],
      isRequired: true,

    },
    {
      name: "pets",
      title: "Do you have pets?",
      type: "dropdown",
      choices: ["Yes", "No"],
      isRequired: true,
    }, 
    {
      name: "major",
      title: "What is your major?",
      type: "text",
      isRequired: true,
    }, 
    {
      name: "hobbies",
      title: "Write down 5 hobbies/interests you would like to share?",
      type: "text",
      isRequired: true,
    }, 
    {
      name: "other",
      title: "Is there anything else you would like people to know?",
      type: "text",
      isRequired: false
    }
  ]
};

function FormPage() {
  const survey = new Model(surveyJson);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default FormPage;