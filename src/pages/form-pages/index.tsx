import React, { useState, useRef } from 'react';
import { PtForm } from '@/widgets/export';
import { Button } from 'zarm';
const FormPage = () => {
  const formRef = useRef();
  const columns = [
    {
      name: 'target',
      type: 'text',
      label: '拜访目的',
      defaultValue: '搞钱',
      readOnly: true,
    },
    {
      name: 'amount',
      type: 'price',
      label: '交易金额',
      defaultValue: '12.82',
      readOnly: true,
    },
    {
      name: 'visitTime',
      type: 'time',
      label: '拜访时间',
      defaultValue: new Date(),
      readOnly: true,
    },
    {
      type: 'diy',
      name: 'location',
      label: '定位',
      render: () => {
        return <span>123</span>;
        // return <GjLocation></GjLocation>;
      },
      readOnly: true,
    },
    {
      name: 'productType',
      type: 'select',
      label: '商品类型',
      data: [
        { value: '1001', label: '猪前腿' },
        { value: '1002', label: '猪后腿' },
        { value: '1003', label: '猪白条J1' },
      ],
      readOnly: true,
      defaultValue: '1003',
    },
    {
      name: 'zk',
      type: 'radio',
      label: '状况',
      data: [
        { value: '1001', label: '良好' },
        { value: '1002', label: '一般' },
        { value: '1003', label: '差' },
      ],
      defaultValue: '1002',
      readOnly: true,
    },
    {
      name: 'jyzt',
      type: 'multiRadio',
      label: '经营主体',
      data: [
        { value: '1001', label: '个人' },
        { value: '1002', label: '商超' },
        { value: '1003', label: '餐饮' },
        { value: '1004', label: '政府/军队' },
        { value: '1005', label: '公司' },
      ],
      readOnly: true,
    },
    {
      name: 'jytd',
      type: 'cascadeRadio',
      label: '经营痛点',
      data: [
        {
          value: '1001',
          label: '有',
          children: [
            { value: '10011', label: '产品质量' },
            { value: '10012', label: '价格22' },
            { value: '10013', label: '配送好的' },
            { value: '10014', label: '没流量' },
            { value: '10015', label: '级别底' },
            { value: '10016', label: '时间说的不够' },
            { value: '10017', label: '周期' },
          ],
          isMultiple: true,
        },
        { value: '1002', label: '无', children: [], isMultiple: false },
      ],
      readOnly: true,
      defaultValue: {
        mainVal: '1001',
        subVal: ['10014', '10016'],
      },
    },
    {
      name: 'desc',
      type: 'textarea',
      label: '备注',
      authHeight: false,
      showLength: true,
      rows: 5,
      maxLength: 200,
      readOnly: true,
    },
  ];
  const initialValues = {
    target: '搞钱2',
    x: 1,
    y: 2,
  };
  return (
    <div>
      <PtForm ref={formRef} columns={columns} initialValues={initialValues} />
      <Button block theme="primary">
        提交
      </Button>
    </div>
  );
};

export default FormPage;
