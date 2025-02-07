// JavaScript functions for interacting with the Django backend

const BASE_URL = 'http://127.0.0.1:8000/';

// 1. Get Settings
function getSettings(userId) {
    fetch(`${BASE_URL}path/to/get_settings/`, {
        method: 'GET',
        headers: {
            'USER': userId,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error fetching settings:', data.error);
        } else {
            console.log('User settings:', data);
        }
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
}

// 2. Change Settings
function changeSettings(userId, newSettings) {
    fetch(`${BASE_URL}path/to/change_settings/`, {
        method: 'POST',
        headers: {
            'USER': userId,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSettings)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error updating settings:', data.error);
        } else {
            console.log('Settings updated successfully:', data.message);
        }
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
}

// 3. Get User Data
function getUserData(userId) {
    fetch(`${BASE_URL}getuserdata/`, {
        method: 'GET',
        headers: {
            'USER': userId,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error fetching user data:', data.error);
        } else {
            console.log('User data:', data);
        }
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
}

// Example usage of the changeSettings function
const newSettings = {
    pump: {
        growth_period: 30,
        growth_percent: 10.5,
        down_period: 20,
        down_percent: -5.2
    },
    open_interest: {
        growth_period: 40,
        growth_percent: 12.3,
        down_period: 25,
        down_percent: -3.8,
        volsma: 50,
        volfilter: 5
    },
    liquidation: {
        growth_period: 15,
        down_period: 10
    }
};

// Example of calling the functions with a user ID (replace with actual user ID)
// To call the functions:
// getSettings(userId);
// changeSettings(userId, newSettings);
// getUserData(userId);
