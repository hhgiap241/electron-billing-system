import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import useStyles from './styles';
import logo from '../../../../assets/logo.png';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className={classes.imageWrapper}>
          <img src={logo} className={classes.demoLogo} alt="app-logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            height: '100%',
          }}
        >
          <Sider
            style={{ background: colorBgContainer, position: 'unset' }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            The most basic header-content-footer layout. Generally, the mainnav
            is placed at the top of the page, and includes the logo, the first
            level navigation, and the secondary menu (users, settings,
            notifications) from left to right in it. We always put contents in a
            fixed size navigation (eg: 1200px), the layout of the whole page is
            stable, it's not affected by viewing area. Top-bottom structure is
            conform with the top-bottom viewing habit, it's a classical
            navigation pattern of websites. This pattern demonstrates efficiency
            in the main workarea, while using some vertical space. And because
            the horizontal space of the navigation is limited, this pattern is
            not suitable for cases when the first level navigation contains many
            elements or links.
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
