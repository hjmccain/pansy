import classNames from "classnames";
import React from "react";

interface NavProps {
  toggleAbout: () => void;
  toggleContact: () => void;
  togglePortfolio: () => void;
}

const Nav: React.FC<NavProps> = ({
  toggleAbout,
  toggleContact,
  togglePortfolio,
}: NavProps) => {
  return (
    <nav className="nav-transition group relative h-fit content-end md:row-start-3 md:m-10">
      <button className="absolute bottom-[-66px] ml-10 rotate-[-28deg] rounded-full border-2 border-lilac bg-black py-6 px-4 uppercase text-white opacity-100 duration-1000 group-hover:opacity-0 md:ml-0 md:py-[3.6rem] md:px-[.8rem] md:text-5xl">
        menu
      </button>
      <div className="opacity-0 group-hover:opacity-100 md:mt-0">
        <button
          onClick={togglePortfolio}
          className={classNames(
            "absolute bottom-[-66px] z-20 ml-10 w-40 origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 group-hover:rotate-[65deg] md:ml-0 md:origin-[82px_82px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[65deg]"
          )}>
          <span className="pl-32 text-xs uppercase opacity-0 transition-opacity delay-100 group-hover:text-5xl group-hover:opacity-100">
            portfolio
          </span>
        </button>
        <button
          onClick={toggleAbout}
          className={classNames(
            "-5xl-xl md:-5xl-5xl absolute bottom-[-66px] z-10 ml-10 w-40 origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 hover:bg-lilac-light group-hover:w-72 group-hover:rotate-[32deg] md:ml-0 md:origin-[82px_82px] md:py-14 md:group-hover:w-[32rem] md:group-hover:-rotate-[32deg]"
          )}>
          <span className="ml-8 pl-32 text-xs uppercase opacity-0 transition-opacity delay-100 group-hover:text-5xl group-hover:opacity-100">
            about
          </span>
        </button>
        <button
          onClick={toggleContact}
          className="-5xl-right -5xl-xl absolute bottom-[-66px] ml-10 w-40 origin-[40px_40px] rounded-full border-2 border-lilac-dark bg-black py-6 duration-1000 hover:bg-lilac-light group-hover:w-72 md:ml-0 md:origin-[82px_82px] md:py-14 md:group-hover:w-[32rem]">
          <span className="ml-16 pl-32 text-xs uppercase opacity-0 transition-opacity delay-100 group-hover:text-5xl group-hover:opacity-100">
            contact
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
