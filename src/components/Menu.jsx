const Menu = ({ activeMenu, items, producTaught }) => {
  const activeItem = items.find((item) => item.name === activeMenu);

  if (!activeItem) {
    return null;
  }
console.log(activeItem)
  return (
    <div className="menu">
      <h1>Contenido para {activeItem.name}</h1>
      <div className="menuLinks">
        {activeItem.items.map((item, index) => (
          <h2 key={index} onClick={() => producTaught(item.name)}>
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Menu;
