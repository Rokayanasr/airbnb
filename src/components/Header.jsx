import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='flex justify-between content-center'>
        {/* ======== logo ======== */}
        <Link to={'/'} className="logo centering">
            <svg enableBackground="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg" id="fi_2111320"><path d="m12 20.628c-1.35 1.51-3.098 3.017-5.127 3.262l-.002-.009c-1.996.836-5.851-1.238-5.851-5.001 0-2.49 3.197-8.004 6.581-15.119.892-1.849 1.815-3.761 4.389-3.761 2.593 0 3.476 1.827 4.562 4.079 6.427 12.813 6.427 13.52 6.427 14.801.001 4.404-5.453 7.93-10.979 1.748zm9.48-1.748c0-1.962-6.379-14.365-6.432-14.468-.923-1.913-1.478-2.912-3.038-2.912-1.845 0-2.323 1.472-3.215 3.238-6.275 12.509-6.275 13.194-6.275 14.142 0 2.994 3.683 6.055 8.486.608-1.994-2.576-3.006-4.789-3.006-6.578 0-2.738 2.012-4.17 4-4.17s4 1.432 4 4.17c0 1.789-1.011 4.002-3.006 6.578 4.602 5.219 8.486 2.556 8.486-.608zm-9.48-8.64c-1.244 0-2.5.826-2.5 2.67 0 1.375.863 3.241 2.5 5.408 1.637-2.167 2.5-4.033 2.5-5.408 0-1.844-1.256-2.67-2.5-2.67z" fill="#FF385C"></path></svg>
            <p className="text-primary font-bold text-2xl">airbnb</p>
        </Link>
        {/* ======== search ======== */}
        <div className='centering border shadow-md shadow-gray-300 gap-2 border-gray-300 rounded-full py-2 px-4'>
            <div className='text-sm font-semibold'>Anywhere</div>
            <div className="border-gray-300 border-l"></div>
            <div className='text-sm font-semibold'>Any week</div>
            <div className="border-gray-300 border-l"></div>
            <div className='text-sm text-gray-500'>Add guests</div>
            <button className='bg-primary p-2.5 rounded-full'>
                <svg className='fill-white' clipRule="evenodd" fillRule="evenodd" height="20" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 1707 1707" width="20" xmlns="http://www.w3.org/2000/svg" id="fi_7079548"><g id="Layer_x0020_1"><path d="m623 1250c-166 0-323-65-440-183-118-118-183-274-183-440 0-167 65-323 183-441 117-118 274-182 440-182s323 64 441 182c117 118 182 274 182 441 0 166-65 322-182 440-118 118-275 183-441 183zm0-140c-129 0-251-50-342-141-91-92-142-213-142-342 0-130 51-251 142-343 91-91 213-141 342-141s251 50 342 141c189 189 189 496 0 685-91 91-213 141-342 141z"></path><path d="m1198 1309c-8 0-16-3-22-9l-134-134c23-18 44-36 64-57 23-22 43-46 62-71l135 135c12 12 12 31 0 43-6 5-13 8-21 8-7 0-13-2-18-6l-39 48c5 11 3 24-6 34-6 6-14 9-21 9z"></path><path d="m1577 1703c-34 0-67-13-91-38l-282-281c-24-24-37-57-37-91 0-35 13-68 37-92 25-24 57-38 92-38s67 14 92 38l281 281c50 51 50 133 0 183-25 25-57 38-92 38z"></path><path d="m421 829c-112-112-112-293 0-405 11-12 11-31 0-42-12-12-31-12-43 0-135 135-135 354 0 489 6 6 14 9 21 9 8 0 16-3 22-9 11-11 11-30 0-42z"></path></g></svg>
            </button>
        </div>
        {/* ======== user ======== */}
        <div className='centering border gap-3 border-gray-300 rounded-full py-2 px-4'>
            <svg className='fill-gray-800' width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="fi_14267374"><g id="_04" data-name="04"><path d="m57 30h-50a2 2 0 0 0 0 4h50a2 2 0 0 0 0-4z"></path><path d="m7 19h50a2 2 0 0 0 0-4h-50a2 2 0 0 0 0 4z"></path><path d="m57 45h-50a2 2 0 0 0 0 4h50a2 2 0 0 0 0-4z"></path></g></svg>
                <Link to="/login">
                    <svg className='fill-neutral-500' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 45.532 45.532" xmlSpace="preserve"><path d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 11.001 15.06 7.53 7.53 0 01-.001-15.06zm-.005 32.771a16.708 16.708 0 01-10.88-4.012 3.209 3.209 0 01-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 01-1.125 2.438 16.702 16.702 0 01-10.881 4.013z" /></svg>
                </Link>
        </div>
    </header>
  )
}

export default Header