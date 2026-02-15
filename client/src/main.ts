import './index.css';
import Phaser from 'phaser';
import { AuthPage } from '@/pages/AuthPage';

class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    create() {
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50, 'WWZ Strategy Game', {
            fontSize: '32px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Welcome Commander!', {
            fontSize: '18px',
            color: '#00ff00'
        }).setOrigin(0.5);

        const logout = document.createElement('button');
        logout.innerText = 'Logout';
        logout.className = 'fixed top-4 right-4 bg-red-600 px-4 py-2 rounded text-white z-50 hover:bg-red-700 transition-colors cursor-pointer';
        logout.onclick = () => {
            localStorage.removeItem('token');
            location.reload();
        };
        document.body.appendChild(logout);
    }
}

const initGame = () => {
    const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'game-container',
        scene: MainScene,
        pixelArt: true,
    };
    new Phaser.Game(config);
};

const app = document.querySelector<HTMLDivElement>('#game-container')!;
const token = localStorage.getItem('token');

if (!token) {
    const authPage = AuthPage((newToken) => {
        localStorage.setItem('token', newToken);
        location.reload();
    });
    app.appendChild(authPage);
} else {
    initGame();
}
