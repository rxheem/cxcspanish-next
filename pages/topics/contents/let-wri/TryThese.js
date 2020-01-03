import PDFFIle from "../../../../common/PDFFile.js";

const TryThese = props => (
  <div className="box">
    <h1 className="title is-6">Exercises</h1>
    <p>Take a look at these exercises we've taken from past papers.</p>

    <br />
    <ul className="list-ul">
      <li>
        <PDFFIle href="" title="Exercise 1" />
      </li>
      <li>
        <PDFFIle title="Exercise 2" />
      </li>
      <li>
        <PDFFIle title="Exercise 3" />
      </li>
      <li>
        <PDFFIle title="Exercise 4" />
      </li>
    </ul>

    <style>
      {`
      .list-ul {
        padding-left: 20px;
        margin-top: -10px;
      }

      .list-ul li {
        padding-bottom: 10px;
      }
      `}
    </style>
  </div>
);

export default TryThese;
