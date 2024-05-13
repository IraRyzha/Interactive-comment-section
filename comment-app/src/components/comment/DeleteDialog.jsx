import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import UiButton from "../ui/ui-button";

const DeleteDialog = ({ isOpen, setIsOpen, handleDelete }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed w-screen h-full inset-0 flex items-center justify-center">
        <div className="w-full h-full absolute bg-black opacity-50 z-40"></div>
        <DialogPanel className="max-w-md space-y-4 border-2 bg-white rounded-lg px-12 py-8 z-50">
          <DialogTitle className="font-bold text-xl">
            Delete comment
          </DialogTitle>
          <Description className="text-base text-gray-700">
            Are you sure you want to delete this comment? This will remove the
            comment and can not be undone.
          </Description>
          <div className="w-full h-full flex items-center justify-between gap-5 mt-4">
            <UiButton
              type="base"
              onClick={() => setIsOpen(false)}
              className="bg-gray-500 hover:bg-gray-600 flex-1"
            >
              NO, CANCEL
            </UiButton>
            <UiButton
              type="base"
              onClick={() => handleDelete()}
              className="bg-red-500 hover:bg-red-600 flex-1"
            >
              YES, DELETE
            </UiButton>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default DeleteDialog;
