import React from 'react';
import Base, { DecisionTreeNode } from '.';

type CorrelationNodeData = {};

type Props = DecisionTreeNode<CorrelationNodeData>;

const CorrelationNode = (props: Props) => {
  return <Base {...props}></Base>;
};

export default CorrelationNode;
