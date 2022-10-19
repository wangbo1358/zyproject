import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
// import CSS from './index.module.less';
import TabBarList from '../../components/TabBarList';

const User = () => {

  useEffect(() => {
    async function fetchData() {
      Taro.hideTabBar();
      Taro.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: '#272a3b'
      });

      Taro.setNavigationBarTitle({
        title: "我"
      });

      Taro.hideLoading();
    }
    fetchData();
  }, []);


  return (
    <View className='user_container'>
      
      <TabBarList currentText={'user'} />
    </View>
  )
}

export default User;

