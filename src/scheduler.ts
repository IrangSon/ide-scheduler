import { createBranch, getBranch, postBranch } from "./github";
import { sendMessage } from "./slack";
import { messageTemplate } from "./utils";

const SLACK_CONSOLE_INTERNAL_ID = process.env.SLACK_CONSOLE_INTERNAL_ID!;

export const createPushBranch = async (date: string) => {
  const branchName = `qa/console-${date}-1`;
  const latestCommitSha = await getBranch();

  if (typeof latestCommitSha !== "string") return;

  await createBranch(latestCommitSha, branchName);
  await postBranch(latestCommitSha, branchName);

  sendMessage(messageTemplate(branchName), SLACK_CONSOLE_INTERNAL_ID);
};
