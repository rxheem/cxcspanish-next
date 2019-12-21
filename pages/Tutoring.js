import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

// All other Header Imports
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

class Tutoring extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Head>
          <title>Tutoring | CXC Spanish Guide</title>
          <meta name="description" content="" />
          <meta name="keywords" content="your, tags" />

          {/* Facebook meta tags */}
          <meta name="og:title" content="Tutoring | CXC Spanish Guide" />
          <meta name="og:url" content="" />
          <meta name="og:description" content="" />
        </Head>

        <Breadcrumb>
          <BreadcrumbItem title="Tutoring" href="/tutoring" />
        </Breadcrumb>

        <div>
          <h1 className="title is-4">Tutoring</h1>

          <div className="columns">
            <div className="column">
              <div className="box"></div>
            </div>
            <div className="column is-one-third">
              <div className="box"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Tutoring;
