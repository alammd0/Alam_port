import GYM_WEB from "../../assets/Project_Img/GYM_WEB.jpg";
import Dic from "../../assets/Project_Img/Dic.jpg";
import Game from "../../assets/Project_Img/Game.jpg";
import StayFy from "../../assets/New_Project/StayFy.png";
import Insta from "../../assets/New_Project/instagramClone.png";
import Blog from "../../assets/New_Project/BlogPost.png";
import ImageCard from "./ImageCard";

const ImageCont = () => {
  const images = [
    {
      imgScr: StayFy,
      link: "https://stayi-fy.vercel.app/",
      title: "StayFy",
      desc: "React, Cloudflare workers, Zod, Typescript, Prisma as the ORM, Postgres, JWT, Cloudinary, Razorpay, Tailwind CSS, Redux Toolkit",
    },
    {
      imgScr: Insta,
      link: "https://github.com/alammd0/insta-mka",
      title: "Insta-MKA",
      desc: "Next.js, Typescript, Prisma as the ORM, Postgres, JWT, Cloudinary, Tailwind CSS, Redux Toolkit",
    },

    {
      imgScr: Blog,
      link: "https://mediumblogwebsite-seven.vercel.app/",
      title: "StayFy",
      desc: "React, Cloudflare workers, Zod, Typescript, Prisma as the ORM, Postgres, JWT, Tailwind CSS, Redux Toolkit",
    },

    {
      imgScr: GYM_WEB,
      link: "https://alammd0.github.io/gym-website/",
      title: "Gym Website",
      desc: "Uses HTML, CSS, and JavaScript",
    },

    {
      imgScr: Dic,
      link: "https://dictionaryappalam.netlify.app/",
      title: "Dictionary App",
      desc: "Uses React and Tailwind CSS",
    },

    {
      imgScr: Game,
      link: "https://github.com/alammd0/Simon_says_game",
      title: "Simon Says Game",
      desc: "Uses HTML, CSS, and JavaScript",
    },
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          imgScr={image.imgScr}
          link={image.link}
          title={image.title}
          desc={image.desc}
        />
      ))}
    </div>
  );
};

export default ImageCont;
