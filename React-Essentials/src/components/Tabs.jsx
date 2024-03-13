//This is just wrapper to an element Component TabButton , used slots for buttons and chilren
export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
