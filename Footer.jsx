const Footer = () => {
  return (
    <footer className="bg-red-500 text-white text-center py-6 mt-10">
      <p className="text-lg font-semibold">
        Shree MurtiKala
      </p>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;