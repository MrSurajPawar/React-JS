export default function TabButton({ children, onSelect }) {
  console.log('TabButton Component Executing');
  return (
    <li>
      {/* Event should pass as a value here - without parathesis */}
      <button onClick={onSelect}> {children} </button>
    </li>
  );
}
