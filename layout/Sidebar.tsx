import './Sidebar.scss';

import { MenuList1, Menu } from '../navigation';

export const SideBar = (props:any) => {

	return (
        <div className="sidebar">
            {/*<h4 className="top-header-heading" style="z-index:999;background: #007ea7;height: 4rem;color: #111;padding: .75rem 1rem;padding: 10px;color: #fff;">
                <div>DIGIGRIFF</div>
            </h4>*/}
            <div className="menus">
                <MenuList1 list={props.menubar}></MenuList1>
            </div>
        </div>
	);
};


export const SideBarMenu = (props:any) => {

	return (
        <div className="sidebar" style={{background: props.background}}>
            {/*<h4 className="top-header-heading" style="z-index:999;background: #007ea7;height: 4rem;color: #111;padding: .75rem 1rem;padding: 10px;color: #fff;">
                <div>DIGIGRIFF</div>
            </h4>*/}
            <div className="menus">
                <Menu menuData={props.menubar}></Menu>
            </div>
        </div>
	);
};