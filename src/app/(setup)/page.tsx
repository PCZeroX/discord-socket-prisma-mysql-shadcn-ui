import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/toggles/mode-toggle";

const SetupPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default SetupPage;
