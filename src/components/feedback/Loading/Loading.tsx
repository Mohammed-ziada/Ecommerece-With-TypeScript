import { TLoading } from "@customTypes/shared";

interface Iprops {
  status: TLoading;
  error: string | null;
  children: React.ReactNode;
}
const Loading = ({ status, error, children }: Iprops) => {
  if (status == "pending") {
    return <p>Loading please wait</p>;
  }
  if (status == "failed") {
    return <p>{error}</p>;
  }
  return <>{children}</>;
};
export default Loading;
