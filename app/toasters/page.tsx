'use client';

import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';

export default function ToastersPage() {
  const { toast } = useToast();

  const showDefaultToast = () => {
    toast({
      title: 'Default Toast',
      description: 'This is a default toast notification.',
    });
  };

  const showSuccessToast = () => {
    toast({
      variant: "default",
      title: "Success!",
      description: "Your action was completed successfully.",
      className: "bg-green-100 border-green-200 text-green-800",
    });
  };

  const showErrorToast = () => {
    toast({
      variant: "destructive",
      title: "Error!",
      description: "An error occurred. Please try again.",
      className: "bg-red-100 border-red-200 text-red-800",
    });
  };

  const showWarningToast = () => {
    toast({
      variant: "default",
      title: "Warning",
      description: "This action may have consequences.",
      className: "bg-yellow-100 border-yellow-200 text-yellow-800",
    });
  };

  const showActionToast = () => {
    toast({
      title: "Action Required",
      description: "Please confirm your action.",
      action: <ToastAction altText="Confirm action">Confirm</ToastAction>,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Toaster Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button onClick={showDefaultToast}>Show Default Toast</Button>
        <Button onClick={showSuccessToast}>Show Success Toast</Button>
        <Button onClick={showErrorToast}>Show Error Toast</Button>
        <Button onClick={showWarningToast}>Show Warning Toast</Button>
        <Button onClick={showActionToast}>Show Action Toast</Button>
      </div>
    </div>
  );
}