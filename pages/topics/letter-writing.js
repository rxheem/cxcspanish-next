import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../common/Breadcrumb";
import BreadcrumbItem from "../../common/BreadcrumbItem";
import $ from "jquery";
import FA from "react-fontawesome";

// All contents
import Overview from "./contents/let-wri/Overview";
import TryThese from "./contents/let-wri/TryThese";
import SampleOne from "./contents/let-wri/SampleOne";
import SampleTwo from "./contents/let-wri/SampleTwo";
import SampleThree from "./contents/let-wri/SampleThree";
import UsefulPhrases from "./contents/let-wri/UsefulPhrases";
import WordBank from "./contents/let-wri/WordBank";

class LetterWriting extends React.Component {
  componentDidMount() {
    function removeActiveClass() {
      $(".liOverview").removeClass("is-active");
      $(".liTips").removeClass("is-active");
      $(".liSample1").removeClass("is-active");
      $(".liSample2").removeClass("is-active");
      $(".liSample3").removeClass("is-active");
    }

    // Function to hide all the content
    function hideAllContent() {
      $("#overview").hide();
      $("#tips").hide();
      $("#sample1").hide();
      $("#sample2").hide();
      $("#sample3").hide();
    }

    // On click event for overview
    $(".btnOverview").click(function() {
      removeActiveClass();
      hideAllContent();

      $("#overview").show();
      $(".liOverview").addClass("is-active");
    });

    // On click event for Tips
    $(".btnTips").click(function() {
      removeActiveClass();
      hideAllContent();

      $("#tips").show();
      $(".liTips").addClass("is-active");
    });

    // On click event for Sample 1
    $(".btnSample1").click(function() {
      removeActiveClass();
      hideAllContent();

      $("#sample1").show();
      $(".liSample1").addClass("is-active");
    });

    // On click event for Sample 1
    $(".btnSample2").click(function() {
      removeActiveClass();
      hideAllContent();

      $("#sample2").show();
      $(".liSample2").addClass("is-active");
    });

    // On click event for Sample 1
    $(".btnSample3").click(function() {
      removeActiveClass();
      hideAllContent();

      $("#sample3").show();
      $(".liSample3").addClass("is-active");
    });

    // Triggers click on Overview tabs
    $(".btnOverview").trigger("click");
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Letter Writing | CXC Spanish Guide</title>
          <meta name="description" content="" />
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
          <BreadcrumbItem title="Exam Topics" href="/exam-topics" />
          <BreadcrumbItem
            title="Letter Writing"
            href="/topics/letter-writing"
          />
        </Breadcrumb>

        <h1 className="title is-5">Letter Writing</h1>

        <div className="columns">
          <div className="column">
            <nav className="tabs">
              <ul>
                <li class="liOverview is-active">
                  <a className="btnOverview">Overview</a>
                </li>

                <li className="liSample1">
                  <a className="btnSample1">
                    <FA name="caret-right" style={{ paddingRight: "7px" }} />
                    Sample 1
                  </a>
                </li>
                <li className="liSample2">
                  <a className="btnSample2">
                    <FA name="caret-right" style={{ paddingRight: "7px" }} />
                    Sample 2
                  </a>
                </li>
                <li className="liSample3">
                  <a className="btnSample3">
                    <FA name="caret-right" style={{ paddingRight: "7px" }} />
                    Sample 3
                  </a>
                </li>
              </ul>
            </nav>

            {/* Section */}
            <section id="content">
              <div id="overview">
                <Overview />
              </div>

              <div id="sample1">
                <SampleOne />
              </div>
              <div id="sample2">
                <SampleTwo />
              </div>
              <div id="sample3">
                <SampleThree />
              </div>
            </section>

            <br className="is-hidden-desktop" />
            <nav className="tabs is-hidden-desktop">
              <ul>
                <li class="liOverview is-active">
                  <a className="btnOverview">Overview</a>
                </li>

                <li className="liSample1">
                  <a className="btnSample1">
                    <FA
                      className="has-text-primary"
                      style={{ paddingRight: "7px" }}
                      name="pencil-alt"
                    />
                    Sample 1
                  </a>
                </li>
                <li className="liSample2">
                  <a className="btnSample2">
                    <FA
                      className="has-text-primary"
                      style={{ paddingRight: "7px" }}
                      name="pencil-alt"
                    />
                    Sample 2
                  </a>
                </li>
                <li className="liSample3">
                  <a className="btnSample3">
                    <FA
                      className="has-text-primary"
                      style={{ paddingRight: "7px" }}
                      name="pencil-alt"
                    />
                    Sample 3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column is-one-third">
            <UsefulPhrases />
            <WordBank />
            <TryThese />
          </div>
        </div>
      </Layout>
    );
  }
}
export default LetterWriting;
