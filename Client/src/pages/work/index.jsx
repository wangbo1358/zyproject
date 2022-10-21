import React, { useState, useEffect } from 'react';
import Taro, { useReachBottom, useShareAppMessage, useRouter } from '@tarojs/taro';
import { View, Text, ScrollView, Swiper, SwiperItem, Image, Button } from '@tarojs/components';
import { AtSearchBar, AtButton, AtBadge, AtList, AtListItem, AtGrid, AtImagePicker, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import CSS from './index.module.less';
import TabBarList from '../../components/TabBarList';
import smallbellImage from '../../assets/images/smallbell.png';
import functionImage from '../../assets/images/function.png';
import bannerlImage from '../../assets/images/banner.jpg';

const Work = () => {
  // const [workAllData, setWorkAllData] = useState({});
  const [bannerData, setBannerData] = useState([]);
  const [navigationData, setNavigationData] = useState([]);
  const [noticeData, setNoticeData] = useState([]);
  const [navigationImgData, setNavigationImgData] = useState([]);
  const [functionData, setFunctionData] = useState([]);
  const [BfunctionData, setBFunctionData] = useState([]);

  const [needShowFunctionBBox, setNeedShowFunctionBBox] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // Taro.showLoading({
      //   title: '加载中'
      // });
      Taro.hideTabBar();
      Taro.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#272a3b'
      });

      Taro.setNavigationBarTitle({
        title: "工作"
      });

      //轮播
      let bannerData0 = [{
        link: '',
        url: bannerlImage
      }, {
        link: '',
        url: bannerlImage
      }, {
        link: '',
        url: bannerlImage
      }, {
        link: '',
        url: bannerlImage
      }, {
        link: '',
        url: bannerlImage
      }]
      setBannerData(bannerData0);


      // 导航图
      let navigationData0 = [
        {
          'image': 'https://jf-static-resources.oss-cn-hangzhou.aliyuncs.com/college/images/lookfor_training.svg',
          'name': '功能1',
          'link': ''
        },
        {
          'image': 'https://jf-static-resources.oss-cn-hangzhou.aliyuncs.com/college/images/learn_experience.svg',
          'name': '功能2',
          'link': ''
        },
        {
          'image': 'https://jf-static-resources.oss-cn-hangzhou.aliyuncs.com/college/images/checkmsg.svg',
          'name': '功能3',
          'link': ''
        },
        {
          'image': 'https://jf-static-resources.oss-cn-hangzhou.aliyuncs.com/college/images/learn_experience.svg',
          'name': '功能4',
          'link': ''
        },
        {
          'image': 'https://jf-static-resources.oss-cn-hangzhou.aliyuncs.com/college/images/checkmsg.svg',
          'name': '功能5',
          'link': ''
        }];

      setNavigationImgData(navigationData0);

      let functionData0 = [{
        image: functionImage,
        value: '功能A',
        link: ''
      },
      {
        image: functionImage,
        value: '功能B',
        link: ''
      }, {
        image: functionImage,
        value: '功能C',
        link: ''
      },
      {
        image: functionImage,
        value: '功能D',
        link: ''
      }, {
        image: functionImage,
        value: '功能E',
        link: ''
      },
      {
        image: functionImage,
        value: '功能F',
        link: ''
      }, {
        image: functionImage,
        value: '功能G',
        link: ''
      },
      {
        image: functionImage,
        value: '功能H',
        link: ''
      }, {
        image: functionImage,
        value: '功能I',
        link: ''
      },
      {
        image: functionImage,
        value: '功能J',
        link: ''
      }];

      setFunctionData(functionData0);

      let BFunctionData0 = [{
        image: functionImage,
        value: '功能1',
        link: ''
      }, {
        image: functionImage,
        value: '功能2',
        link: ''
      }, {
        image: functionImage,
        value: '功能3',
        link: ''
      }, {
        image: functionImage,
        value: '功能4',
        link: ''
      }, {
        image: functionImage,
        value: '功能5',
        link: ''
      }, {
        image: functionImage,
        value: '功能6',
        link: ''
      }, {
        image: functionImage,
        value: '功能7',
        link: ''
      }, {
        image: functionImage,
        value: '功能8',
        link: ''
      }, {
        image: functionImage,
        value: '功能9',
        link: ''
      }, {
        image: functionImage,
        value: '功能10',
        link: ''
      }];
      setBFunctionData(BFunctionData0);

      // Taro.hideLoading();
    }
    fetchData();
  }, []);

  const onCurriculumClick = id => {
    Taro.navigateTo({
      url: `/pages/curriculumDetail/index?id=${id}`
    })
  }

  const onNavigationClick = (item, index) => {

  }

  const functionClick = (item, index) => {
    if (item?.value === '功能B') {
      setNeedShowFunctionBBox(true);
    }
  }

  const onFunctionBClose = () => {
    setNeedShowFunctionBBox(false);
  }

  const bannerItemOnclick = (link) => {
    Taro.navigateTo({
      url: link
    })
  }

  return (
    <View className={CSS.work_container}>

      <View className={CSS.container_top}>
        <View className={CSS.work_header} onClick={() => { }}>
          <Text className={CSS.work_header_text}>早上好！张三先生</Text>
          <View>
            <AtBadge className={CSS.work_header_badge} value={77} maxValue={99}>
              <Image className={CSS.smallbellImage} src={smallbellImage} mode='heightFix' />
            </AtBadge>
          </View>
        </View>

        <View className={CSS.banner_field}>
          <Swiper
            indicatorDots
            autoplay
            indicatorColor='rgba(0, 0, 0, .2)'
            indicatorActiveColor='#88c000'
          >
            {
              bannerData && bannerData[0] && bannerData.length > 0 ?
                bannerData.map((banner, index) => {
                  return <SwiperItem key={index} onClick={() => { bannerItemOnclick(banner.link) }}>
                    <View className={CSS.banner_item}>
                      <Image src={banner.url} />
                    </View>
                  </SwiperItem>
                }) : null
            }
          </Swiper>
        </View>

      </View>

      <View className={CSS.container_middle}>
        {
          navigationImgData && navigationImgData.length > 0 ? navigationImgData.map((item, index) => {
            return <View onClick={onNavigationClick} key={index} className={CSS.middle_item}>
              <Image className={CSS.middle_item_Image} src={item?.image} mode='widthFix' />
              <View className={CSS.middle_item_bottom}>
                <Text className={CSS.middle_item_name}>{item?.name}</Text>
              </View>
            </View>
          }) : null
        }
      </View>

      <View className={CSS.container_bottom}>
        <View className={CSS.middle_grid}>
          <AtGrid
            onClick={functionClick}
            columnNum={4}
            data={
              functionData.length > 0 && functionData
            } />
        </View>
      </View>

      {/* needShowFunctionBBox */}
      {/* 功能B弹框 */}
      {
        needShowFunctionBBox ? <View className={CSS.functionB_Box} onClick={onFunctionBClose}>
          <View className={CSS.functionBBox_content} onClick={(e)=>{ e.stopPropagation() }}>
            <View className={CSS.functionBBox_content_top}>
              <Text className={CSS.content_top_title}>{'功能B'}</Text>
            </View>
            <View className={CSS.functionBBox_content_bottom}>
              <AtGrid
                onClick={functionClick}
                columnNum={4}
                hasBorder={false}
                data={
                  BfunctionData.length > 0 && BfunctionData
                } />
            </View>
          </View>
        </View> : null
      }



      <TabBarList currentText={'work'} />
    </View>
  )
}

export default Work;

