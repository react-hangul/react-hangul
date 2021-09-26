import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Button } from '../general/Button';
import './Toastr.scss';

export const Toastr = (props:any) => {
	const classname = props.type ? "toastr "+props.type : "toastr primary";
	const [showToastr, setShowToastr] = useState(true);
	const clickClose = () => {
		setShowToastr(false)
	};
	return (
	<>
	{ showToastr === true ? <div className={classname} onClick={clickClose}>
			<div className="toastr-text">{props.children}</div>
		</div>
		:
		null
	}
	</>
	);
};

export const ToastrWithCloseButton = (props:any) => {
	const classname = props.type ? "toastr "+props.type : "toastr primary";
	const [close, setClose] = useState(true);
	const [showToastr, setShowToastr] = useState(true);
	const clickClose = () => {
		setShowToastr(false)
	};
	return (
	<>
	{ showToastr === true ? <div className={classname}>
			<div className="toastr-text">{props.children}</div>
			{ close ===true ? <div className="toastr-close" onClick={clickClose}>&times;</div> : null}
		</div>
		:
		null
	}
	</>
	);
};

const NotificationContainer = (props:any) => {
	console.log('======================');
	return (
		<>
			<div id="notification-container">

			</div>
		</>	
	);
};

const ToastrNotificationContainer = (props:any) => {
	console.log('###############');
	/*
	  ReactDOM.createPortal(
		<Toastr></Toastr>,
		<NotificationContainer />
		)
	*/
	return (
	  ReactDOM.createPortal(
		 <NotificationContainer />,
		 document.body
	  )
	);
  };

export const ToastrNotification = (props:any) => {
	return ToastrNotificationContainer(props);
};