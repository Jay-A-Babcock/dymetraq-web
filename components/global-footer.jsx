export default function GlobalFooter() {
  return (
    <footer className="dt-global-footer">
      <div className="dt-global-footer-inner">

        <div className="dt-global-footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/dataset/#APIs">APIs</a></li>
            {/* <li><a href="/contact">Contact</a></li> */}
          </ul>
        </div>

        <div className="dt-global-footer-social">
          <a href="https://github.com/dymetraq" className="fa-brands fa-github" aria-label="GitHub" />
          <a href="https://linkedin.com/company/dymetraq" className="fa-brands fa-linkedin-in" aria-label="LinkedIn" />
          <a href="https://x.com/dymetraq" className="fa-brands fa-x-twitter" aria-label="X" />
        </div>

        <div className="dt-global-footer-copy">
          © 2026 DymeTraq
        </div>

      </div>
    </footer>
  );
}