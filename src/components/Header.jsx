import { useEffect, useState } from 'react'

import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

//for search box
//import { dummyDataSearch } from '../../assets/DummyDataSearch.js'
// import logo from '../../assets/logo/canvas-logo.svg'
import { SearchResultsList } from './Search/SearchResultsList.jsx';
import axios from "axios";

const Header = () => {
	const [input, setInput] = useState("");
	const [results, setResults] = useState([]);
	const [data, setData] = useState([]);

	const getData = async () => {
		return await axios.get(`https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098`)
		  .then((response) => {
			console.log("===>",response.data);
			setData(response?.data)
		  })
		  .catch((error) => {
			return false
		  })
	  }
	  useEffect(() => {
		getData()
	  }, [])


	//for search bar
	const fetchData = (value) => {
		const results = data.filter((user) => {
			return (
				user.first_name &&
				user.first_name.toLowerCase().includes(value)
			);
		});
		setResults(results);
	};

	const handleChange = (value) => {
		setInput(value);
		fetchData(value);
	};

	console.log("=12=>",input,results)

	return (
		<nav className="navbar fixed-top navbar-light menu">
			<div className="container-fluid">
				<div className="left">
					<h2>Team</h2>
				</div>
				
				<div className="input-wrapper">
					<SearchIcon id="search-icon" />
					<input
						placeholder={'search'}
						value={input}
						onChange={(e) => handleChange(e.target.value)}
						style={{ marginLeft: 4 }}
					/>
				</div>
				{results  && <SearchResultsList results={results} className="searchResultPosition" />}
				
			</div>
		</nav>
	)
}

export default Header