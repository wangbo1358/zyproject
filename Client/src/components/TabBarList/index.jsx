import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import {  AtTabBar } from 'taro-ui';
import CSS from './index.module.less';

import work_uncheckPng from '../../assets/images/work_uncheck.png';
import work_checkedPng from '../../assets/images/work_checked.png';

import assistant_uncheckPng from '../../assets/images/assistant_uncheck.png';
import assistant_checkedPng from '../../assets/images/assistant_checked.png';

import analysis_uncheckPng from '../../assets/images/analysis_uncheck.png';
import analysis_checkedPng from '../../assets/images/analysis_checked.png';

import common_uncheckPng from '../../assets/images/common_uncheck.png';
import common_checkedPng from '../../assets/images/common_checked.png';

import my_uncheckPng from '../../assets/images/my_uncheck.png';
import my_checkedPng from '../../assets/images/my_checked.png';

const TabBarList = (props) => {
    const [tabList, setTabList] = useState([]);
    const [current, setCurrent] = useState(0);

    Taro.useDidShow(() => {
        const fetchData = async () => {
            
            let itemList = [
                {
                    key: 'work',
                    pagePath: '/pages/work/index',
                    image: work_uncheckPng,
                    selectedImage: work_checkedPng,
                    title: "工作"
                },
                {
                    key: 'assistant',
                    pagePath: '/pages/assistant/index',
                    image: assistant_uncheckPng,
                    selectedImage: assistant_checkedPng,
                    title: '助手'
                },
                {
                    key: 'common',
                    pagePath: '/pages/common/index',
                    image: common_uncheckPng,
                    selectedImage: common_checkedPng,
                    title: '常用',
                },
                {
                    key: 'analysis',
                    pagePath: '/pages/analysis/index',
                    image: analysis_uncheckPng,
                    selectedImage: analysis_checkedPng,
                    title: '分析',
                },
                {
                    key: 'user',
                    pagePath: '/pages/user/index',
                    image: my_uncheckPng,
                    selectedImage: my_checkedPng,
                    title: '我',
                }
            ]
            setTabList(itemList)
            let activeText = props?.currentText;
            if (activeText) {
                const index = itemList.findIndex(item => item.key === activeText);
                (index > -1) && setCurrent(index);
            }
        }
        fetchData();
    })

    const goPage = index => {
        const url = tabList[index].pagePath;
        Taro.switchTab({
            url: url
        })
    }

    return (
        <View className={CSS.barlist_wrap}>
            <AtTabBar
                fixed
                // className={CSS.tabbar}
                tabList={tabList}
                onClick={(index) => goPage(index)}
                current={current}
                iconSize={24}
                fontSize={12}
                selectedColor={'#88c000'}
                color={'#999999'}
            />
        </View>
    )
}

export default TabBarList;
