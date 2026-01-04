import Header from "../../../features/docs/components/Header";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-white">
            <Header
                title="W-Shica Docs"
                subtitle="Documentation and guides for W-Shica."
            />
            {children}
        </div>
    )
}