import React, { useState } from "react";
import { NavLink } from "../NavLink/NavLink";
import { Transition } from "@headlessui/react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='bg-brand-1 pb-16 pt-5 md:pt-5 md:pb-3'>
			<nav className='relative z-20'>
				<div className='container mx-auto'>
					<div className='text-black'>
						<div className='ml-5 flex items-center justify-between pl-10 md:ml-0'>
							<div className='hidden items-center space-x-10 md:flex '>
								<NavLink href='/home'>
									<a className={styles.linkUnderlineBlack}>
										<div className='font-base link pb-2 text-black'>Home</div>
									</a>
								</NavLink>
								<NavLink href='/allprojects'>
									<a className={styles.linkUnderlineBlack}>
										<div className='font-base link pb-2 text-black'>All Projects</div>
									</a>
								</NavLink>
								<NavLink href='/blogs'>
									<a className={styles.linkUnderlineBlack}>
										<div className='font-base link pb-2 text-black'>Blogs</div>
									</a>
								</NavLink>
								<NavLink href='/aboutme'>
									<a className={styles.linkUnderlineBlack}>
										<div className='font-base link pb-2 text-black'>About Me</div>
									</a>
								</NavLink>
							</div>
							<div>
								<div className='hidden h-24 items-center justify-center md:flex'>
									{" "}
									<div className='text-brand-3  hover:bg-brand-4 bg-brand-white  border-brand-3 mb-2 mr-28 transform cursor-default border-4 py-2 px-6 uppercase shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:text-white hover:shadow-xl md:border-2 md:px-8'>
										<Link href='/home#contact'>Contact</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='absolute right-5 top-2 -mr-2 flex md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='bg-brand-1 text-brand-4 hover:text-brand-1 border-brand-4 hover:bg-brand-4 inline-flex items-center justify-center rounded-xl border-2 p-1 transition duration-300 ease-in-out focus:outline-none '
								aria-controls='mobile-menu'
								aria-expanded='false'
							>
								<span className='sr-only'>Open main menu</span>
								{!isOpen ? (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								) : (
									<svg
										className='block h-6 w-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterhref='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leavehref='opacity-0 scale-95'
				>
					{(ref) => (
						<div className='md:hidden ' id='mobile-menu'>
							<div ref={ref} className=' bg-brand-1   mx-auto pt-2 text-center'>
								<NavLink href='/home'>
									<a className={styles.linkUnderlineBlack}>
										<div className='text-brand-2 hover:text-brand-2 border-brand-2 block w-full border-b  px-3 py-3 text-base font-semibold hover:bg-white mt-12'>
											Home
										</div>
									</a>
								</NavLink>
								{/* <NavLink
									href='/allprojects'
									className='text-brand-2 hover:text-brand-2 border-brand-2 block w-full border-b  px-3 py-3 text-base font-semibold hover:bg-white'
									activeStyle={{
										backgroundColor: "#FFFFFF",
										color: "#000000",
										fontWeight: "600",
										backgroundSize: "100% 0px",
									}}
								>
									All Projects
								</NavLink>
								<NavLink
									href='/blogs'
									className='text-brand-2 hover:text-brand-2 border-brand-2 block w-full border-b  px-3 py-3 text-base font-semibold hover:bg-white'
									activeStyle={{
										backgroundColor: "#FFFFFF",
										color: "#000000",
										fontWeight: "600",
										backgroundSize: "100% 0px",
									}}
								>
									Blogs
								</NavLink>
								<NavLink
									href='/aboutme'
									className='text-brand-2 hover:text-brand-2 border-brand-2 block w-full border-b  px-3 py-3 text-base font-semibold hover:bg-white'
									activeStyle={{
										backgroundColor: "#FFFFFF",
										color: "#000000",
										fontWeight: "600",
										backgroundSize: "100% 0px",
									}}
								>
									About Me
								</NavLink> */}
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default Header;
