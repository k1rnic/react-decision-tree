import { Meta, Story } from '@storybook/react';
import Component, { Props } from './';

export default {
  title: 'DecisionTree',
  component: Component,
} as Meta<Props>;

export const Overview: Story<Props> = (args) => <Component {...args} />;
