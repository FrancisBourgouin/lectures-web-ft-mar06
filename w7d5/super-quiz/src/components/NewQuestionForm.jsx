// Props: onSubmit()

import useForm from "../hooks/useForm";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;

  const initalValues = {
    question: "",
    answer: "",
  };

  const [formData, handleSubmit, handleChange] = useForm(initalValues, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="question"
        placeholder="Enter the question"
        value={formData.question}
        onChange={handleChange}
      />
      <input
        type="text"
        name="answer"
        placeholder="Enter the answer"
        value={formData.answer}
        onChange={handleChange}
      />
      <button>Add new question</button>
    </form>
  );
}
