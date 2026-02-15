export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit';
    variant?: 'primary' | 'secondary';
    onClick?: (e: Event) => void;
    className?: string;
}

export function Button({ text, type = 'button', variant = 'primary', onClick, className = '' }: ButtonProps): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.type = type;
    btn.innerText = text;

    const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500',
        secondary: 'bg-slate-700 hover:bg-slate-800 text-white focus:ring-slate-500',
    };

    btn.className = `${baseStyles} ${variants[variant]} ${className}`;

    if (onClick) {
        btn.addEventListener('click', onClick);
    }

    return btn;
}
