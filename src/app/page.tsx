import { use } from "react";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

import { ModeToggle } from "@/components/toggles/mode-toggle";

const SetupPage = () => {
  const profile = use(initialProfile());

  const server = use(
    db.server.findFirst({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    })
  );

  console.log("server:", server);

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <h1>hello world</h1>
      <UserButton />
      <ModeToggle />
    </div>
  );
};

export default SetupPage;
