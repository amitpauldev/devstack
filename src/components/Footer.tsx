const Footer = () => {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="wrapper py-10">
				{/* Main Footer */}
				<div className="grid grid-cols-1 gap-10 md:grid-cols-4">
					{/* Brand */}
					<div className="md:col-span-2">
						<div className="flex items-center gap-2">
							{/* Logo */}
							<img src="" alt="" className="h-5 w-5" />

							<h2 className="text-base font-semibold">
								Dev <span className="text-myPink">Stack</span>
							</h2>
						</div>

						<p className="mt-3 max-w-sm text-xs leading-5 text-gray-500">
							Curated tools, technologies, and resources for developers building
							modern software.
						</p>

						{/* Social Links */}
						<div className="mt-5 flex gap-5 text-xs text-gray-700">
							<a href="#" className="transition hover:text-myPink">
								GitHub
							</a>

							<a href="#" className="transition hover:text-myPink">
								Twitter
							</a>

							<a href="#" className="transition hover:text-myPink">
								LinkedIn
							</a>
						</div>
					</div>

					{/* Product */}
					<div>
						<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
							Product
						</h3>

						<ul className="mt-4 space-y-3 text-xs text-gray-500">
							<li>
								<a href="#" className="hover:text-myPink">
									Home
								</a>
							</li>

							<li>
								<a href="#technologies" className="hover:text-myPink">
									Technologies
								</a>
							</li>

							<li>
								<a href="#" className="hover:text-myPink">
									Projects
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
							Company
						</h3>

						<ul className="mt-4 space-y-3 text-xs text-gray-500">
							<li>
								<a href="#" className="hover:text-myPink">
									About
								</a>
							</li>

							<li>
								<a href="#" className="hover:text-myPink">
									Contact
								</a>
							</li>

							<li>
								<a href="#" className="hover:text-myPink">
									Careers
								</a>
							</li>
						</ul>
					</div>

					{/* Legal */}
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

				{/* Bottom Footer */}
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
