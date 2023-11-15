import { use } from "react";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";

import { ModeToggle } from "@/components/toggles/mode-toggle";

import { InitialModal } from "@/components/modals/initial-modal";

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

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <UserButton />
      <ModeToggle />
      <InitialModal />
    </div>
  );
};

export default SetupPage;
