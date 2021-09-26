import './Image.scss';

export const  Image = (props:any) => {
	return (
	<>
		<div className="image-container" style={{width: '100%', height: '100%'}}>
			<img src={props.src} style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
			{props.children}
		</div>
	</>
	);
};

export const  ImageOverlay = (props:any) => {
	return (
	<>
		<Image src={props.src}>
			<div style={{padding: '18px 24px', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', color: '#fff'}}>
				{props.children}
			</div>
		</Image>
	</>
	);
};