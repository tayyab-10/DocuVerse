import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import bgImage from "../Assets/bg1.jpg";
import { GoogleOutlined } from '@ant-design/icons';

const Signup = ({ setUser }) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const { name, password, email } = credentials;
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password, email })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUser({ name });
        navigate("/documents");
      } else {
        console.error("Registration failed:", data);
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error during registration. Please try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onFinish = () => {
    handleSignUp();
  };

  const onAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  return (
    <div 
      style={{ backgroundImage: `url(${bgImage})` }} 
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-12"
    >
      <div className="shadow-lg p-6 bg-white rounded-lg max-w-80 mt-8">
        <h5 className="text-center mb-4 font-normal">Create a new Notevault Account</h5>
        <Button type="default" icon={<GoogleOutlined />} className="mb-3 w-full">
          Sign up with Google
        </Button>
        <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
          <hr className="flex-1"/>
          <span className="mx-2">Or</span>
          <hr className="flex-1"/>
        </div>
        <Form
          name="signup_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
              name="name"
              onChange={onChange}
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              name="email"
              onChange={onChange}
              className="rounded-md"
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
              className="rounded-md"
            />
          </Form.Item>
          <Form.Item>
            <Checkbox onChange={onAgreeChange} className="mb-1 text-sm text-gray-600">
              I agree to the terms and conditions
            </Checkbox>
            <Checkbox className="text-sm text-gray-600">
              Send me Tips and News.
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="btn btn-primary w-full rounded-md"
              disabled={!agree}
            >
              Sign up
            </Button>
          </Form.Item>
          <div className="text-center mt-3">
            <span className="font-normal">Already a member?</span>
            <Link to="/login" className="text-blue-500 hover:underline ml-1">Login here!</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
