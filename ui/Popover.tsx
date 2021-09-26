import './Popover.scss';

export const  PopoverTop = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="popover top">
			<div className="popover-arrow">

			</div>
			<div className="popover-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

export const  PopoverBottom = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="popover bottom">
			<div className="popover-arrow">

			</div>
			<div className="popover-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

export const  PopoverLeft = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="popover left">
			<div className="popover-arrow">

			</div>
			<div className="popover-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

export const  PopoverRight = (props:any) => {
	const location = props.location ? props.location : 'bottom';
	return (
	<>
		<div className="popover right">
			<div className="popover-arrow">

			</div>
			<div className="popover-text">
				{props.children}
			</div>
		</div>
	</>
	);
};

