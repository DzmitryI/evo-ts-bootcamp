import axios from "axios";

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export default axios.create({
	baseURL: "https://api.unsplash.com",
	responseType: "json",
	headers: {
		Authorization: `Client-ID ${accessKey}`,
	}
});
