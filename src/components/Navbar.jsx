const Navbar = ({ title, links }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b">
      <div className="flex items-center justify-center max-w-7xl mx-auto gap-40 py-6  border-b-1 ">
        <h1 className="text-2xl font-semibold">{title.toUpperCase()} </h1>
        <ul className="flex gap-8 text-gray-700 text-md">
          {links.map((item) => {
            return (
              <li key={item}>
                <a href={`#${item}`}>{item.toUpperCase()}</a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
