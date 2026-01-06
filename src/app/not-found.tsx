// app/not-found.tsx
import Header from "../../features/docs/components/Header";
import Footer from "../../features/docs/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        title="Page Not Found"
        subtitle="The page you are looking for does not exist."
      />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      </main>
      <Footer />
    </div>
  );
}