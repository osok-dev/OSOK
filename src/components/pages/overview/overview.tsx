import React from "react";

export const Overview: React.FC = () => {
  return (
    <>
      <h1>Overview</h1>
      <table>
        <tr>
          <th>Status</th>
          <th>Amount</th>
          <th>Address</th>
          <th>Timestamp</th>
          <th>Block no</th>
          <th>Amount in</th>
          <th>Amount out</th>
          <th>Gas price</th>
          <th>Gas amount</th>
          <th>Gast cost</th>
        </tr>
        <tr>
          <td>Pending</td>
          <td>0.002</td>
          <td>0x3f923..492d</td>
          <td>2022-12-25 14:42:12</td>
          <td>4123</td>
          <td>0.02</td>
          <td>0.01</td>
          <td>132</td>
          <td>432</td>
          <td>1412</td>
        </tr>
      </table>
    </>
  );
};
