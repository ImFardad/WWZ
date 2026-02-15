export interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    id?: string;
    required?: boolean;
    className?: string;
}

export function Input({ type = 'text', placeholder = '', value = '', id = '', required = false, className = '' }: InputProps): HTMLInputElement {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.value = value;
    input.id = id;
    input.required = required;

    input.className = `w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 ${className}`;

    return input;
}
