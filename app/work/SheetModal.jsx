import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";

const SheetModal = ({ showModal, setShowModal, program }) => {
  return (
    <Sheet open={showModal} onOpenChange={setShowModal}>
      <SheetContent side="right" className="w-[600px] max-md:w-full">
        <SheetHeader>
          <SheetTitle>{program?.fields?.title}</SheetTitle>
        </SheetHeader>
        <div className="m-4 overflow-y-scroll h-full">
          <img
            src={`https:${program?.fields?.image?.fields?.file?.url}`}
            width={200}
            height={200}
            alt={program?.fields?.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <p className="text-justify my-4">{program?.fields?.description}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetModal;
