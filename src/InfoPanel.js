export default (props) => {
  return (
    <div className="info">
      <ul>
        <li>breakPoint: {props.currentBreakPoints}</li>
        <li>col：{props.currentCols}</li>
      </ul>
    </div>
  );
};
