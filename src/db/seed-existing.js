import { sql } from "./connection.js";

const EXISTING = [
  {
    id: "manual-c1",
    railwayServiceId: "c4089f05-b7b2-4b82-be70-3e3a7bfba0c8",
    railwayUrl: "https://convos-agent-1-production.up.railway.app",
  },
  {
    id: "manual-c2",
    railwayServiceId: "9cbeca24-5654-4ac9-8d02-d1e84f629417",
    railwayUrl: "https://convos-agent-2-production.up.railway.app",
  },
  {
    id: "manual-c3",
    railwayServiceId: "201e386e-a3db-4f25-bbdd-9e0caf2584bc",
    railwayUrl: "https://convos-agent-3-production.up.railway.app",
  },
];

async function seed() {
  for (const inst of EXISTING) {
    await sql`
      INSERT INTO pool_instances (id, railway_service_id, railway_url, status)
      VALUES (${inst.id}, ${inst.railwayServiceId}, ${inst.railwayUrl}, 'idle')
      ON CONFLICT (id) DO NOTHING
    `;
    console.log(`Seeded ${inst.id}`);
  }
  console.log("Done.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
