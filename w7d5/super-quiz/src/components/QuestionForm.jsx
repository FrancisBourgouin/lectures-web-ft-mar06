// Props: question, onSubmit()

import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { question, onSubmit } = props;
  const initalValues = {
    answer: "",
  };
  const [formData, handleSubmit, handleChange] = useForm(initalValues, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <p>{question}</p>
      <input
        type="text"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
        placeholder="Enter your answer"
      />
      <button>Check your answer</button>
    </form>
  );
}
