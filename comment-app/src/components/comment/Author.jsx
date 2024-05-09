function Author({ author }) {
  return (
    <div className="w-auto h-auto flex items-center gap-3">
      <div className="w-auto h-full max-w-8 max-h-8 flex items-center justify-center">
        <img className="w-full h-full rounded-full" src={author.photo} alt="" />
      </div>
      <p className="text-base font-semibold">{author.name}</p>
    </div>
  );
}

export default Author;
