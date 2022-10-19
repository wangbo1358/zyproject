import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
// import CSS from './index.module.less';
import TabBarList from '../../components/TabBarList';

const Common = () => {

  useEffect(() => {
    async function fetchData() {

      Taro.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: '#272a3b'
      });

      Taro.setNavigationBarTitle({
        title: "常用"
      });

      Taro.hideLoading();
    }
    fetchData();
  }, []);


  return (
    <View className='common_container'>
      
      <TabBarList currentText={'common'} />
    </View>
  )
}

export default Common;

