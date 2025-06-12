import "./About.css";
import About_img from "../../assets/About_img.png";
import FaddedTxt from "../FaddedText/FaddedTxt";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_container">
        <div className="info_img">
          <img src={About_img} alt="No Image" />
        </div>

        <div className="information_box">
          <div className="infor_heding">
            <h2>Hi There! I'm Md Khalid Alam</h2>
          </div>
          <div className="position">
            <p>Final Year Computer Science and Engineering</p>
          </div>
          <div className="about_ifo">
            <p>
              Hi, I'm Md Khalid Alam, a final-year Computer Science and
              Engineering student with a strong passion for technology and
              full-stack web development. I specialize in building modern,
              scalable web applications using Full Stack and MERN Stack
              technologies. <br />
              <b>🔧 Tech Stack I Work With: </b> <br />
              <b> Frontend: </b> HTML, CSS, JavaScript, React.js, Tailwind CSS, Redux Toolkit<br />
              <b> Backend: </b> Node.js, Express.js, Cloudflare workers (Hono), Next.Js, ZOD Validation<br />
              <b> Database: </b> MongoDB, Prisma as the ORM, Postgres <br /> 
              <b> Other Tools : </b> Git & GitHub, REST APIs,
              Postman, JWT, Cloudinary, Razorpay<br />
              <b>npm Deployment:</b> Netlify, Vercel
            </p>
          </div>

          <hr></hr>

          <div className="some_inf">
            <p>
              <span>Phone</span> : +91-9507283573
            </p>

            <p>
              <span>Email</span> : mdkhalid001@gmail.com
            </p>
            <p>
              <span>From</span> : Noida, UP - 201303, India
            </p>
            <p>
              <span>Language</span> : Hindi, English, Urdu
            </p>
            <p>
              <span>Freelance</span> : Available
            </p>
          </div>

          <div className="btn">
            <button>Download CV</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
