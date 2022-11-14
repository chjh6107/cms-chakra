import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  useBoolean,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { VARIABLES } from "src/common/variables";

type SigninType = {
  id: string;
  password: string;
};

const SigninPage = () => {
  const [isBlind, setIsBlind] = useBoolean(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninType>({
    defaultValues: { id: "", password: "" },
  });

  const onSubmit = handleSubmit((v) => {
    console.log(errors);
    alert(v.id + " " + v.password);
  });

  return (
    <main className={`w-screen h-screen grid place-items-center`}>
      <div className={`flex flex-col items-center justify-center gap-4`}>
        <div className={`flex flex-col items-center gap-4`}>
          <h1 className={`text-[32px] font-semibold leading-[130%]`}>
            {VARIABLES.TITLE}
          </h1>
          <h2 className={`text-text-second`}>관리자 로그인</h2>
        </div>
        <form
          onSubmit={onSubmit}
          className={`w-[436px] bg-white flex flex-col items-center`}
        >
          <div className={`flex flex-col w-full gap-4`}>
            <FormControl isInvalid={!!errors.id}>
              <FormLabel className={`text-text-second`}>ID</FormLabel>
              <Input
                autoComplete="off"
                {...register("id", {
                  required: "아이디를 입력해주세요.",
                })}
                placeholder="아이디를 입력해주세요."
              />
              <FormErrorMessage>
                {errors.id && errors.id.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel className={`text-text-second`}>패스워드</FormLabel>
              <InputGroup>
                <Input
                  autoComplete="off"
                  {...register("password", {
                    required: "패스워드를 입력해주세요.",
                  })}
                  placeholder="패스워드를 입력해주세요."
                  type={isBlind ? "password" : "text"}
                />
                <InputRightElement>
                  <button type="button" onClick={setIsBlind.toggle}>
                    {isBlind ? <ViewIcon /> : <ViewOffIcon />}
                  </button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </div>
          <div className={`mt-8`}>
            <Button
              type="submit"
              className={`px-6 py-2`}
              colorScheme={"primary"}
            >
              <div className={`w-[140px]`}>
                <p className={`leading-[175%]`}>로그인</p>
              </div>
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default SigninPage;
