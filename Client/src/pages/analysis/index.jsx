import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
// import CSS from './index.module.less';
import TabBarList from '../../components/TabBarList';

const Analysis = () => {

  useEffect(() => {
    async function fetchData() {

      Taro.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: '#272a3b'
      });

      Taro.setNavigationBarTitle({
        title: "分析"
      });

      Taro.hideLoading();
    }
    fetchData();
  }, []);


  return (
    <View className='analysis_container'>
      
      <TabBarList currentText={'analysis'} />
    </View>
  )
}

export default Analysis;

