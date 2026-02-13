import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="navbar" className="w-full max-w-full sticky top-0 z-50 shadow-sm overflow-hidden">
      {/* xs screen */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 w-full min-h-full">
          {/* left */}
          <div id="icon-company" className="w-[80px] h-[35px]">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/5f6af1c6ab7d726c8ba6ca15_Master%20Logo.svg"
              alt="Oho-chat"
              className="w-full h-full object-contain"
            />
          </div>
          {/* right */}
          <div className="flex items-center">
            <div className="w-20 h-full">
              <button
                className="text-white text-xs px-4 pt-2 w-full  leading-tight text-center flex flex-col items-center"
                style={{
                  backgroundColor: "#f04e4e",
                }}
              >
                <span>ธุรกิจ</span>
                <span>สนใจ</span>
                <span>ติดต่อ</span>
                <ArrowDropDownIcon fontSize="medium" />
              </button>
            </div>

            <div className="w-16 h-full flex justify-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-8 h-full"
              >
                <MenuIcon
                  fontSize="medium"
                  className="font-semibold text-text-blue"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center sm:justify-end gap-6 px-4 py-2"
          style={{ backgroundColor: "#edecfd" }}
        >
          <div className="flex items-center gap-1 text-sm font-medium">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62d6707123c6fd0400d6073a_Line.png"
              alt="support-icon"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-xs  text-text-blue">ทีม Support</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6555fa98e392a17a2e2ea597_card_travel.svg"
              alt="contact-icon"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-xs  text-text-blue">02-096-4654</span>
          </div>
        </div>
      </div>
      {/* lg screen */}
      <div className="hidden lg:block">
        <div
          className="flex items-center justify-end gap-6 px-8 py-2"
          style={{ backgroundColor: "#edecfd" }}
        >
          <div className="flex items-center gap-1 text-sm font-medium">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/62d6707123c6fd0400d6073a_Line.png"
              alt="support-icon"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-xs  text-text-blue">ทีม Support</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <img
              src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/6555fa98e392a17a2e2ea597_card_travel.svg"
              alt="contact-icon"
              style={{ width: "20px", height: "20px" }}
            />
            <span className="text-xs  text-text-blue">02-096-4654</span>
          </div>
        </div>

        {/* Navigation row */}
        <div className="flex items-center justify-between ps-16 h-24 xl:h-16  w-full" >
          {/* Left: Nav links */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button
              className="flex items-center gap-1  text-sm hover:opacity-80"
            >
              ฟีเจอร์ <ArrowDropDownIcon fontSize="small" />
            </button>
            <a
              href="#"
              className=" text-sm hover:opacity-80"
            >
              ราคา
            </a>
            <button
              className="flex items-center gap-1  text-sm hover:opacity-80"
            >
              โซลูชั่น <ArrowDropDownIcon fontSize="small" />
            </button>
            <a
              href="#"
              className=" text-sm hover:opacity-80"
            >
              บทความ
            </a>
            <a
              href="#"
              className=" text-sm hover:opacity-80"
            >
              คำถามที่พบบ่อย
            </a>
            <a
              href="#"
              className=" text-sm hover:opacity-80"
            >
              คู่มือการใช้งาน
            </a>
            <a
              href="#"
              className="text-sm hover:opacity-80"
            >
              รู้จักเรา
            </a>
          </div>

          {/* Right: Buttons + Logo */}
          <div className="h-full flex items-center justify-end gap-4 flex-shrink-0 py-2">
            <button
              className="h-full border-2 border-blue-500 text-blue-600 bg-white px-10 xl:px-6 py-2 rounded-md hover:bg-blue-50 transition text-sm"
            >
              เข้าสู่ระบบ
            </button>
            <button
              className="h-full bg-primary-blue text-white text-sm px-5 py-2 rounded-md hover:opacity-90 transition"
            >
              สมัครใช้งานฟรี!
            </button>
            <div className="h-full flex items-center">
              <img
                src="https://cdn.prod.website-files.com/5f5b1b9ddb3ade8e0cc58758/5f6af1c6ab7d726c8ba6ca15_Master%20Logo.svg"
                alt="Oho-chat"
                className="w-32 min-h-12 object-cover"
              />
            </div>
            <button
              className="h-full text-white text-xs font-semibold px-5 py-2  leading-tight text-center"
              style={{ backgroundColor: "#f04e4e" }}
            >
              ธุรกิจ
              <br />
              สนใจ
              <br />
              ติดต่อ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
