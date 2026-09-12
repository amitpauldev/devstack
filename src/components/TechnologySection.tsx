import { Suspense, useState } from "react";
import StackBar from "./StackBar";
import TechnologyGrid from "./TechnologyGrid";
import type { Technology } from "../types/technology";

const TechnologySection = () => {
	const [myStacks, setMyStacks] = useState<Technology[]>([]);
	return (
		<div id="technologies" className="wrapper pt-5">
			<div className="text-center md:text-left mb-10">
				<h2 className="text-4xl font-bold tracking-tight">
					Explore the <span className="text-myPink">Technologies</span>
				</h2>

				<p className="text-sm text-gray-500 mt-3">
					Pick and choose to build your ideal stack
				</p>
			</div>

			<div className="flex flex-col md:flex-row gap-6">
				<div className="flex-9/12">
					<Suspense fallback={<p>Loading technologies...</p>}>
						<TechnologyGrid myStacks={myStacks} setMyStacks={setMyStacks} />
					</Suspense>
				</div>
				<div className="flex-3/12">
					<StackBar myStacks={myStacks} setMyStacks={setMyStacks} />
				</div>
			</div>
		</div>
	);
};

export default TechnologySection;
