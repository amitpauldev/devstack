import React, { type Dispatch, type SetStateAction } from "react";
import type { Technology } from "../types/technology";

interface StackItemProps {
	technology: Technology;
	setMyStacks: Dispatch<SetStateAction<Technology[]>>;
}

const StackItem = ({ technology, setMyStacks }: StackItemProps) => {
	const handleRemove = () => {
		setMyStacks((prev) => prev.filter((item) => item.id !== technology.id));
	};
	return (
		<div className="flex justify-between items-center border-2 border-gray-200 rounded-lg p-3">
			<div className="flex items-center gap-2">
				<img src={technology.icon} className="w-10 h-10" />
				<div className="flex flex-col">
					<h5 className="font-bold">{technology.name}</h5>
					<p className="text-xs text-gray-500">{technology.difficulty}</p>
				</div>
			</div>
			<div
				onClick={handleRemove}
				className="cursor-pointer border border-gray-200 text-gray-400 rounded-full px-2 py-1 hover:bg-red-50 hover:text-red-600"
			>
				X
			</div>
		</div>
	);
};

export default StackItem;
