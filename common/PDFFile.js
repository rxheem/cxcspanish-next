import FA from "react-fontawesome";

const PDFFIle = props => (
  <a href={props.href} download>
    <FA name="file-pdf" style={{ color: "#f00" }} />
    <span style={{ paddingLeft: "10px" }}>{props.title}</span>
  </a>
);

export default PDFFIle;
