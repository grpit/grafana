import { Select } from '@grafana/ui';
import { ResultFormat } from '../../types';
import { SelectableValue } from '@grafana/data';
import React from 'react';
import { unwrap } from './unwrap';

// FIXME: duplicated
const RESULT_FORMATS: Array<SelectableValue<ResultFormat>> = [
  { label: 'Time series', value: 'time_series' },
  { label: 'Table', value: 'table' },
  { label: 'Logs', value: 'logs' },
];

type Props = {
  format: ResultFormat;
  onChange: (newFormat: ResultFormat) => void;
};

export const FormatAsSection = ({ format, onChange }: Props): JSX.Element => {
  return (
    <>
      <Select<ResultFormat>
        className="width-9"
        onChange={(v) => {
          onChange(unwrap(v.value));
        }}
        value={format}
        options={RESULT_FORMATS}
      />
    </>
  );
};
