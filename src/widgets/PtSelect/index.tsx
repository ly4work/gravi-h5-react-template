import { useEffect, useRef, useReducer, useState } from 'react';
import {
  Picker as ZPicker,
  Select as ZSelect,
  Input as ZInput,
  Panel as ZPanel,
  Cell as ZCell,
  Icon as ZIcon,
} from 'zarm';
import { FormItemBaseConfigType } from '../utils';

export type PtSelectProps = FormItemBaseConfigType & {
  data: {
    value: string;
    label: string;
  }[];
};

const PtSelect = (props: PtSelectProps) => {
  const { data, value, onChange, label, readOnly, disabled } = props;
  const [visible, setVisible] = useState(false);
  const [val, setVal] = useState({ value: '', label: '' });
  return (
    <ZCell title={label}>
      <ZSelect
        value={value}
        dataSource={data}
        disabled={readOnly}
        onOk={(selected) => {
          console.log('Single Picker onOk: ', selected);
          const item = selected[0];
          setVal(selected[0]);
          setVisible(false);
          onChange && onChange(item.value);
        }}
      />
    </ZCell>
  );
  // return (
  //   <>
  //     <ZCell
  //       onClick={() => {
  //         !readOnly && !disabled && setVisible(true);
  //       }}
  //       description={
  //         <div>
  //           <span style={{ marginRight: '10px' }}>{val.label}</span>
  //           <span>
  //             <ZIcon type={'arrow-bottom'} theme="primary" size="sm" />
  //           </span>
  //         </div>
  //       }
  //     >
  //       {label}
  //     </ZCell>
  //     <ZPicker
  //       visible={visible}
  //       value={value}
  //       dataSource={data}
  //       itemRender={(data: any) => data.label}
  //       onOk={(selected) => {
  //         console.log('Single Picker onOk: ', selected);
  //         const item = selected[0];
  //         setVal(selected[0]);
  //         setVisible(false);
  //         onChange && onChange(item.value);
  //       }}
  //       onCancel={() => setVisible(false)}
  //     />
  //   </>
  // );
};

export default PtSelect;
