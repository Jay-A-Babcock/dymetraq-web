// app/authorities/layout.tsx
export default function AuthoritiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main">
      <header className="masthead">
        <h1>DymeTraq</h1>
      </header>

      <nav className="menu">
        <ul>
          <li>Dashboard</li>
          <li><a href="/authorities">Authorities</a></li>
          <li><a href="/entities">Vendors</a></li>
          <li><a href="/contracts">Contracts</a></li>
          <li>Reports</li>
        </ul>
      </nav>

      <section>
        {children}
      </section>

      <aside className="rightbar">
        <div className="dynamic-module">Dynamic Module A</div>
        <div className="dynamic-module">Dynamic Module B</div>
      </aside>

      <footer className="footer">
        © 2025 DymeTraq
      </footer>
    </main>
  );
}