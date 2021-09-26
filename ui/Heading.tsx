import './Heading.scss';

const ExtraSmallHeading = (props:any) => {
	return (
		<h6 className="h-xs">{props.children}</h6>
	);
};

const SmallHeading = (props:any) => {
	return (
		<h5 className="h-sm">{props.children}</h5>
	);
};

const NormalHeading = (props:any) => {
	return (
		<h4 className="h-normal">{props.children}</h4>
	);
};

const BigHeading = (props:any) => {
	return (
		<h3 className="h-lx">{props.children}</h3>
	);
};

const ExtraBigHeading = (props:any) => {
	return (
		<h2 className="h-lx">{props.children}</h2>
	);
};

const ExtraXBigHeading = (props:any) => {
	return (
		<h1 className="h-lxx">{props.children}</h1>
	);
};

export const  Heading = (props:any) => {
	const renderHeading = () => {
		switch(props.type) {
			case 'h-xs':
				return <ExtraSmallHeading>{props.children}</ExtraSmallHeading>;
			case 'h-sm':
				return <SmallHeading>{props.children}</SmallHeading>;
			case 'h-normal':
				return <NormalHeading>{props.children}</NormalHeading>;
			case 'h-lx':
				return <BigHeading>{props.children}</BigHeading>;
			case 'h-lxx':
				return <ExtraBigHeading>{props.children}</ExtraBigHeading>;
			case 'h-lxxx':
				return <ExtraXBigHeading>{props.children}</ExtraXBigHeading>;
			default:
				return <NormalHeading>{props.children}</NormalHeading>;
		}
	  }
	return (
	<>
		{renderHeading()}
	</>
	);
};

export const HeadingWithInfo = (props:any) => {
	return (
		<>
			<NormalHeading>{props.heading}</NormalHeading>
			<p>{props.info}</p>
		</>
	);
};