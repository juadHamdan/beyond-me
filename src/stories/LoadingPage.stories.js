import LoadingPage from '../components/loading_page/LoadingPage'

export default {
    title: 'Components/LoadingPage',
    component: LoadingPage,
      parameters: {
    layout: 'centered',
  },
}

const Template = args => <LoadingPage {...args}/>

export const Default = Template.bind({})
Default.args = {
    show: true,
}