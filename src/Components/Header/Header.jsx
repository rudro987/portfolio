const Header = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Education</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Contact Me</a>
      </li>
    </>
  );

  return (
    <div className="min-h-screen bg-banner bg-cover bg-no-repeat w-full z-0 relative">
      <div className="z-10">
        <div className="max-w-7xl mx-auto p-10 z-20">
        <div className="">
        <div className="navbar text-white p-0">
            <div className="navbar-start">
              <a className="text-3xl">Tanvir</a>
            </div>
            <div className="navbar-end">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-black"
                >
                  {navItems}
                </ul>
              </div>
              <ul className="menu menu-horizontal px-1 hidden lg:flex">
                {navItems}
              </ul>
            </div>
          </div>
        </div>
          
          <div className="text-white w-full pt-60">
            <p className="text-[120px] leading-[120px] font-light">Hello!</p>
            <p className="font-semibold text-[84px]"><span className="font-normal">I&apos;m</span> Tanvir Hossain</p>
            <p className="text-2xl font-semibold">A MERN Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bgFrom to-bgTo opacity-80 -z-10"></div>
    </div>
  );
};

export default Header;
