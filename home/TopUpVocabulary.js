import Link from "next/link";

const TopUpVocabulary = props => (
  <div className="box is-danger">
    <h1 className="title is-6 has-text-danger">Top Up Your Vocabulary</h1>
    <p>
      Train and test your vocabulary with our fun and interactive exercises.
    </p>

    <br />
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
      <li style={{ paddingBottom: "10px" }}>
        <Link href="">Adjective Quiz</Link>
      </li>
      <li style={{ paddingBottom: "10px" }}>
        <Link href="">At the Airport</Link>
      </li>
      <li style={{ paddingBottom: "10px" }}>
        <Link href="">Future Tense Exercise</Link>
      </li>
      <li style={{ paddingBottom: "10px" }}>
        <Link href="">Travelling</Link>
      </li>
      <li style={{ paddingBottom: "10px" }}>
        <Link href="">Subjunctive Mood Quiz</Link>
      </li>
    </ul>

    <style>{`
        a {
          text-decoration: none!important;
        }

      `}</style>
  </div>
);

export default TopUpVocabulary;
