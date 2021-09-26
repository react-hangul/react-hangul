import './Badge.scss';

export const  Badge = (props:any) => {
	const classname = props.className ? "badge "+props.className : "badge";
	return (
	<>
		<span className={classname}>
			{props.children}
		</span>
	</>
	);
};

export const BadgeClose = (props:any) => {
	const classname = props.className ? "badge "+props.className : "badge";
	return (
	<>
		<span className={classname}>
			{props.children}
			<span>&times;</span>
		</span>
	</>
	);
};