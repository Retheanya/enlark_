import pharmImg from '../assets/pharmaceuticals.jpeg';
import chemImg from '../assets/chemical_processing.jpeg';
import jewelImg from '../assets/jewellery_making.jpeg';
import foodImg from '../assets/food_processing.jpeg';
import packImg from '../assets/packaging_solutions.jpeg';
import autoImg from '../assets/automotive.jpeg';
import engImg from '../assets/general_engineering.jpeg';
import dairyImg from '../assets/dairy_farming.jpeg';
import paintImg from '../assets/paint_manufacturing.jpeg';
import distImg from '../assets/distillation.jpeg';
import defImg from '../assets/defense_applications.jpeg';
import labImg from '../assets/lab_equipment.png';

const industries = [
  { title: 'Pharmaceuticals', img: pharmImg, desc: 'Precision vacuum solutions for laboratory and production-scale pharmaceutical manufacturing.' },
  { title: 'Chemical Processing', img: chemImg, desc: 'Durable pumps designed to handle corrosive and aggressive chemical environments.' },
  { title: 'Jewellery Making', img: jewelImg, desc: 'Specialized vacuum casting solutions for intricate jewelry designs and precision finishing.' },
  { title: 'Food Processing', img: foodImg, desc: 'Hygienic vacuum systems for packaging, de-aeration, and processing applications.' },
  { title: 'Packaging Solutions', img: packImg, desc: 'High-speed vacuum systems for chamber packaging and modified atmosphere solutions.' },
  { title: 'Automotive', img: autoImg, desc: 'Reliable vacuum support for automotive component manufacturing and testing.' },
  { title: 'General Engineering', img: engImg, desc: 'Versatile vacuum technology for a wide range of industrial manufacturing processes.' },
  { title: 'Dairy Farming', img: dairyImg, desc: 'Efficient milking machine vacuum pumps for modern dairy management and hygiene.' },
  { title: 'Paint Manufacturing', img: paintImg, desc: 'Vacuum systems for pigment processing and high-quality paint production lines.' },
  { title: 'Distillation', img: distImg, desc: 'Critical vacuum control for industrial and laboratory-scale distillation processes.' },
  { title: 'Defense Applications', img: defImg, desc: 'High-performance vacuum solutions meeting rigorous defense and aerospace standards.' },
  { title: 'Lab Equipment', img: labImg, desc: 'Precision bench-top and integrated laboratory vacuum pumps for scientific research.' },
];

export function IndustriesPage() {
  return (
    <div className="industries-page" style={{ backgroundColor: '#fff' }}>
      <section className="products-top">
        <div className="container">
          <div className="premium-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', margin: '0 auto 15px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Organisations We Serve
          </div>
          <h1 className="products-title">Industries We Serve</h1>
          <p className="products-subtitle">We provide precision-engineered vacuum pump solutions for a wide range of industrial applications worldwide.</p>
        </div>
      </section>

      <section className="industries-grid-section" style={{ padding: '80px 0', backgroundColor: '#fafafa' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px', 
            width: '100%' 
          }}>
            {industries.map((ind, index) => (
              <div 
                key={index}
                className="industry-grid-card-main"
                style={{ 
                  height: '380px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  backgroundColor: '#fff'
                }}
              >
                {/* Image Background */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${ind.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s ease'
                }} className="card-bg-zoom" />
                
                {/* Subtle Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.1)',
                  zIndex: 1
                }} />

                {/* Floating Content Card (Overlay) - Significantly smaller than image card */}
                <div 
                  className="floating-info-card"
                  style={{
                    position: 'absolute',
                    bottom: '25px',
                    left: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    padding: '12px 18px',
                    borderRadius: '16px',
                    zIndex: 2,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <h3 className="forced-black-text">{ind.title}</h3>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#000000 !important', 
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: '1.4', 
                    margin: 0,
                    opacity: 1
                  }} className="forced-black-text">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .industry-grid-card-main:hover .card-bg-zoom {
          transform: scale(1.1);
        }
        .industry-grid-card-main:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }
        .industry-grid-card-main:hover .floating-info-card {
          background-color: #ffffff;
          transform: translateY(-5px);
          border-color: #0CA9E2;
        }
        @media (max-width: 1024px) {
          .industries-page .container > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 650px) {
          .industries-page .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}

