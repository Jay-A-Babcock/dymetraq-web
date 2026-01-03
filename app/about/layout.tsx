// app/about/layout.tsx
export const metadata = {
  title: "DymeTraq | About",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const extraModules = <></>;

  return (
    <div className="detail-layout">
      <div className="detail-content">{children}</div>
      <div className="detail-sidebar">
        <h2>About DymeTraq</h2>
        <ul>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#history">History</a>
          </li>
          <li>
            <a href="#current_projects">Current Projects</a>
          </li>
        </ul>
        {extraModules}
      </div>
    </div>
  );
}
