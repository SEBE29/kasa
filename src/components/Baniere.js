export default function Barniere({ title = "", cover }) {
  return (
    <section className="hero">
      <div className={cover}></div>
      {title && <h1>{title}</h1>}
    </section>
  );
}
