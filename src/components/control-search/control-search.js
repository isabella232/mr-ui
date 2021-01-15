import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ControlWrapper from '../control-wrapper';

export default class ControlSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: ''
    };
  }
  static propTypes = {
    /** An array of objects containing `label` `value` key value pairings to represent each option. An optional `disable` key can be provided to disable the selection of an indiviual `<option>`. If `value` is not present but an `options` array is provided containing the same `label` `value` key value pairings, options will be grouped within a `<optgroup>` element as defined by `label` child key. Note that each `label` value must be unique. */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: (props, propName, componentName) => {
          if (
            !props.value &&
            typeof props.value !== 'string' &&
            !props.hasOwnProperty('options')
          ) {
            return new Error(
              `The prop "${propName}" is required in ${componentName} if a options array is not provided for select groups.`
            );
          } else if (
            props.value &&
            typeof props.value !== 'number' &&
            typeof props.value !== 'string'
          ) {
            return new Error(
              `${
                props.value
              } of type ${typeof props.value} supplied to ${componentName}, expected a number or string.`
            );
          } else if (
            props.hasOwnProperty('value') &&
            props.hasOwnProperty('options')
          ) {
            return new Error(
              `You've provided both an 'options' & 'value' key to one of your options object groups. Only 'options' will be used.`
            );
          }
        },
        disabled: PropTypes.bool,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string,
            disabled: PropTypes.bool
          })
        )
      })
    ).isRequired,
    /** Input value */
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Called during changes to the input element. */
    onChange: PropTypes.func.isRequired,
    /** Value passed to the label element. */
    label: PropTypes.string,
    /** If provided the text, "(optional)" is appended to the value of the label element. */
    optional: PropTypes.bool,
    /** Additional content inserted alongside the label element. */
    aside: PropTypes.node,
    /** Pass disabled attribute */
    disabled: PropTypes.bool,
    /** If provided, the value of this propery displays as an error message. */
    validationError: PropTypes.node,
    /** Assembly classes to apply to the select element */
    themeControlSelect: PropTypes.string,
    /** Assembly classes to apply to the select container */
    themeControlSelectContainer: PropTypes.string,
    /** Assembly classes to apply to the control wrapper */
    themeControlWrapper: PropTypes.string,
    /** Assembly classes to apply to the label element */
    themeLabel: PropTypes.string
  };

  onChange = () => {
    return this.state.selectValue;
  };

  updateValue = newValue => {
    this.setState({
      selectValue: newValue
    });
  };

  static defaultProps = {
    value: '',
    optional: false,
    disabled: false,
    themeControlSelectContainer: '',
    themeControlSelect: ''
  };

  render() {
    const {
      id,
      value,
      options,
      optional,
      disabled,
      validationError,
      themeControlSelectContainer,
      themeControlSelect,
      themeControlWrapper
    } = this.props;

    const selectProps = {
      id,
      disabled,
      value,
      className: `select ${themeControlSelect}`,
      onChange: this.onChange,
      'aria-required': optional ? false : true,
      'data-test': `${id}-select`
    };

    const selectStyles = {
      option: provided => ({
        ...provided
      }),
      container: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200
      }),
      input: () => ({
        font: 24
      })
    };

    if (validationError) {
      selectProps['aria-invalid'] = true;
    }

    return (
      <ControlWrapper
        id={id}
        themeControlWrapper={themeControlWrapper}
        validationError={validationError}
      >
        {/* {<Select options={options} styles={selectStyles} />} */}

        <div
          className={`control-text-container ${themeControlSelectContainer}`}
        >
          {
            <Select
              options={options}
              styles={selectStyles}
              value={this.state.selectValue}
              onChange={this.updateValue}
            />
          }
        </div>
      </ControlWrapper>
    );
  }
}
