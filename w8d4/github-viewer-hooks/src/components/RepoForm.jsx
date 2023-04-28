import useForm from "../hooks/useForm";

export default function RepoForm(props) {
  const initialValues = {
    owner: "",
    repo: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <form className="RepoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="owner"
        onChange={handleChange}
        value={formData.owner}
        placeholder="Enter owner"
      />
      <input
        type="text"
        name="repo"
        onChange={handleChange}
        value={formData.repo}
        placeholder="Enter repo"
      />
      <button>Fetch the commits!</button>
    </form>
  );
}
