import { Button } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold underline bg-blue-200'> This is the home page!</h1>
			<Button variant='contained' className='ml-10 bg-slate-600'>
				Contained
			</Button>
		</div>
	);
};

export default Home;
