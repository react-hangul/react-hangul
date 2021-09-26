import './Timeline.scss';

export const Timeline = () => {
	return (
		<>
			<ul className="timeline">
				<li className="timeline-item">Hello</li>
				<li className="timeline-item timeline-item-right">
					<div className="timeline-dot">H</div>
					<div className="timeli">Hellos</div>
				</li>
			</ul>
		</>
	);
};

export const Timeline1 = () => {
	return (
		<>
			<ul className="timeline1">
				<li className="timeline1-item">
					<div className="timeline1-item-line"></div>
					<div className="timeline1-item-dot"></div>
					<div className="timeline1-item-content timline-left">gdgfdgdfgfd</div>
				</li>
				<li className="timeline1-item">
					<div className="timeline1-item-line"></div>
					<div className="timeline1-item-dot"></div>
					<div className="timeline1-item-content timline-right">gdgfdgdfgfd</div>
				</li>
				<li className="timeline1-item">
					<div className="timeline1-item-line"></div>
					<div className="timeline1-item-dot"></div>
					<div className="timeline1-item-content timline-left">gdgfdgdfgfd</div>
				</li>
				<li className="timeline1-item">
					<div className="timeline1-item-line"></div>
					<div className="timeline1-item-dot"></div>
					<div className="timeline1-item-content timline-right">gdgfdgdfgfd</div>
				</li>
			</ul>
		</>
	);
};