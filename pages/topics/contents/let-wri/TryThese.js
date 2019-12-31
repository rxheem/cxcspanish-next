import PDFFIle from "../../../../common/PDFFile.js";

const TryThese = props => (
  <div className="box">
    <h1 className="title is-6">Exercises</h1>
    <p>Try these exercises taken from past papers.</p>

    <br />
    <h1 className="title is-6">Easy</h1>
    <ul className="list-ul">
      <li>
        <PDFFIle title="Easy Exercise 1" />
      </li>
      <li>
        <PDFFIle title="Easy Exercise 2" />
      </li>
      <li>
        <PDFFIle title="Easy Exercise 3" />
      </li>
    </ul>

    <br />
    <h1 className="title is-6">Moderate</h1>
    <ul className="list-ul">
      <li>
        <PDFFIle title="Moderate Exercise 1" />
      </li>
      <li>
        <PDFFIle title="Moderate Exercise 2" />
      </li>
      <li>
        <PDFFIle title="Moderate Exercise 3" />
      </li>
    </ul>

    <br />
    <h1 className="title is-6">Challenging</h1>
    <ul className="list-ul">
      <li>
        <PDFFIle title="Challenging Exercise 1" />
      </li>
      <li>
        <PDFFIle title="Challenging Exercise 2" />
      </li>
      <li>
        <PDFFIle title="Challenging Exercise 3" />
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
