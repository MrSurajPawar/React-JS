//This is just wrapper to an element Component TabButton , used slots for buttons and chilren
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      {/* setting component type dynamically */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
