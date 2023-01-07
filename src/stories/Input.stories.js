import Input from '../components/input/Input'

export default {
    title: 'Components/Input',
    component: Input,
      parameters: {
    layout: 'centered',
  },
}

const Template = args => <Input {...args}/>

export const TextInput = Template.bind({})
TextInput.args = {
    type: 'text',
    placeHolder: 'Enter Text'
}

export const NumberInput = Template.bind({})
NumberInput.args = {
    type: 'number',
    placeHolder: 'Enter number'
}

export const EmailInput = Template.bind({})
EmailInput.args = {
    type: 'email',
    placeHolder: 'Email Address'
}

export const PasswordInput = Template.bind({})
PasswordInput.args = {
    type: 'password',
    placeHolder: 'Password Input'
}