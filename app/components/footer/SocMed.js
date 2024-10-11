import { EmailIcon, FacebookIcon } from "@/public/icons";

import { pkp3Email, pkp3FacebookLink } from "@/public/constants";
export const SocMed = () => {
  return (
    <div>
      <ul className="flex gap-3 items-center">
        <h1 className="mr-2">Contact Us</h1>
        <FacebookIcon link={pkp3FacebookLink} color="#ffffff" style="size-8" />
        <EmailIcon link={pkp3Email} color="#ffffff" style="size-8" />
      </ul>
    </div>
  );
};
