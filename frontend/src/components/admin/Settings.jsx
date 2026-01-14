import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
    const [settings, setSettings] = useState({
        cafeName: "Ooze Cafe",
        whatsappNumber: "8129110411",
        email: "info@oozecafe.com",
        address: "Kannur, Kerala",
        currency: "₹",
        timezone: "Asia/Kolkata",
        notifications: true,
        autoBackup: true,
        darkMode: false
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        // In production, save to backend
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1>Settings</h1>
                <p>Manage your cafe settings and preferences</p>
            </div>

            <form onSubmit={handleSave} className="settings-form">
                {/* Business Information */}
                <div className="settings-section">
                    <div className="section-header">
                        <div className="section-icon">🏪</div>
                        <div>
                            <h2>Business Information</h2>
                            <p>Update your cafe details</p>
                        </div>
                    </div>

                    <div className="settings-grid">
                        <div className="form-group">
                            <label htmlFor="cafeName">Cafe Name</label>
                            <input
                                type="text"
                                id="cafeName"
                                name="cafeName"
                                value={settings.cafeName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="whatsappNumber">WhatsApp Number</label>
                            <input
                                type="tel"
                                id="whatsappNumber"
                                name="whatsappNumber"
                                value={settings.whatsappNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={settings.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={settings.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Regional Settings */}
                <div className="settings-section">
                    <div className="section-header">
                        <div className="section-icon">🌍</div>
                        <div>
                            <h2>Regional Settings</h2>
                            <p>Configure currency and timezone</p>
                        </div>
                    </div>

                    <div className="settings-grid">
                        <div className="form-group">
                            <label htmlFor="currency">Currency Symbol</label>
                            <select
                                id="currency"
                                name="currency"
                                value={settings.currency}
                                onChange={handleChange}
                            >
                                <option value="₹">₹ - Indian Rupee</option>
                                <option value="$">$ - US Dollar</option>
                                <option value="€">€ - Euro</option>
                                <option value="£">£ - British Pound</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="timezone">Timezone</label>
                            <select
                                id="timezone"
                                name="timezone"
                                value={settings.timezone}
                                onChange={handleChange}
                            >
                                <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                                <option value="America/New_York">America/New_York (EST)</option>
                                <option value="Europe/London">Europe/London (GMT)</option>
                                <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="settings-section">
                    <div className="section-header">
                        <div className="section-icon">⚙️</div>
                        <div>
                            <h2>Preferences</h2>
                            <p>Customize your dashboard experience</p>
                        </div>
                    </div>

                    <div className="preferences-list">
                        <div className="preference-item">
                            <div className="preference-info">
                                <h3>Enable Notifications</h3>
                                <p>Receive alerts for new orders and updates</p>
                            </div>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    name="notifications"
                                    checked={settings.notifications}
                                    onChange={handleChange}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>

                        <div className="preference-item">
                            <div className="preference-info">
                                <h3>Auto Backup</h3>
                                <p>Automatically backup menu data daily</p>
                            </div>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    name="autoBackup"
                                    checked={settings.autoBackup}
                                    onChange={handleChange}
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>

                        <div className="preference-item">
                            <div className="preference-info">
                                <h3>Dark Mode</h3>
                                <p>Switch to dark theme (Coming soon)</p>
                            </div>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    name="darkMode"
                                    checked={settings.darkMode}
                                    onChange={handleChange}
                                    disabled
                                />
                                <span className="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="settings-section danger-zone">
                    <div className="section-header">
                        <div className="section-icon">⚠️</div>
                        <div>
                            <h2>Danger Zone</h2>
                            <p>Irreversible actions</p>
                        </div>
                    </div>

                    <div className="danger-actions">
                        <button type="button" className="danger-btn">
                            Clear All Menu Data
                        </button>
                        <button type="button" className="danger-btn">
                            Reset to Default Settings
                        </button>
                    </div>
                </div>

                {/* Save Button */}
                <div className="settings-footer">
                    <button type="submit" className="save-btn">
                        {saved ? "✓ Settings Saved!" : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
