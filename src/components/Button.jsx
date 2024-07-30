import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <button className="rounded-3xl bg-[linear-gradient(#6372FF,#5F8DFD)] py-3 px-10">
      {title.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
