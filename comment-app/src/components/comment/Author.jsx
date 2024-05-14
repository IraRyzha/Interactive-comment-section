import ProfileImage from "./ProfileImage";

function Author({ author, isUserOwn }) {
  return (
    <div className="w-auto h-auto flex items-center gap-3">
      <ProfileImage photo={author.photo} />
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold">{author.name}</span>
        {isUserOwn ? (
          <span className="text-xs font-medium text-white px-2 py-[0.8px] flex items-center justify-center bg-blue-700 rounded-lg">
            you
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default Author;
