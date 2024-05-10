function Author({ author, isUserOwn }) {
  return (
    <div className="w-auto h-auto flex items-center gap-3">
      <div className="w-auto h-full max-w-8 max-h-8 flex items-center justify-center">
        <img className="w-full h-full rounded-full" src={author.photo} alt="" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold">{author.name}</span>
        {isUserOwn ? (
          <span className="text-xs font-medium text-white px-2 py-1 bg-blue-700 rounded-lg">
            you
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default Author;
