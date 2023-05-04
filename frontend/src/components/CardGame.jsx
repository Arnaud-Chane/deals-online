export default function CardGame({ data }) {
  return (
    <div className="CardGame">
      <div>{data.title}</div>
      <div>{data.normalPrice}</div>
      <img src={data.thumb} alt="logo" />
    </div>
  );
}
