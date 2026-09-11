import banner from "../assets/banner-stack.png";

const Hero = () => {
	return (
		<div id="home" className="wrapper">
			<div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-0">
				<div className="md:w-1/2 text-center md:text-left">
					<h1 className="text-5xl font-bold mb-6">
						Build Your Ideal <br />
						<span className="gradient"> Development Stack</span>
					</h1>
					<p className="text-lg mb-10 md:mb-16">
						Explore frontend, backend, database, and tooling options, compare
						them side by side, and put together the stack that fits your next
						project.
					</p>

					<div className="flex gap-4 text-sm justify-center md:justify-start">
						<button className="btn-gradient px-4 py-2 rounded-lg text-white cursor-pointer hover:opacity-90">
							Explore Technologies
						</button>
						<button className="px-10 py-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-100">
							Learn More
						</button>
					</div>
				</div>
				<div className="md:w-1/2 flex justify-center">
					<img src={banner} alt="Banner" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
