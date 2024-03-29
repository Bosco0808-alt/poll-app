import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link href={"/"} className="navbar-brand m-2">
          Poll app
        </Link>
        <Link href={"/login"} className="nav-item nav-link m-2">
          Login
        </Link>
        <Link href={"/signup"} className="nav-item nav-link m-2">
          Sign up
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
