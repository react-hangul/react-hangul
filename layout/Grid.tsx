import './Grid.scss';

export const Grid = (props:any) => {
  const classname = "grid-container grid-col-"+props.cols;
	return (
    <div className={classname}>
      {props.children}
    </div>
	);
};