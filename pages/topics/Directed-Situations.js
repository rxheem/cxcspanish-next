import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../common/Breadcrumb";
import BreadcrumbItem from "../../common/BreadcrumbItem";

const DirectedSituations = props => (
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
        title="Directed Situations"
        href="/topics/directed-situations"
      />
    </Breadcrumb>
  </Layout>
);

export default DirectedSituations;
