import React, { useState, useEffect } from 'react';
import { 
	DrawerMenu,
	MainContent,
	HeaderWithBreadcrumb
  } from '../../theme'
import './Layout.scss';

export const Layout = (props:any) => {
	return (
		<div className="Layout">
			{props.children}
		</div>
	);
};

export const Layout2Fixed = (props:any) => {
	const config = props.layoutConfig ? props.layoutConfig : {
		sidebarMenuData: [],
		headerHeight: "5rem",
		sidebarMenuWidth: "240px",
		drawerBackground: "#252f3e"
	};
	const [drawer, setDrawer] = useState(true);
	const toggleDrawer = () => {
		setDrawer(!drawer);
	};
	const getDrawer = () => {
		return drawer;
	};
	useEffect(()=>{
		if(drawer === false){
		}
		else{
		}
	}, [drawer])
	return (
		<Layout>
			<DrawerMenu getDrawer={getDrawer} toggleDrawer={toggleDrawer} topbarConfig={config.topBar} width={config.drawerMenuWidth}  menuData={config.drawerMenuData} background={config.drawerBackground}></DrawerMenu>
			<MainContent getDrawer={getDrawer} drawerMenuWidth={config.drawerMenuWidth}>
				<HeaderWithBreadcrumb>Dashboard</HeaderWithBreadcrumb>
				{props.children}
			</MainContent>
		</Layout>
	);
};

