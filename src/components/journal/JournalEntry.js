import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, date, title, body, url }) => {
	//https://www.thehealthydogco.com/wp-content/uploads/2020/10/How-Big-Can-Huskies-Get_The-Healthy-Dog-Co-1-1080x675.jpg
	const dispatch = useDispatch();

	// N O T E  D A T E   -   moment
	const noteDate = moment(date);

	// H A N D L E  E N T R Y  C L I C K
	const handleEntryClick = () => {
		dispatch(activeNote(id, { date, title, body, url }));
	};

	return (
		<div
			className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
			oncClick={handleEntryClick}
		>
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: "cover",
					backgroundImage: `url(${url})`,
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">{title}</p>
				<p className="journal__entry-content">Excelente servicio jrhfdsnmf.</p>
			</div>

			<div className="journal__entry-date-box">
				<span>{noteDate.format("dddd")}</span>
				<h4>{noteDate.format("Do")}</h4>
			</div>
		</div>
	);
};
