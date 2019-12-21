import Layout from "../components/Layout";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";
import DropItem from "../common/DropItem.js";
import uuidv4 from "uuid";

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

    <div className="columns">
      <div className="column">
        <h1 className="title is-5">Frequently Asked Questions</h1>
        <div className="box">
          <span>
            Here we answer some of our most frequently asked questions. If your
            question isn't asnwered, or you have additional queries, please send
            us an email at{" "}
            <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a> or
            <a href="mailto:holacxcspanish@gmail.com">
              {" "}
              holacxcspanish@gmail.com
            </a>
            .
          </span>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="box">
          <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
            <DropItem id={uuidv4()} question="" answer="" />
            <DropItem id={uuidv4()} question="" answer="" />
            <DropItem id={uuidv4()} question="" answer="" />
            <DropItem id={uuidv4()} question="" answer="" />
            <DropItem id={uuidv4()} question="" answer="" />
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default FAQ;
