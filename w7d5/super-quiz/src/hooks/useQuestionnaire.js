import questionData from "../data/questionData";
import useWow from "./useWow";
import { useState } from "react";

export default function useQuestionnaire() {
  const [questions, setQuestions] = useState(questionData);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const { sayWow } = useWow();

  const currentQuestionObj = questions[questionCount];

  const generateNextQuestionId = () => {
    const amountOfQuestions = Object.keys(questions).length;
    const newId = Math.floor(Math.random() * amountOfQuestions);

    return newId;
  };

  const validateAnswer = (formData) => {
    const { answer } = formData;
    if (answer === currentQuestionObj.answer) {
      console.log("good job");
      sayWow();
      setScore(score + 1);
    } else {
      console.log("bad job.");
    }
    const amountOfQuestions = Object.keys(questions).length;
    const nextId = (questionCount + 1) % amountOfQuestions;
    setQuestionCount(nextId);
  };

  const addNewQuestion = (formData) => {
    const { question, answer } = formData;
    const id = Object.keys(questions).length;
    const newQuestion = { question, answer, id };

    if (question && answer) {
      setQuestions({ ...questions, [id]: newQuestion });
    }
  };

  return { currentQuestionObj, validateAnswer, addNewQuestion, questionCount, score };
}
