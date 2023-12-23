import FakeEditor from "@/components/FakeEditor";
import HomeLeftSidebar from "@/components/asides/HomeLeftSidebar";
import HomeRightSidebar from "@/components/asides/HomeRightSidebar";
import ThreeColumnLayout from "@/components/layout/ThreeColumnLayout";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <ThreeColumnLayout
        LeftSidebar={<HomeLeftSidebar />}
        RightSidebar={<HomeRightSidebar />}
      >
        <FakeEditor />
        <div className="flex flex-col gap-10 mt-10"></div>
        <div className="my-20">
          {/* <VisibilityObserver
            onChangeVisibility={(isVisible) => {
              if (isVisible) {
                fetchNextPage();
              }
            }}
            options={{ rootMargin: "200px" }}
          >
            <p>Loadmore...</p>
          </VisibilityObserver> */}
        </div>
      </ThreeColumnLayout>
    </>
  );
};

export default HomePage;
