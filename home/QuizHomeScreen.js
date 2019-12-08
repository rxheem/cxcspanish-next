import Layout from "../components/Layout";
import Head from "next/head";
import LazyLoad from "react-lazyload";
import Link from "next/link";

const QuizHomeScreen = props => (
  <div className="box">
    <h1 className="title is-6">
      <LazyLoad once height="200">
        <i class="fas fa-lightbulb"></i>
      </LazyLoad>
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
