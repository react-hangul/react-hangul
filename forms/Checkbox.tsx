import './Checkbox.scss';

export const Checkbox = (props:any) => {
	return (
	<div className="Checkbox">
		<label className="flex" style={{margin: '20px 0px;'}}>
			<span><input type="checkbox" className="checkbox" /></span>
			<span>{props.children}</span>
		</label>
	</div>
	);
};