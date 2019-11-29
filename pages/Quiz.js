import Layout from "../components/Layout";
import Head from "next/head";

const eTest = props => (
  <Layout>
    <Head>
      <title>Take a Quiz | Guide, Past Papers and Exercises</title>
      <meta name="description" content="" />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>
    <p>This is quiz</p>
  </Layout>
);

export default eTest;
