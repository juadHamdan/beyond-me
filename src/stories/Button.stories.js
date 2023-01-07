import Button from '../components/button/Button'

export default {
    title: 'Components/Button',
    component: Button,
      parameters: {
    layout: 'centered',
  },
}

const Template = args => <Button {...args}/>

export const Default = Template.bind({})
Default.args = {
    children: "Button Text",
    style: "basic",
    disabled: false,
    fullWidth: false,
    size: "md",
    onClick: () => {},
}