// About component (functional component)
export default function About({ image, about, details }) {
  return (
    <aside className="about-section">
      <img src={image} alt="spirit animal" className="about-image" />
      <div>
        <p>{about}</p>
        <p>{details}</p>
      </div>
    </aside>
  );
}
