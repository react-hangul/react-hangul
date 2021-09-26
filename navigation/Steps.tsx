import './Steps.scss';

export const Steps = () => {
	return (
	<div className="Steps">
    	<div className="steps">

		<div className="step">
			<div className="step-container">
				<div className="step-icon">
					<span className="">
						<span className="">1</span>
					</span>
				</div>
				<div className="step-text-content">
					<div className="step-text">Finished</div>
				</div>
			</div>
		</div>


		<div className="step">
			<div className="step-container">
				<div className="step-icon">
					<span className="">
						<span className="">2</span>
					</span>
				</div>
				<div className="step-text-content">
					<div className="step-text">Finished</div>
				</div>
			</div>
		</div>

		<div className="step">
			<div className="step-container">
				<div className="step-icon">
					<span className="">
						<span className="">3</span>
					</span>
				</div>
				<div className="step-text-content">
					<div className="step-text-last">Finished</div>
				</div>
			</div>
		</div>

		</div>
	</div>
	);
};