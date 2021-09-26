import React, { useState, useEffect } from 'react';

import './Calendar.scss';

interface Calendar {
	days: string[];
	dates: Date[][];
}

export const Calendar = () =>{
	const [calendarDates, setCalendar] = useState<Calendar>(
		{
			'days':[], 
			'dates':[[]]
		}
	);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	let currentMonth:Date = new Date();
	let currentMonthString:string = '';
	let showYear:Boolean = false;
	let years:number[] = [];
	let currentYear = 2021;

	const getDaysInMonth = (month:number, year:number):Date[] => {
		var date = new Date(year, month, 1);
		var days = [];
		while (date.getMonth() === month) {
		  days.push(new Date(date));
		  date.setDate(date.getDate() + 1);
		}
		return days;
	  }
	
	  const getCalendarDates = (date:Date):Date[] =>{
		let month        = date.getMonth();
		let year         = date.getFullYear();
		let currentDates = getDaysInMonth(month, year);
		let currentDay   = currentDates[0].getDay();
		let prevDays     = (currentDay-(currentDay*2));
		let lastDay      = 6 - currentDates[currentDates.length-1].getDay();
		let pyear        = ((month > 0) && (month <= 11)) ? year : year - 1;
		let nyear        = (month > 11) ? year : year + 1;
		let pmonth       = (month > 0) ? month-1 : 11;
		let nmonth       = (month > 11) ? month-1 : 0;
		let prevDates    = prevDays == 0 ? getDaysInMonth(pmonth, pyear).slice(-7) : getDaysInMonth(pmonth, pyear).slice(prevDays);
		let nextDates    = lastDay == 0 ? getDaysInMonth(nmonth, nyear).slice(0,7) : getDaysInMonth(nmonth, nyear).slice(0, lastDay);
		let finalDates   = [...prevDates, ...currentDates, ...nextDates];
		return finalDates;
	  }

	const setCalendarDates = (date:Date): void => {
		let months   = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let dayFull  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let daySmall = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];    
		let dayTiny  = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
		let dates = getCalendarDates(date);
		let udates:any = [];
		let k = 0;
		for (let i in dates){
		  k = k*7;
		  udates.push(dates.splice(k, 7));
		  if( k > dates.length ){break;}
		};
		let cd = {'days':dayTiny, 'dates':udates};
		//console.log(date, cd, udates);
		setCalendar(
			prevState => ({
				...prevState, 
				'days': [...dayTiny], 
				'dates': [...udates] 
			})
		);
	  }

	const prevDate = () => {
		let date = selectedDate;
		let pdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		date.setMonth(date.getMonth() - 1);
		date.setDate(1);
		if(pdate.getFullYear() != date.getFullYear()){
		  date = new Date(date.getFullYear(), 11, 1);
		}
		setCalendarDates(date);
	};

	const nextDate = () => {
		var date = selectedDate;
		var pdate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		date.setMonth(date.getMonth() + 1);
		date.setDate(1);
		if(pdate.getFullYear() != date.getFullYear()){
		  date = new Date(date.getFullYear(), 0, 1);
		}
		setCalendarDates(date);
	};

	const getSelectedDateString = () =>{
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(selectedDate);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(selectedDate);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(selectedDate);
		return `${mo} ${ye}`;
	};

	useEffect(() => {
		setCalendarDates(selectedDate);
	}, []);
	useEffect(() => {
		
		console.log(calendarDates);
	}, [calendarDates]);

	return (
	<>
		<div className="calendar">
			<div className="calendar-header flex-center-space-between">
				<div className="dh-op" style={{width: '50px'}} onClick={prevDate}>&laquo;</div>
				<div className="dh-op flex-1">{getSelectedDateString()}</div>
				<div className="dh-op" style={{width: '50px'}} onClick={nextDate}>&raquo;</div>
			</div>
			<div className="calendar-content">
            <table>
                <thead>
                    <tr>
					{calendarDates.days.map((item, key) =>{return <th key={key}>{item}</th>})}
                    </tr>
                </thead>
                <tbody>
				{calendarDates.dates.map((item, key) =>{
                    return <tr key={key}>
						{calendarDates.dates[key].map((idate, ikey) =>{
						return <td key={ikey}>{idate.getDate() < 10 ? '0'+idate.getDate() : idate.getDate()}</td>
						})
						}
                    </tr>
					})
				}
                </tbody>
            </table>
			</div>
		</div>
	</>
	);
};