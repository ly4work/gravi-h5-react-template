import React, { useState } from 'react';
import {
  DateSelect as ZDateSelect,
  DatePicker as ZDatePicker,
  Cell as ZCell,
  Icon as ZIcon,
} from 'zarm';
import { FormItemBaseConfigType } from '../utils';
import moment from 'moment';
export type PtTimePickerProps = FormItemBaseConfigType & {
  type: 'date' | 'time' | 'datetime';
  min?: string;
  max?: string;
  value: Date | string;
};
const PtTimePicker = (props: PtTimePickerProps) => {
  const {
    name,
    type,
    label,
    value,
    defaultValue,
    disabled,
    readOnly,
    min,
    max,
    onChange,
  } = props;
  const [val, setVal] = useState<any>('');
  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <ZCell
        onClick={() => {
          !readOnly && !disabled && setVisible(true);
        }}
        description={
          <div>
            <span style={{ marginRight: '10px' }}>
              {value ? value.toLocaleString() : '选择时间'}
            </span>
            <span>
              <ZIcon type={'arrow-bottom'} theme="primary" size="sm" />
            </span>
          </div>
        }
      >
        {label}
      </ZCell>
      <ZDatePicker
        visible={visible}
        title="请选择"
        mode={type}
        min={min}
        max={max}
        value={value}
        onOk={(val: any) => {
          console.log('DateSelect onOk: ', val);
          setVal(val);
          setVisible(false);
          onChange && onChange(val);
        }}
        onCancel={() => setVisible(false)}
      />
    </React.Fragment>
  );

  // return (
  //   <ZCell title={label}>
  //     <ZDateSelect
  //       className="test-dateSelect"
  //       title="请选择"
  //       mode={type}
  //       min={min}
  //       max={max}
  //       value={value}
  //       onOk={(val: any) => {
  //         console.log('DateSelect onOk: ', val);
  //         setVal(val);
  //         onChange && onChange(val);
  //       }}
  //     />
  //   </ZCell>
  // );
};

export default PtTimePicker;
