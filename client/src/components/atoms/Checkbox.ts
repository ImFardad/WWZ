export interface CheckboxProps {
    label: string;
    id: string;
    checked?: boolean;
    className?: string;
}

export function Checkbox({ label, id, checked = false, className = '' }: CheckboxProps): HTMLDivElement {
    const container = document.createElement('div');
    container.className = `flex items-center space-x-2 ${className}`;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = checked;
    input.className = 'w-4 h-4 text-indigo-600 bg-slate-800 border-slate-700 rounded focus:ring-indigo-500 focus:ring-offset-slate-900';

    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', id);
    labelElement.innerText = label;
    labelElement.className = 'text-sm text-slate-300 cursor-pointer';

    container.appendChild(input);
    container.appendChild(labelElement);

    return container;
}
