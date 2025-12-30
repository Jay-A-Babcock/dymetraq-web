export default function HomePage() {
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
        <h2>Welcome</h2>
        <p>This is where your section landing page or detail page content will go.</p>
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