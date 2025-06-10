import "./Project.css";
import ImageCont from "./ImageCont";
import FaddedTxt from "../FaddedText/FaddedTxt";

const Project = () => {
  return (
    <div className="project_container">

        <div className="fadded_text_container">
            <FaddedTxt title={"Project"} />
            <FaddedTxt heading={"Project"} />
        </div>


        <div className="project_cards">
          <ImageCont />
        </div>

        <div className="btn">
          <button>
            <a
              href="https://github.com/alammd0?tab=repositories"
              target="_blank"
              className="button"
            >
              Explore More
            </a>
          </button>
        </div>

    </div>
  );
};

export default Project;
