import "dotenv/config";
import cron from "node-cron";
import { startOfDay } from "date-fns";
import { formatDate, isThreeWeekInterval } from "./utils";
import { createPushBranch } from "./scheduler";

let baseDate = startOfDay(new Date("2024-05-06"));

// 스프린트 첫 주 월요일 00:00에 크론 작업을 설정합니다.
cron.schedule("0 0 * * 1", async () => {
  const now = startOfDay(new Date());

  if (isThreeWeekInterval(baseDate, now)) {
    try {
      await createPushBranch(formatDate(now));
      console.log("success==================");
    } catch (err) {
      console.log("err==================");
    } finally {
      baseDate = now;
    }
  }
});
