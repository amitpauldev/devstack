import React from "react";

const StackItem = () => {
	return (
		<div className="flex justify-between items-center border-2 border-gray-200 rounded-lg p-3">
			<div className="flex items-center gap-2">
				<img
					src="https://icon.icepanel.io/Technology/svg/Vue.js.svg"
					className="w-10 h-10"
				/>
				<div className="flex flex-col">
					<h5 className="font-bold">name</h5>
					<p className="text-xs text-gray-500">difficulty</p>
				</div>
			</div>
			<div className="cursor-pointer border border-gray-200 text-gray-400 rounded-full px-2 py-1 hover:bg-red-50 hover:text-red-600">
				X
			</div>
		</div>
	);
};

export default StackItem;
