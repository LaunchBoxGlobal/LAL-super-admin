import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { SIDEBAR_LINKS } from "../../constants/sidebar";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToLink = (link, name) => {
    navigate(link);
  };

  const handleLogout = async () => {
    navigate("/login");
  };
  return (
    <div className="w-full h-full rounded-[10px] py-6 px-2 lg:px-5 flex flex-col items-start gap-y-6 bg-[#fff] custom-shadow">
      <div>
        <img
          src="/lookalike-logo.svg"
          alt="lookalike-logo"
          className="max-w-[144px] object-contain"
        />
      </div>
      <ul className="w-full flex flex-col gap-y-1">
        {SIDEBAR_LINKS?.map((link, index) => {
          return (
            <li className={`w-full text-black h-[48px]`} key={index}>
              <Link
                to={link?.page}
                onClick={() => navigateToLink(link?.page, link?.title)}
                className={`group text-sm flex items-center gap-x-2.5 font-medium w-full h-[48px] px-4 rounded-[12px] outline-none transition-all duration-300 ${
                  location?.pathname === link?.page ||
                  location?.pathname.startsWith(link?.page + "/")
                    ? "bg-gradient-to-r from-[#5E51C9] to-[#408EE8] text-white"
                    : "bg-transparent text-black hover:bg-gradient-to-r hover:from-[#5E51C9] hover:to-[#408EE8] hover:text-white"
                }`}
              >
                <div className="min-w-5">
                  <img
                    src={link?.icon}
                    alt={link?.iconAltTag}
                    width={link?.iconWidth}
                    height={link?.iconHeight}
                    className={`w-auto h-5 transition-all duration-300 will-change-transform group-hover:brightness-0 group-hover:invert ${
                      location?.pathname === link?.page ||
                      location?.pathname.startsWith(link?.page + "/")
                        ? "brightness-0 invert"
                        : ""
                    }`}
                  />
                </div>

                <span className="transition-colors duration-300">
                  {link?.title}
                </span>
              </Link>
            </li>
          );
        })}

        <button
          type="button"
          onClick={() => handleLogout()}
          className={`text-sm flex items-center gap-x-2.5 font-medium w-full h-[49px] px-4 rounded-[12px] outline-none 
                    bg-transparent text-black hover:bg-gradient-to-r from-[#5E51C9] to-[#408EE8] hover:text-white transition-all duration-300 group"
                }`}
        >
          <div className="min-w-6">
            <FiLogOut className="text-lg transition-all duration-300 group-hover:text-white" />
          </div>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
