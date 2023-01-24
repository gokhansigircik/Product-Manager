import axios from "axios";
import { useEffect, useState } from "react";
import ManagerForm from "../components/ManagerForm";

function Main() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api", {signal: controller.signal})
      .then((res) => setTitle(res.data.title))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Main</h1>
      {title && <h2>Title: {title} </h2>}
      <ManagerForm />
    </div>
  );
}

export default Main;
