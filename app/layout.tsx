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
            <h1>
              <a href="/">
                <img src={"/img/DT_logo.png"} style={{ width: "100px" }} />
              </a>
            </h1>
          </header>

          <nav className="menu">
            <h2>Navigation</h2>
            <ul>
              <li>
                <a href="/authorities">Authorities</a>
              </li>
              <li>
                <a href="/contracts">Contracts</a>
              </li>
              <li>
                <a href="/entities">Entities</a>
              </li>
                            <li>
                <a href="/dataset">Dataset</a>
              </li>
            </ul>
          </nav>

          {children}

          <footer className="footer">
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="dataset/#APIs">APIs</a>
              </li>
            </ul>
            © 2026 DymeTraq
          </footer>
        </main>
      </body>
    </html>
  );
}
