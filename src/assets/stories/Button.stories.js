import Button from '../components/Button.vue';

export default {
    title: 'Andover/Button',
    component: Button,
    excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
    components: { Button },
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props" v-on="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    id: '1',
    type: 'primary-lg',
    label: 'Primary Large',
}

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    ...Default.args,
    type: 'primary-sm',
    label: 'Primary Small',
}

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
    ...Default.args,
    type: 'secondary-lg',
    label: 'Secondary Large',
}

export const TextButton = Template.bind({});
TextButton.args = {
    ...Default.args,
    type: 'text-btn',
    label: 'Text Button',
}

export const TextButtonReversed = Template.bind({});
TextButtonReversed.args = {
    ...Default.args,
    type: 'text-btn-reversed',
    label: 'Text Button Reversed',
}