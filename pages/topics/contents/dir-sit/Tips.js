import FA from "react-fontawesome";

const Tips = props => (
  <div>
    <p>Here are a few tips on how to approach these questions</p>

    <ul style={{ paddingTop: "20px" }}>
      <li style={{ paddingBottom: "10px" }}>
        <FA
          name="check-circle"
          style={{ color: "green", paddingRight: "10px" }}
        />
        Keep your responses simple
      </li>
    </ul>
  </div>
);

export default Tips;
