import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
	const router = useRouter();
	const { blogId } = router.query;
	return (
		<>
			<h1>This is the dynamic route for: {blogId}</h1>
		</>
	);
};

export default Blog;
