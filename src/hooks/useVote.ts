import voteRepository from "@/api/repositories/vote.repository";
import { useSetState } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import useUser from "./useUser";
import { notifications } from "@mantine/notifications";

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

  const { mutate } = useMutation(
    (type: "UP_VOTE" | "DOWN_VOTE") => {
      if (!user) {
        notifications.show({
          message: "আপনাকে আগে লগইন করতে হবে",
          color: "red",
        });
      }

      if (user && state.up_voters.includes(user.id)) {
        setState({
          up_voters: state.up_voters.filter((id) => id !== user.id),
          score: state.score - 1,
        });
      } else {
        setState({
          up_voters: [...state.up_voters, user!.id],
          score: state.score + 1,
        });
      }

      return voteRepository.vote({
        model_name: options.modelName,
        model_id: options.id,
        vote: type,
      });
    },
    {
      onSuccess: () => {
        options.onSuccess?.();
        if (!user) return;
        if (state.up_voters.includes(user.id)) {
        }
      },
    }
  );

  return {
    makeVote: mutate,
    voteState: state,
  };
};

export default useVote;
