import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import login from "../../services/login";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

const LoginPage: React.FC = () => {
  const onLogin = (values: any) => {
    const { username, password } = values;
    login({ username, password }).then((res) =>
      res ? (window.location.href = "/chat") : null
    );
    console.log("Success:", values);
  };

  const onLoginFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onLogin}
        onFinishFailed={onLoginFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default LoginPage;
