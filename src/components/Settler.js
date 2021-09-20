import "./Settler.css";

export const Settler = ({ settler, setJob }) => {
  const { id, name, job } = settler;

  return (
    <article className="settler">
      <span>{name}</span>
      <span>{job?.toLowerCase()}</span>
      <span />
      <button type="button" onClick={() => setJob(id, "WOODCUT")}>
        Woodcut
      </button>
      <button type="button" onClick={() => setJob(id, "GATHER")}>
        Gathering
      </button>
    </article>
  );
};
