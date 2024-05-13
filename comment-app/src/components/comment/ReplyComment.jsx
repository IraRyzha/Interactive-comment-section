function ReplyComment({ comment, toCommmentId }) {
  return (
    <div className="w-full h-auto flex items-start gap-4 p-5 bg-white rounded-lg shadow-lg">
      <Voiting
        votes={comment.votes}
        allowToVote={true}
        handleVotes={handleVotes}
      />
      <div className="w-full h-auto flex flex-col gap-3">
        <div className="w-full h-auto flex items-center gap-5">
          <Author author={comment.author} isUserOwn={false} />
          <CommentDate date={comment.date} />
          <UiButton
            type="reply"
            className="ml-auto"
            onClick={() => setIsReplying((prev) => !prev)}
          />
        </div>
        <TextMessage
          text={comment.text}
          toName={comment.replyToName ? comment.replyToName : ""}
        />
      </div>
    </div>
  );
}

export default ReplyComment;
