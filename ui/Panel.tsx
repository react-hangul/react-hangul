import './Panel.scss';

export const  PanelHeader = (props:any) => {
	return (
		<header className="dashboard-panel-header">
			<h4>{props.children}</h4>
		</header>
	);
};

export const  PanelBody = (props:any) => {
	return (
		<div className="dashboard-panel-content">
			{props.children}
		</div>
	);
};

export const  Panel = (props:any) => {
	return (
	<div className="panel">
		<div className="dashboard-panel">
			{props.children}
		</div>
	</div>
	);
};