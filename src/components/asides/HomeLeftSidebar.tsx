import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBookmark, HiPlus } from "react-icons/hi";
import TagsWidget from "./widgets/TagsWidget";

const HomeLeftSidebar = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-4 mt-4 mb-2">
        <button className="flex items-center gap-2">
          <AiOutlineHome className="text-dark" size={20} />
          <span className="text-sm text-dark">হোম</span>
        </button>
        <button className="flex items-center gap-2">
          <HiOutlineBookmark className="text-dark" size={20} />
          <span className="text-sm text-dark">রিডিং লিস্ট</span>
        </button>
        <button className="flex items-center gap-2">
          <HiPlus className="text-dark" size={20} />
          <span className="text-sm text-dark">নতুন ডায়েরি</span>
        </button>
      </div>

      <TagsWidget />
    </div>
  );
};

export default HomeLeftSidebar;
