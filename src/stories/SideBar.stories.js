import SideBar from '../components/sidebar/SideBar'
import Button from '../components/button/Button'

export default {
    title: 'Components/SideBar',
    component: SideBar
}

const Template = args => <SideBar {...args}/>

export const Default = Template.bind({})
Default.args = {
    show: true,
    onClose: () => false,
    children:     <div>
    <Button style="outline" fullWidth={true}>1</Button>
    <Button style="outline" fullWidth={true}>2</Button>
    <Button style="outline" fullWidth={true}>3</Button>
    <Button style="outline" fullWidth={true}>4</Button>
    <Button style="outline" fullWidth={true}>5</Button>
    </div>
}

export const SideBarWithHeaderElement = Template.bind({})
SideBarWithHeaderElement.args = {
    show: true,
    headerElement: <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '50px', backgroundColor: 'grey'}}>200px X 50px example element</div>,
    onClose: () => false,
    children:     <div>
    <Button style="outline" fullWidth={true}>1</Button>
    <Button style="outline" fullWidth={true}>2</Button>
    <Button style="outline" fullWidth={true}>3</Button>
    <Button style="outline" fullWidth={true}>4</Button>
    <Button style="outline" fullWidth={true}>5</Button>
    </div>
}

export const RightToLeftSideBar = Template.bind({})
RightToLeftSideBar.args = {
    rtl: true,
    show: true,
    onClose: () => false,
    children:     <div>
    <Button style="outline" fullWidth={true}>1</Button>
    <Button style="outline" fullWidth={true}>2</Button>
    <Button style="outline" fullWidth={true}>3</Button>
    <Button style="outline" fullWidth={true}>4</Button>
    <Button style="outline" fullWidth={true}>5</Button>
    </div>
}