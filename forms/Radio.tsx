import { isPropertySignature } from 'typescript';
import './Radio.scss';

export const Radio = (props:any) => {
	return (
	<div className="Radio">
		<label className="flex" style={{margin: '20px 0px'}}>
			<span><input type="radio" className="radio" /></span>
			<span>{props.children}</span>
		</label>
	</div>
	);
};