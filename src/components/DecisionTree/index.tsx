import dagre from 'dagre';
import React, { useState } from 'react';
import ReactFlow, {
  ConnectionLineType,
  Edge,
  isNode,
  Position,
  ReactFlowProvider,
} from 'react-flow-renderer';
import { DecisionTreeNode, NODE_TYPES } from '../DecisionTreeNode';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const NODE_W = 172;
const NODE_H = 36;

const getElements = (elements: DecisionTreeItem[], direction = 'TB') => {
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: NODE_W, height: NODE_H });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el) => {
    if (isNode(el)) {
      const { x, y } = dagreGraph.node(el.id);

      el.sourcePosition = Position.Bottom;
      el.targetPosition = Position.Top;

      el.position = {
        x: x - NODE_W / 2,
        y: y - NODE_H / 2,
      };
    }

    return el;
  });
};

export type DecisionTreeItem<T = any> = Edge<T> | DecisionTreeNode<T>;

export type Props = {
  items: DecisionTreeItem[];
};

const DecisionTree = ({ items }: Props) => {
  const [elements] = useState(getElements(items));

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          nodeTypes={NODE_TYPES}
          connectionLineType={ConnectionLineType.SmoothStep}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default DecisionTree;
