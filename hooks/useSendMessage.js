import { configToast } from "@/constant";
import { apiSendMessage } from "@/services/contact-api";
import { useState } from "react";
import { toast } from "react-toastify";

export function useSendMessage() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (request) => {
    setIsLoading(true);
    try {
      await apiSendMessage(request);
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong! Please try again!", configToast);
      return;
    }
    setIsLoading(false);
    toast.success(
      "Successfully sent message! Your message will be reply soon",
      configToast
    );
  };

  return {
    isLoading,
    sendMessage,
  };
}
