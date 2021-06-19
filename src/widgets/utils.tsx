import React from 'react';
export type FormItemType =
  | 'text'
  | 'number'
  | 'price'
  | 'idcard'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'multiRadio'
  | 'cascadeRadio'
  | 'date'
  | 'time'
  | 'datetime'
  | 'diy';

export type FormItemBaseConfigType = {
  name: string;
  type: FormItemType;
  label: string;
  unit?: string; //  单位型input
  value: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  render?: () => JSX.Element;
};
