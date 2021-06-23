import React from 'react';
import Base, { DecisionTreeNode } from '.';

type RegressionNodeData = {};

type Props = DecisionTreeNode<RegressionNodeData>;

const RegressionNode = (props: Props) => {
  return <Base {...props}></Base>;
};

export default RegressionNode;
