import logo from "../assets/logo-text.png";

const Navbar = () => {
	return (
		<div className="wrapper sticky top-0 z-50 bg-white">
			<div className="flex justify-between items-center py-4">
				<div>
					<img src={logo} alt="Logo" className="w-32" />
				</div>
				<div className="flex items-center space-x-4 text-sm">
					<a href="#home" className="text-gray-700 hover:text-gray-900">
						Home
					</a>
					<a href="#technologies" className="text-gray-700 hover:text-gray-900">
						Technologies
					</a>
					<a href="#projects" className="text-gray-700 hover:text-gray-900">
						Projects
					</a>
					<a href="#about" className="text-gray-700 hover:text-gray-900">
						About
					</a>
					<a href="#contact" className="text-gray-700 hover:text-gray-900">
						Contact
					</a>
				</div>

				<div className="flex items-center gap-2 text-sm">
					<button className="px-4 py-1.5 rounded-2xl cursor-pointer">
						Sign in
					</button>
					<button className="px-4 py-1.5 bg-myPink rounded-2xl text-white cursor-pointer">
						Sign Up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
