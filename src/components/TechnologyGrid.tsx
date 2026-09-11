import { use } from "react";
import type { Technology } from "../types/technology";

// const technologiesPromise = fetch("/data/technologies.json").then(
// 	(response) => {
// 		if (!response.ok) {
// 			throw new Error("Failed to fetch technologies");
// 		}
// 		return response.json();
// 	}
// ) as Promise<Technology[]>;

const fetchTechnologies = async (): Promise<Technology[]> => {
	const response = await fetch("/data/technologies.json");
	if (!response.ok) {
		throw new Error("Failed to fetch technologies");
	}
	return response.json();
};

const technologiesPromise = fetchTechnologies();

const TechnologyGrid = () => {
	const technologies = use(technologiesPromise);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{technologies.map((technology) => (
				<div
					key={technology.id}
					className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col"
				>
					<div className="flex justify-between gap-2 mb-4">
						<img
							src={technology.icon}
							alt={technology.name}
							className="w-10 h-10"
						/>
						<div className="badge border-none bg-blue-50 text-blue-500">
							{technology.badge}
						</div>
					</div>
					<h3 className="text-xl font-bold mb-3">{technology.name}</h3>
					<p className="mb-4 text-sm text-gray-500">{technology.description}</p>

					<div className="w-full h-[1.5px] bg-gray-100"></div>

					<div className="flex justify-between items-center mt-4 text-[12px] text-gray-500">
						<p className="bg-gray-100 px-2 py-1 rounded-md">
							{technology.category}
						</p>
						<p>{technology.difficulty}</p>
						<p className="text-black">⭐ {technology.rating}</p>
					</div>

					<button className="w-full bg-gray-950 hover:bg-gray-800 text-white py-2 text-sm rounded-lg mt-3 cursor-pointer">
						Add to Stack
					</button>
				</div>
			))}
		</div>
	);
};

export default TechnologyGrid;
