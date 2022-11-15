import { useToast } from "@chakra-ui/react";

/** Custom Toast */
export default function useCustomToast() {
  return useToast({ duration: 1500, position: "top" });
}
