import React, { useState } from 'react';
import { Cell as ZCell, Radio as ZRadio, Checkbox as ZCheckbox } from 'zarm';
import { FormItemBaseConfigType } from '../utils';
import './index.css';
export type SizeType = 'lg' | 'md' | 'sm' | 'xs';
const sizeMap: {
  [key: string]: SizeType;
} = {
  '2': 'sm',
  '3': 'sm',
  '4': 'sm',
  '5': 'sm',
};
export type PtRadioBoxProps = FormItemBaseConfigType & {
  value: any;
  defaultValue: any;
  size: SizeType;
  shape: 'rect' | 'radius' | 'round';
  ghost: boolean;
  data: { label: string; value: string; children?: []; isMultiple?: boolean }[];
};
const PtRadioBox = (props: PtRadioBoxProps) => {
  const {
    name,
    type,
    label,
    unit,
    value,
    defaultValue,
    disabled,
    readOnly,
    onChange,
    data,
    size = 'sm',
    shape = 'radius',
    ghost = false,
  } = props;
  const [val, setVal] = useState('');

  //  单选
  if (type === 'radio') {
    return (
      <React.Fragment>
        <ZCell
          description={
            <ZRadio.Group
              {...props}
              size={size}
              type="button"
              value={value}
              disabled={readOnly}
              onChange={(val: any) => {
                setVal(val);
                onChange && onChange(val);
              }}
            >
              {data.map((item) => {
                return (
                  <ZRadio key={item.value} value={item.value}>
                    {item.label}
                  </ZRadio>
                );
              })}
            </ZRadio.Group>
          }
        >
          {label}
        </ZCell>
      </React.Fragment>
    );
  } else if (type === 'multiRadio') {
    //  多选
    return (
      <React.Fragment>
        <ZCell
          description={
            <ZCheckbox.Group
              {...props}
              size={sizeMap[data.length]}
              type="button"
              value={value || []}
              disabled={readOnly}
              onChange={(val: any) => {
                setVal(val);
                onChange && onChange(val);
              }}
            >
              {data.map((item) => {
                return (
                  <ZCheckbox key={item.value} value={item.value}>
                    {item.label}
                  </ZCheckbox>
                );
              })}
            </ZCheckbox.Group>
          }
        >
          <div
            className="pt-multi-radio-label"
            style={{
              fontSize: '15px',
              minWidth: '80px',
              height: '48px',
              lineHeight: '48px',
            }}
          >
            {label}
          </div>
        </ZCell>
      </React.Fragment>
    );
  } else if (type === 'cascadeRadio') {
    return (
      <React.Fragment>
        {/* <ZCell description={<PtCascadeRadioGroup {...props} />}>
          <div className="pt-multi-radio-label">{label}</div>
        </ZCell> */}

        <div className="pt-multi-radio-wrapper" style={{ padding: '0 16px' }}>
          <div className="pt-multi-radio-inner">
            <div
              className="pt-multi-radio-label pl"
              style={{
                fontSize: '15px',
                minWidth: '80px',
                height: '48px',
                lineHeight: '48px',
              }}
            >
              {label}
            </div>
            <PtCascadeRadioGroup {...props} />
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};

export const PtCascadeRadioGroup = (props: PtRadioBoxProps) => {
  const {
    name,
    type,
    label,
    unit,
    value,
    defaultValue,
    disabled,
    readOnly,
    onChange,
    data,
    size = 'sm',
    shape = 'radius',
    ghost = false,
  } = props;
  const [val, setVal] = useState('');
  const [childrenVal, setChildrenVal] = useState([]);
  let curChildrenGroup = data.find((info) => info.value === val) as any;
  if (readOnly) {
    curChildrenGroup = data.find((info) => info.value === value.mainVal) as any;
  }
  console.log(123, value);
  //  value的格式为 {mainVal: string; subVal: [] | string}
  return (
    <div className="pt-diy-radio-box">
      <ZRadio.Group
        {...props}
        size={size}
        type="button"
        value={value && value.mainVal}
        defaultValue={value && value.mainVal}
        disabled={readOnly}
        onChange={(val: any) => {
          setVal(val);
          onChange &&
            onChange({
              mainVal: val,
              subVal: null,
            });
        }}
      >
        {data.map((item) => {
          return (
            <ZRadio key={item.value} value={item.value}>
              {item.label}
            </ZRadio>
          );
        })}
      </ZRadio.Group>
      <div className="pt-cas-wrapper">
        {curChildrenGroup && curChildrenGroup?.children.length > 0 && (
          <PtRadioBox
            name={curChildrenGroup.name}
            type={curChildrenGroup.isMultiple ? 'multiRadio' : 'radio'}
            value={value && value.subVal}
            readOnly={readOnly}
            defaultValue={curChildrenGroup?.defaultValue?.subVal}
            onChange={(cVal: any) => {
              setChildrenVal(cVal);
              onChange &&
                onChange({
                  ...value,
                  subVal: cVal,
                });
            }}
            data={curChildrenGroup.children}
            size="sm"
            shape="radius"
          />
        )}
      </div>
    </div>
  );
};

export default PtRadioBox;
