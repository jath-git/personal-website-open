import "./icon.scss";

export default function Icon({ name, src, overview }) {
  return (
    <div
      className={overview ? "tool" : "no-tool"}
      onClick={() => {
        if (overview) {
          window.open(overview);
        }
      }}
    >
      <img src={src} alt="icon"></img>
      <div className="name">{name}</div>
    </div>
  );
}
