import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './style.module.css';
// import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

export default function MyApp() {
	const [today, onChangeToday] = useState(new Date());

	const onChange = () => {
		onChangeToday(today);
	};

	const marks = ['15-01-2022', '03-01-2022', '07-01-2022', '12-01-2022', '13-01-2022', '15-01-2022'];

	return (
		<div>
			<Calendar
				className={'react-calendar'}
				onChange={onChange}
				value={today}
				locale="ko-KR"
				tileClassName={({ date, view }) => {
					if (marks.find(x => x === moment(date).format('DD-MM-YYYY'))) {
						return 'highlight';
					}
				}}
			/>
		</div>
	);
}
