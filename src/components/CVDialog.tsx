
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';

const CVDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2 bg-primary text-white hover:bg-primary/90" size="lg">
          <FileText className="w-4 h-4 mr-2" />
          Voir mon CV
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl mx-auto">
        <DialogHeader>
          <DialogTitle>CV de Younes El Mourabit</DialogTitle>
          <DialogDescription>
            Téléchargez mon CV ou consultez-le directement ci-dessous
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 bg-white rounded-md overflow-hidden h-[70vh]">
          {/* Embedding a sample CV iframe. Replace with your actual CV URL */}
          <iframe 
            src="https://drive.google.com/file/d/1_jscQ-zpXl4VmO1IUkZYGvXo7j7VrSR5/preview" 
            width="100%" 
            height="100%" 
            className="border-0"
            title="CV de Younes El Mourabit"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="mt-4 flex justify-center">
          <a 
            href="https://drive.google.com/file/d/1_jscQ-zpXl4VmO1IUkZYGvXo7j7VrSR5/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white rounded-md px-4 py-2 flex items-center"
          >
            <FileText className="w-4 h-4 mr-2" /> Télécharger mon CV
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CVDialog;
