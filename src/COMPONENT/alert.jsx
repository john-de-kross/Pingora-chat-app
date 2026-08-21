import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const AlertMessage = ({ message }) => {
  if (!message) return null;

  return (
    <Alert
      variant="destructive"
      className="mt-3 mb-3 w-full items-center rounded-lg border border-red-400/25 border-l-2 border-l-red-400/80 bg-red-500/10 px-3 py-2.5 text-red-100 shadow-lg shadow-red-950/20 backdrop-blur-sm animate-in fade-in-0 slide-in-from-top-2"
    >
      <AlertCircle className="h-4 w-4 text-red-400" />

      <AlertDescription className="ml-0 wrap-break-word text-sm font-medium leading-5 text-red-100/90">
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;
