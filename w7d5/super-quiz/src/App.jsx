import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import NewQuestionForm from "./components/NewQuestionForm";
import Score from "./components/Score";

import "./App.css";
import useQuestionnaire from "./hooks/useQuestionnaire";

function App() {
  const { currentQuestionObj, validateAnswer, addNewQuestion, questionCount, score } =
    useQuestionnaire();

  return (
    <div className="App">
      <Header />
      <QuestionForm question={currentQuestionObj.question} onSubmit={validateAnswer} />
      <NewQuestionForm onSubmit={addNewQuestion} />
      <Score score={score} questionCount={questionCount} />
    </div>
  );
}

export default App;
