import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../common/Breadcrumb";
import BreadcrumbItem from "../../common/BreadcrumbItem";
import FA from "react-fontawesome";
import YouTube from "react-youtube";

import Quote from "../../common/Quote";

// All contents
import Overview from "./contents/dir-sit/Overview";
import TryThese from "./contents/dir-sit/TryThese";

class DirectedSituations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Runs when the component finishes mounting
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Head>
          <title>Directed Situations | CXC Spanish Guide</title>
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
            title={
              <span>
                <span class="is-hidden-mobile">Directed Situations</span>
                <span class="is-hidden-desktop">Directed Sit..</span>
              </span>
            }
            href="/topics/directed-situations"
          />
        </Breadcrumb>

        <h1 className="title is-5">Directed Situations</h1>

        <div className="columns">
          <div className="column">
            <div className="box">
              <Overview />
            </div>
          </div>
          <div className="column is-one-third">
            <TryThese />
          </div>
        </div>
      </Layout>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default DirectedSituations;
