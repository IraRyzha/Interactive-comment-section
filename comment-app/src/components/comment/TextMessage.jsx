function TextMessage({ text, toName }) {
  return (
    <div>
      <p className="text-sm text-gray-700">
        <span className="font-bold text-blue-800">{"@" + toName + " "}</span>

        {text}
      </p>
    </div>
  );
}

export default TextMessage;
