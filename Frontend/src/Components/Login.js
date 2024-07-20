import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from "../Assets/bg1.jpg";
import { GoogleOutlined } from '@ant-design/icons';

const Login = ({setUser}) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { password, email } = credentials;
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password,})
      });
      const json = await response.json();
      
      if (response.ok) {
      
        localStorage.setItem('token', json.token);
        setUser({ password });
        navigate("/documents");
      
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onFinish = () => {
    handleLogin();
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})`}}className="flex items-center justify-center min-h-screen bg-cover bg-center ">
      <div className="card shadow-lg p-6 mt-4 rounded-md bg-white" style={{ maxWidth: '23rem' }}>
      <h5 className="text-center mb-4 font-normal">Login</h5>
        <Button type="default" icon={<GoogleOutlined />} className="ml-5 mb-3 max-w-screen-2xl">
          Sign up with Google
        </Button>
        <div className="text-center flex items-center justify-center text-sm" style={{color: "rgba(102, 102, 104,4)"}}>
  <hr className="left-line" style={{ flex: 1 }}/>
  <span style={{ margin: "2px 8px" }}>Or</span>
  <hr className="right-line" style={{ flex: 1 }}/>
</div>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item>
            <div className="d-flex justify-content-between align-items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link className="login-form-forgot text-blue-500 hover:underline" to="/signup">
                Forgot password
              </Link>
            </div>
          </Form.Item>
          <Form.Item>
          <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full"
            >  
              Log in
            </Button>
            <div className="mt-3 text-center">
              Not a member ?<Link className='text-blue-500 hover:underline' to="/signup"> Register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
