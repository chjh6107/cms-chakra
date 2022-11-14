import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BaseButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};
export default BaseButton;
