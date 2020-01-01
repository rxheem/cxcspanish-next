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

function Index({}) {
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
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <figure class="image is-128x128">
            <img
              src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482630_4.jpg"
              alt=""
            />
          </figure>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">...</div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">...</div>
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">...</div>
      </div>
      <br /> <br /> <br />
      <PastPapersPreview />
    </Layout>
  );
}

Index.getInitialProps = () => {
  return {};
};

export default Index;
