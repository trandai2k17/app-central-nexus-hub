
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";

interface AppUpdate {
  title: string;
  description: string;
  updatedBy: string;
  date: Date;
}

interface AppDialogsProps {
  isUpdateDialogOpen: boolean;
  setIsUpdateDialogOpen: (open: boolean) => void;
  selectedAppUpdate: AppUpdate | null;
  isDescriptionDialogOpen: boolean;
  setIsDescriptionDialogOpen: (open: boolean) => void;
  selectedAppDescription: string;
}

const AppDialogs = ({
  isUpdateDialogOpen,
  setIsUpdateDialogOpen,
  selectedAppUpdate,
  isDescriptionDialogOpen,
  setIsDescriptionDialogOpen,
  selectedAppDescription
}: AppDialogsProps) => {
  return (
    <>
      {/* Update Info Dialog */}
      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Information</DialogTitle>
            <DialogDescription>Latest update details for this application</DialogDescription>
          </DialogHeader>
          {selectedAppUpdate && (
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                <span className="text-sm font-semibold">Title:</span>
                <span>{selectedAppUpdate.title}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                <span className="text-sm font-semibold">Description:</span>
                <span>{selectedAppUpdate.description}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                <span className="text-sm font-semibold">Updated By:</span>
                <span>{selectedAppUpdate.updatedBy}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-2 items-start">
                <span className="text-sm font-semibold">Date:</span>
                <span>{format(selectedAppUpdate.date, 'PPP')}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Description Dialog */}
      <Dialog open={isDescriptionDialogOpen} onOpenChange={setIsDescriptionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Description</DialogTitle>
            <DialogDescription>Detailed overview of this application's functionality</DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <p>{selectedAppDescription}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppDialogs;
