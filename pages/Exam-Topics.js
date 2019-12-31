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
                  <Link>Directed Situations</Link>
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
                  <Link>Letter Writing</Link>
                </li>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <Link>Composition</Link>
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
                  <Link>Contextual Announcement</Link>
                </li>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <Link>Contextual Dialogue</Link>
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
                    <Link>Reading Comprehension</Link>
                  </span>
                </li>
                <li>
                  <span>
                    <FA
                      name="caret-right"
                      style={{ paddingRight: "8px", color: "" }}
                    />
                    <Link>Directed Situations</Link>
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
                  <Link>Listening Comprehension</Link>
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
                  <Link>Response to Situations</Link>
                </li>

                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <Link>Conversation</Link>
                </li>
                <li>
                  <FA
                    name="caret-right"
                    style={{ paddingRight: "8px", color: "" }}
                  />
                  <Link>Reading Passage</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ExamTopics;
