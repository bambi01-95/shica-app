import Header from "../../../features/docs/components/Header";

export default function UserStudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-white">
            <Header
                title="W-Shica User Study"
                subtitle="Guided tasks to explore W-Shica features."
            />
            {children}
        </div>
    )
}