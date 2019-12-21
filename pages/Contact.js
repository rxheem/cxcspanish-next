import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../common/Breadcrumb";
import BreadcrumbItem from "../common/BreadcrumbItem";

const Contact = props => (
  <Layout>
    <Head>
      <title>Contact | CXC Spanish Guide</title>
      <meta
        name="description"
        content="CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
      />
      <meta
        name="keywords"
        content="cxc,csec spanish,spanish jamaica,contact,cxc spanish,cxc spansih jamaica,espanol jamaica, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, pass csec spanish exam, caribbean examination counsil,caribbean examination counsel, español, espanol, study guide, study, directed situations, free response,present tense,imperfect tense,ser vs estar,subjunctive mood,subjunctive tense spanish,reading comprehension,contextual dialogue, contextual announcements, poster,spanish,pass"
      />

      {/* Facebook meta tags */}
      <meta name="og:title" content="" />
      <meta name="og:url" content="" />
      <meta name="og:description" content="" />
    </Head>

    <Breadcrumb>
      <BreadcrumbItem title="Contact" href="/contact" />
    </Breadcrumb>

    <h1 className="title is-5">Contact Us</h1>

    <div className="columns">
      <div className="column">
        <div className="box">
          <p>
            Whether you're a beginner or just looking for some refreshers, we
            want to express gratitude for letting us be a part of your journey.
          </p>

          <br />
          <p>
            You can read our{" "}
            <span className="has-text-dark">
              <Link href="/FAQ">Frequently Aksed Questions </Link>
            </span>
            to see if your question has already been answered.
          </p>
        </div>
      </div>
      <div className="column is-one-third">...</div>
    </div>
  </Layout>
);

export default Contact;
