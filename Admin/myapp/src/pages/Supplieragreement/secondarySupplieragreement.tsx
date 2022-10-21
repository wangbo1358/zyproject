import {
  PageContainer,
  ProForm,
  ProFormSelect,
  ProFormDateTimePicker,
  ProFormText,
  ProFormDateRangePicker,
} from '@ant-design/pro-components';
import React, { useState, useEffect } from 'react';
import { Button, Card, Typography, Table, Input, Select, DatePicker, message } from 'antd';
import {  CloseOutlined } from '@ant-design/icons';
import { FormattedMessage, useIntl } from 'umi';
import moment from 'moment';
import styles from './secondarySupplieragreement.less';

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const SecondarySupplieragreement: React.FC = () => {
  const intl = useIntl();
  const [designatedchannelData, setDesignatedchannelData] = useState([]);
  const [productpolicyOneData, setProductpolicyOneData] = useState([]);
  const [productpolicyTwoData, setProductpolicyTwoData] = useState([]);
  const [supplementaryAgreementData, setSupplementaryAgreementData] = useState([]);

  const [supplementaryAgreementActiveContent, setSupplementaryAgreementActiveContent] = useState('');
  const [supplementaryAgreementActiveindex, setSupplementaryAgreementActiveindex] = useState(null);




  // const [productpolicyDataSource, setProductpolicyDataSource] = useState([]);


  useEffect(() => {
    async function fetchData() {
      let designatedchannelData0: any = [{
        channelcode: 'BJ000090',
        channelname: '宁波九州通药业有限公司',
        province: '浙江省'
      }, {
        channelcode: 'BJ0000192',
        channelname: '国药控股精华有限公司',
        province: '浙江省'
      }, {
        channelcode: 'BJ000283',
        channelname: '老百姓药业有限公司',
        province: '浙江省'
      }];
      setDesignatedchannelData(designatedchannelData0);

      let productpolicyOneData0: any = [{
        agreedprice: 9999,
        ticketdiscount: '',
        purchaseScalarQuantityLarge: '',
        purchaseScalarQuantitySmall: '',
        purchaseAmount: '',
        netSalesQuantity: '',
        netSalesAmount: ''
      }];
      setProductpolicyOneData(productpolicyOneData0);

      let productpolicyTwoData0: any = [{
        distributionrewards: '',
        expenseAccount: '单选项1',
        retailDistribution: '',
        expenseAccounts: '多选项1',
        medicalDistributors: '',
        expenseAccountTwo: '多选项1',
        custom7: '2022/05/15',
        custom8: '2022/05/15'
      }];
      setProductpolicyTwoData(productpolicyTwoData0);

      let supplementaryAgreementData0: any = [{
        title: '补充协议1',
        content: '补充协议1测试',
        active: true
      }, {
        title: '补充协议2',
        content: '我是补充协议2测试'
      }, {
        title: '补充协议3',
        content: '补充协议3测试'
      }];

      setSupplementaryAgreementData(supplementaryAgreementData0);

      setSupplementaryAgreementActiveContent(supplementaryAgreementData0[0].content);
      let index: any = 0;
      setSupplementaryAgreementActiveindex(index);
    }
    fetchData();
  }, []);

  const onSelectCustomerClick = () => {

  }

  const handleExpenseAccountChange = (e: any) => {

  }

  const oncustom7TimeChange = (e: any) => {

  }

  const oncustom8TimeChange = (e: any) => {

  }

  //补充协议切换
  const onSupplementaryAgreementTitleClick = (index: number) => {
    let supplementaryAgreementData0: any = [...supplementaryAgreementData];
    let findIndex: any = supplementaryAgreementData0.findIndex((item: any, itemIndex: number) => {
      return itemIndex === index;
    });

    for (let i = 0; i < supplementaryAgreementData0.length; i++) {
      supplementaryAgreementData0[i]['active'] = false;
    }

    if (findIndex !== -1) {
      supplementaryAgreementData0[findIndex]['active'] = true;
      setSupplementaryAgreementActiveContent(supplementaryAgreementData0[findIndex]?.content);
      setSupplementaryAgreementActiveindex(findIndex);
    }

    setSupplementaryAgreementData(supplementaryAgreementData0);
  }

  //补充协议修改
  const onSupplementaryAgreementTitleChange = (e: any) => {
    let supplementaryAgreementData0: any = [...supplementaryAgreementData];
    let findIndex: number = supplementaryAgreementData0.findIndex((item: any, itemIndex: number) => {
      return itemIndex === supplementaryAgreementActiveindex;
    });

    if (findIndex !== -1) {
      supplementaryAgreementData0[findIndex]['content'] = e.target.value;
      setSupplementaryAgreementActiveContent(e.target.value);
    }
    let value: any = JSON.parse(JSON.stringify(supplementaryAgreementData0));
    setSupplementaryAgreementData(value);
  }

  //补充协议新增
  const onSupplementaryAgreementAdd = () => {
    let supplementaryAgreementData0: any = JSON.parse(JSON.stringify(supplementaryAgreementData));
    supplementaryAgreementData0.push({
      title: '补充协议' + (supplementaryAgreementData.length + 1),
      content: '我是补充协议' + (supplementaryAgreementData.length + 1) + '测试'
    });
    setSupplementaryAgreementData(supplementaryAgreementData0);
  }

  //补充协议删除
  const onSupplementaryAgreementTitleDelete = () => {
    if (supplementaryAgreementData?.length === 1) {
      message.warning('仅剩一个啦!不能删了哦');
      return;
    }
    let supplementaryAgreementData0: any = JSON.parse(JSON.stringify(supplementaryAgreementData));
    supplementaryAgreementData0.splice(supplementaryAgreementActiveindex, 1)
    if (supplementaryAgreementData0?.length > 0) {
      supplementaryAgreementData0[0]['active'] = true;
      setSupplementaryAgreementActiveContent(supplementaryAgreementData0[0].content);
      let index: any = 0;
      setSupplementaryAgreementActiveindex(index);
    }
    setSupplementaryAgreementData(supplementaryAgreementData0);
  }

  return (
    <PageContainer>
      <ProForm
        name="validate_other"
        initialValues={{
          agreementStatus: 'normal',
          purchasemoney: '金额',
          puresalemoney: '金额',
          signingdate: moment('2020-02-01 18:25'),
          designatedchannel: '指定渠道'
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
        onFinish={async (value) => console.log(value)}
        submitter={{
          // 配置按钮文本
          searchConfig: {
            resetText: '',
            submitText: '保存',
          },
          // 配置按钮的属性
          resetButtonProps: {
            style: {
              // 隐藏重置按钮
              display: 'none',
            },
          }
        }}
      >
        <div className={styles.content_top}>
          <div className={styles.title}>
            <div className={styles.title_text_box}>
              <span className={styles.title_num}>1</span>协议主体
        </div>
          </div>
          <Card>
            <ul className={styles.descContent_list}>
              <li className={styles.descContent_item} style={{ paddingBottom: '0px' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}><span className={styles.timeTitleMust}>*</span>协议客户：</span>
                </div>
                <div className={styles.descContentRight}>
                  <Button onClick={onSelectCustomerClick}>选择客户</Button>
                  <span style={{ marginLeft: '5px' }}>{'上海正也医药有限公司'}</span>
                </div>
              </li>

              <li className={styles.descContent_item} style={{ paddingBottom: '0px' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}>协议状态：</span>
                </div>
                <div className={styles.descContentRight}>
                  <ProFormSelect
                    // initialValue="normal"
                    options={[
                      {
                        value: 'normal',
                        label: '正常',
                      },
                    ]}
                    width='sm'
                    name="agreementStatus"
                    label=""
                  />
                </div>
              </li>

              <li className={styles.descContent_item} style={{ paddingBottom: '0px' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}>购进指标：</span>
                </div>
                <div className={styles.descContentRight}>
                  <ProForm.Group>
                    <ProFormSelect
                      // initialValue="normal"
                      options={[
                        {
                          value: 'purchasemoney',
                          label: '金额',
                        },
                      ]}
                      width='xs'
                      name="purchasemoney"
                      label=""
                    />
                    <ProFormText
                      width='sm'
                      name="purchasenum"
                      disabled={true}
                      label=""
                      // tooltip="建议最长为 24 位"
                      placeholder="输入金额/数量"
                    />
                  </ProForm.Group>
                </div>
              </li>

              <li className={styles.descContent_item} style={{ paddingBottom: '0px' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}>纯销指标：</span>
                </div>
                <div className={styles.descContentRight}>
                  <ProForm.Group>
                    <ProFormSelect
                      // initialValue="normal"
                      options={[
                        {
                          value: 'puresalemoney',
                          label: '金额',
                        },
                      ]}
                      width='xs'
                      name="puresalemoney"
                      label=""
                    />
                    <ProFormText
                      width="sm"
                      name="puresalenum"
                      disabled={true}
                      label=""
                      // tooltip="建议最长为 24 位"
                      placeholder="输入金额/数量"
                    />
                  </ProForm.Group>
                </div>
              </li>

              <li className={styles.descContent_item} style={{ paddingBottom: '0px' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}>销售区域：</span>
                </div>
                <div className={styles.descContentRight}>
                  <Button onClick={() => { }}>选择区域</Button>
                  <ul className={styles.region_list}>
                    <li className={styles.region_Item}>
                      <span>{'全国'}</span><CloseOutlined className={styles.region_Item_close} />
                    </li>
                    <li className={styles.region_Item}>
                      <span>{'其他'}</span><CloseOutlined className={styles.region_Item_close} />
                    </li>
                  </ul>

                </div>
              </li>

              <li className={styles.descContent_item} style={{ paddingBottom: '0px' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}>签订时间：</span>
                </div>
                <div className={styles.descContentRight}>
                  <ProFormDateTimePicker
                    name="signingdate"
                    label=""
                    fieldProps={{
                      format: (value: any) => value.format('YYYY-MM-DD HH:mm'),
                    }}
                  />
                </div>
              </li>

              <li className={styles.descContent_item} style={{ marginBottom: '0px', padding: '0px', alignItems: 'start', width: '100%' }}>
                <div className={styles.descContentLeft}>
                  <span className={styles.timeTitle}>购进渠道：</span>
                </div>
                <div className={styles.descContentRight} style={{ flex: '1' }}>
                  <div className={styles.descContentRight_con} style={{ width: '100%' }}>
                    <div className={styles.descContentRight_con_top}>
                      <ProForm.Group>
                        <ProFormSelect
                          // initialValue="normal"
                          options={[
                            {
                              value: 'designatedchannel',
                              label: '指定渠道',
                            },
                          ]}
                          width='xs'
                          name="designatedchannel"
                          label=""
                        />
                        <Button onClick={() => { }}>请选择渠道</Button>

                      </ProForm.Group>
                    </div>

                    <div className={styles.descContentRight_con_bottom}>
                      <table>
                        <thead>
                          <tr >
                            <th>指定渠道编码</th>
                            <th>指定渠道名称</th>
                            <th>所在省</th>
                          </tr>
                        </thead>

                        <tbody>
                          {
                            designatedchannelData && designatedchannelData.length > 0 ? designatedchannelData.map((item: any, index) => {
                              return <tr key={index}>
                                <td>{item?.channelcode}</td>
                                <td>{item?.channelname}</td>
                                <td>{item?.province}</td>
                              </tr>
                            }) : null
                          }
                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
          </Card>
        </div>

        <div className={styles.content_middle}>
          <div className={styles.title}>
            <div className={styles.title_text_box}>
              <span className={styles.title_num}>2</span>产品政策
            </div>
          </div>

          <div className={styles.productpolicy_top}>
            <Button style={{ borderRadius: '8px' }} type="primary" onClick={() => { }}>添加产品</Button>
            <span className={styles.top_index}>购进总指标（万元）：<b>￥{1523.65}</b></span>
            <span className={styles.top_index}>指标按季度分解（万元）：<b>[Q1]￥12.5, [Q2]￥12.5, [Q3]￥12.5, [Q4]￥12.5</b></span>
            <span className={styles.top_index}>纯销总指标（万元）：<b>￥{152.65}</b></span>
          </div>
          <Card>
            <div className={styles.productpolicy_content}>
              <div className={styles.productpolicy_content_top}>
                <div className={styles.productpolicy_content_top_left}>
                  <div className={styles.top_left_cp}>
                    <span className={styles.timeTitle}> 产品：</span>
                    <Button style={{ marginLeft: '5px' }} onClick={() => { }}>选择产品</Button>
                    <span style={{ marginLeft: '8px', color: '#4f8cff' }}>{'美复胶丸 24粒/盒'}</span>
                  </div>
                  <div className={styles.top_left_dateRange}>
                    <span style={{ marginLeft: '35px' }} className={styles.productpolicy_top_span}> 协议效期：</span>
                    <ProFormDateRangePicker name="dateRange" label="" />
                  </div>
                </div>
                <div className={styles.productpolicy_content_top_right}>
                  <Button style={{ color: '#fea831' }} onClick={() => { }}>删除</Button>
                </div>
              </div>

              <div className={styles.productpolicy_content_bottom}>
                <table>
                  <thead>
                    <tr>
                      <th>协议价（元）</th>
                      <th>票折</th>
                      <th>购进指标量（大单位）</th>
                      <th>购进指标量（小单位）</th>
                      <th>购进金额（万元）</th>
                      <th>纯销指标量（小单位）</th>
                      <th>纯销指标金额（万元）</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      productpolicyOneData && productpolicyOneData.length > 0 ? productpolicyOneData.map((item: any, index) => {
                        return <tr key={index}>
                          <td><Input value={item?.agreedprice} disabled={true} placeholder="请输入" /></td>
                          <td><Input value={item?.ticketdiscount} disabled={true} placeholder="请输入" /></td>
                          <td><Input value={item?.purchaseScalarQuantityLarge} disabled={true} placeholder="请输入" /></td>
                          <td><Input value={item?.purchaseScalarQuantitySmall} disabled={true} placeholder="请输入" /></td>
                          <td><Input value={item?.purchaseAmount} disabled={true} placeholder="请输入" /></td>
                          <td><Input value={item?.netSalesQuantity} disabled={true} placeholder="请输入" /></td>
                          <td><Input value={item?.netSalesAmount} disabled={true} placeholder="请输入" /></td>
                        </tr>
                      }) : null
                    }
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>分销奖励</th>
                      <th>费用科目</th>
                      <th>零售配送</th>
                      <th>费用科目</th>
                      <th>医疗配送商</th>
                      <th>费用科目</th>
                      <th>自定义7</th>
                      <th>自定义8</th>
                    </tr>
                  </thead>


                  <tbody>
                    {
                      productpolicyTwoData && productpolicyTwoData.length > 0 ? productpolicyTwoData.map((item: any, index) => {
                        return <tr key={index}>
                          <td><Input value={item?.distributionrewards} disabled={true} placeholder="请输入" /></td>
                          <td>
                            <Select value={item?.expenseAccount} style={{ width: '100%' }} onChange={handleExpenseAccountChange}>
                              <Option value="单选项1">单选项1</Option>
                            </Select>
                          </td>
                          <td><Input value={item?.retailDistribution} disabled={true} placeholder="请输入" /></td>
                          <td>
                            <Select value={item?.expenseAccounts} style={{ width: '100%' }} onChange={handleExpenseAccountChange}>
                              <Option value="多选项1">多选项1</Option>
                            </Select>
                          </td>
                          <td><Input value={item?.medicalDistributors} disabled={true} placeholder="请输入" /></td>
                          <td>
                            <Select value={item?.expenseAccountTwo} style={{ width: '100%' }} onChange={handleExpenseAccountChange}>
                              <Option value="多选项1">多选项1</Option>
                            </Select>
                          </td>
                          <td>
                            <DatePicker style={{ width: '100%' }} value={moment(item?.custom7, dateFormat)} format={dateFormat} onChange={oncustom7TimeChange} />
                          </td>
                          <td>
                            <DatePicker style={{ width: '100%' }} value={moment(item?.custom8, dateFormat)} format={dateFormat} onChange={oncustom8TimeChange} />
                          </td>
                        </tr>
                      }) : null
                    }
                  </tbody>
                </table>
              </div>
            </div>

          </Card>
        </div>

        <div className={styles.content_bottom}>
          <div className={styles.title}>
            <div className={styles.title_text_box}>
              <span className={styles.title_num}>3</span>补充协议
            </div>
          </div>

          <div className={styles.supplementaryAgreement_content}>
            <div className={styles.supplementaryAgreement_content_top}>
              <div className={styles.content_top_left}>
                {
                  supplementaryAgreementData && supplementaryAgreementData.length > 0 ? supplementaryAgreementData.map((item: any, index: number) => {
                    return <span
                      key={index}
                      onClick={() => { onSupplementaryAgreementTitleClick(index) }}
                      className={styles.title_item}
                      style={{ color: item?.active ? '#3ba0fe' : '#000000' }}
                    >{item?.title}</span>
                  }) : null
                }
              </div>
              <div className={styles.content_top_right}>
                <Button className={styles.content_top_rightBtn} style={{ borderRadius: '8px' }} type="primary" onClick={onSupplementaryAgreementAdd}>新增</Button>
              </div>
            </div>
            <div className={styles.supplementaryAgreement_content_bottom}>
              <div className={styles.content_bottom_title}>
                <div className={styles.content_bottom_title_left}>
                  {'协议内容：'}
                </div>
                <div className={styles.content_bottom_title_right}>
                  <Button style={{ color: '#fea831' }} onClick={onSupplementaryAgreementTitleDelete}>删除</Button>
                </div>
              </div>
              <div className={styles.content_bottom_content}>
                <TextArea onChange={(e) => { onSupplementaryAgreementTitleChange(e) }} value={supplementaryAgreementActiveContent || ''} rows={4} />
              </div>
            </div>
          </div>
        </div>
      </ProForm>
    </PageContainer >
  );
};

export default SecondarySupplieragreement;
