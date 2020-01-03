import PDFFIle from "../../../../common/PDFFile.js";

const UsefulPhrases = props => (
  <div className="box">
    <h1 className="title is-6">Useful Essentials</h1>
    <p>
      These phrases and vocabulary really come in handy when composing you
      letters. Take a read!
    </p>

    <br />
    <ul className="list-ul">
      <li>
        <PDFFIle href="" title="Common Spanish Phrases" />
      </li>
      <li>
        <PDFFIle href="" title="Spanish Adjectives" />
      </li>
      <li>
        <PDFFIle title="Spanish Prepositions" />
      </li>
      <li>
        <PDFFIle title="Common Spanish Adverbs" />
      </li>
      <li>
        <PDFFIle title="Verb Conjugation Refresher" />
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

export default UsefulPhrases;
