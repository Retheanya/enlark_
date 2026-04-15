import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.jpeg';
import heroImg from '../assets/hero.png';

export function IndustriesPage() {
  const items = [
    { title: 'Sugar & Distillery Industries', image: carousel4 },
    { title: 'Chemical & Process Industries', image: heroImg },
    { title: 'Pharmaceutical Industries', image: carousel1 },
    { title: 'Food & Beverages Industries', image: carousel3 },
    { title: 'Textile & Printing Industries', image: carousel2 },
    { title: 'Paper & Packaging Industries', image: carousel4 },
    { title: 'Power & Utilities', image: heroImg },
    { title: 'Mining & Minerals', image: carousel3 },
  ];

  return (
    <div className="industries-page">
      <section className="industries-hero">
        <div className="industries-hero-bg" />
        <div className="container industries-hero-inner">
          <div className="industries-hero-left">
            <h1 className="industries-hero-title">Industries We Serve</h1>
            <p className="industries-hero-subtitle">
              Vacuum pump solutions for diverse industrial applications with a focus on reliability, efficiency, and service
              support.
            </p>
          </div>
          <div className="industries-hero-right">
            <div className="industries-breadcrumb">Home » Industries We Serve</div>
          </div>
        </div>
      </section>

      <section className="industries-grid-section">
        <div className="container">
          <div className="industries-photo-grid">
            {items.map((it) => (
              <article className="industry-photo-card" key={it.title}>
                <img src={it.image} alt={it.title} className="industry-photo-img" />
                <div className="industry-photo-overlay">
                  <div className="industry-photo-label">{it.title}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

