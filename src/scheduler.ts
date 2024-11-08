import { createBranch, getBranch, postBranch } from "./github";
import { sendMessage } from "./slack";
import { messageTemplate } from "./utils";

const SLACK_CONSOLE_INTERNAL_ID = process.env.SLACK_CONSOLE_INTERNAL_ID!;

export const createPushQaBranch = async (date: string) => {
  const branchName = `qa/console-${date}-1`;
  const latestCommitSha = await getBranch();

  if (typeof latestCommitSha !== "string") return;

  await createBranch(latestCommitSha, branchName);
  await postBranch(latestCommitSha, branchName);

  sendMessage(messageTemplate(`${branchName} 브랜치가 생성되었습니다!`), SLACK_CONSOLE_INTERNAL_ID);
};

export const sendVaporVersionUpMessageToSlack = () => {
    sendMessage(messageTemplate('Vapor 버전업을 진행해주세요'), SLACK_CONSOLE_INTERNAL_ID);
};
