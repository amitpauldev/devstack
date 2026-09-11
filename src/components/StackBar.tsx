import React from "react";
import StackItem from "./StackItem";

const StackBar = () => {
	return (
		<div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col">
			<h3 className="text-xl font-bold mb-3">Your Stack</h3>
			<div className=" text-gray-500">2 Technology Selected</div>
			<div className="flex flex-col gap-2 mt-4">
				<StackItem />
				<StackItem />
				<StackItem />
				<StackItem />
				<StackItem />

				<button className="w-full text-sm font-bold bg-red-50 text-red-600 border border-red-200 rounded-lg py-2 mt-8 cursor-pointer">
					Remove All
				</button>
			</div>

			<div className="text-sm text-gray-400 mt-8 border border-dashed border-gray-400 py-8 text-center rounded-xl">
				Your Stack is Empty
			</div>
		</div>
	);
};

export default StackBar;
