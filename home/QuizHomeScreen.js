import Layout from "../components/Layout";
import Head from "next/head";
import LazyLoad from "react-lazyload";
import Link from "next/link";

const QuizHomeScreen = props => (
  <div className="box">
    <LazyLoad once height="200">
      <img
        className="image"
        style={{ height: "30px", width: "auto", float: "left" }}
        src="https://www.pngtube.com/myfile/detail/357-3571186_lightbulb-flat-icon-01-flat-light-bulb-vector.png"
      />
    </LazyLoad>
    <h1
      className="title is-6"
      style={{ paddingTop: "5px", paddingLeft: "10px", position: "relative" }}
    >
      Take A Quiz
    </h1>

    <p>Test your knowledge and vocabulary with a random and fun quiz.</p>
    <ul
      style={{
        paddingLeft: "20px",
        paddingTop: "20px",
        listStyleType: "disc"
      }}
    >
      <li>
        <Link href="">
          <a>Grammer and Punctuation</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Vocabulary Quiz</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>At the Airport</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a style={{ paddingRight: "5px" }}>Expressions</a>
        </Link>
        <span class="badge badge-success">NEW</span>
      </li>
      <li>
        <a>Verb Quiz</a>
      </li>
    </ul>
    <br />
    <Link href="/">See more...</Link>
  </div>
);

export default QuizHomeScreen;
