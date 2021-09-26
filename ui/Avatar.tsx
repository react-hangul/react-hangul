import './Avatar.scss';

export const  Avatar = () => {
	return (
	<div className="Avatar">
		<div style={{margin:'0px', padding: '.75rem 0rem', borderBottom: '1px solid #e4eaec'}} className="flex">
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px'}}>
				<div className="avatar">
					<span className="avatar-status">
				</span></div>
			</div>
			<div style={{display: 'flex', alignItems: 'center'}}>
				<div>
					<div style={{fontSize: '1rem', margin: '0px'}}>Jon Doe</div>
					<small style={{fontSize: '0.8rem', margin: '0px'}}>
						john@doe.com
					</small>
				</div>
			</div>
		</div>
	</div>
	);
};