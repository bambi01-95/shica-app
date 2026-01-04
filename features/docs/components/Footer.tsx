
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-200 mt-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shica Project.{" "}
          Licensed under the Apache License, Version 2.0.
        </p>
      </div>
    </footer>
  );
};

export default Footer;