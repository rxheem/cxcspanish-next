import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";
import FA from "react-fontawesome";

const ExamTopics = props => (
  <Layout>
    <Head>
      <title>Exam Topics | CXC Spanish Guide</title>
      <meta
        name="description"
        content="A complete deep dive into all the sections on the CSEC Spanish exams, including definitions, examples and free downloadable handouts and exercise booklets."
      />
      <meta
        name="keywords"
        content="cxc, csec spanish, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, pass csec spanish exam, tags"
      />

      {/* Facebook meta tags */}
      <meta name="og:title" content="Exam Topics | CXC Spanish Guide" />
      <meta name="og:url" content="" />
      <meta
        name="og:description"
        content="A complete deep dive into all the sections on the CSEC Spanish exams, including definitions, examples and free downloadable handouts and exercise booklets."
      />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Exam Topics" href="/exam-topics" />
    </Breadcrumb>

    <h1 class="title is-4">Exam Topics</h1>

    <div className="box">
      <p>
        The syllabus topics are designed to test candidates' ability to
        understanding both written and spoken Spanish, and their ability to
        respond to a wide range of situations/ scenarios and reading passages in
        Spanish. in this section, we will take a look at all the sections on the
        Paper 1 and 2 CSEC exam.
      </p>

      <br />

      <div className="columns">
        <div className="column">
          <h1 className="title is-6 has-text-danger">Paper II Layout</h1>

          <div className="columns">
            <div className="column">
              <h1 className="title is-6">Section I</h1>

              <ul>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "coral" }}
                  />
                  <a href="/topics/directed-situations">Directed Situations</a>
                </li>
              </ul>

              <br />
              <br className="is-hidden-mobile" />
              <h1 className="title is-6">Section II</h1>

              <ul>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a href="/topics/letter-writing">Letter Writing</a>
                </li>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a href="/topics/composition">Composition</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h1 className="title is-6">Section III</h1>
              <ul>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a href="/topics/contextual-announcements">
                    Contextual Announcements
                  </a>
                </li>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a href="/topics/contextual-dialogue">Contextual Dialogue</a>
                </li>
              </ul>
              <br />
              <h1 className="title is-6">Section IV</h1>
              <ul>
                <li>
                  <span>
                    <FA
                      name="caret-right"
                      style={{ paddingRight: "8px", color: "" }}
                    />
                    <a href="/topics/reading-comprehension">
                      Reading Comprehension
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <FA
                      name="caret-right"
                      style={{ paddingRight: "8px", color: "" }}
                    />
                    <a>Directed Situations</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <h1 className="title is-6 has-text-danger">
                Paper I - Multiple Choice
              </h1>

              <ul>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a>Listening Comprehension</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h1 className="title is-6 has-text-danger">Paper III - Orals</h1>

              <ul>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a>Response to Situations</a>
                </li>

                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a>Conversation</a>
                </li>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <a>Reading Passage</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="box">
        <p>
          The syllabus has been carefully crafted to develop students'
          listening, writing and speaking skills. It aims to:
        </p>

        <ul
          style={{
            paddingTop: "20px",
            paddingLeft: "20px",
            listStyleType: "disc"
          }}
        >
          <li style={{ paddingBottom: "15px" }}>
            Develop fundamental language skills to communicate effectively in
            Spanish in everyday situations;
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Develop the ability to read, write and respond to information based
            on their social environment in an acceptable manner;
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Develop appreciation for the language and culture of French and
            Spanish speaking people of the region;
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Develop the foundation for further study of a foreign language;
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Increase the potential for career opportunities;
          </li>
          <li style={{ paddingBottom: "15px" }}>
            Encourage a positive attitude toward people of different cultures.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default ExamTopics;
