import './Tooltip.scss';

export const  TooltipTop = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="tooltip top">
			<div className="tooltip-arrow">

			</div>
			<div className="tooltip-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

export const  TooltipBottom = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	const type = props.type ? props.type : 'hover';
	const classname = "tooltip bottom "+ type;
	return (
	<>
		<div className={classname}>
			<div className="tooltip-arrow">

			</div>
			<div className="tooltip-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

export const  TooltipLeft = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="tooltip left">
			<div className="tooltip-arrow">

			</div>
			<div className="tooltip-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

export const  TooltipRight = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="tooltip right">
			<div className="tooltip-arrow">

			</div>
			<div className="tooltip-text">
				{props.children}
			</div>
		</div>
	</>
	);
};