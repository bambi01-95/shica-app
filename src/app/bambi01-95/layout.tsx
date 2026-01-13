import Header from "../../../features/docs/components/Header";
import Footer from "../../../features/docs/components/Footer";

export default function UserStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header
                title="W-Shica User Study"
                subtitle="Guided tasks to explore W-Shica features."
            />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
        </div>
    )
}