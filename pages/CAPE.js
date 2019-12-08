import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const CAPE = props => (
  <Layout>
    <Head>
      <title>CAPE | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Take your Spanish to the next level with our detailed lesson guides, completed with examples and practice questions."
      />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="CAPE Spanish | CXC Spanish Guide" />
      <meta name="og:url" content="" />
      <meta
        name="og:description"
        content="Take your Spanish to the next level with our detailed lesson guides, completed with examples and practice questions."
      />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="CAPE" href="/CAPE" />
    </Breadcrumb>

    <h1 class="title is-4">CAPE Spanish</h1>
    <p>This is CAPE Spanish</p>
  </Layout>
);

export default CAPE;
