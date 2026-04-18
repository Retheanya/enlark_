import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-detail-error">
        <div className="container">
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/products')} className="back-btn">Back to Products</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="detail-header">
        <div className="container">
          <div className="breadcrumb">
            <span onClick={() => navigate('/products')}>Products</span> / {product.category}
          </div>
          <h1>{product.name}</h1>
        </div>
      </div>

      <div className="detail-media">
        <div className="container">
          <div className="image-gallery">
            {product.detailImages && product.detailImages.length > 0 ? (
              product.detailImages.map((img, index) => (
                <div key={index} className="gallery-item">
                  <img src={img} alt={`${product.name} detail ${index + 1}`} />
                </div>
              ))
            ) : (
              <div className="gallery-item solo">
                <img src={product.image} alt={product.name} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="detail-info">
        <div className="container">
           <div className="info-card">
              <h3>Product Specifications</h3>
              <p>Category: {product.category}</p>
              <p>Model ID: #{product.id}</p>
              <div className="cta-section">
                 <button onClick={() => navigate('/contact')} className="quote-btn">Inquiry Now</button>
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-detail-page {
          background: #fdfdfd;
          min-height: 80vh;
        }
        .detail-header {
          background: #f8f9fa;
          padding: 40px 0;
          border-bottom: 1px solid #eee;
        }
        .breadcrumb {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
        }
        .breadcrumb span {
          cursor: pointer;
          color: #26a4df;
        }
        .breadcrumb span:hover {
          text-decoration: underline;
        }
        .detail-header h1 {
          font-size: 32px;
          color: #1b5b7a;
          margin: 0;
        }
        .detail-media {
          padding: 60px 0;
        }
        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }
        .gallery-item {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #f0f0f0;
          overflow: hidden;
        }
        .gallery-item img {
          max-width: 100%;
          height: auto;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.02);
        }
        .gallery-item.solo {
          max-width: 600px;
          margin: 0 auto;
        }
        .detail-info {
          padding-bottom: 80px;
        }
        .info-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border: 1px solid #eee;
        }
        .info-card h3 {
          margin-top: 0;
          color: #1b5b7a;
          border-bottom: 2px solid #26a4df;
          display: inline-block;
          padding-bottom: 5px;
          margin-bottom: 20px;
        }
        .cta-section {
          margin-top: 30px;
        }
        .quote-btn {
          background: #26a4df;
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .quote-btn:hover {
          background: #1b5b7a;
          transform: translateY(-2px);
        }
        .product-detail-error {
          padding: 100px 0;
          text-align: center;
        }
        .back-btn {
          margin-top: 20px;
          padding: 10px 20px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .image-gallery {
            grid-template-columns: 1fr;
          }
          .detail-header h1 {
            font-size: 24px;
          }
        }
      `}} />
    </div>
  );
}
