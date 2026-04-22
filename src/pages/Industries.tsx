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
  { title: 'Pharmaceuticals', img: pharmImg, desc: 'Vacuum For Pharma Production.' },
  { title: 'Chemical Processing', img: chemImg, desc: 'Corrosive-Duty Pumps.' },
  { title: 'Jewellery Making', img: jewelImg, desc: 'Precision Vacuum For Casting.' },
  { title: 'Food Processing', img: foodImg, desc: 'Hygienic Vacuum Systems.' },
  { title: 'Packaging Solutions', img: packImg, desc: 'High-Speed Vacuum.' },
  { title: 'Automotive', img: autoImg, desc: 'Testing & Assembly Vacuum.' },
  { title: 'General Engineering', img: engImg, desc: 'Versatile Industrial Vacuum.' },
  { title: 'Dairy Farming', img: dairyImg, desc: 'Milking Vacuum Systems.' },
  { title: 'Paint Manufacturing', img: paintImg, desc: 'Vacuum For Paint Processing.' },
  { title: 'Distillation', img: distImg, desc: 'Controlled Vacuum Distillation.' },
  { title: 'Defense Applications', img: defImg, desc: 'High-Performance Vacuum.' },
  { title: 'Lab Equipment', img: labImg, desc: 'Lab-Grade Vacuum Solutions.' },
];

export function IndustriesPage() {
  return (
    <div className="industries-page" style={{ backgroundColor: '#fff' }}>
      <section className="products-top">
        <div className="container">
          <div className="premium-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', margin: '0 0 15px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Organisations we serve
          </div>
          <h1 className="products-title">Industries we serve</h1>
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
                  aspectRatio: '1/1',
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
                    bottom: '10px',
                    left: '10px',
                    right: '10px',
                    width: 'auto',
                    height: '110px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    zIndex: 2,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    paddingBottom: '15px',
                    gap: '4px'
                  }}
                >
                  <h3 style={{ color: '#ffffff', margin: '0', fontSize: '15px' }}>{ind.title}</h3>

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

