import FA from "react-fontawesome";
import uuidv4 from "uuid";

const Answer = props => (
  <div id={uuidv4()} style={{ paddingBottom: "20px" }}>
    <FA className="has-text-primary" name="angle-double-right" />
    <span className="has-text-black" style={{ paddingLeft: "5px" }}>
      {props.text}
    </span>
    <p style={{ paddingLeft: "18px" }} className="has-text-grey">
      {props.translated}

      <a href={props.href} target="_blank">
        <FA style={{ paddingLeft: "10px" }} name="external-link" />
      </a>
    </p>
  </div>
);

export default Answer;
