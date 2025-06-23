import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Gal() {
  const images: string[] = [
    '/images/c.jpg',
    '/images/c2.jpg',
    '/images/e1.jpg',
    '/images/e2.jpg',
    '/images/j.jpg',
    '/images/j2.jpg',
    '/images/o1.jpg',
    '/images/o2.jpg',
    '/images/ok.jpg',
    '/images/p.jpg',
    '/images/p2.jpg',
    '/images/p3.jpg'
  ];

  return (
    <div style={{ 
        width: '100vw',
        minHeight: '100vh',
        padding: '16px',
        backgroundColor: '#06402B'
      }}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="10px">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`test ${index}`}
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '8px'
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Gal;
