import FormSkeleton from "@/components/FormSkeleton";

const Login = () => {
  return (
    <>
      <form>
        <FormSkeleton login={true} />
      </form>
    </>
  );
};

export default Login;
