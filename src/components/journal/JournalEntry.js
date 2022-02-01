import React from "react";

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: "cover",
					backgroundImage:
						"url(https://www.thehealthydogco.com/wp-content/uploads/2020/10/How-Big-Can-Huskies-Get_The-Healthy-Dog-Co-1-1080x675.jpg)",
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo día</p>
				<p className="journal__entry-content">Excelente servicio jrhfdsnmf.</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>29</h4>
			</div>
		</div>
	);
};
