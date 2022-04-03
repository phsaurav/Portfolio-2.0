import { Button } from "@mui/material";
import type { NextPage } from "next";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
	return (
		<div>
			<Header></Header>
			<h1 className='text-3xl font-bold underline bg-blue-200'> This is the home page!</h1>
			<Button variant='contained' className='ml-10 bg-green-500'>
				Contained
			</Button>
		</div>
	);
};

export default Home;
