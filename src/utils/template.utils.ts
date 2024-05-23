export const messageTemplate = (branchName: string) => ({
  text: "fallback",
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `${branchName} 브랜치가 생성되었습니다!`,
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
