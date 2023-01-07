import Progress from '../components/progress/Progress'

export default {
    title: 'Components/Progress',
    component: Progress
}

const Template = args => <Progress {...args}/>

export const TimedProgress = Template.bind({})
TimedProgress.args = {
    activateProgress: true,
    timer: 5,
    refreshRateMS: 10, 
}

export const ProgressByValues = Template.bind({})
ProgressByValues.args = {
    border: true,
    value: 45,
    bufferValue: 55,
}

export const ProgressWithLeftLabel = Template.bind({})
ProgressWithLeftLabel.args = {
    border: true,
    value: 45,
    bufferValue: 55,
    label: '45%',
    labelPosition: 'left'
}

export const ProgressWithRightLabel = Template.bind({})
ProgressWithRightLabel.args = {
    border: true,
    value: 45,
    bufferValue: 55,
    label: '45%',
    labelPosition: 'right'
}

export const ThinProgress = Template.bind({})
ThinProgress.args = {
    height: 3,
    border: true,
    value: 45,
    label: '45%',
}

export const ColoredProgress = Template.bind({})
ColoredProgress.args = {
    border: true,
    value: 45,
    bufferValue: 55,
    label: '45%',
    color: 'blue',
}



/*
      <Progress 
        border={true}
        value={45} 
        bufferValue={55}
      />

      value & timer

          activateProgress = false, 
    timer, 
    refreshRateMS = 10, 
    value, 
    border, 
    label,
    labelPosition = "right",
    bufferValue, 
    onProgressComplete = () => {},
*/