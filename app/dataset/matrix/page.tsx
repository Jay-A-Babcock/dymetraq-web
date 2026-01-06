// app/dataset/matrix/page.tsx
export default function DatasetMatrixPage() {
  return (
    <>
      <div className="detail-layout">
        <div className="detail-content">
          <h1>DymeTraq's Dataset: Municipal Contracts Matrix</h1>
          <div className="coming-soon">
            <p>
              A comprehensive matrix detailing the offerings of every
              contracting authority and business entity in the dataset is in the
              works. This matrix will provide insights into the types of
              contracts, services, and goods procured by various municipal
              entities.
            </p>
            <h2>Sample Authority Matrix</h2>
            <table style={{ border: "2px solid black" }}>
              <thead>
                
                <tr>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Contracting Authority</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Internal Contract Number</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Contract Value</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Bid Dates</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Contract Dates</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Vendor Name</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Bid Listings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>City of Exampleville</td>
                  <td>FALSE</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td>FALSE</td>
                  <td>TRUE</td>
                  <td>FALSE</td>
                </tr>
                <tr>
                  <td>Example State</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td>FALSE</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                </tr>
              </tbody>
            </table>
            <h2>Sample Entity Matrix</h2>
            <table style={{ border: "2px solid black"

            }}>
              <thead>
                
                <tr>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Business Name</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>State Registration Nos.</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>EIN</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>Aliases</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>OSHA Reports</th>
                  <th style={{ border: "1px solid black", padding:"8px" }}>EPA Reports</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contractor ABC</td>
                  <td>FALSE</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td>FALSE</td>
                  <td>TRUE</td>
                </tr>
                <tr>
                  <td>Contractor XYZ</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                  <td>FALSE</td>
                  <td>TRUE</td>
                  <td>TRUE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
