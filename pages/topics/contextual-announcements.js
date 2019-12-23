import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../common/Breadcrumb";
import BreadcrumbItem from "../../common/BreadcrumbItem";

class ContextualAnnouncement extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Head>
          <title>Contextual Announcement | CXC Spanish Guide</title>
          <meta
            name="description"
            content="CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
          />
          <meta
            name="keywords"
            content="cxc,csec spanish,spanish jamaica,contact,cxc spanish,cxc spansih jamaica,espanol jamaica, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, pass csec spanish exam, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, directed situations, free response,present tense,imperfect tense,ser vs estar,subjunctive mood,subjunctive tense spanish,reading comprehension,contextual dialogue, contextual announcements, poster,spanish,pass"
          />

          {/* Facebook meta tags */}
          <meta name="og:title" content="" />
          <meta name="og:url" content="" />
          <meta name="og:description" content="" />
        </Head>

        <Breadcrumb>
          <BreadcrumbItem title="Exam Topics" href="/exam-topics" />
          <BreadcrumbItem
            title="Contextual Announcement"
            href="/topics/contextual-announcements"
          />
        </Breadcrumb>

        <h1 className="title is-5">Contextual Announcements</h1>

        <div className="columns">
          <div className="column is-one-third">
            <div className=""></div>
          </div>
          <div className="column">
            {/* Tabs */}
            <div className="tabs">
              <ul>
                <li class="liOverview is-active">
                  <a className="btnOverview">Overview</a>
                </li>
                <li className="liExamples">
                  <a className="btnExamples">Examples</a>
                </li>
                <li className="liExercises">
                  <a className="btnExercises">Exercises</a>
                </li>
                <li className="liResources">
                  <a className="btnResources">Resources</a>
                </li>
              </ul>
            </div>

            {/* Section */}
            <section className="content">
              <div id="overview"></div>
              <div id="examples"></div>
              <div id="exercises"></div>
              <div id="resources"></div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
export default ContextualAnnouncement;
