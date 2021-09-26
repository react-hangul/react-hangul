import { useState } from 'react';
import { 
    List
} from '../../theme';
import './Dropdown.scss';

export const Dropdown1 = (props:any) => {
	return (
	<div className="Dropdown">
		<div style={{display: 'flex', alignItems:'center', marginRight: '50px'}} className="dropdown-trigger">
			<i className="fas fa-envelope" style={{fontSize: '20px', color: '#ccc'}}></i>
			<div className="dropdownContain">
				<div className="dropOut">
					<div className="triangle"></div>
					<ul>
					<li><a>Plan</a></li>
					<li><a>Plan</a></li>
					<li><a>Plan</a></li>
					<li><a>Plan</a></li>
					</ul>
				</div>
				</div>
		</div>
	</div>
	);
};

const DropdownList = (props:any) => {
	return (
		<>

		</>
	);
};

export const Dropdown = (props:any) => {
	const [dropdown, setDropdown] = useState(false);
	const click = (e:any) => {
		if(e.currentTarget.nextSibling.firstChild.classList.contains("active")){
			e.currentTarget.nextSibling.firstChild.classList.remove("active");
			console.log('remove');
		}
		else{
			let dropDowns = Array.from(document.querySelectorAll('.menu-dropdown'));
			dropDowns.forEach(node => {
				node.classList.remove('active');
			});
			e.currentTarget.nextSibling.firstChild.classList.add("active");
			console.log('active');
		}
		
		setDropdown(!dropdown);
	};
	return (
		<>
			<div onClick={click} style={{cursor: 'pointer', padding: '12px'}}>{props.children}</div>
			
			
				<div style={{position: 'relative', top: '1.35rem'}}>
					<div className="menu-dropdown click" style={{color: '#111', background: '#fff', position: 'absolute', width: '270px', height: '250px'}}>
						<div style={{wordWrap: 'break-word', padding: '12px'}}>
							123456789012345678901234567890
							{props.children}
						</div>
					</div>
				</div>
			
			
		</>
	);
};

export const DropdownHover = (props:any) => {
	const [dropdown, setDropdown] = useState(false);
	const click = (e:any) => {
		/*if(e.currentTarget.firstChild.classList.contains("active")){
			e.currentTarget.firstChild.classList.remove("active");
			console.log('remove');
		}
		else{
			let dropDowns = Array.from(document.querySelectorAll('.menu-dropdown'));
			dropDowns.forEach(node => {
				node.classList.remove('active');
			});
			e.currentTarget.firstChild.classList.add("active");
			console.log('active');
		}*/
		
		setDropdown(!dropdown);
	};
	return (
		<>
			<div className="dropdown-parent" style={{cursor: 'pointer', padding: '6px'}}>
				<span className="dropdown-parent-text">{props.children}</span>
				<div className="hover" style={{position: 'relative', marginTop: '0px'}}>
				<div className="menu-dropdown" style={{color: '#111', position: 'absolute'}}>
					<div className="menu-dropdown-content" style={{wordWrap: 'break-word', padding: '12px'}}>
						{props.children}
					</div>
				</div>
			</div>
			</div>
		

			
		</>
	);
};