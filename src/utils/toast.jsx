import { toast } from "react-toastify";
import { CustomToast } from "./custom-toast-style";

export const showSuccess = (message) => {
  toast(<CustomToast type="success" message={message} />, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: true,
  });
};

export const showError = (message) => {
  toast(<CustomToast type="error" message={message} />, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeButton: false,
    pauseOnHover: true,
  });
};

export const showInfo = (message) => {
  toast.info(message);
};
