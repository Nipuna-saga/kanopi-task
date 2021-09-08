import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";
export const PageNotFoundPage = () => {
  const history = useHistory();
  return (
    <div style={{ backgroundColor: "#3c3c3c", height: "100vh" }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};
