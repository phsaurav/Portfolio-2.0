//@ts-nocheck
import { withOGImage } from "next-api-og-image";

export default withOGImage({
	strategy: "query",
	template: {
		react: ({ students }) => {
			return (
				<div>
					<h1>{students}</h1>
					{/* {JSON.parse(students).map((student) => (
						<h1 key={student.id}>{student.id}</h1>
					))} */}
					{/* <OgCard post={post} /> */}
				</div>
			);
		},
	},
});
