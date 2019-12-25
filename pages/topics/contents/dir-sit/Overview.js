import FA from "react-fontawesome";
import Quote from "../../../../common/Quote";
import Answer from "../../../../common/Answer";

const Overview = props => (
  <div>
    <p>
      Directed Situations are short situations/ scenarios in which you are
      required to give a one sentence response in Spanish.
    </p>
    <br />
    <p>For example, you are given the following scenario:</p>
    <br />
    <Quote text="Your teacher is taking up a new job overseas. Write him/ her a farewell note and express good wishes." />

    <br />
    <p>In this example, you are required to </p>
    <ul
      style={{
        paddingTop: "20px",
        paddingLeft: "25px",
        listStyleType: "disc"
      }}
    >
      <li>Acknowledge that your teacher is leaving, and</li>
      <li>Express good wishes.</li>
    </ul>

    <br />
    <h1 className="has-text-danger title is-6">Suggested Responses</h1>

    <Answer text="Buenas suerte con tu nuevo trabajo y yo espero que usted haga bien." />
    <Answer text="Felicidades en su nuevo trabajo." />
    <Answer text="..." />
    <Answer text="..." />
  </div>
);

export default Overview;
