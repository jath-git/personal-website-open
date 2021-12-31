import Icon from "../icon/Icon.jsx";

export default function Tools({ icons }) {
  return (
    <div>
      {icons.map(icon => {
        return <Icon
          name={icon.name}
          overview={icon.overview}
          src={icon.src}
        />
      })}
    </div>
  );
}
