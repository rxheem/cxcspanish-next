import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

// components
import GuideSnippet from "../common/GuideSnippet";

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
    <div className="columns">
      <div className="column">
        <div className="box"></div>
      </div>
      <div className="column is-one-third">
        <div className="box"></div>
      </div>
    </div>
  </Layout>
);

export default Guide;
