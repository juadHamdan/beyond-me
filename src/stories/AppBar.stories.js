import AppBar from '../components/appbar/AppBar'
import Button from '../components/button/Button'

export default {
    title: 'Components/AppBar',
    component: AppBar
}

const Template = args => <AppBar {...args}/>

export const Default = Template.bind({})
Default.args = {
    menuItems: 
        <div>
          <Button fullWidth={true}>Item 1</Button>
          <Button fullWidth={true}>Item 2</Button>
          <Button fullWidth={true}>Item 3</Button>
        </div>,
      leftElement: 
        <div>
          <Button style="outline">Item 1</Button>
          <Button style="outline">Item 2</Button>
          <Button style="outline">Item 3</Button>
          <Button style="outline">Item 4</Button>
          <Button style="outline">Item 5</Button>
        </div>,
        rightElement:
          <div>
            <Button style="pill">Login</Button>
          </div>
}

export const RightToLeftAppBar = Template.bind({})
RightToLeftAppBar.args = {
    direction: 'rtl',
    menuItems: 
        <div>
          <Button fullWidth={true}>Item 1</Button>
          <Button fullWidth={true}>Item 2</Button>
          <Button fullWidth={true}>Item 3</Button>
        </div>,
      leftElement: 
      <div>
        <Button style="outline">Item 1</Button>
        <Button style="outline">Item 2</Button>
        <Button style="outline">Item 3</Button>
        <Button style="outline">Item 4</Button>
        <Button style="outline">Item 5</Button>
      </div>,
      rightElement:
        <div>
          <Button style="pill">Login</Button>
        </div>
}

export const AppBarWithoutElements = Template.bind({})
AppBarWithoutElements.args = {
    menuItems: 
        <div>
          <Button fullWidth={true}>Item 1</Button>
          <Button fullWidth={true}>Item 2</Button>
          <Button fullWidth={true}>Item 3</Button>
        </div>
}