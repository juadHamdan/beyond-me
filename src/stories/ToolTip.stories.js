import ToolTip from '../components/tooltip/ToolTip'
import Button from '../components/button/Button'

export default {
    title: 'Components/ToolTip',
    component: ToolTip,
      parameters: {
    layout: 'centered',
  },
}

const Template = args => <ToolTip {...args}/>

export const HoverToolTip = Template.bind({})
HoverToolTip.args = {
    action: "hover",
    text: 'ToolTip Text',
    top: -3.5,
    right: -0.5,
    children: <Button>Hover Me</Button>,
}

export const ClickToolTip = Template.bind({})
ClickToolTip.args = {
    action: "click",
    text: 'ToolTip Text',
    top: -3.5,
    right: -0.5,
    children: <Button>Click Me</Button>,
}

export const BottomToolTip = Template.bind({})
BottomToolTip.args = {
    action: "hover",
    text: 'ToolTip Text',
    bottom: -3.5,
    right: -0.5,
    children: <Button>Hover Me</Button>,
}

export const RightToolTip = Template.bind({})
RightToolTip.args = {
    action: "hover",
    text: 'ToolTip Text',
    right: -9,
    top: -0.5,
    children: <Button>Hover Me</Button>,
}

export const LeftToolTip = Template.bind({})
LeftToolTip.args = {
    action: "hover",
    text: 'ToolTip Text',
    left: -8,
    top: -0.5,
    children: <Button>Hover Me</Button>,
}

export const ToolTipWithElement = Template.bind({})
ToolTipWithElement.args = {
    action: "hover",
    text: 'ToolTip Text',
    top: -10,
    right: 0,
    element: <>
    <Button display='block'>Button Element 1</Button>
    <Button display='block'>Button Element 2</Button>
    </>,
    children: <Button>Hover Me</Button>,
}


//hover/action, with element






/*

        <ToolTip action="hover" top={-3.5} right={1} text="Tool Tip">
          <Button>Hover Me</Button>
        </ToolTip>
*/