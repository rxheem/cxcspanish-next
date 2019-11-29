import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

// All other Header Imports
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const Tutoring = props => (
  <Layout>
    <Head>
      <title>Tutoring | CXC Spanish Guide</title>
      <meta name="description" content="" />
      <meta name="keywords" content="your, tags" />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Tutoring" href="/tutoring" />
    </Breadcrumb>

    <div className="columns">
      <div className="column">
        <div>
          <h1 className="title is-4">Tutoring</h1>
        </div>
      </div>

      <div className="column is-one-third">
        <div className="box">
          <h1 className="title is-6">Have more questions?</h1>

          <p>
            Read our <Link href="/faq">FAQ</Link> or send us an enquiry at{" "}
            <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Tutoring;
