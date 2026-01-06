// app/not-found.tsx
import Link from 'next/link';
export default function NotFound() {
  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
          text-align: center;
          padding: 20px;
        }
        
        .error-code {
          font-size: 72px;
          margin: 0;
          color: #333;
        }
        
        .title {
          font-size: 24px;
          font-weight: normal;
          color: #666;
          margin-top: 10px;
        }
        
        .description {
          color: #999;
          margin-top: 20px;
          margin-bottom: 30px;
        }
        
        .home-link {
          display: inline-block;
          padding: 12px 24px;
          background-color: #0070f3;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          transition: background-color 0.2s;
        }
        
        .home-link:hover {
          background-color: #0051cc;
        }
      `}</style>
      
      <div className="container">
        <h1 className="error-code">404</h1>
        <h2 className="title">Page Not Found</h2>
        <p className="description">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="home-link">
          Go Home
        </Link>
      </div>
    </>
  );
}