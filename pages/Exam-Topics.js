import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const ExamTopics = props => (
  <Layout>
    <Head>
      <title>Exam Topics | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Take your Spanish to the next level with our detailed lesson guides, completed with examples and practice questions."
      />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="Guide | CXC Spanish Guide" />
      <meta name="og:url" content="" />
      <meta
        name="og:description"
        content="Take your Spanish to the next level with our detailed lesson guides, completed with examples and practice questions."
      />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Exam Topics" href="/exam-topics" />
    </Breadcrumb>

    <h1 class="title is-4">Exam Topics</h1>
    <p>This is Exam Topics</p>
  </Layout>
);

export default ExamTopics;
