import Button from './Button';

const Header = ({ title }) => {
  const onClick = (event) => {
    console.log(event);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="purple" text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
