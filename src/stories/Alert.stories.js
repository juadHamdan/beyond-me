import Alert from '../components/alert/Alert'

export default {
    title: 'Components/Alert',
    component: Alert
}

const Template = args => <Alert {...args}/>

export const InfoAlert = Template.bind({})
InfoAlert.args = {
    show: true,
    transition: "slide",
    header: "Information",
    text: "This is an alert.",
    position: "top",
    size: "md",
    style: 'info',
    onClose: () => false,
}

export const ErrorAlert = Template.bind({})
ErrorAlert.args = {
    show: true,
    transition: "slide",
    header: "Error",
    text: "This is an alert.",
    position: "top",
    size: "md",
    style: 'error',
    onClose: () => false,
}

export const WarningAlert = Template.bind({})
WarningAlert.args = {
    show: true,
    transition: "slide",
    header: "Warning",
    text: "This is an alert.",
    position: "top",
    size: "md",
    style: 'warning',
    onClose: () => false,
}

export const SuccessAlert = Template.bind({})
SuccessAlert.args = {
    show: true,
    transition: "slide",
    header: "Success",
    text: "This is an alert.",
    position: "top",
    size: "md",
    style: 'success',
    onClose: () => false,
}

export const AlertWithFiveSecondsTimer = Template.bind({})
AlertWithFiveSecondsTimer.args = {
    show: true,
    transition: "slide",
    header: "Optional Header",
    text: "This is an alert.",
    position: "top",
    size: "md",
    onClose: () => false,
    timer: 5,
}