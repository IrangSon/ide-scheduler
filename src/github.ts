import axios from "axios";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const owner = "goorm-dev";
const repo = "ide-site";

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export async function getBranch(): Promise<String | undefined> {
  try {
    const { data: defaultBranch } = await axiosInstance.get<{
      commit: { sha: string };
    }>(`https://api.github.com/repos/${owner}/${repo}/branches/master`);

    const latestCommitSha: string = defaultBranch.commit.sha;

    return latestCommitSha;
  } catch (error) {
    console.error("Error get branch:", error);
    throw error;
  }
}

export async function createBranch(
  latestCommitSha: string,
  branchName: string
): Promise<void> {
  try {
    await axiosInstance.post(
      `https://api.github.com/repos/${owner}/${repo}/git/refs`,
      {
        ref: `refs/heads/${branchName}`,
        sha: latestCommitSha,
      }
    );

    console.log(`Branch '${branchName}' created successfully.`);
  } catch (error) {
    console.error("Error creating branch:", error);
    throw error;
  }
}

export async function postBranch(
  latestCommitSha: string,
  branchName: string
): Promise<void> {
  try {
    await axiosInstance.post(
      `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branchName}`,
      {
        ref: `refs/heads/${branchName}`,
        sha: latestCommitSha,
      }
    );

    console.log(`Branch '${branchName}' pushed successfully.`);
  } catch (error) {
    console.error("Error pushing branch:", error);
    throw error;
  }
}
