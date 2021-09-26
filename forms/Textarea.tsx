import './Textarea.scss';

export const Textarea = (props:any) => {
	return (
	<>
		<textarea className="form-text">
			{props.children}
		</textarea>
	</>
	);
};