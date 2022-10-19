import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
// import CSS from './index.module.less';
import TabBarList from '../../components/TabBarList';

const Assistant = () => {

  useEffect(() => {
    async function fetchData() {

      Taro.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: '#272a3b'
      });

      Taro.setNavigationBarTitle({
        title: "助手"
      });

      Taro.hideLoading();
    }
    fetchData();
  }, []);


  return (
    <View className='assistant_container'>
      
      <TabBarList currentText={'assistant'} />
    </View>
  )
}

export default Assistant;

