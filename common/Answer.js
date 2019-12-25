import FA from "react-fontawesome";

const Answer = props => (
  <div>
    <FA className="has-text-primary" name="angle-double-right" />
    <span style={{ paddingLeft: "5px" }}> {props.text}</span>
  </div>
);

export default Answer;
