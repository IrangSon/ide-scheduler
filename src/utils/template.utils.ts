export const messageTemplate = (text: string) => ({
  text: "fallback",
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text,
      },
    },
    {
      type: "divider",
    },
    {
      type: "context",
      elements: [
        {
          type: "image",
          image_url: "https://app.slack.com/img/blocks/block_icons/context.svg",
          alt_text: "cute cat",
        },
        {
          type: "plain_text",
          text: "Author: IDE-Console",
          emoji: true,
        },
      ],
    },
  ],
});
