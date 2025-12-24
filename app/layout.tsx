export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                    <h1>DymeTraq</h1>
                    <nav style={{ marginTop: "0.5rem" }}>
                        <a href="/authority" style={{ marginRight: "1rem" }}>Authorities</a>
                        <a href="/contract" style={{ marginRight: "1rem" }}>Contracts</a>
                        <a href="/entity">Entities</a>
                    </nav>
                </header>

                <main style={{ padding: "1.5rem" }}>
                    {children}
                </main>

                <footer style={{ padding: "1rem", borderTop: "1px solid #ddd", marginTop: "2rem" }}>
                    © DymeTraq
                </footer>
            </body>
        </html>
    );
}