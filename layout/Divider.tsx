import './Divider.scss';

export const Divider = (props:any) => {
	return (
	<div className="Divider">
		<div className="divider divider-center">
			<span className="divider-text">Center Text</span>
		</div>

		<div className="divider divider-left">
			<span className="divider-text">Left Text</span>
		</div>

		<div className="divider divider-right">
			<span className="divider-text">Right Text</span>
		</div>
	</div>
	);
};