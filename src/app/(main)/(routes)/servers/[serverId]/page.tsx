import { use } from "react";
import { redirect } from "next/navigation";
import { redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = ({ params }: ServerIdPageProps) => {
  const profile = use(currentProfile());

  if (!profile) {
    return redirectToSignIn();
  }

  const server = use(
    db.server.findUnique({
      where: {
        id: params.serverId,
        members: {
          some: {
            profileId: profile?.id,
          },
        },
      },
      include: {
        channels: {
          where: {
            name: "general",
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    })
  );

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== "general") {
    return null;
  }

  return redirect(`/servers/${params.serverId}/channels/${initialChannel?.id}`);
};

export default ServerIdPage;
