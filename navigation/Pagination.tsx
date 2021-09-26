import './Pagination.scss';

export const Pagination = () => {
	return (
	<div className="Pagination">
		<div className="pagination-container">
			<div className="flex pagination">
				<div className="flex pagination-child">
					<div className="pagination-first">First</div>
					<div className="pagination-prev">Prev</div>
				</div>
				<div className="flex pagination-pages">
					<span className="circle">1</span>
					<span className="circle">2</span>
					<span className="circle">3</span>
					<span className="circle">4</span>
					<span className="circle">5</span>
				</div>
				<div className="flex pagination-child">
					<div className="pagination-next">Next</div>
					<div className="pagination-last">Last</div>
				</div>
			</div>
		</div>
	</div>
	);
};