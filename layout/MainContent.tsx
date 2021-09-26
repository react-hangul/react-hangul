import './MainContent.scss';

export const MainContent = (props:any) => {
	return (
    <>
    { props.getDrawer() === true ? 
        <div className="main-content" style={{marginLeft: props.drawerMenuWidth}}>
          {props.children}
        </div>
        :
        <div className="main-content" style={{marginLeft: "0px", width: "100%"}}>
          {props.children}
        </div>
    }
    </>
	);
};
