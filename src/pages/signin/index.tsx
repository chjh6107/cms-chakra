import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

type SigninType = {
  id: string;
  password: string;
};

const SigninPage = () => {
  const { register, handleSubmit } = useForm<SigninType>({
    defaultValues: { id: "", password: "" },
  });

  const onSubmit = handleSubmit((v) => {
    alert(v.id + " " + v.password);
  });

  return (
    <div className={``}>
      <div>
        <form onSubmit={onSubmit}>
          <FormControl display={"flex"} alignItems={"center"}>
            <FormLabel>ID</FormLabel>
            <Input {...register("id")} placeholder="아이디를 입력해주세요." />
          </FormControl>
          <FormControl>
            <FormLabel>패스워드</FormLabel>

            <Input
              {...register("password")}
              placeholder="패스워드를 입력해주세요."
              type={"password"}
            />
          </FormControl>
          <Button type="submit">로그인</Button>
        </form>
      </div>
    </div>
  );
};
export default SigninPage;
