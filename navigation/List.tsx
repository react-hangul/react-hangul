import './List.scss';

export const  Listt = () => {
	return (
	<>
		<ul className="list-group">
			<li className="list-group-child">
				<i className="fas fa-user list-group-child-icon"></i>
				<span>List</span>
			</li>
			<li className="list-group-child">
				<i className="fas fa-user list-group-child-icon"></i>
				<span>List</span>
			</li>
		</ul>


		<ul className="list-group1">
			<li className="list-group1-child">
				<i className="fas fa-user list-group1-child-icon"></i>
				<span>List</span>
			</li>
			<li className="list-group1-child">
				<i className="fas fa-user list-group1-child-icon"></i>
				<span>List</span>
			</li>
		</ul>

		<ul className="menu-list-group">
			<li className="menu-list-group-child">
				<div className="menu-li">
					<i className="fas fa-user menu-list-group-child-icon"></i>
					<span>List</span>
				</div>
				<ul className="menu-list-subgroup hidden">
					<li className="menu-list-group-child">
						<div className="menu-li">
							<i className="fas fa-user menu-list-group-child-icon"></i>
							<span>List</span>
						</div>
					</li>
					<li className="menu-list-group-child">
						<div className="menu-li">
							<i className="fas fa-user menu-list-group-child-icon"></i>
							<span>List</span>
						</div>
					</li>
					<li className="menu-list-group-child">
						<div className="menu-li">
							<i className="fas fa-user menu-list-group-child-icon"></i>
							<span>List</span>
						</div>
					</li>
				</ul>
			</li>
			<li className="menu-list-group-child">
				<div className="menu-li">
					<i className="fas fa-user menu-list-group-child-icon"></i>
					<span>List</span>
				</div>
			</li>
		</ul>
	</>
	);
};

export const  ListItemAnchor = (props:any) => {
	return (
	<>
		<div className="menu-li">
			<i className="fas fa-user menu-list-group-child-icon"></i>
			<span>List</span>
		</div>
	</>
	);
};

export const  List = (props:any) => {
	const classname = "list "+props.className;
	return (
	<>
		<li className={classname}>
		{props.link == null ?
			<div className="list-item" onClick={props.onClick}>
				<div style={{width: '100%', display: 'block'}}>
					<i className={props.icon}></i>
					<span>{props.text}</span>
					{props.children}
				</div>
			</div>
		:
			<a className="list-item" href={props.link}>
				<div style={{width: '100%', display: 'block'}}>
					<i className={props.icon}></i>
					<span>{props.text}</span>
					{props.children}
				</div>
			</a>
		}
		</li>
	</>
	);
};

