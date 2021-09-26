import './Menu.scss';

import { useState } from 'react';

import {List} from './List';

export const Menu0 = () => {
	return (
	<div className="Menu">
		<div style={{display:'flex', justifyContent: 'flex-end'}}>

		<div style={{display: 'flex', alignItems:'center', marginRight: '50px'}} className="dropdown-trigger">
			<i className="fas fa-bell" style={{fontSize: '20px', color: '#ccc'}}></i>
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

		<div style={{display: 'flex',alignItems:'center', marginRight: '50px'}} className="dropdown-trigger">
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


			<div style={{display: 'flex', alignItems:'center', marginRight: '50px'}} className="dropdown-trigger">
				<div style={{width:'32px',height:'32px',border:'1px solid #dedede',borderRadius: '100%'}}>
					<img src="" />
				</div>
				<div style={{marginLeft: '10px'}}>
					Admin
				</div>
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
	</div>
	);
};

export const MenuSideways = (props:any) => {
	console.log(props)
	return(
	<>
		<div className="menu-sideways" style={{'background':'#fff'}}>
			<ul style={{margin:'0px', padding: '0px'}}>
			{
				props.data.map((item:any, key:number) =>{
					return <List key={key} text={item.text} anchor={item.anchor} icon={item.icon} className="menu-list-group-child mzz">
						{
						item.childrens.map((children:any, ckey:number) =>{
							return <div className="mz">
								<ul style={{margin:'0px', padding: '0px'}}>
									<List key={ckey} text={children.text} anchor={children.anchor} icon={children.icon}  className="menu-list-group-child mzz">


									</List>
								</ul>
							</div>
						})
						}
					</List>
				})
			}
			</ul>
		</div>
	</>
	);
};

export const MenuList = (props:any) => {
	return (
		<>
			<ul style={{margin:'0px', padding: '0px'}}>
			{
				props.list.map((item:any, key:number) =>{
					return <List key={key} text={item.name} link={item.link} icon={item.icon} className="menu-list-group-child">
						{ item.children != null ?
						<div className="">
							<ul style={{margin:'0px', padding: '0px'}}>
							{
							item.children.map((children:any, ckey:number) =>{
								return <List 
											key={ckey} 
											text={children.name} 
											link={children.link} 
											icon={children.icon}  
											className="menu-list-group-child"></List>
							})
							}
							</ul>
						</div> 
						: null
						}
					</List>
				})
			}
			</ul>
		</>
	); 
};

export const MenuList1 = (props:any) => {
	const [activeMenu, setActiveMenu] = useState<string>('');
	let active:string = 'menu active';
	const click = (e:any, name:string)=>{
		setActiveMenu(name);
	};
	return (
		<>
			<ul style={{margin:'0px', padding: '0px'}}>
			{
				props.list.map((item:any, key:number) =>{
					return <List onClick={(e:any) => { click(e, item.name) }} key={key} text={item.name} link={item.link} icon={item.icon} className="menu-list-group-child">
						{ 
						item.children != null ?
							<div className="" style={{marginTop: '12px'}}>
								{ item.name === activeMenu ?
								<ul style={{margin:'0px', padding: '0px'}} className={active}>
								{
								item.children.map((children:any, ckey:number) =>{
									return <List 
												key={ckey} 
												text={children.name} 
												link={children.link} 
												icon={children.icon}  
												className="menu-list-group-child"></List>
								})
								}
								</ul>
								:
								null
								}
						</div> 
						: null
						}
					</List>
				})
			}
			</ul>
		</>
	); 
};

const TreeMenu = (props:any) => {
    if (!props.data.children)
        return (
            <li className="menu-list menu-child-li a">
                <a href={props.data.link} onClick={(e:any) => {}}>{props.data.name}</a>
            </li>
        );

    return (
		<li className="menu-list menu-child-li b">
			<a onClick={(e:any) => props.changeMenuChild(e, props.data)}>{props.data.name}</a>
			<ul className="menu menu-child-ul">
				{
					props.data.children.map((item:any, key:number) => {
						return <TreeMenu key={key} data={item} changeMenuChild={props.changeMenuChild} />
					})
				}
			</ul>
		</li>
    );
};

export const Menuz = (props:any) => {
    const propMenuData = props.menuData ? props.menuData : [];
    const [menuData, setMenuData] = useState<[]>(propMenuData);
    const changeMenuChild = (e:any, item:any) => {
        if (e.target.nextSibling.classList.contains("active")) {
            e.target.nextSibling.classList.remove("active");
        } else {
            e.target.nextSibling.classList.add("active");
        }
    };
	console.log(propMenuData);
    return (
        <>
            <ul className="menu-main menu menu-ul">
            {
                menuData.map((item:any, key:number) => {
                    return <li key={key} className="menu-list menu-li">
                             <a onClick={(e:any) => changeMenuChild(e, item)}>{item.name}</a>
                             {
                                 item.children ? <ul className="menu menu-child-ul">
                                     {
                                        item.children.map((item1:any, key1:number) => {
                                            return <li key={key1} className="menu-list menu-child-li">
                                                <a onClick={(e:any) => changeMenuChild(e, item1)}>{item1.name}</a>
                                                {
                                                    item1.children ? <ul className="menu menu-child-ul">
                                                        {
                                                            item1.children.map((item2:any, key2:number) => {
                                                                return <li key={key2} className="menu-list menu-child-li">
                                                                    <a>{item2.name}</a>
                                                                </li>
                                                            })
                                                        }
                                                    </ul>
                                                    :null
                                                }
                                            </li>
                                        })
                                     }
                                 </ul>
                                 :null
                             }
                           </li>
                })
            }
            </ul>
        </>
    );
};


export const Menu = (props:any) => {
    const propMenuData = props.menuData ? props.menuData : [];
    const [menuData, setMenuData] = useState<[]>(propMenuData);
    const changeMenuChild = (e:any, item:any) => {
        if (e.target.nextSibling.classList.contains("active")) {
            e.target.nextSibling.classList.remove("active");
        } else {
            e.target.nextSibling.classList.add("active");
        }
    };
    return (
        <>
            <ul className="menu-main menu menu-ul">
				{
					menuData.map((item:any, key:number) => {
						return <TreeMenu key={key} data={item} changeMenuChild={changeMenuChild} />
					})
				}
            </ul>
        </>
    );
};