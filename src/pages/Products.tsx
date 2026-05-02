
import { useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

export function ProductsPage() {
  const navigate = useNavigate();
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="products-page">
      <div className="products-top">
        <div className="container">
          <div className="premium-badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', margin: '0 0 15px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Discovery & precision
          </div>
          <h1 className="products-title">Enlark Enterprises Private Limited vacuum pumps</h1>
          <p className="products-subtitle">Precision engineered vacuum solutions for global industries</p>
        </div>
      </div>

      <div className="products-body">
        <div className="container">
          {categories.map((category) => (
            <div key={category} className="product-category-section">
              <h2 className="category-heading">{category}</h2>
              <div className="products-grid">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <div 
                      className="product-tile" 
                      key={product.id}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <div className="product-tile-imgWrap">
                        <img src={product.image} alt={product.name} className="product-tile-img" />
                      </div>
                      <div className="product-tile-info">
                        <div className="product-tile-name">{product.name}</div>
                        <div className="explore-more-btn">Explore more &rarr;</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .products-page {
          background: #f8f9fa;
          padding-bottom: 40px;
        }
        .products-top {
          background: linear-gradient(135deg, #1b5b7a 0%, #26a4df 100%);
          color: white;
          padding: 30px 0;
          text-align: left;
          margin-bottom: 15px;
        }
        .products-title {
          font-size: 42px;
          font-weight: 700;
          margin: 0;
          letter-spacing: 1px;
          color: white !important;
        }
        .products-subtitle {
          font-size: 18px;
          opacity: 0.9;
          margin-top: 10px;
          color: white;
        }
        .product-category-section {
          margin-bottom: 25px;
        }
        .category-heading {
          font-size: 24px;
          color: #1b5b7a;
          border-left: 5px solid #26a4df;
          padding-left: 15px;
          margin-bottom: 25px;
          font-weight: 600;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }
        .product-tile {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          border: 1px solid #eee;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
        }
        .product-tile:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
        }
        .product-tile-imgWrap {
          height: 250px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: transform 0.4s ease;
        }
        .product-tile-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .product-tile-info {
           padding: 0 15px;
           max-height: 0;
           opacity: 0;
           overflow: hidden;
           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
           background: white;
           display: flex;
           flex-direction: column;
        }
        .product-tile:hover .product-tile-info {
           max-height: 250px;
           opacity: 1;
           padding: 20px 15px;
           border-top: 1px solid #f0f0f0;
        }
        .product-tile-name {
          font-size: 15px;
          font-weight: 600;
          color: #1b5b7a;
          line-height: 1.4;
          margin-bottom: 15px;
        }
        .explore-more-btn {
           align-self: flex-end;
           font-size: 13px;
           font-weight: 700;
           color: #26a4df;
           letter-spacing: 0.5px;
           transition: color 0.3s;
        }
        .product-tile:hover .explore-more-btn {
           color: #1b5b7a;
        }
        .status-badge {
          display: inline-block;
          background: #ffc107;
          color: #000;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 700;
          margin-top: 8px;
          width: fit-content;
        }
        @media (max-width: 768px) {
          .products-title { font-size: 32px; }
          .products-grid { grid-template-columns: 1fr; }
          .product-tile-info {
             max-height: none;
             opacity: 1;
             padding: 15px;
             border-top: 1px solid #f0f0f0;
          }
        }
      `}} />
    </div>
  );
}
