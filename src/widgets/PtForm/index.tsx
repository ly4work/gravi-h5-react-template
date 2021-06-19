import React, { useState, useImperativeHandle } from 'react';
import { PtInputProps } from '../PtInput';
import { FormItemType } from '../utils';
import { PtSelectProps } from '../PtSelect';
import { PtRadioBoxProps } from '../PtRadioBox';
import { PtInput, PtSelect, PtRadioBox, PtTimePicker } from './../export';
import { PtTimePickerProps } from '../PtTimePicker';
import { Cell as ZCell } from 'zarm';

type FormItemGlobalBaseType = (
  | PtInputProps
  | PtSelectProps
  | PtRadioBoxProps
  | PtTimePickerProps
) & {
  type: FormItemType;
};

type PtFormType = {
  columns: Array<any>;
  initialValues?: any;
  onSubmit?: (values: any) => void;
  // ref: React.MutableRefObject<any>;
};
const PtForm = (props: PtFormType, ref: React.MutableRefObject<any>) => {
  const { columns, initialValues = {} } = props;
  const defValues: {
    [key: string]: any;
  } = {};
  columns.forEach((item: any) => {
    defValues[item.name] = initialValues[item.name] || item.defaultValue || '';
  });

  const [values, setValues] = useState({ ...defValues, ...initialValues });

  const handleChange = (params: { name: string; value: string }) => {
    console.log();
    const nextFormValues = {
      ...values,
      [params.name]: params.value,
    };
    console.log('form updated =>', nextFormValues);
    setValues(nextFormValues);
  };

  useImperativeHandle(ref, () => {
    return {
      getValues: () => {
        return values;
      },
      resetValues: () => {
        setValues({ ...defValues });
      },
    };
  });

  const renderForm = (fields: any) => {
    return fields.map((formItem: FormItemGlobalBaseType) => {
      const { type } = formItem;
      const nProps = {
        key: formItem.name,
        ...formItem,
        onChange: (val: any) => {
          handleChange({ name: formItem.name, value: val });
        },
        value: values[formItem.name],
      };
      if (['text', 'number', 'price', 'idcard', 'textarea'].includes(type)) {
        return <PtInput {...nProps} />;
      } else if (type === 'select') {
        return <PtSelect {...nProps} data={formItem.data} />;
      } else if (['radio', 'multiRadio', 'cascadeRadio'].includes(type)) {
        return <PtRadioBox {...nProps} data={formItem.data} />;
      } else if (['date', 'time', 'datetime'].includes(type)) {
        return <PtTimePicker {...nProps} data={formItem.data} />;
      } else if (type === 'diy') {
        return (
          <ZCell title={formItem.label}>
            {formItem.render && React.cloneElement(formItem.render(), nProps)}
          </ZCell>
        );
      }
    });
  };

  return <div>{renderForm(columns)}</div>;
};

export default React.forwardRef(PtForm);
