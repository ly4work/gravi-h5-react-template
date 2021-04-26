import React, { useEffect } from 'react';
import styles from './index.less';
import DDLogin from './../lib/dd-app-sdk';
export default function IndexPage() {
  useEffect(() => {
    // @ts-ignore: Unreachable code error
    if (dd.env.platform == 'notInDingTalk') {
      alert('请用手机钉钉打开！');
      return;
    }
    DDLogin.config({
      env: 'dev',
      jsApiList: [],
    });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>h5-umi-模板</h1>
    </div>
  );
}
