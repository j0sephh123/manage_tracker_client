import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/Dialog";
import { useModalStore } from "./store/modalStore";
import { CompaniesTable } from "./components/CompaniesTable";

function App() {
  const { isOpen, setIsOpen } = useModalStore();

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Company Management</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger className="btn btn-accent btn-soft">
              Add Company
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Company</DialogTitle>
                <DialogDescription>
                  Fill in the details to add a new company to the list.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Form will go here</p>
              </div>
              <DialogFooter>
                <button
                  className="btn btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Add
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
}

export default App;
