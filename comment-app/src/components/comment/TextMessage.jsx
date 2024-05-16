function TextMessage({ text, toName }) {
  return (
    <div className="h-auto w-full flex flex-wrap overflow-scroll">
      <p className="text-sm text-gray-700">
        <span className="font-bold text-blue-800">
          {toName && "@" + toName + " "}
        </span>
        {text}
      </p>
    </div>
  );
}

export default TextMessage;
