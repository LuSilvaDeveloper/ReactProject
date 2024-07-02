export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
  const ButtonsContainer = buttonsContainer; // that's to recognize the buttonsContainer prop
  // for some reason I can't pass the props with uppercase and make it work
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
