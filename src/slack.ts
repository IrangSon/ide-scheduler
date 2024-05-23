import { WebClient } from "@slack/web-api";

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN!;
const slackClient = new WebClient(SLACK_TOKEN);

export async function sendMessage(text: any, slackChannel: string) {
  try {
    await slackClient.chat.postMessage({ channel: slackChannel, ...text });
    console.log(`Message sent: ${text}`);
  } catch (error) {
    console.error("An error occurred: ", error);
    throw error;
  }
}
