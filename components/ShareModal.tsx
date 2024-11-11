import { useSelf } from "@liveblocks/react/suspense";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";

const ShareModal = ({
  roomId,
  collaborators,
  creatorId,
  currentUserType,
}: ShareDocumentDialogProps) => {
  const user = useSelf();

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("viewer");

  const ShareDocumentHanlder = async () => {};

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button
            className="gradient-blue flex h-9 gap-1 px-4"
            disabled={currentUserType !== "editor"}
          >
            <Image
              src="/assets/icons/share.svg"
              alt="share"
              width={20}
              height={20}
              className="min-w-4 md:size-5"
            />
            <p className="mr-1 hidden sm:block">Share</p>
          </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog">
          <DialogHeader>
            <DialogTitle>Manage who can view this project. </DialogTitle>
            <DialogDescription>
              Select which users can view and edit this document.
            </DialogDescription>
          </DialogHeader>
          <Label></Label>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareModal;
