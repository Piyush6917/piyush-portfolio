import { Check, Sparkles } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast = ({ message }: ToastProps) => {
  if (!message) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <div className="toast-icon">
        <Check size={16} />
      </div>
      <span className="toast-message">{message}</span>
      <Sparkles size={14} className="toast-sparkle" />
    </div>
  );
};
