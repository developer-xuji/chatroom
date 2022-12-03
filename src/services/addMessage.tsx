import instance from "../lib/instance";
import { SERVER_URL, TOKEN } from "../env";

const addMessage = (props: any) => {
  const url = SERVER_URL + "/api/messages/add";
  const { name, message } = props;
  const body = {
    name,
    message,
  };
  return instance.post(url, body).then((res) => console.log(res.data));
};

export default addMessage;
