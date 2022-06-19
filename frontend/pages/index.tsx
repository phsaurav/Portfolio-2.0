import { Button } from "@mui/material";
import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Slider from "@mui/material/Slider";

const Home: NextPage = () => {
	return (
		<div>
			<Header></Header>
			<h1 className='text-3xl font-bold underline bg-blue-200'> This is the home page!</h1>
			<div className='h-[40vw]  bg-blue-400'>
				<h1 className='h-32 bg-red-300'>This</h1>
			</div>
			<Button variant='contained' className='ml-10 bg-green-500 shadow-xl'>
				Contained
			</Button>
			<Slider
        defaultValue={30}
        className="text-teal-600 shadow-lg"
        componentsProps={{ thumb: { className: 'rounded-sm' } }}
      />
		</div>
	);
};

export default Home;
