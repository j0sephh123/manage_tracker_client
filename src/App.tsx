import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/Dialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="btn btn-primary">Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to DaisyUI Dialog</DialogTitle>
            <DialogDescription>
              This is a dialog component that combines DaisyUI styling with
              RadixUI functionality.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>
              You can put any content here. The dialog is fully accessible and
              keyboard navigable.
            </p>
          </div>
          <DialogFooter>
            <button className="btn btn-ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Confirm
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
