import axios from "types-axios";
import { SERVER_URL } from "../env";

const login = (props: any) => {
  const { username, password } = props;
  const url = SERVER_URL + "/api/auth/login";

  const body = {
    email: username,
    password: password,
  };

  return axios
    .post(url, body)
    .then((res) => (res.status === 200 ? true : false));
};

export default login;
