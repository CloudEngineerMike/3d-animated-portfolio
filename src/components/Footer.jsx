const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className=" w-full left-0 right-0 bottom-0 bg-indigo-800">
      <div className="flex  justify-center items-center xs:flex-col md:flex-row xs:text-xs lg:text-sm xs:p-10 md:p-8">
        <p className="pb-1 md:pb-0">
          &copy; Copyright {year}. Made by{" "}<span className="font-semibold underline">Michael Smith</span>.
        </p>
        <p className=" md:pl-2">All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
