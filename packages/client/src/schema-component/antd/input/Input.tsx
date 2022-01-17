import React from 'react';
import { Input as AntdInput } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { LoadingOutlined } from '@ant-design/icons';
import { ReadPretty } from './ReadPretty';

type ComposedInput = React.FC<InputProps> & {
  TextArea?: React.FC<TextAreaProps>;
  URL?: React.FC<InputProps>;
  DesignableBar?: React.FC<any>;
};

export const Input: ComposedInput = connect(
  AntdInput,
  mapProps((props, field) => {
    return {
      ...props,
      suffix: <span>{field?.['loading'] || field?.['validating'] ? <LoadingOutlined /> : props.suffix}</span>,
    };
  }),
  mapReadPretty(ReadPretty.Input),
);

Input.TextArea = connect(AntdInput.TextArea, mapReadPretty(ReadPretty.TextArea));
Input.URL = connect(AntdInput, mapReadPretty(ReadPretty.URL));

export default Input;
