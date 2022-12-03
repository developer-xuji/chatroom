import instance from "../lib/instance";
import { SERVER_URL, TOKEN } from "../env";

const getMessages = () => {
  const url = SERVER_URL + "/api/messages/all";

  return instance.get(url).then((res) => res.data);
};

export default getMessages;
