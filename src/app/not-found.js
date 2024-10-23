import { Result } from "antd";

export default function NotFound() {
  return (
    <Result
      className="flex place-content-center h-screen"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
}
