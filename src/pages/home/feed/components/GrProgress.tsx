import { useState } from 'react';
import { Progress, Cell, Select, Radio, Stepper } from 'zarm';

const GrProgress = () => {
  const [percent, setPercent] = useState(10);
  const [theme, setTheme] = useState('primary');
  const [strokeShape, setStrokeShape] = useState('round');
  const [strokeWidth, setStrokeWidth] = useState('');

  return (
    <>
      <div className="progress">
        <Progress
          shape="line"
          percent={percent}
          theme={theme}
          strokeShape={strokeShape}
          strokeWidth={strokeWidth}
        />
      </div>
      <div className="progress">
        <Progress
          shape="circle"
          percent={percent}
          theme={theme}
          strokeShape={strokeShape}
          strokeWidth={strokeWidth}
          text={(percent) => (
            <div className="progress-content">
              <span className="progress-text">{percent}</span>
              <span className="progress-percent">%</span>
            </div>
          )}
        />
      </div>
      <div className="progress">
        <Progress
          shape="semi-circle"
          percent={percent}
          theme={theme}
          strokeShape={strokeShape}
          strokeWidth={strokeWidth}
          text={(percent) => (
            <div className="progress-content">
              <span className="progress-text">{percent}</span>
              <span className="progress-percent">%</span>
            </div>
          )}
        />
      </div>

      <Cell title="进度">
        <Stepper
          step={10}
          min={0}
          max={100}
          value={percent}
          onChange={(value) => {
            if (Number.isNaN(Number(value))) return;
            setPercent(value);
          }}
        />
      </Cell>

      <Cell title="主题">
        <Select
          value={theme}
          dataSource={[
            { value: 'primary', label: 'primary' },
            { value: 'success', label: 'success' },
            { value: 'warning', label: 'warning' },
            { value: 'danger', label: 'danger' },
          ]}
          onOk={(selected) => setTheme(selected[0].value)}
        />
      </Cell>

      <Cell title="线条形状">
        <Radio.Group
          compact
          type="button"
          value={strokeShape}
          onChange={setStrokeShape}
        >
          <Radio value="round">round</Radio>
          <Radio value="rect">rect</Radio>
        </Radio.Group>
      </Cell>

      <Cell title="线条粗细">
        <Stepper
          step={1}
          min={0}
          value={strokeWidth}
          onChange={(value) => {
            if (Number.isNaN(Number(value))) return;
            setStrokeWidth(value);
          }}
        />
      </Cell>
    </>
  );
};

export default GrProgress;
