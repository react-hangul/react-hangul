import './Alert.scss';

export const Alert = (props:any) => {
	return (
	<div className="Alert">
		<div className="modal is-visible">
			<div className="modal-overlay "></div>
			<div className="modal-wrapper modal-transition">
				<div className="modal-content">
					<div className="modal-header">
						<div className="modal-header">
							<h2 className="modal-heading">This is a modal</h2>
							<button className="modal-close modal-toggle">
								&times;
							</button>
						</div>
					</div>
					<div className="modal-body">
						hello
					</div>
					<div className="modal-footer"></div>
				</div>
			</div>

		</div>
	</div>
	);
};