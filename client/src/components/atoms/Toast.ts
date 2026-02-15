export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
    message: string;
    type: ToastType;
    duration?: number;
}

export function Toast({ message, type = 'info', duration = 3000 }: ToastProps): HTMLDivElement {
    const toast = document.createElement('div');

    const bgColors = {
        success: 'bg-emerald-500/90 border-emerald-400',
        error: 'bg-rose-500/90 border-rose-400',
        info: 'bg-indigo-500/90 border-indigo-400',
        warning: 'bg-amber-500/90 border-amber-400',
    };

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️',
    };

    toast.className = `
    flex items-center space-x-3 px-6 py-4 rounded-2xl border backdrop-blur-md
    text-white shadow-2xl transform transition-all duration-500 
    translate-y-4 opacity-0 pointer-events-auto cursor-pointer
    ${bgColors[type]}
  `;

    toast.innerHTML = `
    <span class="text-xl">${icons[type]}</span>
    <span class="font-medium text-sm leading-tight">${message}</span>
  `;

    // Entrance animation
    setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    // Auto-remove
    const remove = () => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => {
            toast.remove();
        }, 500);
    };

    toast.addEventListener('click', remove);
    setTimeout(remove, duration);

    return toast;
}
