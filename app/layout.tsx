// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "DymeTraq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="main">
          <header className="masthead">
            <h1>DymeTraq</h1>
          </header>

          <nav className="menu">
            <h2>Navigation</h2>
            <ul>
              <li><a href="/authorities">Authorities</a></li>
              <li><a href="/contracts">Contracts</a></li>              
              <li><a href="/entities">Entities</a></li>
            </ul>
          </nav>

          {children}

          <footer className="footer">
            © 2025 DymeTraq
          </footer>
        </main>
      </body>
    </html>
  );
}