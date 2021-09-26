import './Breadcrumb.scss';

export const Breadcrumb = () => {
	return (
	<div className="Breadcrumb">
		<div className="flex">
			<a href="/" style={{margin: '0px 0px'}}>Home</a>
			<span style={{margin: '0px 5px'}}>/</span>
			<div style={{margin: '0px 0px'}}>Leads</div>
		</div>
	</div>
	);
};