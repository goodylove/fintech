import Button from "./../../components/button/index";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div>
        <h2>Page not found</h2>
        <div onClick={() => navigate("/")} className="text-center mt-2">
          <Button
            text="Go back"
            className="bg-purple text-white p-2 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
