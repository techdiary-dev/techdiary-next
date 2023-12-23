import DiscordWidget from "./widgets/DiscordWidget";
import ImportantLinksWidget from "./widgets/ImportantLinksWidget";
import LatestUsers from "./widgets/LatestUsers";
import SocialLinksWidget from "./widgets/SocialLinksWidget";

const HomeRightSidebar = () => {
  return (
    <div className="flex flex-col gap-6 p-2">
      <SocialLinksWidget />
      <ImportantLinksWidget />
      <DiscordWidget />
      <LatestUsers />
      {/* <LatestUsers /> */}
    </div>
  );
};

export default HomeRightSidebar;
