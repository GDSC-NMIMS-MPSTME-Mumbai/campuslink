export function Navbar() {
    return (
        <nav className="fixed top-0 py-3 bg-[#fefffe] border-b-2 border-[#17b169] 
        shadow-md shadow-[#17b169] border-opacity-5 w-full box-border z-10">
            <div className="flex justify-center items-center w-full">
                <div className="left-section flex items-center mr-5 sm:mr-[20vw]">
                    <div className="logo h-10 w-10 bg-[#c0c0c0] rounded-full mr-5">
                    </div>
                    <div className="search-bar">
                        <div className='mx-auto'>
                            <div className="flex items-center w-[20vw] h-10 border-2 border-[#cfcfcf] rounded-full focus-within:shadow-lg bg-[#fefffe] overflow-hidden">
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                    type="text"
                                    id="search"
                                    placeholder="Search" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-section flex items-center">
                    <ul className="flex font-semibold">
                        <li className="mx-2 sm:mx-4 cursor-pointer">Home</li>
                        <li className="mx-2 sm:mx-4 cursor-pointer">Events</li>
                        <li className="mx-2 sm:mx-4 cursor-pointer">Jobs</li>
                    </ul>
                    <div className="profile-icon h-10 w-full border-2 border-[#17b169] px-1 py-5 rounded-full flex items-center ml-1 sm:ml-10 cursor-pointer">
                        <div className="profile-img">
                            <img src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" 
                            alt="Profile-Image"
                            className="h-9 w-9 sm:block hidden rounded-full object-cover"
                            />
                        </div>
                        <div className="bottom-arrow-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#17b169" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}