import "./ProgressBar.css";

export const ProgressBar = ({ duration }) => {
  return (
    <div className="progress-bar">
      <div style={{ animationDuration: duration + "ms" }} />
    </div>
  );
};
