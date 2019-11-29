import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const FAQ = props => (
  <Layout>
    <Head>
      <title>
        Frequently Asked Quesiton | Guide, Past Papers and Exercises
      </title>
      <meta
        name="description"
        content="Here we answer any question you may have about CXC Spansih Online. If you don't see your question, send us an inquiry at hola@cxcspanish.com."
      />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta
        name="og:title"
        content="Frequently Asked Quesiton | Guide, Past Papers and Exercises"
      />
      <meta name="og:url" content="" />
      <meta
        name="og:description"
        content="Here we answer any question you may have about CXC Spansih Online. If you don't see your question, send us an inquiry at hola@cxcspanish.com."
      />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Frequently Asked Questions" href="/FAQ" />
    </Breadcrumb>

    <p>This is FAQ</p>
  </Layout>
);

export default FAQ;
