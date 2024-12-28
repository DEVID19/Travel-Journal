const Header = () => {
  return (
    <div className="bg-red-500 flex items-center justify-center  text-white  h-12  ">
      <img src="/src/assets/globe.png" alt="globe-img" className="w-9" />
      <h1 className="ml-2 font-Inter text-[0.9rem] font-medium">
        {" "}
        my travel journal.{" "}
      </h1>
    </div>
  );
};

export default Header;
