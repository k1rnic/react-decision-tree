import { Meta, Story } from '@storybook/react';
import TREE from '../../assets/data/tree';
import Component, { Props } from './';

export default {
  title: 'DecisionTree',
  component: Component,
  args: {
    items: TREE,
  },
} as Meta<Props>;

export const Overview: Story<Props> = (args) => <Component {...args} />;
