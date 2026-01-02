// components/EntityStats.tsx
import { Contract } from "@/lib/types";

interface EntityStatsProps {
  contracts: Contract[];
}

export default function EntityStats({ contracts }: EntityStatsProps) {
  return (
    <>
      <h3>Entity Statistics</h3>
      <table id="entityStats">
        <tbody>
          <tr>
            <th>Total Contracts</th>
            <td>{contracts.length}</td>
          </tr>
          <tr>
            <th>Total Contract Value</th>
            <td>Calculation not implemented</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}