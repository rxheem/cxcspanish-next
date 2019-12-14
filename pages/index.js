import Layout from "../components/Layout";
import ReactGA from "react-ga";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";
import LazyLoad from "react-lazyload";
import uuidv4 from "uuid/v4";
import Link from "next/link";

// Home Viwes
import QuizHomeScreen from "../home/QuizHomeScreen";
import Feed from "../home/Feed";
import WordOfTheDay from "../home/WordOfTheDay";
import AdvancedLearning from "../home/AdvancedLearning";
import Reviews from "../home/Reviews";
import JoinMailingList from "../home/JoinMailingList";
import MorePastPapers from "../home/MorePastPapers";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>CXC Spanish | Guide, Past Papers and Exercises</title>
          <meta
            name="description"
            content="CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
          />
          <meta
            name="keywords"
            content="cxc,csec spanish,spanish jamaica,cxc spanish,cxc spansih jamaica,espanol jamaica, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, pass csec spanish exam, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, directed situations, free response,present tense,imperfect tense,ser vs estar,subjunctive mood,subjunctive tense spanish,reading comprehension,contextual dialogue, contextual announcements, poster,spanish,pass"
          />
          <script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js"></script>
          {/* Facebook meta tags */}
          <meta
            name="og:title"
            content="CXC Spanish | Guide, Past Papers and Exercises"
          />
          <meta
            name="og:description"
            content="CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
          />
        </Head>

        <Breadcrumb>
          <BreadcrumbItem />
        </Breadcrumb>

        <div className="columns">
          <div className="column">
            <Feed />
          </div>

          <div className="column is-one-third">
            <QuizHomeScreen />
          </div>
        </div>

        <Reviews />
        <br />
        <MorePastPapers />
      </Layout>
    );
  }
}

export default Index;
