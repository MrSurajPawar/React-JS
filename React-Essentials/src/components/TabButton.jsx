export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton Component Executing");
  return (
    <li>
      {/* Event should pass as a value here - without parathesis */}
      {/* ternary expression to dynamically change the style of buttons */}
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
