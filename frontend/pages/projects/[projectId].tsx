import { useRouter } from "next/router";
import React from "react";

const Project = () => {
	const router = useRouter();
	const { projectId } = router.query;
	return (
		<>
			<h1>This is project: {projectId}</h1>
		</>
	);
};

export default Project;
