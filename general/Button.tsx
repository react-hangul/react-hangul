import './Button.scss';

export const Button = (props:any) => {
	return (
	<>
		<button className={props.className} onClick={props.onClick}>
			{props.children}
		</button>
	</>
	);
};

export const PrimaryButton = (props:any) => {
	const className = props.className ? "button primary-button "+props.className : "button primary-button";
	return (
	<>
		<Button className={className} onClick={props.onClick}>
			{props.children}
		</Button>
	</>
	);
};

export const SecondaryButton = (props:any) => {
	const className = props.className ? "button secondary-button "+props.className : "button secondary-button";
	return (
	<>
		<Button className={className} onClick={props.onClick}>
			{props.children}
		</Button>
	</>
	);
};

export const SuccessButton = (props:any) => {
	const className = props.className ? "button success-button "+props.className : "button success-button";
	return (
	<>
		<Button className={className} onClick={props.onClick}>
			{props.children}
		</Button>
	</>
	);
};

export const InfoButton = (props:any) => {
	const className = props.className ? "button info-button "+props.className : "button info-button";
	return (
	<>
		<Button className={className} onClick={props.onClick}>
			{props.children}
		</Button>
	</>
	);
};

export const WarningButton = (props:any) => {
	const className = props.className ? "button warning-button "+props.className : "button warning-button";
	return (
	<>
		<Button className={className} onClick={props.onClick}>
			{props.children}
		</Button>
	</>
	);
};

export const DangerButton = (props:any) => {
	const className = props.className ? "button danger-button "+props.className : "button danger-button-outline";
	return (
	<>
		<Button className={className} onClick={props.onClick}>
			{props.children}
		</Button>
	</>
	);
};