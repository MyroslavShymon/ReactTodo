import "./style.css";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: ".5rem" }}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export default Loader;
