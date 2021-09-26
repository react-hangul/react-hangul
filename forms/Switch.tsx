import './Switch.scss';

export const Switch = (props:any) => {
	return (
	<div className="Switch">
		<label className="button-switch">
			<input type="checkbox" id="switch-blue" className="switch" />
			<div  className="lbl-off">Off</div>
			<div  className="lbl-on">On</div>
		</label>
	</div>
	);
};