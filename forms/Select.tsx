import './Select.scss';

export const Select = (props:any) => {
	return (
	<div className="Select">
        <section className="in-select" style={{width:'100%', position:'relative', background:'#f7f9fc', borderColor: '#e4e9f2', fontSize: '1.25rem'}}>
            <div className="in-select-value">Select Color</div>
            <div className="in-select-options">
                <ul>
                    <li className="in-select-option">Red</li>
                    <li className="in-select-option">Blue</li>
                    <li className="in-select-option">Green</li>
                </ul>
            </div>
            <svg className="in-select-arrow" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="100%" height="100%" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"></rect><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"></path></g></g></svg>
        </section>
	</div>
	);
};