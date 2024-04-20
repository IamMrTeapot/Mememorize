import LoginPage from "./LoginPage";

export default function LoginApp({
  updateAuthStatus,
}: {
  updateAuthStatus: (authStatus: boolean) => void;
}) {
  return (
    <>
      <LoginPage updateAuthStatus={updateAuthStatus} />
    </>
  );
}
