import { useState, useEffect } from 'react';
import { Icon, TabBar, Cell, Button, Panel, SearchBar } from 'zarm';
import { connect, Dispatch } from 'umi';
import GrProgress from './components/GrProgress';
const TabIcon = Icon.createFromIconfont(
  '//at.alicdn.com/t/font_1340918_lpsswvb7yv.js',
);

interface IProps {
  dispatch: Dispatch;
}

const Home = (props: IProps) => {
  const { dispatch, currentUser } = props;
  const [activeKey, setActiveKey] = useState('home');
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    queryCurrent();
  }, []);
  const queryCurrent = () => {
    dispatch({
      type: 'user/fetchCurrent',
    });
  };

  console.log(123, currentUser);
  return (
    <>
      <SearchBar
        onSubmit={(value) => {
          console.log(`搜索内容为${value}`);
        }}
        onFocus={() => {
          console.log('获取焦点');
        }}
        onChange={(value) => {
          console.log(value);
        }}
        onBlur={() => {
          console.log('失去焦点');
        }}
        onClear={() => {
          console.log('点击了清除');
        }}
        onCancel={() => {
          console.log('点击了取消');
        }}
      />

      <Panel title="我是谁">
        <div className="box">{currentUser.name}</div>
        <div className="box">{currentUser.address}</div>
        <div className="box">{currentUser.group}</div>
        <div className="box">{currentUser.title}</div>
      </Panel>
      <GrProgress></GrProgress>
    </>
  );
};

export default connect(({ user }: any) => ({
  currentUser: user.currentUser,
}))(Home);
