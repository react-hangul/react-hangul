import './Modal.scss';

export const Modal = (props:any) => {
	const classname = props.open === true ? "modal is-visible active" : "modal is-visible";
	return (
	<>
		<div className={classname}>
			<div className="modal-overlay "></div>
			<div className="modal-wrapper modal-transition">
				<div className="modal-content">
					<div className="modal-header">
						<div className="modal-header">
							<h2 className="modal-heading">This is a modal</h2>
							<button className="modal-close modal-toggle" onClick={props.close}>
								&times;
							</button>
						</div>
					</div>
					<div className="modal-body">
						{props.children}
					</div>
					<div className="modal-footer"></div>
				</div>
			</div>

		</div>
	</>
	);
};