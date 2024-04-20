import MemesPage from "./MemesPage";

export default function MemesApp({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <>
      <MemesPage isAuthenticated={isAuthenticated} />
    </>
  );
}
