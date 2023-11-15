import { use } from "react";

import { currentProfile } from "@/lib/current-profile";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = ({ params }: ServerIdPageProps) => {
  const profile = use(currentProfile());
  console.log("profile:", profile);

  return (
    <div>
      <p>Server ID Page</p>
    </div>
  );
};

export default ServerIdPage;
