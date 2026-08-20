import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const AlertMessage = ({ message }) => {
  if (!message) return null;

  return (
    <Alert
      variant="destructive"
      className="w-full mb-2 mt-2  rounded-xl border-red-200 bg-red-50 px-4 py-3 text-red-700 shadow-sm"
    >
      <AlertCircle className="h-5 w-5" />

      <AlertDescription className="ml-1 text-sm whitespace-nowrap font-medium leading-5">
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default AlertMessage;