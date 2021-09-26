import './Scrollable.scss';

export const Scrollable = (props:any) => {
	const scroll = props.scroll ? 'scrollable '+props.scroll : 'scrollable auto';
	return (
	<>
		<div className={scroll}>
			{props.children}
		</div>
	</>
	);
};