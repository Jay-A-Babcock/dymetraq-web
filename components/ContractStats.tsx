// components/ContractStats.tsx
import { Authority, Entity } from "@/lib/types";

interface ContractStatsProps {
  authority?: Authority;
  entity?: Entity;
  contractValue?: number;
}

export default function ContractStats({
  authority,
  entity,
  contractValue,
}: ContractStatsProps) {
  return (
    <>
      <h3>Contract Information</h3>
      <table id="contractStats">
        <tbody>
          <tr>
            <th>Authority</th>
            <td>{authority?.name || "Unknown"}</td>
          </tr>
          <tr>
            <th>Entity</th>
            <td>{entity?.name || "Unknown"}</td>
          </tr>
          <tr>
            <th>Contract Value</th>
            <td>{contractValue || "Not implemented"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}