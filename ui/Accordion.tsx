import React from 'react';
import { useState } from 'react';
import { 
	Heading,
  } from '../../theme';
import './Accordion.scss';

export const AccordionItemHeading = (props:any) => {
	return (
		<>
			<Heading>
				{props.children}
			</Heading>
		</>
	);
};

export const AccordionItemInfo = (props:any) => {
	const classname = props.className ? "accordion-content "+props.className : "accordion-content";
	return (
		<>
			<div className={classname}>
				{props.children}
			</div>
		</>
	);
};

export const AccordionItem = (props:any) => {
	const change = () => {
		props.changeActive(props.heading);
	};
	return (
		<>
			<div className="accordion-child">
				<div className="accordion-header">
					<AccordionItemHeading>
						{props.heading}
					</AccordionItemHeading>
					{ props.active === props.heading ?
					<div onClick={change} style={{cursor: 'pointer'}}>
						<i className="fas fa-minus"></i>
					</div>
					:
					<div onClick={change} style={{cursor: 'pointer'}}>
						<i className="fas fa-plus"></i>
					</div>
					}
				</div>

				{props.children}
			</div>
			
		</>
	);
};

export const Accordion = (props:any) => {
	const activeValue = props.activeValue ? props.activeValue : '';
	const [active, setActive] = useState(activeValue);
	const changeActive = (value:string) => {
		setActive(value);
	};
	return (
	<>
		<div className="accordion">
			{props.data.map((item:any, key:number) => {
                return <AccordionItem key={key} heading={item.heading} active={active} changeActive={changeActive}>
                    <AccordionItemInfo className={` ${active === item.heading ? 'active': ''}`}>
                        {item.info}
                    </AccordionItemInfo>
                </AccordionItem>
            })
            } 
		</div>
	</>
	);
};