import FA from "react-fontawesome";

const PDFFIle = props => (
  <div>
    <FA name="file" style={{ color: "#f00" }} />
    <span style={{ paddingLeft: "10px" }}>{props.title}</span>
  </div>
);

export default PDFFIle;
