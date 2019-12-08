import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const MailingList = props => (
  <Layout>
    <Head>
      <title>Mailing List | CXC Spanish Guide</title>
      <meta
        name="description"
        content="Take your Spanish to the next level with our detailed lesson guides, completed with examples and practice questions."
      />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="Mailing List | CXC Spanish Guide" />
      <meta name="og:url" content="" />
      <meta
        name="og:description"
        content="Take your Spanish to the next level with our detailed lesson guides, completed with examples and practice questions."
      />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Mailing List" href="/mailing-list" />
    </Breadcrumb>

    <h1 class="title is-4">Our Mailing List</h1>
    <p>This is mailing list</p>
  </Layout>
);

export default MailingList;
