import React from 'react';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.jpeg';
import heroImg from '../assets/hero.png';
import waterring from '../assets/waterring.jpg';

type ProductCategoryKey = 'vacuum-pumps' | 'compressors' | 'blowers' | 'systems' | 'measurement' | 'software';

export function ProductsPage() {
  const topTabs: Array<{ key: ProductCategoryKey; label: string }> = [
    { key: 'vacuum-pumps', label: 'VACUUM PUMPS' },
    { key: 'compressors', label: 'COMPRESSORS' },
    { key: 'blowers', label: 'BLOWERS' },
    { key: 'systems', label: 'SYSTEMS' },
    { key: 'measurement', label: 'MEASUREMENT EQUIPMENT' },
    { key: 'software', label: 'SOFTWARE' },
  ];

  const [activeTab, setActiveTab] = React.useState<ProductCategoryKey>('vacuum-pumps');

  const tiles = {
    'vacuum-pumps': [
      { name: 'Water Ring Vacuum Pump', image: waterring },
      { name: 'Liquid Ring Vacuum Pump', image: carousel3 },
      { name: 'Oil Sealed Rotary Vacuum Pump', image: carousel2 },
      { name: 'Oil Lubricated Vacuum Pump', image: carousel1 },
    ],
    compressors: [
      { name: 'Liquid Ring Compressor', image: carousel4 },
      { name: 'Vacuum System Package (Dummy)', image: heroImg },
      { name: 'Customized Skid (Dummy)', image: carousel3 },
      { name: 'Process Package (Dummy)', image: carousel1 },
    ],
    blowers: [
      { name: 'Twin Lobe Roots Blower', image: carousel2 },
      { name: 'Mechanical Vacuum Booster', image: carousel4 },
      { name: 'Roots Booster System (Dummy)', image: heroImg },
      { name: 'High Flow Blower (Dummy)', image: carousel1 },
    ],
    systems: [
      { name: 'Water Recovery Vacuum Pump System', image: carousel3 },
      { name: 'Pneumatic Conveying System', image: carousel4 },
      { name: 'Vacuum System (Dummy)', image: heroImg },
      { name: 'Central Vacuum System (Dummy)', image: carousel2 },
    ],
    measurement: [
      { name: 'Vacuum Gauge (Dummy)', image: carousel1 },
      { name: 'Leak Test Setup (Dummy)', image: carousel3 },
      { name: 'Vibration Test (Dummy)', image: carousel2 },
      { name: 'Noise Test (Dummy)', image: carousel4 },
    ],
    software: [
      { name: 'Selection Tool (Dummy)', image: heroImg },
      { name: 'Maintenance Planner (Dummy)', image: carousel1 },
      { name: 'Service Tracking (Dummy)', image: carousel2 },
      { name: 'Performance Logs (Dummy)', image: carousel3 },
    ],
  } as const;

  const sections = [
    {
      leftTitle: 'Rotary vane →',
      leftItems: tiles['vacuum-pumps'].slice(2, 4),
      rightTitle: 'Claw →',
      rightItems: tiles['vacuum-pumps'].slice(0, 2),
    },
    {
      leftTitle: 'Screw →',
      leftItems: tiles['systems'].slice(0, 2),
      rightTitle: 'Liquid Ring →',
      rightItems: tiles['vacuum-pumps'].slice(0, 2),
    },
    {
      leftTitle: 'Rotary Lobe →',
      leftItems: tiles['blowers'].slice(0, 2),
      rightTitle: 'Booster →',
      rightItems: tiles['blowers'].slice(2, 4),
    },
  ];

  return (
    <div className="products-page">
      <div className="products-top">
        <div className="container">
          <h1 className="products-title">Our Products</h1>
          <div className="products-tabs" role="tablist" aria-label="Product categories">
            {topTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`products-tab ${activeTab === t.key ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(t.key);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                role="tab"
                aria-selected={activeTab === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products-body">
        <div className="container">
          {activeTab !== 'vacuum-pumps' ? (
            <div className="products-grid">
              {tiles[activeTab].map((p) => (
                <div className="product-tile" key={p.name}>
                  <div className="product-tile-imgWrap">
                    <img src={p.image} alt={p.name} className="product-tile-img" />
                  </div>
                  <div className="product-tile-name">{p.name}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="products-portfolio">
              {sections.map((row, idx) => (
                <div className="products-row" key={idx}>
                  <div className="products-col">
                    <div className="products-col-title">{row.leftTitle}</div>
                    <div className="products-col-grid">
                      {row.leftItems.map((p) => (
                        <div className="product-tile" key={p.name}>
                          <div className="product-tile-imgWrap">
                            <img src={p.image} alt={p.name} className="product-tile-img" />
                          </div>
                          <div className="product-tile-name">{p.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="products-col">
                    <div className="products-col-title">{row.rightTitle}</div>
                    <div className="products-col-grid">
                      {row.rightItems.map((p) => (
                        <div className="product-tile" key={p.name}>
                          <div className="product-tile-imgWrap">
                            <img src={p.image} alt={p.name} className="product-tile-img" />
                          </div>
                          <div className="product-tile-name">{p.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

