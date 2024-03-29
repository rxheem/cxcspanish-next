import FA from "react-fontawesome";

const Quote = props => (
  <div>
    <FA className="has-text-danger" name="quote-left" />
    <span style={{ paddingLeft: "5px" }}> {props.text}</span>
  </div>
);

export default Quote;
