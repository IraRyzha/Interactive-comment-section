import PlusIcon from "../icons/plus-icon";
import MinusIcon from "../icons/minus-icon";

function Voiting({ votes, allowToVote, handleVotes }) {
  return (
    <div className="w-auto h-auto p-2 flex flex-col items-center justify-center gap-1 bg-slate-100 text-blue-800 rounded-lg border-2">
      <PlusIcon
        className="opacity-75 font-bold hover:scale-[1.1]"
        onClick={() => allowToVote && handleVotes("+")}
      />
      <span className="text-sm font-bold">{votes}</span>
      <MinusIcon
        className="opacity-75 font-bold hover:scale-[1.1]"
        onClick={() => allowToVote && handleVotes("-")}
      />
    </div>
  );
}

export default Voiting;
