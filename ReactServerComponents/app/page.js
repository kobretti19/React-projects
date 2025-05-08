import fs from "fs";

import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

export default async function Home() {
  const data = await fs.readFileSync("dummy-db.json", "utf-8");
  const usersData = JSON.parse(data);

  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo users={usersData} />
      </Suspense>
    </main>
  );
}
