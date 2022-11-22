import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { VARIABLES } from "src/common/variables";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logoutRef = useRef(null);
  const navigate = useNavigate();

  const onLogout = () => {
    onClose();
    Cookies.remove(VARIABLES.ACCESS_TOKEN);
    Cookies.remove(VARIABLES.REFRESH_TOKEN);
    navigate("/signin", { replace: true });
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={logoutRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            sx={{ "--my-color": "#53c8c4", "--my-color-red": "#ff0000" }}
          >
            <AlertDialogHeader fontWeight="bold" color="var(--my-color)">
              <p>관리자 로그아웃</p>
            </AlertDialogHeader>

            <AlertDialogBody>
              <p className="text-[var(--my-color-red)]">
                정말로 로그아웃하시겠습니까?
              </p>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme={"gray"} onClick={onClose}>
                아니오
              </Button>
              <Button autoFocus onClick={onLogout} ml={3}>
                네
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <header className={`sticky w-full bg-bg h-[76px]`}>
        <div>
          <button onClick={onOpen} className={`text-[var(--my-color)]`}>
            로그아웃
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
