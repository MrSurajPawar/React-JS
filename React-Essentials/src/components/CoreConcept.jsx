//Child Component which will receive Prop object from App component
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3> {title} </h3>
      <p> {description} </p>
    </li>
  );
}