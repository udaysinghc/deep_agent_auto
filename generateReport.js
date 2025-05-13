import dotenv from 'dotenv';
import pkg from 'multiple-cucumber-html-reporter';
import fs from 'fs';
const { generate } = pkg;
dotenv.config();

// Ensure reports directory exists
if (!fs.existsSync('reports')) {
    fs.mkdirSync('reports', { recursive: true });
}

// Ensure reports/html directory exists
if (!fs.existsSync('reports/html')) {
    fs.mkdirSync('reports/html', { recursive: true });
}

// Log env vars to verify they loaded
console.log('BROWSER_NAME:', process.env.BROWSER_NAME);
console.log('BROWSER_VERSION:', process.env.BROWSER_VERSION);
console.log('PLATFORM_NAME:', process.env.PLATFORM_NAME);
console.log('EXECUTION_MODE:', process.env.EXECUTION_MODE);
console.log('BUILD_NAME:', process.env.BUILD_NAME);

generate({
    jsonDir: 'reports',
    reportPath: 'reports/html',
    displayDuration: true,
    hideMetadata: false,
    metadata: {
        browser: {
            name: process.env.BROWSER_NAME || 'Chrome',
            version: process.env.BROWSER_VERSION || 'latest'
        },
        device: process.env.EXECUTION_MODE || 'Local test machine',
        platform: {
            name: process.env.PLATFORM_NAME || 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Execution Info',
        data: [
            { label: 'Build', value: `${process.env.BUILD_NAME || 'N/A'} :- ${process.env.ENV || 'prod'}` },
            { label: 'Execution Mode', value: process.env.EXECUTION_MODE || 'Local' }
        ]
    }
});