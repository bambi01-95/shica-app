import Header from "../../../features/docs/components/Header";
import Footer from "../../../features/docs/components/Footer";
export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header
                title="W-Shica Docs"
                subtitle="Documentation and guides for W-Shica."
            />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
        </div>
    )
}