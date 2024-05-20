export default function Tooltip(props) {
  return (
    <div className="tooltip">
      {props.button}
      <span className="tooltiptext">{props.children}</span>
    </div>
  );
}
