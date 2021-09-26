import { 
  Heading,
  Grid,
  Flex3,
  Dropdown,
  DropdownHover,
  Breadcrumb
} from '../../theme';

import './Header.scss';

export const HomeHeader1 = (props:any) => {
	return (
    <>
      <header className="top-header">
        <h4 className="top-header-heading">
          <div className="flex">
              <div>Home</div>
          </div>
        </h4>

        <div className="flex-end">
            <ul className="menu-inline">
                <li>
                    Blog
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Login
                </li>
                <li>
                    <button className="button-secondary">Register</button>
                </li>
            </ul>
        </div>

      </header>
    </>
  )
};

export const Header1 = (props:any) => {
	return (
	<div className="Header">
		<div className="dashboard-header">
        <div>

        </div>

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


            <div style={{display: 'flex', alignItems:'center', marginRight: '50px'}} className="dropdown-trigger">
                <div style={{width:'32px', height:'32px', border:'1px solid #dedede', borderRadius: '100%'}}>
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
	</div>
	);
};

export const BasicHeader = (props:any) => {
  //const grids = props.columns ? parseInt(props.columns) : 1;
	return (
    <>
      <header>
        {props.children}
      </header>
    </>
  )
};

export const HeaderWithBreadcrumb = (props:any) => {
  //const grids = props.columns ? parseInt(props.columns) : 1;
	return (
    <>
      <header>
        <Heading type="h-lx">{props.children}</Heading>
        <Breadcrumb></Breadcrumb>
      </header>
    </>
  )
};

export const BasicHeaderColumns2 = (props:any) => {
	return (
    <>
      <header>
        <Grid cols="2">
          <HeaderHeading>{props.children[0]}</HeaderHeading>
          <div>{props.children[1]}</div>
        </Grid>
      </header>
    </>
  )
};

export const BasicHeaderColumns3 = (props:any) => {
  const grids = props.children.length;
	return (
    <>
      <header>
        <Grid cols={grids}>
          <HeaderHeading>{props.children[0]}</HeaderHeading>
          <div>{props.children[1]}</div>
          <div>{props.children[2]}</div>
        </Grid>
      </header>
    </>
  )
};

export const HeaderHeading = (props:any) => {
	return (
    <>
      <Heading>
        {props.children}
      </Heading>
    </>
  )
};

export const HeaderDescription = (props:any) => {
	return (
    <>
      <p>
        {props.children}
      </p>
    </>
  )
};

export const HeaderWithDescription = (props:any) => {
	return (
    <>
      <header>
        {props.children}
      </header>
    </>
  )
};

export const HeaderWithDescriptionCentered = (props:any) => {
	return (
    <>
      <header>

      </header>
    </>
  )
};

export const HeaderWithButtons = (props:any) => {
	return (
    <>
      <header>

      </header>
    </>
  )
};

export const BreadcrumbHeader = (props:any) => {
	return (
    <>
      <header>

      </header>
    </>
  )
};

export const HeaderFlex3 = (props:any) => {
  return (
    <>
      <header>
        <Flex3>
          {props.children}
        </Flex3>
      </header>
    </>
  );
};

export const HeaderImage = (props:any) => {
  return (
    <>
      <header>
        
      </header>
    </>
  );
};

const FlexHeader= (props:any) => {
	return (
		<>
			<div style={{display:'flex', alignItems:'center', justifyContent: 'space-between', width: '100%' }}>
        {props.children}
			</div>
		</>
	);
};

export const HomeHeader = (props:any) => {
	return (
    <>
      <header className="top-header">
          <FlexHeader>
            {props.getDrawer() === true ?
            <div style={{width: '240px', padding: "0px 20px"}}>
              <HeaderHeading>{props.config.topbarHeading}</HeaderHeading>
            </div>
            :null}
            <div style={{flex: "1 1 0%"}}>
              <div onClick={props.toggleDrawer} style={{cursor:"pointer"}}>
                <i className="fas fa-bars" onClick={props.toggleDrawer}></i>
              </div>
            </div>
            <div className="flex-end" style={{width: '560px', display: 'flex', justifyContent: 'flex-end'}}>
              {
                <ul className="menu-inline">
                {
                  props.config.topbarMenuData.map((item:any, key:number) => {
                    return (
                      <li key={key} className="top-menu-list">
                        <DropdownHover className="">{item.name}</DropdownHover>
                      </li>
                    )
                  })
                }
                </ul>
              }
            </div>
          </FlexHeader>
      </header>
    </>
  );
}