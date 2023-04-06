import { Title } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBookmark, HiPlus } from "react-icons/hi";
import TagsWidget from "./widgets/TagsWidget";

const HomeLeftSidebar = () => {
  const [tagsCount, setTagCount] = useState(10)
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4 mt-4 mb-2">
        <p className="flex items-center gap-2">
          <AiOutlineHome color="#1e293b" />
          <span className="text-sm text-[#1e293b]">হোম</span>
        </p>
        <p className="flex items-center gap-2">
          <HiOutlineBookmark color="#1e293b" />
          <span className="text-sm text-[#1e293b]">রিডিং লিস্ট</span>
        </p>
        <p className="flex items-center gap-2">
          <HiPlus color="#1e293b" />
          <span className="text-sm text-[#1e293b]">নতুন ডায়েরি</span>
        </p>
      </div>

      <TagsWidget />
    </div>
  );
};

export default HomeLeftSidebar;
