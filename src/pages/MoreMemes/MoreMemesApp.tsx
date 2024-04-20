import MoreMemesPage from "./MoreMemesPage";

export default function MoreMemesApp({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <>
      <MoreMemesPage isAuthenticated={isAuthenticated} />
    </>
  );
}
