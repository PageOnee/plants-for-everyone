import { useState } from 'react';
import './Settings.css';
import { Header } from '../shared/header/Header';

export const Settings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsDarkMode(event.target.value === 'dark');
    };

    return (
        <div className={`settings-container ${isDarkMode ? 'dark-mode' : ''}`}>

            <Header />

            <div className="settings-card">
                <h2>Ajustes de la Aplicación</h2>
                <div className="setting-item">
                    <label htmlFor="theme">Tema:</label>
                    <select id="theme" name="theme" onChange={handleThemeChange}>
                        <option value="light">Claro</option>
                        <option value="dark">Oscuro</option>
                    </select>
                </div>
                <div className="setting-item">
                    <label htmlFor="notifications">Notificaciones:</label>
                    <input type="checkbox" id="notifications" name="notifications" />
                </div>
                <div className="setting-item">
                    <label htmlFor="language">Idioma:</label>
                    <select id="language" name="language">
                        <option value="es">Español</option>
                        <option value="en">Inglés</option>
                        <option value="fr">Francés</option>
                    </select>
                </div>
                <div className="setting-item">
                    <label htmlFor="privacy">Privacidad:</label>
                    <input type="checkbox" id="privacy" name="privacy" />
                </div>
            </div>
        </div>
    );
}
