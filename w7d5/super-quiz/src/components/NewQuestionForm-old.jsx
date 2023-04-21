// Props: onSubmit()

import { useState } from "react";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(question, answer);
    setAnswer("");
    setQuestion("");
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Enter the question"
        value={question}
        onChange={handleQuestionChange}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter the answer"
        value={answer}
        onChange={handleAnswerChange}
      />
      <button>Add new question</button>
    </form>
  );
}
