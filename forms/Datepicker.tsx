import './Datepicker.scss';

import { Button } from '../general';
import { Input }  from './Input';
import { Calendar } from '../ui';

export const DatePicker = (props:any) => {
	return (
        
        <div style={{width:'100%', position:'relative'}}>
            <div className="datepicker-input flex">
                <Input className="datepicker-select-input"></Input>
                <Button className="datepicker-select-button">
                    <i className="fas fa-calendar"></i>
                </Button>
            </div>
            <div className="datepicker-calendar">
                <Calendar ></Calendar>
            </div>
        </div>
	);
};