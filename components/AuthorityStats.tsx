// app/components/AuthorityStats.tsx
import { Contract } from "@/lib/types";

interface AuthorityStatsProps {
  contracts: Contract[];
}

export default function AuthorityStats({ contracts }: AuthorityStatsProps) {
  return (
    <>
      <h3>Authority Statistics</h3>
      <table id="authStats">
        <tbody>
          <tr>
            <th>Total Contracts</th>
            <td>{contracts.length}</td>
          </tr>
          <tr>
            <th>Total Value of Contracts</th>
            <td>Calculation not implemented</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}