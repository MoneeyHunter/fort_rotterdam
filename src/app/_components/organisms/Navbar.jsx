import Logo from "../atoms/Logo";
import NavbarItems from "../molecules/NavbarItems";

const Navbar = () => {
  return (
    <nav className="sticky px-8 py-4 flex justify-between items-center overflow-hidden">
      <Logo />
      <NavbarItems />
    </nav>
  );
};
export default Navbar;
