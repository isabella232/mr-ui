import React from 'react';
import { shallow, mount } from 'enzyme';
import { testCases } from './uncontrolled-accordion-test-cases';

describe('Uncontrolled Accordion', () => {
  let testCase;
  let wrapper;

  describe(testCases.basic.description, () => {
    beforeEach(() => {
      testCase = testCases.basic;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('internal onToggle is called', () => {
      wrapper
        .find('button')
        .first()
        .simulate('click');
      expect(testCase.props.onToggle).toHaveBeenCalledTimes(1);
      expect(testCase.props.onToggle).toHaveBeenCalledWith('one');
      const item = wrapper.find('AccordionItem').first();
      expect(item.props()).toHaveProperty('active', true);
    });
  });

  describe(testCases.disabled.description, () => {
    beforeEach(() => {
      testCase = testCases.disabled;
      wrapper = mount(React.createElement(testCase.component, testCase.props));
    });

    test('renders', () => {
      expect(
        shallow(React.createElement(testCase.component, testCase.props))
      ).toMatchSnapshot();
    });

    test('disabled works', () => {
      const props = wrapper
        .find('button')
        .last()
        .props();
      expect(props).toHaveProperty('disabled', true);
    });
  });

  describe(testCases.allOptions.description, () => {
    beforeEach(() => {
      testCase = testCases.allOptions;
      wrapper = shallow(
        React.createElement(testCase.component, testCase.props)
      );
    });

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('extra props works', () => {
      expect(testCase.props).toHaveProperty('onToggle');
      expect(testCase.props).toHaveProperty('initiallyActiveItem');

      // Optional props passed to items
      const props = wrapper
        .find('AccordionItem')
        .first()
        .props();
      expect(props).toHaveProperty('active', true);
      expect(props).toHaveProperty('themeItem');
      expect(props).toHaveProperty('themeItemHeader');
      expect(props).toHaveProperty('themeItemBody');
    });

    test('onToggle gets called', () => {
      wrapper
        .find('AccordionItem')
        .first()
        .props()
        .onToggle('one');
      expect(testCase.props.onToggle).toHaveBeenCalledTimes(1);
      expect(testCase.props.onToggle).toHaveBeenCalledWith('one');
    });
  });
});
