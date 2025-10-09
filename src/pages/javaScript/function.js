import { useState, useEffect, useCallback } from "react";
const STOREGE_KEY = 'installedApps';


export const useInstallation = () => {
    const [installedApps, setInstalledApps] = useState(() => {
        try {
            const stored = localStorage.getItem(STOREGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch(error){
            console.error("Error loading state from localStorage:", error);
            return [];
        }
    })
    useEffect(() => {
        try {
            localStorage.setItem(STOREGE_KEY, JSON.stringify(installedApps));
        } catch (error) {
            console.error("Error saving state to localStorage:", error);
        }
    }, [installedApps]);

    const isInstalled = useCallback((appId) => {
        return installedApps.some(app => app.id === appId);
    }, [installedApps]);

    const handleInstall = useCallback((appData) => {
        if (!isInstalled(appData.id)) {
            setInstalledApps(prevApps => [...prevApps, appData]);
            return true;
        }
        return false
    }, [isInstalled]);

    const handleUninstall = useCallback((appId) => {
        setInstalledApps(prevApps => prevApps.filter(app => app.id !== appId));
    }, []);

    return {
        installedApps,
        isInstalled,
        handleInstall,
        handleUninstall,
    };
}