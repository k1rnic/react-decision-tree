import React, { PropsWithChildren } from 'react';
import { Handle, Node as FlowNode } from 'react-flow-renderer';
import CorrelationNode from './CorrelationNode';
import RegressionNode from './RegressionNode';

export const NODE_TYPES = {
  regression: RegressionNode,
  correlation: CorrelationNode,
};

export type DecisionTreeNode<T = any> = {
  data: {
    inputLabel?: string;
    outputLabel?: string;
  } & T;
} & FlowNode<T>;

type Props<T> = DecisionTreeNode<T>;

const Base = <T,>({
  sourcePosition,
  targetPosition,
  connectable,
  children,
  data,
}: PropsWithChildren<Props<T>>) => {
  const { inputLabel, outputLabel } = data;

  return (
    <div className="wrapper">
      {inputLabel}
      <div className="content">{children}</div>
      <div className="connectors">
        <Handle
          type="source"
          position={sourcePosition!}
          isConnectable={connectable}
        />
        <Handle
          type="target"
          position={targetPosition!}
          isConnectable={connectable}
        />
      </div>
      {outputLabel}
    </div>
  );
};

export default Base;
