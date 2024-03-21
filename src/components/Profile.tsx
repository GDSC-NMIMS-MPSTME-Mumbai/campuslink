export default function Profile() {
    return (
        <div className="bg-white sm:w-[38rem] md:w-[45rem] lg:w-[55rem] xl:w-[60rem] w-[80vw] h-[26rem] sm:h-[23rem] mt-28 rounded-3xl border-[#d4dbdb] border-2">

            <div className="upper-section bg-[url('https://c4.wallpaperflare.com/wallpaper/229/784/973/the-sky-clouds-hong-kong-morning-hong-kong-hd-wallpaper-preview.jpg')] bg-cover bg-center bg-no-repeat w-full h-1/2 rounded-t-3xl relative ">

                <div className="profile-image absolute top-[5vh] left-[4vw] cursor-pointer">
                    <img src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=" 
                    alt="Profile-Image" 
                    className="h-28 w-28 rounded-full object-cover border-4" />
                </div>

                <div className="edit-icon w-10 h-10 rounded-full bg-[#d3d7d3] flex items-center justify-center absolute right-5 top-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#17b169" viewBox="0 0 24 24" strokeWidth={1} stroke="#d3d7d3" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </div>

            </div>
            <div className="lower-section ml-5 mt-5">

                <div className="name-icons flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">John Appleseed</h1>
                    <ul className="icons w-30 sm:w-36 flex">
                        <li className="w-5 sm:w-10 h-5 mr-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Github"><path d="M19.7.5H4.3C2.2.5.5 2.2.5 4.3v15.4c0 2.1 1.7 3.8 3.8 3.8h15.4c2.1 0 3.8-1.7 3.8-3.8V4.3c0-2.1-1.7-3.8-3.8-3.8zm-4.9 20.2c-.5.1-.7 0-.9-.2-.2-.2-.3-.4-.3-.7v-2.3c0-.8-.3-1.1-.4-1.2-.1-.1-.2-.3-.1-.5s.2-.3.4-.3c1.8-.2 3.4-.8 3.4-3.7 0-.8-.2-1.4-.7-1.9-.2-.2-.2-.4-.2-.6.1-.2.3-.8 0-1.6-.3 0-.8.2-1.7.8-.1.1-.3.1-.4.1-.6-.2-1.3-.3-2-.3s-1.4.1-2 .3c-.1 0-.3 0-.4-.1-.7-.5-1.3-.7-1.6-.7-.2.8 0 1.4 0 1.6.1.1.1.3 0 .4-.5.5-.7 1.2-.7 1.9 0 2.9 1.7 3.5 3.4 3.7.3 0 .5.3.4.5 0 .3-.3.4-.5.4-1.8-.2-4.3-.9-4.3-4.6 0-.9.3-1.7.8-2.4-.2-.4-.3-1.2.1-2.2l.3-.3c.2-.1 1-.2 2.5.8.6-.2 1.3-.2 2-.2s1.4.1 2 .2c1.6-1 2.4-.9 2.5-.8.1 0 .2.1.3.3.4 1 .3 1.8.2 2.3.5.7.8 1.5.8 2.4 0 3.2-1.8 4.2-3.5 4.5.1.3.2.8.2 1.2v2.2c3.2-1.1 5.3-4.1 5.3-7.5 0-4.4-3.5-7.9-7.9-7.9s-7.9 3.6-7.9 7.9c0 3.4 2.2 6.5 5.4 7.5-.1-.1-.1-1.1-.1-1.8h-.4c-1.5 0-2.3-1-2.5-1.6-.1-.3.1-.5.3-.6.3-.1.5.1.6.3 0 .1.5 1.2 2.3.8.3-.1.5.1.6.4v2.5c0 .3-.1.5-.3.7-.1.1-.3.2-.6.2H9c-3.7-1.2-6.1-4.6-6.1-8.5 0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9c.2 4-2.3 7.3-5.9 8.6z" fill="#000000" className="color000000 svgShape"></path></svg>
                        </li>
                        <li className="w-5 sm:w-10 h-5 mr-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Mail"><path d="M6.762 0A6.748 6.748 0 0 0 0 6.764v18.474A6.746 6.746 0 0 0 6.762 32h18.476A6.746 6.746 0 0 0 32 25.238V6.764A6.748 6.748 0 0 0 25.238 0H6.762zm2.744 11h14a.5.5 0 0 1 .5.5v1.959a.5.5 0 0 1 0 .076V20.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-6.922a.5.5 0 0 1 0-.148V11.5a.5.5 0 0 1 .5-.5zm.5 1v1.191l6.5 3.217 6.5-3.215V12h-13zm0 2.309V20h13v-5.691l-6.277 3.105a.5.5 0 0 1-.444 0l-6.28-3.105z" fill="#000000" className="color000000 svgShape"></path></svg>
                        </li>
                        <li className="w-5 sm:w-10 h-5 mr-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15697)" fill="#000000" className="color000000 svgShape"><rect width="512" height="512" fill="#000000" rx="60" className="color000000 svgShape"></rect><path fill="#ffffff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z" className="colorffffff svgShape"></path></g><defs><clipPath id="clip0_84_15697"><rect width="512" height="512" fill="#ffffff" className="colorffffff svgShape"></rect></clipPath></defs></svg>
                        </li>
                        <li className="w-5 sm:w-10 h-5 mr-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="Linkedin"><g fill="none" fill-rule="evenodd"><g fill="#000000" className="color000000 svgShape"><rect width="72" height="72" fill="#000000" rx="4" className="color117eb8 svgShape"></rect><path fill="#ffffff" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z" className="colorffffff svgShape"></path></g></g></svg>
                        </li>
                    </ul>
                </div>

                <div className="email">
                    <i><p className="text-sm font-medium text-gray-600 ">@john_appleseed</p></i>
                </div>

                <div className="bio mt-4 sm:w-[30rem] w-[20rem] text-wrap">
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus vitae totam architecto? Sapiente nam exercitationem voluptate suscipit amet doloremque magni tempora eius! Mollitia iure facere nemo iusto? Quam, expedita?</p>
                </div>
            </div>
        </div>
    );
}