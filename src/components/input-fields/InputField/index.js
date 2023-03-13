import {compile} from 'handlebars';
import * as cn from "classnames";
import './styles.pcss'


const InputField = (
    {
        name,
        label,
        defaultValue = '',
        type = 'text',
        linearLabel = true,
        changeMode = true,
        linearLabelEven = false,
    } = {}
) => {
    const fieldClass = cn(
        'input-text-field',
        {'input-text-field_linear': linearLabel},
        {'input-text-field_not-linear': !linearLabel},
    );

    const labelClass = cn(
        {'input-text-field_linear-label_even': linearLabelEven},
    );

    const inputOrText = changeMode ?
        compile(`
            <input
                name="{{name}}"
                value="{{defaultValue}}"
                type="{{type}}"
            >
            `
        )({name, defaultValue, type})
        :
        compile(`<span>{{defaultValue}}</span>`)({defaultValue})

    return compile(
        `
        <div class="{{fieldClass}}">
            <label class="{{labelClass}}">{{label}}</label>
            {{{inputOrText}}}
        </div>
        `
    )({
        label, inputOrText, defaultValue, type,
        fieldClass, labelClass
    })
}

export default InputField;
