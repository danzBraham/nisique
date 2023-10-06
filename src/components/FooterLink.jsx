const FooterLink = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-medium">{title}</h3>
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="font-light hover:text-slate-gray"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLink;
