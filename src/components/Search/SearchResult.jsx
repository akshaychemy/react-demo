import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result, id, data, textColor }) => {
	const handleClick = (data) => {
	};

	return (
		<div className="search-result" onClick={() => handleClick(data)}>
			<div className={textColor === 'dark' ? "leftDark" : "left"}>{result}</div>
		</div>
	);
};
