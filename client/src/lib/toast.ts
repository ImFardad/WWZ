import { Toast, ToastType } from '@/components/atoms/Toast';

class ToastManager {
    private container: HTMLDivElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'toast-container';
        this.container.className = 'fixed top-6 right-6 z-[9999] flex flex-col space-y-4 pointer-events-none';
        document.body.appendChild(this.container);
    }

    show(message: string, type: ToastType = 'info', duration: number = 4000) {
        const toastElement = Toast({ message, type, duration });
        this.container.appendChild(toastElement);
    }

    success(message: string) {
        this.show(message, 'success');
    }

    error(message: string) {
        this.show(message, 'error');
    }

    info(message: string) {
        this.show(message, 'info');
    }

    warning(message: string) {
        this.show(message, 'warning');
    }
}

export const toast = new ToastManager();
