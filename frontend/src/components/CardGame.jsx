import PropTypes from "prop-types";

export default function CardGame({ data }) {
  return (
    <div className="CardGame">
      <div>{data.title}</div>
      <div>{data.normalPrice}</div>
      <img src={data.thumb} alt="logo" />
    </div>
  );
}

CardGame.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    normalPrice: PropTypes.number,
    thumb: PropTypes.string,
  }).isRequired,
};
