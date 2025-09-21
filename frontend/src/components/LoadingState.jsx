const Loading = () => {
  return (
    <div className="loading">
      <div
        className="spinner-border ml-120 flex"
        role="status"
        style={{
          width: "5em",
          height: "5em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
