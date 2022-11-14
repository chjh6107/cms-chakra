import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { VARIABLES } from "src/common/variables";

type SigninType = {
  id: string;
  password: string;
};

const SigninPage = () => {
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
          <h2 className={`text-[32px] font-semibold leading-[130%]`}>
            관리자 로그인
          </h2>
          <h1 className={`text-text-second`}>{VARIABLES.TITLE}</h1>
        </div>
        <form onSubmit={onSubmit} className={`w-[512px] bg-white`}>
          <FormControl>
            <FormLabel>ID</FormLabel>
            <Input
              {...register("id", {
                required: "아이디를 입력해주세요.",
                minLength: { value: 3, message: "3자 이상" },
              })}
              placeholder="아이디를 입력해주세요."
            />
            <FormErrorMessage>
              {errors.id && errors.id?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>패스워드</FormLabel>
            <Input
              {...register("password")}
              placeholder="패스워드를 입력해주세요."
              type={"password"}
            />
          </FormControl>
          <Button type="submit" className={`w-[200px]`}>
            로그인
          </Button>
          {/* </div> */}
        </form>
      </div>
    </main>
  );
};
export default SigninPage;
