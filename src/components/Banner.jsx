import { PropTypes } from "prop-types";
import Button from "./Button";

const Banner = ({ title, description }) => {
  return (
    <section
      id="page-top"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/public/intro-bg.jpg')`,
      }}
      className="h-screen bg-cover b -mt-20 "
    >
      <div className="text-center max-w-3xl mx-auto my-auto text-white pt-56">
        <h1 className="text-8xl pt-40 font-bold tracking-normal leading-52">
          {title}{" "}
        </h1>
        <h3 className="py-10 text-xl font-normal">{description}</h3>
        <Button title={"learn more"} />
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Banner;
