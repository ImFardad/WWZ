export interface LabelProps {
    text: string;
    htmlFor?: string;
    className?: string;
}

export function Label({ text, htmlFor = '', className = '' }: LabelProps): HTMLLabelElement {
    const label = document.createElement('label');
    label.innerText = text;
    if (htmlFor) label.setAttribute('for', htmlFor);

    label.className = `block text-sm font-medium text-slate-300 mb-1 ${className}`;

    return label;
}
