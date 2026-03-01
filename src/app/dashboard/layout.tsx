"use client";

import Link from "next/link";

const sectorList = [
  "airport",
  "electric_tower",
  "asphalt",
  "telecom",
  "roads",
  "railway",
  "power_plants",
  "sub_station",
  "transformer",
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <h3>Sectors</h3>

        {sectorList.map((sector) => (
          <div key={sector}>
            <Link href={`/dashboard/${sector}`}>
  {sector}
</Link>
          </div>
        ))}
      </div>

      {/* Page Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}