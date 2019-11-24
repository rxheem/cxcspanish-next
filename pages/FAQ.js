import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const FAQ = props => (
  <Layout>
    <Head>
      <title>CXC Spanish | Guide, Past Papers and Exercises</title>
      <meta name="description" content="" />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Frequently Asked Questions" href="/FAQ" />
    </Breadcrumb>

    <p>This is FAQ</p>
  </Layout>
);

export default FAQ;
