import Form from "./form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getData } from "../state/actions/action";

export default function Home() {
  const dispatch = useDispatch();
  const endpoint = "https://ulventech-react-exam.netlify.app/api/form";

  const fetchData = async () => {
    const res = await axios.get(endpoint);
    dispatch(getData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <Form />;
}
