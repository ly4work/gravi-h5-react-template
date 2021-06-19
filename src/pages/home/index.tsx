import { useState, useEffect } from 'react';
import { Icon, TabBar, Cell, Button, Panel, SearchBar } from 'zarm';
import { connect, Dispatch, withRouter } from 'umi';

const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_1340918_lpsswvb7yv.js',
);

type IProps = {
  children: any;
  history: History;
  dispatch: Dispatch;
};

const Home = (props: IProps) => {
  const { dispatch, currentUser, history } = props;
  const [activeKey, setActiveKey] = useState('/home/feed');
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    queryCurrent();
  }, []);
  const queryCurrent = () => {
    dispatch({
      type: 'user/fetchCurrent',
    });
  };

  const tabs = [
    { title: '主页', router: '/home/feed', icon: <TabIcon type="home" /> },
    {
      title: '设置',
      router: '/home/settings',
      icon: <TabIcon type="insurance" />,
      badge: { shape: 'circle', text: '3' },
    },
    {
      title: '我的',
      router: '/home/my',
      icon: <TabIcon type="user" />,
      badge: { shape: 'dot' },
    },
  ];
  const setActiveTab = (key: string) => {
    setActiveKey(key);
    history.push(key);
  };
  return (
    <>
      {props.children}
      <TabBar visible={visible} activeKey={activeKey} onChange={setActiveTab}>
        {tabs.map((item) => {
          return (
            <TabBar.Item
              key={item.router}
              itemKey={item.router}
              title={item.title}
              icon={item.icon}
              badge={item.badge as any}
            />
          );
        })}
      </TabBar>
    </>
  );
};

export default connect(({ user }: any) => ({
  currentUser: user.currentUser,
}))(withRouter(Home));
