# Xiaomi-BootLoader-Questionnaire
小米 BootLoader《解锁资格答题测试》更新记录

## 提示 / Reminder
- **特别提示**：
  - 为方便查阅，我们制作了**题库汇总**，内含所有出现过的题目。[**题库传送门**](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/95)。
  - 小米方面目前仍然在**不断加紧限制**，包括但不限于**不断删减答题场次、临时随意增设或调整答题场次**，且遇到**特殊日期、系统维护**也不开放答题（**~~早起才发现不开放，明摆着耍猴呢~~**）；**无故封禁有解锁资格的账号、不予说明原因且不予解封**（见酷安相关讨论帖）。因此，我们建议有解锁需求的用户，谨慎购买出厂澎湃机型。
  - 您必须在每场答题时间**开始后的五分钟内进场**，最晚必须在该场答题时间**结束前的最后一秒提交问卷**，且答题**用时必须满 10 分钟**，否则答题一律无效。
  - 若您的小米账号**在绑定设备时提示账号权限不足或者账号受限**，或者绑定成功、但**解锁工具提示账号权限不足或者账号受限**，则代表**该账号已被禁止解锁**。唯一的方法就是**更换其他账号**，通过澎湃 OS 的 BL 解锁申请**并不能解除前述限制**。
  - 若您的小米账号属于「小米社区」**“黑号”**，那么即使您通过了答题测试，**也几乎不可能通过社区的解锁申请审核**。这一点已经被多名用户证实，并已创下拒绝 5 次的最高纪录，且小米社区官方不会就此给出任何原因。
  - **“黑号”的可能表现**（仅基于用户经验猜测，不保证准确）：
    - **签到雷打不动 `+1`**，极其偶然才有 `+2`，~~基本~~没有 `+3` 或更高。
    - 附[签到 `+1` 概率统计](https://mihayo.jinfan.online/#/probability)。数据为热心用户手工统计签到页面收集得到，是不是真的，咱也不知道。
    - 申请任何内测项目都无法通过，具体表现为**卡审核（不通过、但也不拒绝，始终是审核中）**，包括名额非常充足（一般指有几十万名额）的内测项目，比如目前仍可报名的“小爱同学大模型版本邀测”。
  - 每次参与需间隔 7 天是指 **168 小时整**，从您上一次提交问卷后**看到选择题分数开始起算**。假如您在本周二参加了 08:00 场答题，那么您**在下周二 08:00 仍无法参与**，需要再等下一场。
  - **请务必不要直接复制解析中填空题的答案**，否则将会被清零答题分数并喜提警告一次。建议您每道题都重新按自己的理解来组织答案。
- **官方提示**：
  - 为确保答题的公平性，提升答题体验，答题前请升级至小米社区 App 最新版本。
  - 答题开放时间受**法定假期、特殊日期、系统维护**等因素影响，**可能会出现临时调整的情况**，还**请在参与答题前留意社区公告**。
  - **2025 年 2 月 18 日 10:00 - 10:15、2025 年 2 月 25 日 10:00 - 10:15、2025 年 3 月 4 日 10:00 - 10:15**，您可以任选其中一个时段参与，每次参与需间隔 7 天，还请合理安排答题时间。
  - 每场答题的**最迟进场时间为该场次答题开始后的 5 分钟**，因为**最短答题时间不得少于 10 分钟**。
  - 答题成绩将于每场答题结束时间的 4 小时后失效，如答题通过，请务必在答题结束后的 4 小时内完成资格申请，避免成绩失效影响申请。
- **警告**：您不得通过「小米社区」APP 以外的方式参与答题。否则，您的账号将有可能：
  - **被永久拉入 BL 解锁风控黑名单**（绑定账号提示“账号权限不足或者账号受限”），后续该帐号不仅无法再解锁 HyperOS 设备，甚至也不能解锁 MIUI 设备，且客服无法解封！
  - **被永久拉入「小米社区」黑名单**（访问社区提示“访问小米社区受限，请几天后再试”），进入社区不能加载数据，也无法继续使用包括内测申请、BL 解锁申请等任何社区相关功能，且客服无法解封！
  - **被踢出「小米社区」当前所有已通过的内测项目、收回已获取到的 HyperOS BL 解锁权限**、《BL 解锁答题资格测试》分数清零等，如需继续参与项目，需要重新申请，且大概率不会再通过审批！
- 自 2024.02.29 16:00 起，小米隐藏了加入 BL 解锁圈子的人数，故无法再获知任何有关解锁审核的具体情况。
- 本记录**不是小米官方统计项目**。各 ID 为 Beehive 问卷内部 ID，供用户写脚本使用。选项以 ID 从小到大排序，实际答题时顺序可能会随机变动。**文字游戏较多，注意题目和选项的细节**。答案为收集整理，不一定完全正确，欢迎提交你的答案。
- 祝你们每个人都能天天签到 30 分，早日通过申请审批，解锁 BootLoader。**在此感谢所有参与答案讨论、以及贡献自己账号进行试错的用户**，感谢你们为 Android 刷机社区做出的贡献。
- 催更/纠错左转 [Issues](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/issues)，讨论右转 [Discussions](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions)。

## 声明 / Disclaimer
- **严正声明**：本题库及相关项目**用爱发电**，完全免费，**符合小米对“发烧友”的定义**。我们期待小米社区官方能站在用户角度考虑，降低答题难度至合理水平，并且提升满足 BL 解锁申请条件后的审核通过率，切实回应广大米粉的期待。 [#82](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/82)
> - 发烧友具备**分享精神**，因此在有一些好的知识或经验时，**会积极分享和交流**，不会去利用“资源”去“谋利”
> - 发烧友具备**学习精神**，因此在遇到新鲜事物或新知识时，**会乐于学习和钻研**，不会肆意谩骂
> - 发烧友具备**探究精神**，因此在遇到不了解的问题时，**会在合理范围内主动探寻答案**，但不会寻求不正当“捷径”或采用违规方式
> <div align="center"><img src="https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/assets/27143040/d9ee55b2-edb5-4c18-b84e-56c28358df77" height="400px" /></div>
- 该项目完全免费，如果你从他人手中购买了此项目的内容，请申请退款并向平台举报倒卖行为。如果你想对作者表达感谢，可以通过如下渠道无偿赞助：[爱发电](https://afdian.net/a/MlgmXyysd) [PayPal](https://paypal.me/MlgmXyysd)
- This project is completely free. If you purchased the content of this project from others, please apply for a refund and report to the platform for reselling behavior. If you want to express your gratitude to authors, you can sponsor through the following channels: [爱发电](https://afdian.net/a/MlgmXyysd) [PayPal](https://paypal.me/MlgmXyysd)

## 工具集 / Utilities
- Bypass PoC: 如果您的设备不是出厂搭载 HyperOS，您可尝试使用漏洞进行绑定，成功则无需参与答题: [Xiaomi-BootLoader-Bypass](https://github.com/MlgmXyysd/Xiaomi-HyperOS-BootLoader-Bypass)；如遇报错 `Request parameter error (10000)`，请参考[此处](https://www.coolapk.com/feed/53042929?shareKey=NzhmMGE5MTIxOWIwNjVjNDlhMzM)。
- **请注意**: 根据小米目前的解锁政策，**部分产品系列不支持解锁（例如: 红米 Note 13/13 Pro/13 Pro+）**；如您绑定时提示“系统升级维护中”，表示小米**不允许您的设备进行解锁**，无论您的设备当前运行的是 HyperOS 还是 MIUI，也无论您是否拥有 HyperOS BL 解锁权限。
- 《五年解锁 三年模拟》: 为了辅助用户答题，我们为项目制作了[网站](https://xmbl.neko.ink/)，网站目前有「知识库」和「模拟答题」功能，内容跟随仓库更新。网站目前仍处于测试阶段，如有反馈或建议，请在 [Issues](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/issues) 或 [Discussions](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions) 提出。
- **Notice for International users**:
  - If you are trying to unlock HyperOS running on **NON-CHINA-MAINLAND DEVICES**:
    -  Congratulations! All you need to do is to install [Xiaomi Community APP](https://play.google.com/store/apps/details?id=com.mi.global.bbs) 5.3.31+, and then click on "ME - Unlock bootloader - Apply for unlocking" to obtain unlocking permissions without waiting for any approval.
  - If you are trying to unlock HyperOS running on **CHINA-MAINLAND DEVICES**:
    -  If your device **IS NOT PRE-INSTALLED WITH HyperOS**: Congratulations! You can try using [Xiaomi-BootLoader-Bypass](https://github.com/MlgmXyysd/Xiaomi-HyperOS-BootLoader-Bypass) to bind your account. If you encounter `Request parameter error (10000)`, please refer to [here](https://twitter.com/realMlgmXyysd/status/1748386904050110675).
    -  **Note that some product series DO NOT SUPPORT unlocking (e.g. Redmi Note 13/13 Pro/13 Pro+)** according to Xiaomi's current unlocking policy. If you encounter `The system is being upgraded. Please try again later. (30003)`, it means that your device is not allowed to be unlocked.
    -  Otherwise, the unlocking policy for your device follows [the regulations](https://web.vip.miui.com/page/info/mio/mio/testDetails?type=BL_BLOCK&id=-1) that apply to mainland China region. You have to meet the applying requirements, then apply for unlocking and wait for your request to be approved.
	
	
## 2024
[2024 年存档](history-2024.md)