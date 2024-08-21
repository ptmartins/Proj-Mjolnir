import '../iw-components';

export default {
    title: 'IW Design System/Elements/Button',
    component: 'IW_Button',
    argTypes: {
        type: {
          control: 'select',
          options: ['', 'main', 'kill', 'disabled', 'mini']
        },
    }
}

const Template = args => {
    const component = document.createElement('iw-button');
    
    for(const item in args){
        component.setAttribute(item, args[item]);
    }

    component.textContent = 'Click me'

    return component;
}


export const Default = Template.bind({});
Default.args = {}

export const Main = Template.bind({});
Main.args = {
    type: 'main'
}

export const Kill = Template.bind({});
Kill.args = {
    type: 'kill'
}