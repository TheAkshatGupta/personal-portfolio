function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Akshat Gupta</h1>
      <ul className="flex gap-6 text-sm">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;