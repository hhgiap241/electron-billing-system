import { Checkbox, Form, Row, Col } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import BackgroundLeft from '../../components/BackgroundLeft';
import Text from '../../components/Text';
import useStyles from './styles';
import InputComponent from '../../components/Input';
import Button from '../../components/Button';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();

  const forgotLoginId = () => {
    console.log('button forgot login clicked');
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <BackgroundLeft />
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        className={classes.backgroundRight}
      >
        <Row className={classes.itemRight}>
          <Col xs={{ span: 24 }}>
            <div className={classes.loginForm}>
              <Form
                name="loginForm"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className={classes.formItem}
              >
                <Form.Item style={{ marginBottom: 50 }}>
                  <Text className={classes.title}>Login</Text>
                </Form.Item>
                <Form.Item
                  className={classes.removeRequired}
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <InputComponent
                    type=""
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Please input your username!"
                    bordered
                  />
                </Form.Item>

                <Form.Item
                  className={classes.removeRequired}
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <InputComponent
                    type="password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Please input your password!"
                    bordered
                  />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button block type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                <Form.Item className={classes.forgetPasswordForm}>
                  <Text
                    style={{ cursor: 'pointer' }}
                    onClick={() => forgotLoginId()}
                    className={classes.forgetPasswordText}
                  >
                    Forget Password?
                  </Text>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={24}>
            <div className={classes.footer}>
              Copyright (c) 2023 Photo Vu Duc Trang, Inc. Allright Reserved.
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Login;
