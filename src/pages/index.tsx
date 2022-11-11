import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
      <div className={``}>
        <h1>ROOT</h1>
        <Link to={"/signin"}>Go to Signin page</Link>
      </div>
    </div>
  );
};
export default IndexPage;
