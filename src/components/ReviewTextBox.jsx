import { useState } from "react";

function ReviewTextBox({
  titlePlaceholder = "Title",
  bodyPlaceholder = "Write your review...",
  maxLength = 500,
  onChange,
  value,
}) {
  const [title, setTitle] = useState(value.title);
  const [body, setBody] = useState(value.body);

  const [bodyHistory, setBodyHistory] = useState([]);
  const [bodyRedoStack, setBodyRedoStack] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (onChange) onChange({ title: e.target.value, body });
  };

  const handleBodyChange = (e) => {
    setBodyHistory([...bodyHistory, body]);
    setBody(e.target.value);
    if (onChange) onChange({ title, body: e.target.value });
    setBodyRedoStack([]);
  };

  const handleUndo = () => {
    if (bodyHistory.length === 0) return;
    const previous = bodyHistory[bodyHistory.length - 1];
    setBodyRedoStack([body, ...bodyRedoStack]);
    setBodyHistory(bodyHistory.slice(0, bodyHistory.length - 1));
    setBody(previous);
    if (onChange) onChange({ title, body: previous });
  };

  const handleRedo = () => {
    if (bodyRedoStack.length === 0) return;
    const next = bodyRedoStack[0];
    setBodyRedoStack(bodyRedoStack.slice(1));
    setBodyHistory([...bodyHistory, body]);
    setBody(next);
    if (onChange) onChange({ title, body: next });
  };
  return (
    <div className="flex flex-col gap-2 mx-auto py-2 w-full max-w-md">
      {/* Title Input */}
      <h3 className="font-semibold text-gray-800">Write a review!</h3>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder={titlePlaceholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-sm"
      />

      {/* Review Textarea */}
      <textarea
        value={body}
        onChange={handleBodyChange}
        placeholder={bodyPlaceholder}
        maxLength={maxLength}
        rows={6}
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full text-sm resize-none"
      />

      {/* Character Count */}
      <div className="text-gray-500 text-sm text-right">
        {body.length} / {maxLength}
        <div className="flex justify-end gap-2 mt-1">
          {/* Redo button - primary accent */}
          <button
            type="button"
            onClick={handleRedo}
            className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 px-3 py-1 rounded font-medium text-white transition"
          >
            Redo
          </button>

          {/* Undo button - secondary contrast */}
          <button
            type="button"
            onClick={handleUndo}
            className="bg-white hover:bg-orange-50 active:bg-orange-100 px-3 py-1 border-2 border-orange-500 rounded font-medium text-orange-500 transition"
          >
            Undo
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewTextBox;
