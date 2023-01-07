import Modal from '../components/modal/Modal'

export default {
    title: 'Components/Modal',
    component: Modal
}

const Template = args => <Modal {...args}/>

export const DefaultModal = Template.bind({})
DefaultModal.args = {
  show: true,
  transition: 'scale',
  header: "Optional Header",
  text: "Optional Text | Click outside the modal to close it.",
  size: "md",
  onClose: () => false,
}

export const ModalWithChildrenElement = Template.bind({})
ModalWithChildrenElement.args = {
  show: true,
  transition: 'scale',
  header: "Optional Header",
  text: "Optional Text | Click outside the modal to close it.",
  size: "sm",
  onClose: () => false,
  children: <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey', width: '400px', height: "200px"}}>400px X 500px example element</div>,
}