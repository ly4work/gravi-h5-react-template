import { useState } from 'react';
import { Input as ZInput, Cell as ZCell } from 'zarm';
import { FormItemBaseConfigType } from '../utils';

export type PtInputProps = FormItemBaseConfigType & {
  placeholder?: string;
  rows?: number; //  多行文本时的行数
  autoHeight?: boolean; // 多行文本是否自适应
  maxLength?: number;
  clearable?: boolean;
  showLength?: boolean; // 多行文本是否显示字数
};
const PtInput = (props: PtInputProps) => {
  const {
    name,
    type = 'text',
    label,
    unit,
    value,
    placeholder,
    defaultValue,
    disabled,
    readOnly,
    rows,
    autoHeight,
    maxLength,
    showLength,
    clearable = false,
    onChange,
  } = props;
  const [val, setVal] = useState('');
  if (['text', 'number', 'price', 'idcard'].includes(type)) {
    if (readOnly) {
      return (
        <ZCell title={label}>
          <ZInput
            type={'text'}
            value={value}
            disabled={disabled}
            readOnly={readOnly}
            onChange={(val: any) => {
              setVal(val);
              onChange && onChange(val);
            }}
          />
        </ZCell>
      );
    }
    return (
      <ZCell title={label}>
        <ZInput
          clearable={clearable}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          // defaultValue={defaultValue}
          onChange={(val: any) => {
            setVal(val);
            onChange && onChange(val);
          }}
        />
      </ZCell>
    );
  } else {
    return (
      <ZCell title={label}>
        <ZInput
          type="text"
          placeholder={placeholder}
          rows={rows}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          // defaultValue={defaultValue}
          autoHeight={autoHeight}
          showLength={showLength}
          onChange={(val: any) => {
            setVal(val);
            onChange && onChange(val);
          }}
        />
      </ZCell>
    );
  }
};

export default PtInput;
