import PlusIcon from "../icons/plus-icon";
import MinusIcon from "../icons/minus-icon";

function Voiting({ comment, handleVotes }) {
  return (
    <div className="w-auto h-auto p-2 flex flex-col items-center justify-center gap-1 bg-slate-100 text-blue-800 rounded-lg">
      <PlusIcon
        className="opacity-75 font-bold hover:scale-[1.1]"
        onClick={() => handleVotes("+")}
      />
      <span className="text-sm font-bold">{comment.votes.length}</span>
      <MinusIcon
        className="opacity-75 font-bold hover:scale-[1.1]"
        onClick={() => handleVotes("-")}
      />
    </div>
  );
}

export default Voiting;
