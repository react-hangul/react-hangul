import React, { useState, useEffect } from 'react';

import './Input.scss';

export const Input = (props:any) => {
	const [errors, setErrors] = useState<string[]>([]);
	const validateInput = (e:any) => {
		if(props.validation){
			const errs = props.validation.validate(e.target.value);
			setErrors(errs);
			console.log(errs);
			return props.onChange ? props.onChange(e):null;
		}
	};
	const onBlur = (e:any) => {
		validateInput(e);
		return props.onBlur ? props.onBlur(e):null;
	};
	return (
	<>
		<div className={props.className}>
			<input 
				type="text" 
				className="form-text"  
				value={props.value}
				onClick={props.onClick}
				onFocus={props.onFocus}
				onKeyUp={props.onKeyUp}
				onBlur={onBlur}
				onChange={(e)=>validateInput(e)}
			/>
			{
				errors.map((e:string, key:number) => {
					return(
						<div className="form-error" key={key}>{e}</div>
					)
				})
			}
		</div>
	</>
	);
};