import React from 'react';
import TextareaField from '../../src/TextareaField';

it('should render a default TextAreaField component', () => {
  const textarea = <TextareaField />;
  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render a TextAreaField with the rest of the props', () => {
  const textarea = (
    <TextareaField
      label="Profile Description"
      name="profile_description"
      error="Name is required"
      help="The name given to you at birth."
      maxLength={15}
      minLength={5}
      inputAttrs={{ autoFocus: false }}
      required
    />);

  const wrapper = shallow(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as uncontrolled when just a default value is passed into the TextareaField', () => {
  const textarea = (
    <TextareaField
      name="foo"
      defaultValue="foo"
    />
  );

  const wrapper = mount(textarea);
  expect(wrapper).toMatchSnapshot();
});

it('should render as controlled when just a default value is passed into the TextareaField', () => {
  const textarea = (
    <TextareaField
      name="foo"
      value="foo"
      onChange={() => {}}
    />
  );

  const wrapper = mount(textarea);
  expect(wrapper).toMatchSnapshot();
});
