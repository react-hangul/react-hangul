import './Flex.scss';

export const Flex = (props:any) => {
	return (
		<>
			<div style={{display:'flex'}}>
				{props.children}
			</div>
		</>
	);
};

export const FlexCenter = (props:any) => {
	return (
		<>
			<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
				{props.children}
			</div>
		</>
	);
};

export const Flex2= (props:any) => {
	return (
		<>
			<div style={{display:'flex', alignItems:'center'}}>
				<div style={{width: '50%'}}>
					{props.children[0]}
				</div>
				<div style={{width: '50%'}}>
					{props.children[1]}
				</div>
			</div>
		</>
	);
};

export const Flex3= (props:any) => {
	console.log(props, props.children.length);
	const childrens = props.children ? props.children : [];
	return (
		<>
			<div style={{display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
				<div style={{width: '240px'}}>
					{childrens.length > 0 ? childrens[0]:null}
				</div>
				<div style={{width: '100%'}}>
					{childrens.length > 1 ? childrens[1]:null}
				</div>
				<div style={{width: '240px'}}>
					{childrens.length > 2 ? childrens[2]:null}
				</div>
			</div>
		</>
	);
};

