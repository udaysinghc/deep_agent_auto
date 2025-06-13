# Slack Integration Setup

## Overview

This project includes Slack integration for sending build notifications. When tests are run in GitHub Actions, notifications are sent to a Slack channel at the beginning and end of the test run.

## Requirements

To use the Slack integration, you need:

1. A Slack workspace
2. A Slack bot token with appropriate permissions
3. A Slack channel ID where notifications will be sent

## Setting Up for GitHub Actions

In GitHub Actions, the Slack token is stored as a secret named `SLACK_BOT_TOKEN`. This is automatically used by the workflow.

### Adding the Secret to GitHub

1. Go to your GitHub repository
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" → "Actions"
4. Click on "New repository secret"
5. Name: `SLACK_BOT_TOKEN`
6. Value: Your Slack bot token (starts with `xoxb-`)
7. Click "Add secret"

## Setting Up for Local Testing

To test the Slack integration locally, you need to set the `SLACK_TOKEN` environment variable:

### Option 1: Set in .env file

Edit the `.env` file in the project root and uncomment/update the Slack settings:

```
### Slack Integration Settings ###
SLACK_TOKEN=your_slack_token_here
SLACK_CHANNEL_ID=C07FJG27D2L  # Or your custom channel ID
```

### Option 2: Set in terminal

#### Windows PowerShell
```powershell
$env:SLACK_TOKEN="your-slack-token"
```

#### Windows CMD
```cmd
set SLACK_TOKEN=your-slack-token
```

#### Linux/macOS
```bash
export SLACK_TOKEN=your-slack-token
```

## Testing the Slack Integration

To verify your Slack integration is working correctly, run:

```bash
npm run test-slack
```

Or check just the configuration without sending messages:

```bash
npm run check-slack
```

The test will:
1. Check if your Slack token is set
2. Verify the channel exists and is accessible
3. Send a test message to the channel
4. Send a reply in a thread
5. Delete the test messages after 5 seconds

## Troubleshooting

### Common Issues

1. **"SLACK_TOKEN environment variable is not set"**
   - In GitHub Actions: Check that the `SLACK_BOT_TOKEN` secret is properly set in your repository settings
   - For local testing: Make sure you've set the token as described above

2. **"Error accessing channel"**
   - Check that the channel ID is correct
   - Ensure the bot has been added to the channel
   - Verify the bot has the necessary permissions

3. **"Error sending test message"**
   - Check the bot's permissions in Slack
   - Required scopes: `chat:write`, `chat:write.public`, `channels:read`

### Getting a Slack Bot Token

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Create a new app or select an existing one
3. Go to "OAuth & Permissions"
4. Add the required scopes: `chat:write`, `chat:write.public`, `channels:read`
5. Install the app to your workspace
6. Copy the "Bot User OAuth Token" that starts with `xoxb-`

### Finding a Channel ID

1. Open Slack in a web browser
2. Navigate to the channel
3. The channel ID is in the URL: `https://app.slack.com/client/TXXXXXXXX/CXXXXXXXXX`
   - The ID starting with `C` is your channel ID