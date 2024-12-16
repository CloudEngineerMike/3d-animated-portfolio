import "./services.css";
import { FaComputer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";


const Services = () => {
  return (
<div id="#expertise" className="expertise-section">
  <div className="relative overflow-x-clip">
    <div className="hidden-md">
      <img
        src="./dadjoke.svg"
        alt=""
        className="expertise-image"
      />
    </div>

    <h2 className="expertise-title">
      My Expertise.
    </h2>

    <div className="expertise-grid">
      {/* <!-- Card 1 --> */}
      <div className="expert-card">
        <div className="card-header">
          <i className="icon fa fa-computer"><FaComputer/></i>
          <h2 className="card-title">
            <span className="highlight-pink">Software</span> Development
          </h2>
        </div>
        <div className="card-body">
          <p className="code-tag">&lt;h3&gt;</p>
          <div className="card-content">
            <p>
              Experienced in both functional and OOP: Python, JavaScript,
              TypeScript, Swift.
            </p>
          </div>
          <p className="code-tag">&lt;/h3&gt;</p>
        </div>
      </div>
      {/* <!-- Card 2 --> */}
      <div className="expert-card">
        <div className="card-header">
          <i className="icon fa fa-computer"><FaReact/></i>
          <h2 className="card-title">
            <span className="highlight-pink">Full-Stack</span> Engineering
          </h2>
        </div>
        <div className="card-body">
          <p className="code-tag">&lt;h3&gt;</p>
          <div className="card-content">
            <p>
            Passionate about UI/UX. Over 5 years of front-end development experience in HTML, CSS, JS, Angular, React and NextJS frameworks.
            </p>
          </div>
          <p className="code-tag">&lt;/h3&gt;</p>
        </div>
      </div>
      {/* <!-- Card 3 --> */}
      <div className="expert-card">
        <div className="card-header">
          <i className="icon fa fa-computer"><MdAutorenew/></i>
          <h2 className="card-title">
            <span className="highlight-pink">Cloud</span> Automation
          </h2>
        </div>
        <div className="card-body">
          <p className="code-tag">&lt;h3&gt;</p>
          <div className="card-content">
            <p>
            Skilled in designing cloud automation and cross-platform solutions using AWS and Azure.
            </p>
          </div>
          <p className="code-tag">&lt;/h3&gt;</p>
        </div>
      </div>

    </div>
  </div>
</div>  )
}

export default Services