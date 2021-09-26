import './Loaders.scss';

export const  Loaders = () => {
	return (
	<div className="Loaders">
		<div className="flex" style={{justifyContent: 'space-between'}}>

				
		<div>
		<div className="nb-spinner"></div>
		</div>



		<div>
		<div className="dot-loader"></div>
		<div className="dot-loader dot-loader--2"></div>
		<div className="dot-loader dot-loader--3"></div>
		</div>


		<div>
		<div className="circle-loader">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		</div>


		<div>
		<div className="ml-loader">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		</div>

		</div>
	</div>
	);
};