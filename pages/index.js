import Layout from "../components/Layout";
import ReactGA from "react-ga";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";
import LazyLoad from "react-lazyload";
import uuidv4 from "uuid/v4";
import Link from "next/link";
import Swal from "sweetalert2";

// Home Viwes
import PastPapersPreview from "../home/PastPapersPreview";
import TopUpVocabulary from "../home/TopUpVocabulary";
import HomeCarousel from "../home/HomeCarousel";

const Index = props => (
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
    <HomeCarousel />
    <PastPapersPreview />
  </Layout>
);

Index.getInitialProps = () => {
  return {};
};

export default Index;
