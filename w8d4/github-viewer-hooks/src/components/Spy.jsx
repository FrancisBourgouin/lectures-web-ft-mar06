import { useEffect, useState } from "react";

export default function Spy(props) {
  const { commits } = props;
  const [oldCommits, setOldCommits] = useState(commits);

  useEffect(() => {
    const report = (event) =>
      console.log(`User clicked at position ${event.clientX}, ${event.clientY}`);
    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  useEffect(() => {
    if (commits && oldCommits) {
      console.log(Math.abs(oldCommits.length - commits.length));
    }
    setOldCommits(commits);
  }, [commits]);

  return <p>🕵️</p>;
}
