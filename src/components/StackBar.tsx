import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../types/technology";
import StackItem from "./StackItem";
import { Flip, toast } from "react-toastify";

interface TechnologyGridProps {
	myStacks: Technology[];
	setMyStacks: Dispatch<SetStateAction<Technology[]>>;
}

const StackBar = ({ myStacks, setMyStacks }: TechnologyGridProps) => {
	const handleRemoveAll = () => {
		setMyStacks([]);
		toast.error("All technologies removed", {
			position: "bottom-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Flip,
		});
	};

	return (
		<div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col">
			<h3 className="text-xl font-bold mb-3">Your Stack</h3>
			<div className=" text-gray-500">
				{myStacks.length === 1
					? `1 Technology Selected`
					: myStacks.length > 1
						? `${myStacks.length} Technologies Selected`
						: "No technologies slected yet"}
			</div>
			<div className="flex flex-col gap-2 mt-4">
				{myStacks.map((technology) => (
					<StackItem
						key={technology.id}
						technology={technology}
						setMyStacks={setMyStacks}
					/>
				))}

				{myStacks.length > 0 && (
					<button
						onClick={handleRemoveAll}
						className="w-full text-sm font-bold bg-red-50 text-red-600 border border-red-200 rounded-lg py-2 mt-8 cursor-pointer"
					>
						Remove All
					</button>
				)}
			</div>

			{myStacks.length === 0 && (
				<div className="text-sm text-gray-400 mt-8 border border-dashed border-gray-400 py-8 text-center rounded-xl">
					Your Stack is Empty
				</div>
			)}
		</div>
	);
};

export default StackBar;
