import './Upload.scss';

export const FileUpload = (props:any) => {
	return (
	<>
		<div className={props.className}>
			<input type="file" className="form-text" />
		</div>
	</>
	);
};