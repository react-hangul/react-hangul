import React, { useState, useEffect } from 'react';

import { 
	Menu,
	SideBarMenu,
	HomeHeader
} from '../../theme'

import './Drawer.scss';

export const Drawer = (props:any) => {
	const [drawer, setDrawer] = useState(false);
	const toggleDrawer = () => {
		setDrawer(!drawer);
	};
	return (
	<>
		<div className="drawer">
			<i className="fas fa-bars" onClick={toggleDrawer}></i>
			{
				drawer === false ? (
					<SideBarMenu menubar={props.menu} background="transparent"></SideBarMenu>
				):null
			}
		</div>
	</>
	);
};

export const DrawerMenu = (props:any) => {
	return (
	<>
		<HomeHeader config={props.topbarConfig} getDrawer={props.getDrawer} toggleDrawer={props.toggleDrawer}></HomeHeader>
		{
			props.getDrawer() === true ? (
			<div className="drawer" style={{background: props.background}}>

				<div className="menus">
					<Menu menuData={props.menuData}></Menu>
				</div>

			</div>
			):null
		}
	</>
	);
};