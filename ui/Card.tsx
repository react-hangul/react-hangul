import './Card.scss';

export const  CardHeading = (props:any) => {
	return (
		<div className="dashboard-card-heading">
			<h4>{props.children}</h4>
		</div>
	);
};

export const  CardBody = (props:any) => {
	return (
		<div className="dashboard-card-content">
			{props.children}
		</div>
	);
};

export const  Card = (props:any) => {
	return (
	<div className="Card">
		<div className="dashboard-card">
			{props.children}
		</div>
	</div>
	);
};

export const  CardHeader = (props:any) => {
	const height = props.height ? props.height : 'auto';
	return (
		<>
		<div className="dashboard-card-header" style={{height:height}}>
			{props.children}
		</div>
		</>
	);
};