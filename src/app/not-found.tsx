import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { headers } from "next/headers";
import Image from "next/image";
import { Anchor } from "@mantine/core";
import { TbArrowLeft } from "react-icons/tb";

const NotFoundErrorPage: React.FC<PropsWithChildren> = async () => {
  const headersList = headers();
  const url = headersList.get("referer");

  return (
    <div className="px-4">
      <Image src={"/images/sadface.gif"} alt={"404"} height={400} width={400} />
      <pre className="-mt-[65px] text-wrap">{`
{
  "message": "আপনি যা খুঁজছেন তা পাওয়া যায়নি",
  "status": 404,
  "url": "${url}",
}
      `}</pre>

      <Anchor component={Link} href={"/"} className="flex items-center gap-1">
        <TbArrowLeft />
        <span>হোমে ফিরে যান</span>
      </Anchor>
    </div>
  );
};

export default NotFoundErrorPage;
