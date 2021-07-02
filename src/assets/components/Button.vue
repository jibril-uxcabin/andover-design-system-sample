<template>
    <button :class="classes" :id="disabled && 'disabled'" :disabled="disabled">
        {{ label }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        label: {
            type: String,
            default: () => 'button',
        },
        type: {
            type: String,
            default: () => 'primary-lg',
        },
        id: {
            type: String,
            required: true,
            validator: (id) => !!id,
        },
        disabled: {
            type: Boolean,
        },
    },
    data: function(props) {
        return {
            classes: `${props.type}`
        };
    }
}
</script>

<style>
html {
    background-color: lightgrey;
}
button {
    border: none;
    display: flex;
    padding: 15px 20px;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    color: white;
    font-size: 16px;
    text-align: left;
    font-weight: 700;
    line-height: 24px;
    font-style: normal;
    letter-spacing: 0.03em;
    font-family: 'Roboto', sans-serif;
}

.primary-lg {
    min-width: 200px;
    border-radius: 4px;
    background-color: #0F8471;
}

.primary-sm {
    min-width: 145px;
    border-radius: 4px;
    background-color: #0F8471;
}

.secondary-lg {
    min-width: 200px;
    border-radius: 4px;
    border: 1px solid #044054;

    color: #044054;
}

.text-btn {
    padding: 0px;
    background: none;
    text-align: center;
    font-weight: normal;
    text-decoration-line: underline;

    color: #1576AE;
}

.text-btn-reversed {
    padding: 0px;
    background: none;
    text-align: center;
    font-weight: normal;
    text-decoration-line: underline;

    color: white;
}

#disabled {
    cursor: not-allowed;
}
</style>