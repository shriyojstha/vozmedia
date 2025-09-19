const Loading = () => {
  return (
    <div className="loading">
      <div
        className="spinner-border m-5 "
        role="status"
        style={{ width: "5em", height: "5em", margin: "50% 0" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
