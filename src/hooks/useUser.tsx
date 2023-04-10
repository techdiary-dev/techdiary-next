import { sesionUserStatusAtom, sessionUserAtom } from "@/store/user.stom";
import { useAtom } from "jotai";

const useUser = () => {
  const [status] = useAtom(sesionUserStatusAtom);
  const [user] = useAtom(sessionUserAtom);
  return { status, user };
};

export default useUser;
