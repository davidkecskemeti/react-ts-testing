export const SideBar = ({
  items,
}: {
  items: { name: string; href: string }[];
}) => (
  <div>
    {items.map((item, index) => (
      <div key={index}>
        <a role="navigation" href={item.href}>
          {item.name}
        </a>
      </div>
    ))}
  </div>
);
