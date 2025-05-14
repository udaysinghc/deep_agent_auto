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

try {
    generate({
        jsonDir: 'reports',
        reportPath: 'reports/html',
        displayDuration: true,
        hideMetadata: false,
        buildName: `${process.env.BUILD_NAME}:- ${process.env.TEST_ENV || 'prod'}`,
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
                { label: 'Build', value: `${process.env.BUILD_NAME || 'N/A'} :- ${process.env.TEST_ENV || 'prod'}` },
                { label: 'Execution Mode', value: process.env.EXECUTION_MODE || 'Local' }
            ]
        }
    });
    console.log('Cucumber HTML report generated successfully');
} catch (error) {
    console.error('Error generating Cucumber HTML report:', error);
    // Ensure the process exits with an error code but after generating the report
    process.exitCode = 1;
}