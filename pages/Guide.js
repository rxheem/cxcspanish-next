import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const Guide = props => (
  <Layout>
    <Head>
      <title>Guide | CXC Spanish Guide</title>
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
      <BreadcrumbItem title="Guide" href="/guide" />
    </Breadcrumb>

    <h1 class="title is-4">Guides</h1>
    <p>
      Our guides will help you take your Spanish to the next level, with
      completed with examples and practice questions.
    </p>
  </Layout>
);

export default Guide;
