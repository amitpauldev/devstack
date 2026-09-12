import logo from "../assets/logo-text.png";

const Footer = () => {
	return (
		<footer className="border-t border-gray-200 bg-white mt-20">
			<div className="wrapper py-10">
				<div className="flex flex-col md:flex-row justify-between flex-wrap gap-10">
					<div className="">
						<div className="flex items-center gap-2">
							<img src={logo} className="h-7" />
						</div>
						<p className="mt-3 max-w-sm text-xs leading-5 text-gray-500">
							Curated tools, technologies, and resources for developers building
							modern software.
						</p>

						<div className="mt-5 flex gap-5 text-xs text-gray-700 font-medium">
							<a
								href="https://github.com/amitpauldev"
								className="transition hover:text-myPink"
							>
								GitHub
							</a>

							<a href="#" className="transition hover:text-myPink">
								Twitter
							</a>

							<a
								href="https://www.linkedin.com/in/amitpauldev/"
								className="transition hover:text-myPink"
							>
								LinkedIn
							</a>
						</div>
					</div>

					<div className="flex-1 ml-0 md:ml-50 flex flex-col gap-10 sm:flex-row sm:gap-20">
						<div>
							<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
								Product
							</h3>

							<ul className="mt-4 space-y-3 text-xs text-gray-500">
								<li>
									<a href="#home" className="hover:text-myPink">
										Home
									</a>
								</li>

								<li>
									<a href="#technologies" className="hover:text-myPink">
										Technologies
									</a>
								</li>

								<li>
									<a href="#technologies" className="hover:text-myPink">
										Projects
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
								Company
							</h3>

							<ul className="mt-4 space-y-3 text-xs text-gray-500">
								<li>
									<a
										href="https://github.com/amitpauldev"
										className="hover:text-myPink"
									>
										About
									</a>
								</li>

								<li>
									<a
										href="https://github.com/amitpauldev"
										className="hover:text-myPink"
									>
										Contact
									</a>
								</li>

								<li>
									<a
										href="https://github.com/amitpauldev"
										className="hover:text-myPink"
									>
										Careers
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
								Legal
							</h3>

							<ul className="mt-4 space-y-3 text-xs text-gray-500">
								<li>
									<a href="#" className="hover:text-myPink">
										Privacy Policy
									</a>
								</li>

								<li>
									<a href="#" className="hover:text-myPink">
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-7 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Dev Stack. All rights reserved.</p>

					<div className="flex gap-6">
						<a href="#" className="hover:text-gray-700">
							Privacy
						</a>

						<a href="#" className="hover:text-gray-700">
							Terms
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
