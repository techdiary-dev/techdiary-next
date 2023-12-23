import { useSetState } from "@mantine/hooks";
import useUser from "./useUser";

const useVote = (options: {
  modelName: "ARTICLE" | "COMMENT";
  id: string;
  onSuccess?: () => void;
  data: { down_voters: string[]; up_voters: string[]; score: number };
}) => {
  const { user } = useUser();
  const [state, setState] = useSetState({
    down_voters: options.data?.down_voters || [],
    up_voters: options.data?.up_voters || [],
    score: options.data?.score || 0,
  });

  return {
    voteState: state,
  };
};

export default useVote;
