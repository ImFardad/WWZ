import { Label } from '@/components/atoms/Label';
import { Input, InputProps } from '@/components/atoms/Input';

export interface FormFieldProps extends InputProps {
    label: string;
}

export function FormField(props: FormFieldProps): HTMLDivElement {
    const container = document.createElement('div');
    container.className = 'mb-4';

    const labelId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const label = Label({ text: props.label, htmlFor: labelId });
    const input = Input({ ...props, id: labelId });

    container.appendChild(label);
    container.appendChild(input);

    return container;
}
