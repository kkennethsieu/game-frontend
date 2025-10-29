import Button from "./Button";
import Modal from "./Modal";

function ConfirmModal({
  isOpen,
  setIsOpen,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  confirmClassName = "bg-orange-500 hover:bg-orange-600 text-white",
  cancelText = "Cancel",
  cancelClassName = "bg-gray-200 hover:bg-gray-300 text-gray-800",
}) {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {/* Title */}
      <h3 className="mb-4 font-bold text-gray-900 text-lg">{title}</h3>

      {/* Message */}
      <p className="mb-6 text-gray-700">{message}</p>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <Button
          onClick={() => setIsOpen(false)}
          className={`px-4 py-2 ${cancelClassName}`}
        >
          {cancelText}
        </Button>
        <Button
          onClick={() => {
            onConfirm?.();
            setIsOpen(false);
          }}
          className={`px-4 py-2 ${confirmClassName}`}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
