import './Form.scss';

export const Form = (props:any) => {
	return (
	<>
		<form method={props.method} action={props.action} className={props.className} onSubmit={props.onSubmit}>

		</form>
	</>
	);
};