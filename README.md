# Xiaomi-BootLoader-Questionnaire
小米 BootLoader《解锁资格答题测试》更新记录

## 写在前面 / Preface
- **「那么，是时候说再见啦。」**
- 相信大家已经发现，在部分机型 HyperOS 的末期版本，已经禁止了对设置进行降级（黑名单），这与我们之前的猜测相符。而在 HyperOS 2 中，由于底层已更新至 Android 15，不再可能将设置降级为 Android 14 的版本。
- 虽然 HyperOS BootLoader Bypass 项目配合我们已掌握的新漏洞，在 HyperOS 2 中仍可用于绕过社区解锁资格，但由于该漏洞的危险性略高于目前已公开的，我们决定不公开该漏洞的 PoC。
- 我们建议，如您仍有解锁 BootLoader 的需求，那么最好的方法是**不要购入任何出厂为 HyperOS 的，以及受到特殊关照的小米系设备（例如: 红米 Note 13/13 Pro/13 Pro+），包括海外版本**。**现有设备请务必在解锁后再进行升级，以免造成不便**。若您的设备已不幸升级，请咨询售后以请求降级系统。
- **我们仍期待着小米对玩机群体再次张开怀抱的那一天，就像小米永远相信美好的事情即将发生那样。**
- 最后，记得按时答题哟。
- **"Well, this is the last dance."**
- We believe someone has already noticed that in the later versions of HyperOS on some models, downgrading the Settings has been prohibited (blacklisted), which confirms our previous speculation. In HyperOS 2, it is no longer possible to downgrade the Settings to Android 14 one, as the system has now been updated to Android 15.
- While the HyperOS BootLoader Bypass project, in conjunction with the new vulnerabilities we already mastered, can still be used in HyperOS 2 to bypass community qualification, we've decided not to disclose the PoC for these new vulnerabilities. This is due to their slightly more dangerous than the previously disclosed.
- We recommend that if you still have the requirement to unlock the BootLoader, then the best approach is **NOT to purchase any devices that release with HyperOS, including overseas variants** (e.g. Redmi Note 13/13 Pro/13 Pro+). **Stock devices should always be unlocked before upgrading to HyperOS 2 to avoid any inconvenience**. If you have already upgraded your device, please consult the after-sales service to request a system downgrade.
- **We still look forward to the day when Xiaomi rediscovers its geek spirit, just as Xiaomi always believes that something wonderful is about to happen.**
- By the way, at 00:00 UTC+8 every day, remember to open the Xiaomi community to apply for unlocking.

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
  - **8 月 13 日上午 8:00 - 8:15、8 月 20 日上午 8:00 - 8:15、9 月 10 日上午 8:00 - 8:15、9 月 24 日上午 8:00 - 8:15**，您可以任选其中一个时段参与，每次参与需间隔 7 天，还请合理安排答题时间。
  - 每场答题的**最迟进场时间为该场次答题开始后的 5 分钟**，因为**最短答题时间不得少于 10 分钟**。
  - 答题成绩每周一晚上 23:59 失效，如答题通过，请务必在周一晚上 23:59 前完成资格申请，避免成绩失效影响申请。
- **警告**：您不得通过「小米社区」APP 以外的方式参与答题。否则，您的账号将有可能：
  - **被永久拉入 BL 解锁风控黑名单**（绑定账号提示“账号权限不足或者账号受限”），后续该帐号不仅无法再解锁 HyperOS 设备，甚至也不能解锁 MIUI 设备，且客服无法解封！
  - **被永久拉入「小米社区」黑名单**（访问社区提示“访问小米社区受限，请几天后再试”），进入社区不能加载数据，也无法继续使用包括内测申请、BL 解锁申请等任何社区相关功能，且客服无法解封！
  - **被踢出「小米社区」当前所有已通过的内测项目、收回已获取到的 HyperOS BL 解锁权限**、《BL 解锁答题资格测试》分数清零等，如需继续参与项目，需要重新申请，且大概率不会再通过审批！
- 自 2024.02.29 16:00 起，小米隐藏了加入 BL 解锁圈子的人数，故无法再获知任何有关解锁审核的具体情况。
- 本记录**不是小米官方统计项目**。各 ID 为 Beehive 问卷内部 ID，供用户写脚本使用。选项以 ID 从小到大排序，实际答题时顺序可能会随机变动。**文字游戏较多，注意题目和选项的细节**。答案为收集整理，不一定完全正确，欢迎提交你的答案。
- 祝你们每个人都能天天签到 30 分，早日通过申请审批，解锁 BootLoader。**在此感谢所有参与答案讨论、以及贡献自己账号进行试错的用户**，感谢你们为 Android 刷机社区做出的贡献。
- 催更/纠错左转 [Issues](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/issues)，讨论右转 [Discussions](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions)。
- **问卷题目的文字游戏**</br>
在以往各场次的答题问卷中，虽然经常出现“原题”，但米米煞费苦心为大家挖了许多**坑和陷阱**。</br>
如下的表格罗列了一些在答题过程中**较难察觉的案例**，其中出现时间是指对应选项内容第一次出现在答题中的日期：
<table>
    <tr>
        <th>出现时间</th>
        <th>选项内容</th>
    </tr>
    <tr>
        <td align="center">2023.12.21</td>
        <td>原始设备制造商简称 OEM，是英文 Original <b>Equipment</b> Manufacturer 的缩写</td>
    </tr>
    <tr>
        <td align="center">2023.12.22</td>
        <td>原始设备制造商简称 OEM，是英文 Original <b>Environment</b> Manufacturer 的缩写</td>
    </tr>
    <tr>
        <td align="center">2023.12.21</td>
        <td>adb的全称是 Android Debug <b>Bridge</b>，起到调试桥的作用</td>
    </tr>
    <tr>
        <td align="center">2024.01.05</td>
        <td>adb的全称是 Android Debug <b>Badge</b>，起到调试桥的作用</td>
    </tr>
    <tr>
        <td align="center">2023.12.21</td>
        <td><b>inet</b> 是 UNIX 系统最重要的网络服务进程</td>
    </tr>
    <tr>
        <td align="center">2024.01.04</td>
        <td><b>inetd</b> 是 UNIX 系统最重要的网络服务进程</td>
    </tr>
    <tr>
        <td align="center">网上原题</td>
        <td>QPI 总线是一种点对点全工同步串行总线，总线上的设备可同时接收和发送信息，每个方向可同时传输 20 位信息（16 位数据 + 4 位校验位），每个 QPI 数据包有 80 位信息，分 2 个时钟周期传送，每个时钟周期传递 2 次。因此，QPI 总线带宽为：每秒传送次数 × 2B × 2。若 QPI 时钟频率为 <b>2.4GHz</b>，则总线带宽为 19.2GB/s</td>
    </tr>
    <tr>
        <td align="center">2024.03.19</td>
        <td>QPI 总线是一种点对点全I同步串行总线，总线上的设备可同时接收和发送信息，每个方向可同时传输 20 位信息（16 位数据 + 4 位校验位），每个 QPI 数据包有 80 位信息，分 2 个时钟周期传送，每个时钟周期传递 2 次。因此，QPI 总线带宽为：每秒传送次数 × 2B × 2。若 QPI 时钟频率为 <b>1.2GHz</b>，则总线带宽为 19.2GB/s</td>
    </tr>
    <tr>
        <td align="center">2024.03.12</td>
        <td>类加载器的顺序是，先是 Bootstrap ClassLoader，然后是 <b>Extension</b> ClassLoader，最后是 System ClassLoader</td>
    </tr>
    <tr>
        <td align="center">2024.03.19</td>
        <td>类加载器的顺序是，先是 Bootstrap ClassLoader，然后是 <b>Examination</b> ClassLoader，最后是 System ClassLoader</td>
    </tr>
    <tr>
        <td align="center">2024.03.19</td>
        <td>TDM 的全称是 <b>Time</b> Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
    </tr>
    <tr>
        <td align="center">2024.04.19</td>
        <td>TDM 的全称是 <b>Total</b> Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
    </tr>
    <tr>
        <td align="center">2024.03.26</td>
        <td>I2C 也可以叫 IIC，是两线式<b>串行</b>通信总线，用于设备间的通讯</td>
    </tr>
    <tr>
        <td align="center">2024.05.15</td>
        <td>I2C 也可以叫 IIC，是两线式<b>并行</b>通信总线，用于设备间的通讯</td>
    </tr>
    <tr>
        <td align="center">2023.12.21</td>
        <td>对称加密最大的<b>缺点</b>在于其密钥管理困难</td>
    </tr>
    <tr>
        <td align="center">2024.05.29</td>
        <td>对称加密最大的<b>优点</b>在于其密钥管理困难</td>
    </tr>
    <tr>
        <td align="center">2023.11.08</td>
        <td>官方提供给用户的刷机工具是 <b>MiFlash</b></td>
    </tr>
    <tr>
        <td align="center">2024.06.18</td>
        <td>小米刷机工具是 <b>MiFlush</b></td>
    </tr>
    <tr>
        <td align="center">2023.12.08</td>
        <td>S_FT_NEED_<b>DOWNLOAD</b>_ALL_FAIL：目标 ROM 文件和手机系统差距过大</td>
    </tr>
    <tr>
        <td align="center">2024.07.09</td>
        <td>S_FT_NEED_<b>DOWNLOAO</b>_ALL_FAIL：目标 ROM 文件和手机系统差距过大</td>
    </tr>
    <tr>
        <td align="center">2023.12.08</td>
        <td>S_BROM_CMD_<b>STARTCMD</b>_FAIL：没有加载好刷机包文件</td>
    </tr>
    <tr>
        <td align="center">2024.07.09</td>
        <td>S_BROM_CMD_<b>STARTCMO</b>_FAIL：没有加载好刷机包文件</td>
    </tr>
    <tr>
        <td align="center">2024.07.09</td>
        <td>退出 Activity 的方法有 finish()、<b>onStop()</b>、抛异常强制退出</td>
    </tr>
    <tr>
        <td align="center">2024.07.23</td>
        <td>退出 Activity 的方法有 finish()、<b>onSlop()</b>、抛异常强制退出</td>
    </tr>
    <tr>
        <td align="center">2024.07.09</td>
        <td>某系统用页式存储管理，用位图管理空闲页框，若页大小为 4KB，物理内存大小为 <b>16GB</b>，则位图所占空间的大小是 512KB</td>
    </tr>
    <tr>
        <td align="center">2024.08.13</td>
        <td>某系统用页式存储管理，用位图管理空闲页框，若页大小为 4KB，物理内存大小为 <b>16KB</b>，则位图所占空间的大小是 512KB</td>
    </tr>
    <tr>
        <td align="center">2024.07.09</td>
        <td>TCP、IP、UDP 协议分别用来直接封装 RIP、OSPF、<b>BGP</b></td>
    </tr>
    <tr>
        <td align="center">2024.08.13</td>
        <td>TCP、IP、UDP 协议分别用来直接封装 RIP、OSPF、<b>BDP</b></td>
    </tr>
</table>

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

## 2024.09.10 08:00-08:15
- [题库汇总](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/95)
- 题目讨论
- 答题链接(更新): 
- 问卷星级(更新): ★★☆☆☆

## 2024.08.20 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-10431522) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/210)
- 答题链接(更新): https://m.beehive.miui.com/o141e1eF8k3cQfmq_y1L9g/
- 问卷星级(更新): ★★★★☆
- 题目数量: 单选题 x3 + 多选题 x5 + 填空题 x3
- 合格分数: 86
- 时间限制: 最短不少于 10 分钟，最长不超过 15 分钟
- 得分有效期(更新): 2024 年 8 月 20 日 00:00 - 2024 年 8 月 26 日 23:59
- 注:
  1. **您必须在 08:00:00 - 08:05:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1690574 [截图识别码 6101-3] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1690574 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 10 分钟，如您答题少于 10 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1690561</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为08:00 - 08:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5545631</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5545632</td>
		<td>最短答题为10分钟，如您答题少于10分钟时，将无法显示成绩</td>
		<td>5545633</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5545634</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5545631,5545632,5545633,5545634</td>
	</tr>
	<tr>
		<td>1690562</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5545635</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5545636</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5545637</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5545638</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5545635,5545636,5545637,5545638</td>
	</tr>
	<tr>
		<td>1690563</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5545639</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5545640</td>
		<td>出现被判定为作弊的行为</td>
		<td>5545641</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5545642</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5545643</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5545639,5545640,5545641,5545642,5545643</td>
	</tr>
	<tr>
		<td>1690564</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5545644</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5545645</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5545646</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5545647</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5545648</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5545644,5545645,5545646,5545647,5545648</td>
	</tr>
	<tr>
		<td>1690565</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5545649</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5545650</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5545649</td>
	</tr>
	<tr>
		<td>1690566</td>
		<td>【题目1】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5545651</td>
		<td>操作系统供应应用程序的接口是系统调用</td>
		<td>5545652</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5545653</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5545654</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td>5545655</td>
		<td>对于采用虚拟内存管理方式的系统，进程的数据段和代码段可以有不同的访问权限</td>
		<td>5545656</td>
		<td>已知一个长度为16的依次表L，其元素按关键字有序排列，若采纳折半查找法查找一个L中不存在的元素，则关键字的比较次数最多为6次</td>
		<td>5545652,5545653,5545656</td>
	</tr>
	<tr>
		<td>1690567</td>
		<td>【题目2】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5545657</td>
		<td>树T中度为1,3,5,7,9的结点个数为10,8,6,4,2，则树T的叶子个数为81个</td>
		<td>5545658</td>
		<td>在哈夫曼树中，权值较大的叶子结点一般离根结点较远</td>
		<td>5545659</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5545660</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5545661</td>
		<td>ASCII文本无需转换即可由SMTP协议直接传输</td>
		<td>5591707</td>
		<td>RAM和ROM都属于随机访问存储器</td>
		<td>5545658,5545660</td>
	</tr>
	<tr>
		<td>1690568</td>
		<td>【题目3】下列说法正确的是</td>
		<td>单选题</td>
		<td>5545662</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5545663</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5545664</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5545665</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5545664</td>
	</tr>
	<tr>
		<td>1690569</td>
		<td>【题目4】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5545666</td>
		<td>与单道程序系统相比，多道程序系统的CPU利用率低</td>
		<td>5545667</td>
		<td>与多道程序系统相比，单道程序系统的系统开销小</td>
		<td>5545668</td>
		<td>与多道程序系统相比，单道程序系统的系统吞吐量大</td>
		<td>5545669</td>
		<td>与多道程序系统相比，单道程序系统的I/O设备利用率高</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5545666,5545668,5545669</td>
	</tr>
	<tr>
		<td>1690570</td>
		<td>【题目5】以下刷机报错的原因，匹配的有</td>
		<td>多选题</td>
		<td>5545670</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5545671</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5545672</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5545673</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5545674</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>5545672,5545673</td>
	</tr>
	<tr>
		<td>1690571</td>
		<td>【题目6】用若干个2K×4位的芯片组成一个8K×8位的存储器，则地址0B1FH所在芯片的最小地址是</td>
		<td>单选题</td>
		<td>5545675</td>
		<td>0000H</td>
		<td>5545676</td>
		<td>0800H</td>
		<td>5545677</td>
		<td>0400H</td>
		<td>5545678</td>
		<td>0600H</td>
		<td>5591746</td>
		<td>0200H</td>
		<td></td>
		<td></td>
		<td>5545676</td>
	</tr>
	<tr>
		<td>1690572</td>
		<td>【题目7】某单CPU系统中有输入和输出设备各1台，现有3个并发执行的作业，每个作业的输入、计算和输出时间均分别为2ms、3ms和4ms，且都按输入、计算和输出的顺序执行，则执行完3个作业需要的时间最少是</td>
		<td>单选题</td>
		<td>5545679</td>
		<td>15ms</td>
		<td>5545680</td>
		<td>17ms</td>
		<td>5545681</td>
		<td>22ms</td>
		<td>5545682</td>
		<td>27ms</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5545680</td>
	</tr>
	<tr>
		<td>1690573</td>
		<td>【题目8】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5545683</td>
		<td>影响散列方法平均查找长度的因素包括装填因子、散列函数、冲突解决策略</td>
		<td>5545684</td>
		<td>能够抑制广播风暴的有网桥和路由器</td>
		<td>5545685</td>
		<td>设备分配需要关注的设备固有属性、设备分配算法、设备分配的安全性、设备分配的及时性</td>
		<td>5545686</td>
		<td>TCP、IP、UDP协议分别用来直接封装RIP、OSPF、BGP</td>
		<td>5545687</td>
		<td>用快慢指针可以判断一个单向链表中是否存在环</td>
		<td>5591750</td>
		<td>协议的内部实现细微环节不属于网络体系结构所描述的内容</td>
		<td>5545685,5545686</td>
	</tr>
	<tr>
		<td>1690574</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码6101-3]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1690575</td>
		<td>【题目9】请简述部分厂商在手机BL解锁后的“熔断”机制</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1690576</td>
		<td>【题目10】请简述BL解锁的危害</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1690577</td>
		<td>【题目11】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.08.13 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-10328104) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/210)
- 答题链接(更新): https://m.beehive.miui.com/zcNb1tWjGiCKOxFeRjGxCQ/
- 问卷星级: ★☆☆☆☆
- 题目数量: 单选题 x3 + 多选题 x5 + 填空题 x3
- 合格分数: 86
- 时间限制: 最短不少于 10 分钟，最长不超过 15 分钟
- 得分有效期(更新): 2024 年 8 月 13 日 00:00 - 2024 年 8 月 19 日 23:59
- 注:
  1. **您必须在 08:00:00 - 08:05:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1689943 [截图识别码 1333-1] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1689943 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 10 分钟，如您答题少于 10 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1689930</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为08:00 - 08:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5543186</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5543187</td>
		<td>最短答题为10分钟，如您答题少于10分钟时，将无法显示成绩</td>
		<td>5543188</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5543189</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543186,5543187,5543188,5543189</td>
	</tr>
	<tr>
		<td>1689931</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5543190</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5543191</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5543192</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5543193</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543190,5543191,5543192,5543193</td>
	</tr>
	<tr>
		<td>1689932</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5543194</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5543195</td>
		<td>出现被判定为作弊的行为</td>
		<td>5543196</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5543197</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5543198</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5543194,5543195,5543196,5543197,5543198</td>
	</tr>
	<tr>
		<td>1689933</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5543199</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5543200</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5543201</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5543202</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5543203</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5543199,5543200,5543201,5543202,5543203</td>
	</tr>
	<tr>
		<td>1689934</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5543204</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5543205</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543204</td>
	</tr>
	<tr>
		<td>1689935</td>
		<td>【题目1】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5543206</td>
		<td>包含在TCP报文段首部中但不包含在UDP用户数据报首部中的字段是序号</td>
		<td>5543207</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5543208</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5543209</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td>5543210</td>
		<td>对于采用虚拟内存管理方式的系统，进程的数据段和代码段可以有不同的访问权限</td>
		<td>5543211</td>
		<td>连通图G的顶点数为n，则G的生成树的边数为n+1个</td>
		<td>5543207,5543208,5543211</td>
	</tr>
	<tr>
		<td>1689936</td>
		<td>【题目2】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5543212</td>
		<td>某系统用页式存储管理，用位图管理空闲页框，若页大小为4KB，物理内存大小为16KB，则位图所占空间的大小是512KB</td>
		<td>5543213</td>
		<td>EDL刷机不适用于Redmi Note全系列手机</td>
		<td>5543214</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5543215</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5543216</td>
		<td>ASCII文本无需转换即可由SMTP协议直接传输</td>
		<td>5547726</td>
		<td>物理地址、硬件地址以及MAC地址，都属于数据链路层范畴</td>
		<td>5543212,5543213,5543215</td>
	</tr>
	<tr>
		<td>1689937</td>
		<td>【题目3】下列说法正确的是</td>
		<td>单选题</td>
		<td>5543217</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5543218</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5543219</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5543220</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543219</td>
	</tr>
	<tr>
		<td>1689938</td>
		<td>【题目4】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5543221</td>
		<td>与单道程序系统相比，多道程序系统的CPU利用率低</td>
		<td>5543222</td>
		<td>与多道程序系统相比，单道程序系统的系统开销小</td>
		<td>5543223</td>
		<td>与多道程序系统相比，单道程序系统的系统吞吐量大</td>
		<td>5543224</td>
		<td>与多道程序系统相比，单道程序系统的I/O设备利用率高</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543221,5543223,5543224</td>
	</tr>
	<tr>
		<td>1689939</td>
		<td>【题目5】以下刷机报错的原因，匹配的有</td>
		<td>多选题</td>
		<td>5543225</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5543226</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5543227</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5543228</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5543229</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>5543227,5543228</td>
	</tr>
	<tr>
		<td>1689940</td>
		<td>【题目6】下列数值中，不能用IEEE754浮点格式精确表示的是</td>
		<td>单选题</td>
		<td>5543230</td>
		<td>1.2</td>
		<td>5543231</td>
		<td>1.25</td>
		<td>5543232</td>
		<td>2.0</td>
		<td>5543233</td>
		<td>2.5</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543230</td>
	</tr>
	<tr>
		<td>1689941</td>
		<td>【题目7】某单CPU系统中有输入和输出设备各1台，现有3个并发执行的作业，每个作业的输入、计算和输出时间均分别为2ms、3ms和4ms，且都按输入、计算和输出的顺序执行，则执行完3个作业需要的时间最少是</td>
		<td>单选题</td>
		<td>5543234</td>
		<td>15ms</td>
		<td>5543235</td>
		<td>17ms</td>
		<td>5543236</td>
		<td>22ms</td>
		<td>5543237</td>
		<td>27ms</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5543235</td>
	</tr>
	<tr>
		<td>1689942</td>
		<td>【题目8】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5543238</td>
		<td>影响散列方法平均查找长度的因素包括装填因子、散列函数、冲突解决策略</td>
		<td>5543239</td>
		<td>退出Activity的方法有finish()、onStop()、抛异常强制退出</td>
		<td>5543240</td>
		<td>设备分配需要关注的设备固有属性、设备分配算法、设备分配的安全性、设备分配的及时性</td>
		<td>5543241</td>
		<td>TCP、IP、UDP协议分别用来直接封装RIP、OSPF、BDP</td>
		<td>5543242</td>
		<td>接收窗口值通过TCP首部中的窗口字段通知数据的发送方</td>
		<td>5547727</td>
		<td>算法随着问题规模的扩大，所花时间也会单调增加</td>
		<td>5543240,5543241,5547727</td>
	</tr>
	<tr>
		<td>1689943</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码1333-1]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1689944</td>
		<td>【题目9】请简述部分厂商在手机BL解锁后的“熔断”机制</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1689945</td>
		<td>【题目10】请简述BL解锁的危害</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1689946</td>
		<td>【题目11】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.07.25 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-10149754) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/200)
- 答题链接(更新): https://m.beehive.miui.com/OpBdSorLLZKltNdS5ubIUg/
- 问卷星级: ★☆☆☆☆
- 题目数量: 单选题 x3 + 多选题 x5 + 填空题 x3
- 合格分数: 86
- 时间限制: 最短不少于 10 分钟，最长不超过 15 分钟
- 得分有效期: 2024 年 7 月 23 日 00:00 - 2024 年 7 月 29 日 23:59
- 注:
  1. **您必须在 08:00:00 - 08:05:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1677395 [截图识别码 2104-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1677395 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 10 分钟，如您答题少于 10 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1677382</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为08:00 - 08:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5496281</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5496282</td>
		<td>最短答题为10分钟，如您答题少于10分钟时，将无法显示成绩</td>
		<td>5496283</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5496284</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496281,5496282,5496283,5496284</td>
	</tr>
	<tr>
		<td>1677383</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5496285</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5496286</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5496287</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5496288</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496285,5496286,5496287,5496288</td>
	</tr>
	<tr>
		<td>1677384</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5496289</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5496290</td>
		<td>出现被判定为作弊的行为</td>
		<td>5496291</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5496292</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5496293</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5496289,5496290,5496291,5496292,5496293</td>
	</tr>
	<tr>
		<td>1677385</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5496294</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5496295</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5496296</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5496297</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5496298</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5496294,5496295,5496296,5496297,5496298</td>
	</tr>
	<tr>
		<td>1677386</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5496299</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5496300</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496299</td>
	</tr>
	<tr>
		<td>1677387</td>
		<td>【题目1】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5496301</td>
		<td>对于采用虚拟内存管理方式的系统，每个进程有自己独立的虚拟地址空间</td>
		<td>5496302</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5496303</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5496304</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td>5496305</td>
		<td>对于采用虚拟内存管理方式的系统，进程的数据段和代码段可以有不同的访问权限</td>
		<td>5518177</td>
		<td>连通图G的顶点数为n，则G的生成树的边数为n+1个</td>
		<td>5496302,5496303,5518177</td>
	</tr>
	<tr>
		<td>1677388</td>
		<td>【题目2】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5496306</td>
		<td>某系统用页式存储管理，用位图管理空闲页框，若页大小为4KB，物理内存大小为16GB，则位图所占空间的大小是512KB</td>
		<td>5496307</td>
		<td>EDL刷机适用于Redmi Note全系列手机</td>
		<td>5496308</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5496309</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5496310</td>
		<td>ASCII文本无需转换即可由SMTP协议直接传输</td>
		<td></td>
		<td></td>
		<td>5496307,5496309</td>
	</tr>
	<tr>
		<td>1677389</td>
		<td>【题目3】下列说法正确的是</td>
		<td>单选题</td>
		<td>5496311</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5496312</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5496313</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5496314</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496313</td>
	</tr>
	<tr>
		<td>1677390</td>
		<td>【题目4】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5496315</td>
		<td>与单道程序系统相比，多道程序系统的CPU利用率低</td>
		<td>5496316</td>
		<td>与多道程序系统相比，单道程序系统的系统开销小</td>
		<td>5496317</td>
		<td>与多道程序系统相比，单道程序系统的系统吞吐量大</td>
		<td>5496318</td>
		<td>与多道程序系统相比，单道程序系统的I/O设备利用率高</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496315,5496317,5496318</td>
	</tr>
	<tr>
		<td>1677391</td>
		<td>【题目5】以下刷机报错的原因，匹配的有</td>
		<td>多选题</td>
		<td>5496319</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5496320</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5496321</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5496322</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5496323</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>5496321,5496322</td>
	</tr>
	<tr>
		<td>1677392</td>
		<td>【题目6】单CPU系统中有n个并发进程，则就绪队列中进程的个数最多有</td>
		<td>单选题</td>
		<td>5496324</td>
		<td>n+1个</td>
		<td>5496325</td>
		<td>n-1个</td>
		<td>5496326</td>
		<td>2n个</td>
		<td>5496327</td>
		<td>n个</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496325</td>
	</tr>
	<tr>
		<td>1677393</td>
		<td>【题目7】某单CPU系统中有输入和输出设备各1台，现有3个并发执行的作业，每个作业的输入、计算和输出时间均分别为2ms、3ms和4ms，且都按输入、计算和输出的顺序执行，则执行完3个作业需要的时间最少是</td>
		<td>单选题</td>
		<td>5496328</td>
		<td>15ms</td>
		<td>5496329</td>
		<td>17ms</td>
		<td>5496330</td>
		<td>22ms</td>
		<td>5496331</td>
		<td>27ms</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496329</td>
	</tr>
	<tr>
		<td>1677394</td>
		<td>【题目8】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5496332</td>
		<td>影响散列方法平均查找长度的因素包括装填因子、散列函数、冲突解决策略</td>
		<td>5496333</td>
		<td>退出Activity的方法有finish()、onStop()、抛异常强制退出</td>
		<td>5496334</td>
		<td>设备分配需要关注的设备固有属性、设备分配算法、设备分配的安全性、设备分配的及时性</td>
		<td>5496335</td>
		<td>TCP、IP、UDP协议分别用来直接封装RIP、OSPF、BGP</td>
		<td>5496336</td>
		<td>用快慢指针可以判断一个单向链表中是否存在环</td>
		<td></td>
		<td></td>
		<td>5496334,5496335</td>
	</tr>
	<tr>
		<td>1677395</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码2104-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1677396</td>
		<td>【题目9】请简述部分厂商在手机BL解锁后的“熔断”机制</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1677397</td>
		<td>【题目10】请简述BL解锁的危害</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1677398</td>
		<td>【题目11】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.07.23 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-10123143) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/200)
- 答题链接(更新): https://m.beehive.miui.com/SP6uKtt7roDsvZDI6dVKeQ/
- 问卷星级(更新): ★☆☆☆☆
- 题目数量: 单选题 x3 + 多选题 x5 + 填空题 x3
- 合格分数: 86
- 时间限制(更新): 最短不少于 10 分钟，最长不超过 15 分钟
- 得分有效期(更新): 2024 年 7 月 23 日 00:00 - 2024 年 7 月 29 日 23:59
- 注(更新):
  1. **您必须在 08:00:00 - 08:05:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1677377 [截图识别码 1122-8] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1677377 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 10 分钟，如您答题少于 10 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1677364</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为08:00 - 08:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5496225</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5496226</td>
		<td>最短答题为10分钟，如您答题少于10分钟时，将无法显示成绩</td>
		<td>5496227</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5496228</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td>5496225,5496226,5496227,5496228</td>
	</tr>
	<tr>
		<td>1677365</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5496229</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5496230</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5496231</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5496232</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5496229,5496230,5496231,5496232</td>
	</tr>
	<tr>
		<td>1677366</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5496233</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5496234</td>
		<td>出现被判定为作弊的行为</td>
		<td>5496235</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5496236</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5496237</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5496233,5496234,5496235,5496236,5496237</td>
	</tr>
	<tr>
		<td>1677367</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5496238</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5496239</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5496240</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5496241</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5496242</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5496238,5496239,5496240,5496241,5496242</td>
	</tr>
	<tr>
		<td>1677368</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5496243</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5496244</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5496243</td>
	</tr>
	<tr>
		<td>1677369</td>
		<td>【题目1】下列说法正确的是</td>
		<td>多选题</td>
		<td>5496245</td>
		<td>对于采用虚拟内存管理方式的系统，每个进程有自己独立的虚拟地址空间</td>
		<td>5496246</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5496247</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5496248</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td>5496249</td>
		<td>对于采用虚拟内存管理方式的系统，进程的数据段和代码段可以有不同的访问权限</td>
		<td>5496245,5496248,5496249</td>
	</tr>
	<tr>
		<td>1677370</td>
		<td>【题目2】下列说法正确的是</td>
		<td>多选题</td>
		<td>5496250</td>
		<td>某系统用页式存储管理，用位图管理空闲页框，若页大小为4KB，物理内存大小为16GB，则位图所占空间的大小是512KB</td>
		<td>5496251</td>
		<td>EDL刷机不适用于Redmi Note系列的手机</td>
		<td>5496252</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5496253</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5496254</td>
		<td>ASCII文本无需转换即可由SMTP协议直接传输</td>
		<td>5496250,5496252,5496254</td>
	</tr>
	<tr>
		<td>1677371</td>
		<td>【题目3】下列说法正确的是</td>
		<td>单选题</td>
		<td>5496255</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5496256</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5496257</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5496258</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td>5496257</td>
	</tr>
	<tr>
		<td>1677372</td>
		<td>【题目4】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5496259</td>
		<td>与单道程序系统相比，多道程序系统的CPU利用率低</td>
		<td>5496260</td>
		<td>与多道程序系统相比，单道程序系统的系统开销小</td>
		<td>5496261</td>
		<td>与多道程序系统相比，单道程序系统的系统吞吐量大</td>
		<td>5496262</td>
		<td>与多道程序系统相比，单道程序系统的I/O设备利用率高</td>
		<td></td>
		<td></td>
		<td>5496259,5496261,5496262</td>
	</tr>
	<tr>
		<td>1677373</td>
		<td>【题目5】以下刷机报错的原因，不匹配的有</td>
		<td>多选题</td>
		<td>5496263</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5496264</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5496265</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5496266</td>
		<td>S_BROM_CMD_STARTCMO_FAIL：没有加载好刷机包文件</td>
		<td>5496267</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5496263,5496264,5496266,5496267</td>
	</tr>
	<tr>
		<td>1677374</td>
		<td>【题目6】Android负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>5496268</td>
		<td>ActivityManagerService</td>
		<td>5496269</td>
		<td>ActivityManagerSystem</td>
		<td>5496270</td>
		<td>AndroidManagerSystem</td>
		<td>5496271</td>
		<td>AndroidManagerService</td>
		<td></td>
		<td></td>
		<td>5496268</td>
	</tr>
	<tr>
		<td>1677375</td>
		<td>【题目7】主机168.16.84.24/20所在子网的最大可分配地址和最小可分配地址分别是</td>
		<td>单选题</td>
		<td>5496272</td>
		<td>168.16.84.254, 168.16.80.1</td>
		<td>5496273</td>
		<td>168.16.95.254, 168.16.80.1</td>
		<td>5496274</td>
		<td>168.16.84.254, 168.16.84.1</td>
		<td>5496275</td>
		<td>168.16.95.254, 168.16.84.1</td>
		<td></td>
		<td></td>
		<td>5496273</td>
	</tr>
	<tr>
		<td>1677376</td>
		<td>【题目8】下列说法正确的是</td>
		<td>多选题</td>
		<td>5496276</td>
		<td>影响散列方法平均查找长度的因素包括装填因子、散列函数、冲突解决策略</td>
		<td>5496277</td>
		<td>退出Activity的方法有finish()、onSlop()、抛异常强制退出</td>
		<td>5496278</td>
		<td>设备分配需要关注的设备固有属性、设备分配算法、设备分配的安全性、设备分配的及时性</td>
		<td>5496279</td>
		<td>TCP、IP、UDP协议分别用来直接封装RIP、OSPF、BGP</td>
		<td>5496280</td>
		<td>索引结构属于文件的物理结构</td>
		<td>5496276,5496280</td>
	</tr>
	<tr>
		<td>1677377</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码1122-8]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1677379</td>
		<td>【题目9】请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1677378</td>
		<td>【题目10】请简述部分厂商在手机BL解锁后的“熔断”机制</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1677380</td>
		<td>【题目11】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.07.09 08:00-08:15 15:00-15:15 16:00-16:15 17:00-17:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9996817) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/200)
- 答题链接(更新): https://m.beehive.miui.com/HgjtDc8PF5vn9NjPamG0Hw/
- 问卷星级(更新): ★★★★☆
- 题目数量(更新): 单选题 x3 + 多选题 x5 + 填空题 x3
- 合格分数: 86
- 时间限制: 最短不少于 5 分钟，最长不超过 15 分钟
- 得分有效期(更新): 2024 年 7 月 9 日 00:00 - 2024 年 7 月 15 日 23:59
- 注(更新):
  1. **您必须在 08/15/16/17:00:00 - 08/15/16/17:10:00 之间进场，且最晚必须在 08/15/16/17:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 题目 1662397 中的选项 5453312-08-15-16 是 08:00-08:15、15:00-15:15、16:00-16:15 场的表述，选项 5453312-17 是 17:00-17:15 场的表述; 题目 1662403 中的截图识别码 1122-5/6/7/8 依次为从前到后四场答题所示的截图识别码;
  5. 未正确上传题目 1662403 [截图识别码 1122-5/6/7/8] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  6. 小米将依据您在题目 1662403 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  7. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  8. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  9. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  10. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  11. 已答题账号在 7 天内无法重新答题;
  12. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 最晚提交答卷时间为 08/15/16/17:14:59，超时提交将无法显示成绩;
  2. 最短答题为 5 分钟，如您答题少于 5 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08/15/16/17:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1662390</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为8:00 - 8:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5453281</td>
		<td>最晚提交答卷时间为08/15/16/17:14:59，超时提交将无法显示成绩</td>
		<td>5453282</td>
		<td>最短答题为5分钟，如您答题少于5分钟时，将无法显示成绩</td>
		<td>5453283</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08/15/16/17:14:59，超时提交将无法显示成绩</td>
		<td>5453284</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453281,5453282,5453283,5453284</td>
	</tr>
	<tr>
		<td>1662391</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5453285</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5453286</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5453287</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5453288</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453285,5453286,5453287,5453288</td>
	</tr>
	<tr>
		<td>1662392</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5453289</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5453290</td>
		<td>出现被判定为作弊的行为</td>
		<td>5453291</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5453292</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5453293</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5453289,5453290,5453291,5453292,5453293</td>
	</tr>
	<tr>
		<td>1662393</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5453294</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5453295</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5453296</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5453297</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5453298</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5453294,5453295,5453296,5453297,5453298</td>
	</tr>
	<tr>
		<td>1662394</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5453299</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5453300</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453299</td>
	</tr>
	<tr>
		<td>1662400</td>
		<td>【题目1】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5453322</td>
		<td>对于采用虚拟内存管理方式的系统，每个进程有自己独立的虚拟地址空间</td>
		<td>5453323</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5453324</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5453325</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td>5468348</td>
		<td>对于采用虚拟内存管理方式的系统，进程的数据段和代码段可以有不同的访问权限</td>
		<td></td>
		<td></td>
		<td>5453323,5453324</td>
	</tr>
	<tr>
		<td>1662398</td>
		<td>【题目2】下列说法正确的是</td>
		<td>多选题</td>
		<td>5453313</td>
		<td>某系统用页式存储管理，用位图管理空闲页框，若页大小为4KB，物理内存大小为16GB，则位图所占空间的大小是512KB</td>
		<td>5453314</td>
		<td>EDL刷机不适用于Redmi Note系列的手机</td>
		<td>5453315</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5453316</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5453317</td>
		<td>ASCII文本无需转换即可由SMTP协议直接传输</td>
		<td></td>
		<td></td>
		<td>5453313,5453315,5453317</td>
	</tr>
	<tr>
		<td>1662396</td>
		<td>【题目3】下列说法正确的是</td>
		<td>单选题</td>
		<td>5453305</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5453306</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5453307</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5453308</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453307</td>
	</tr>
	<tr>
		<td>1662395</td>
		<td>【题目4】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5453301</td>
		<td>与单道程序系统相比，多道程序系统的CPU利用率低</td>
		<td>5453302</td>
		<td>与多道程序系统相比，单道程序系统的系统开销小</td>
		<td>5453303</td>
		<td>与多道程序系统相比，单道程序系统的系统吞吐量大</td>
		<td>5453304</td>
		<td>与多道程序系统相比，单道程序系统的I/O设备利用率高</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453301,5453303,5453304</td>
	</tr>
	<tr>
		<td>1662397</td>
		<td>【题目5】以下刷机报错的原因，不匹配的有</td>
		<td>多选题</td>
		<td>5453309</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5453310</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5453311</td>
		<td>S_FT_NEED_DOWNLOAO_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5453312-08-15-16</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5453312-17</td>
		<td>S_BROM_CMD_STARTCMO_FAIL：没有加载好刷机包文件</td>
		<td>5468394</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5453309,5453310,5453311,5453312-17,5468394</td>
	</tr>
	<tr>
		<td>1662402</td>
		<td>【题目6】Android负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>5453331</td>
		<td>ActivityManagerService</td>
		<td>5453332</td>
		<td>ActivityManagerSystem</td>
		<td>5453333</td>
		<td>AndroidManagerSystem</td>
		<td>5453334</td>
		<td>AndroidManagerService</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453331</td>
	</tr>
	<tr>
		<td>1662399</td>
		<td>【题目7】主机168.16.84.24/20所在子网的最大可分配地址和最小可分配地址分别是</td>
		<td>单选题</td>
		<td>5453318</td>
		<td>168.16.84.254, 168.16.80.1</td>
		<td>5453319</td>
		<td>168.16.95.254, 168.16.80.1</td>
		<td>5453320</td>
		<td>168.16.84.254, 168.16.84.1</td>
		<td>5453321</td>
		<td>168.16.95.254, 168.16.84.1</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5453319</td>
	</tr>
	<tr>
		<td>1662401</td>
		<td>【题目8】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5453326</td>
		<td>影响散列方法平均查找长度的因素包括装填因子、散列函数、冲突解决策略</td>
		<td>5453327</td>
		<td>退出Activity的方法有finish()、onStop()、抛异常强制退出</td>
		<td>5453328</td>
		<td>设备分配需要关注的设备固有属性、设备分配算法、设备分配的安全性、设备分配的及时性</td>
		<td>5453329</td>
		<td>TCP、IP、UDP协议分别用来直接封装RIP、OSPF、BGP</td>
		<td>5453330</td>
		<td>索引结构属于文件的物理结构</td>
		<td></td>
		<td></td>
		<td>5453328,5453329</td>
	</tr>
	<tr>
		<td>1662403</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码1122-5/6/7/8]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1662406</td>
		<td>【题目9】请简述部分厂商在手机BL解锁后的“熔断”机制</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1662404</td>
		<td>【题目10】请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1662405</td>
		<td>【题目11】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.06.25 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9877870) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/193)
- 答题链接(更新): https://m.beehive.miui.com/Hlo4iCBH5arX7uK_J4N9UA/
- 问卷星级(更新): ★★★☆☆
- 题目数量: 单选题 x5 + 多选题 x3 + 填空题 x3
- 合格分数: 86
- 时间限制: 最短不少于 5 分钟，最长不超过 15 分钟
- 得分有效期(更新): 2024 年 6 月 25 日 00:00 - 2024 年 7 月 1 日 23:59
- 注:
  1. **您必须在 08:00:00 - 08:10:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1648691 [截图识别码 2014-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1648691 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 5 分钟，如您答题少于 5 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1648678</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为8:00 - 8:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5412461</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5412462</td>
		<td>最短答题为5分钟，如您答题少于5分钟时，将无法显示成绩</td>
		<td>5412463</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5412464</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td>5412461,5412462,5412463,5412464</td>
	</tr>
	<tr>
		<td>1648679</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5412465</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5412466</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5412467</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5412468</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5412465,5412466,5412467,5412468</td>
	</tr>
	<tr>
		<td>1648680</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5412469</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5412470</td>
		<td>出现被判定为作弊的行为</td>
		<td>5412471</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5412472</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5412473</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5412469,5412470,5412471,5412472,5412473</td>
	</tr>
	<tr>
		<td>1648681</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5412474</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5412475</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5412476</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5412477</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5412478</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5412474,5412475,5412476,5412477,5412478</td>
	</tr>
	<tr>
		<td>1648682</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5412479</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5412480</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5412479</td>
	</tr>
	<tr>
		<td>1648689</td>
		<td>【题目1】下列说法正确的是</td>
		<td>多选题</td>
		<td>5412508</td>
		<td>与单道程序系统相比，多道程序系统CPU利用率高</td>
		<td>5412509</td>
		<td>与单道程序系统相比，多道程序系统系统开销小</td>
		<td>5412510</td>
		<td>与单道程序系统相比，多道程序系统系统吞吐量大</td>
		<td>5412511</td>
		<td>与单道程序系统相比，多道程序系统I/O设备利用率高</td>
		<td></td>
		<td></td>
		<td>5412508,5412510,5412511</td>
	</tr>
	<tr>
		<td>1648683</td>
		<td>【题目2】下列说法正确的是</td>
		<td>单选题</td>
		<td>5412481</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5412482</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5412483</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5412484</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td>5412483</td>
	</tr>
	<tr>
		<td>1648684</td>
		<td>【题目3】Fastboot模式下如何输出防回滚机制版本号</td>
		<td>单选题</td>
		<td>5412485</td>
		<td>fastboot -w ANTI</td>
		<td>5412486</td>
		<td>fastboot getvar anti</td>
		<td>5412487</td>
		<td>fastboot version anti</td>
		<td>5412488</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td>5412486</td>
	</tr>
	<tr>
		<td>1648685</td>
		<td>【题目4】下列说法正确的是</td>
		<td>多选题</td>
		<td>5412489</td>
		<td>直接封装RIP、OSPF、BGP报文的协议分别是UDP、TCP、IP</td>
		<td>5412490</td>
		<td>EDL刷机不仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5412491</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5412492</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5412493</td>
		<td>ASCII文本无需转换即可由SMTP协议直接传输</td>
		<td>5412490,5412491,5412493</td>
	</tr>
	<tr>
		<td>1654116</td>
		<td>【题目5】某路由表中有转发接口相同的4条路由表项，其目的网络地址分别为35.230.32.0/21，35.230.40.0/21，35.230.48.0/21和35.230.56.0/21，将该4条路由聚合后的目的网络地址为</td>
		<td>单选题</td>
		<td>5429291</td>
		<td>35.230.0.0/19</td>
		<td>5429292</td>
		<td>35.230.0.0/20</td>
		<td>5429293</td>
		<td>35.230.32.0/19</td>
		<td>5429294</td>
		<td>35.230.32.0/20</td>
		<td></td>
		<td></td>
		<td>5429293</td>
	</tr>
	<tr>
		<td>1648687</td>
		<td>【题目6】下列说法正确的是</td>
		<td>单选题</td>
		<td>5412499</td>
		<td>线刷前不建议备份重要数据</td>
		<td>5412500</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5412501</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5412502</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td>5412502</td>
	</tr>
	<tr>
		<td>1648688</td>
		<td>【题目7】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5412503</td>
		<td>函数调用时，系统要用栈保存必要的信息</td>
		<td>5412504</td>
		<td>栈是一种受限的线性表，允许在其两端进行操作</td>
		<td>5412505</td>
		<td>三元组表适用于压缩存储稀疏矩阵</td>
		<td>5412506</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5412507</td>
		<td>十字链表适用于压缩存储稀疏矩阵</td>
		<td>5412504,5412506</td>
	</tr>
	<tr>
		<td>1648690</td>
		<td>【题目8】Android负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>5412512</td>
		<td>ActivityManagerService</td>
		<td>5412513</td>
		<td>ActivityManagerSystem</td>
		<td>5412514</td>
		<td>AndroidManagerSystem</td>
		<td>5412515</td>
		<td>AndroidManagerService</td>
		<td></td>
		<td></td>
		<td>5412512</td>
	</tr>
	<tr>
		<td>1648691</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码2014-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648692</td>
		<td>【题目9】请简述BL解锁之后重新上锁的步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648693</td>
		<td>【题目10】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648694</td>
		<td>【题目11】请简述并评价部分厂商在手机BL解锁后的“熔断”机制</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648695</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>选做题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648696</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>选做题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.06.19 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9818118) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/193)
- 答题链接(更新): https://m.beehive.miui.com/vjMgvkbrqMhLmDHEQrADrw/
- 问卷星级(更新): ★★☆☆☆
- 题目数量(更新): 单选题 x5 + 多选题 x3 + 填空题 x3
- 合格分数: 86
- 时间限制: 最短不少于 5 分钟，最长不超过 15 分钟
- 得分有效期: 2024 年 6 月 18 日 00:00 - 2024 年 6 月 24 日 23:59
- 注:
  1. **您必须在 08:00:00 - 08:10:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1648672 [截图识别码 1720-6] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1648672 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 5 分钟，如您答题少于 5 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1648659</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为8:00 - 8:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5412405</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5412406</td>
		<td>最短答题为5分钟，如您答题少于5分钟时，将无法显示成绩</td>
		<td>5412407</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5412408</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td>5412405,5412406,5412407,5412408</td>
	</tr>
	<tr>
		<td>1648660</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5412409</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5412410</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5412411</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5412412</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5412409,5412410,5412411,5412412</td>
	</tr>
	<tr>
		<td>1648661</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5412413</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5412414</td>
		<td>出现被判定为作弊的行为</td>
		<td>5412415</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5412416</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5412417</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5412413,5412414,5412415,5412416,5412417</td>
	</tr>
	<tr>
		<td>1648662</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5412418</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5412419</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5412420</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5412421</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5412422</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5412418,5412419,5412420,5412421,5412422</td>
	</tr>
	<tr>
		<td>1648663</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5412423</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5412424</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5412423</td>
	</tr>
	<tr>
		<td>1648664</td>
		<td>【题目1】以下刷机报错的原因，不匹配的有</td>
		<td>多选题</td>
		<td>5412425</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5412426</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5412427</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5412428</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5413935</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5412425,5412426,5413935</td>
	</tr>
	<tr>
		<td>1648665</td>
		<td>【题目2】Fastboot模式下如何输出防回滚机制版本号</td>
		<td>单选题</td>
		<td>5412429</td>
		<td>fastboot -w ANTI</td>
		<td>5412430</td>
		<td>fastboot getvar anti</td>
		<td>5412431</td>
		<td>fastboot version anti</td>
		<td>5412432</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td>5412430</td>
	</tr>
	<tr>
		<td>1648667</td>
		<td>【题目3】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5412438</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>5412439</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5412440</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>5412441</td>
		<td>小米刷机工具是MiFlash</td>
		<td>5412442</td>
		<td>认证常用的参数有口令、标识符、生物特征等，认证允许第三方参与验证过程</td>
		<td>5412439,5412440</td>
	</tr>
	<tr>
		<td>1648666</td>
		<td>【题目4】下列说法正确的是</td>
		<td>多选题</td>
		<td>5412433</td>
		<td>虚拟局域网是一种新型局域网，给用户提供的局域网服务</td>
		<td>5412434</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5412435</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5412436</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5412437</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5412435,5412436</td>
	</tr>
	<tr>
		<td>1648668</td>
		<td>【题目5】下列说法正确的是</td>
		<td>单选题</td>
		<td>5412443</td>
		<td>线刷前不建议备份重要数据</td>
		<td>5412444</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5412445</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5412446</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td>5412446</td>
	</tr>
	<tr>
		<td>1648670</td>
		<td>【题目6】若系统中有n(n≥2)个进程，每个进程均需要使用某类临界资源2个，则系统不会发生死锁所需的该类资源总数至少是？</td>
		<td>单选题</td>
		<td>5412452</td>
		<td>n+1</td>
		<td>5412453</td>
		<td>n</td>
		<td>5412454</td>
		<td>n-1</td>
		<td>5412455</td>
		<td>1</td>
		<td></td>
		<td></td>
		<td>5412452</td>
	</tr>
	<tr>
		<td>1648671</td>
		<td>【题目7】Android负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>5412456</td>
		<td>ActivityManagerService</td>
		<td>5412457</td>
		<td>ActivitySystemManager</td>
		<td>5412458</td>
		<td>ActivityManagerSystem</td>
		<td>5412459</td>
		<td>ActivityApplicationService</td>
		<td></td>
		<td></td>
		<td>5412456</td>
	</tr>
	<tr>
		<td>1649385</td>
		<td>【题目8】下列说法不正确的是</td>
		<td>单选题</td>
		<td>5413936</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5413937</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5413938</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>5413939</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td></td>
		<td></td>
		<td>5413939</td>
	</tr>
	<tr>
		<td>1648672</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码1720-6]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648673</td>
		<td>【题目9】请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td>目前已有多名用户采用第三方网站上提供的答案，被系统判定为雷同试卷，影响后续资格申请，请谨慎作答</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648674</td>
		<td>【题目10】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648675</td>
		<td>【题目11】请简述BL解锁之后可能带来的安全风险</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648676</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>选做题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1648677</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>选做题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.06.18 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9806668) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/193)
- 答题链接(更新): https://m.beehive.miui.com/55WBG3RJvDZDIYZQzkeJlg/
- 问卷星级(更新): ★★★☆☆
- 题目数量(更新): 单选题 x4 + 多选题 x4 + 填空题 x3
- 合格分数: 86
- 时间限制(更新): 最短不少于 5 分钟，最长不超过 15 分钟
- 得分有效期(更新): 2024 年 6 月 18 日 00:00 - 2024 年 6 月 24 日 23:59
- 注(更新):
  1. **您必须在 08:00:00 - 08:10:00 之间进场，且最晚必须在 08:14:59 提交问卷，否则答题一律无效**;
  2. **【单选题】+【多选题】满分 80 分，【公告题】、【截图题】和【选做题】不计分**;
  3. 【填空题】为人工阅卷评分，所给答案仅供参考;
  4. 未正确上传题目 1622860 [截图识别码 2014-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  5. 小米将依据您在题目 1622860 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  6. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. 最晚提交答卷时间为 08:14:59，超时提交将无法显示成绩;
  2. 最短答题为 5 分钟，如您答题少于 5 分钟时，将无法显示成绩;
  3. 最长答题时间虽然为 15 分钟，但您提交问卷的截止时间为 08:14:59，超时提交将无法显示成绩;
  4. 提交后显示的得分仅为选择题得分，如选择题得分超过 65 分时（选择题满分 80 分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚 24 点前更新，选择题未超过 65 分的答卷将不进行填空题阅卷;
  5. 等级未达 5 段，无法展示成绩;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  8. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1647610</td>
		<td>【答题须知】本次答题共有8道选择题（不包括答题须知和BL解锁须知）和3道填空题，答题时间为8:00 - 8:15，因此需要特别注意</td>
		<td>公告题</td>
		<td>5409036</td>
		<td>最晚提交答卷时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5409037</td>
		<td>最短答题为5分钟，如您答题少于5分钟时，将无法显示成绩</td>
		<td>5409038</td>
		<td>最长答题时间虽然为15分钟，但您提交问卷的截止时间为08:14:59，超时提交将无法显示成绩</td>
		<td>5409228</td>
		<td>提交后显示的得分仅为选择题得分，如选择题得分超过65分时（选择题满分80分），则会进入填空题人工阅卷阶段，填空题得分将于答题当晚24点前更新，选择题未超过65分的答卷将不进行填空题阅卷</td>
		<td></td>
		<td></td>
		<td>5409036,5409037,5409038,5409228</td>
	</tr>
	<tr>
		<td>1622847</td>
		<td>【BL解锁须知】以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>公告题</td>
		<td>5330496</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5330497</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5330498</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5330499</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5330496,5330497,5330498,5330499</td>
	</tr>
	<tr>
		<td>1622848</td>
		<td>【BL解锁须知】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>5330500</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5330501</td>
		<td>出现被判定为作弊的行为</td>
		<td>5330502</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5330503</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5330504</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5330500,5330501,5330502,5330503,5330504</td>
	</tr>
	<tr>
		<td>1622849</td>
		<td>【BL解锁须知】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>5330505</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5330506</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5330507</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5330508</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5330509</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5330505,5330506,5330507,5330508,5330509</td>
	</tr>
	<tr>
		<td>1622850</td>
		<td>【BL解锁须知】BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>公告题</td>
		<td>5330510</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5330511</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5330510</td>
	</tr>
	<tr>
		<td>1622851</td>
		<td>【题目1】下列说法正确的是</td>
		<td>单选题</td>
		<td>5330512</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5330513</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5330514</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5330515</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td>5330514</td>
	</tr>
	<tr>
		<td>1647701</td>
		<td>【题目2】Fastboot模式下如何输出防回滚机制版本号</td>
		<td>单选题</td>
		<td>5409206</td>
		<td>fastboot -w ANTI</td>
		<td>5409207</td>
		<td>fastboot getvar anti</td>
		<td>5409208</td>
		<td>fastboot version anti</td>
		<td>5409209</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td>5409207</td>
	</tr>
	<tr>
		<td>1622857</td>
		<td>【题目3】下列说法正确的是</td>
		<td>多选题</td>
		<td>5330543</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5330544</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5330545</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5330546</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5330548</td>
		<td>部分机型在Fastboot模式下插入数据线，5分钟无操作的情况下会自动重启或关机</td>
		<td>5330543,5330545,5330546</td>
	</tr>
	<tr>
		<td>1622856</td>
		<td>【题目4】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5330538</td>
		<td>汉字的拼音输入码不属于汉字的内码</td>
		<td>5330539</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5330540</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5330541</td>
		<td>小米刷机工具是MiFlush</td>
		<td>5330542</td>
		<td>SPOOLing需要外存的支持</td>
		<td>5330539,5330541</td>
	</tr>
	<tr>
		<td>1647702</td>
		<td>【题目5】下列说法正确的是</td>
		<td>单选题</td>
		<td>5409210</td>
		<td>线刷前不建议备份重要数据</td>
		<td>5409211</td>
		<td>小米手机同时按住音量键和电源键可以进入Recovery</td>
		<td>5409212</td>
		<td>手机如果只能进入Fastboot，可能是内存损坏</td>
		<td>5409213</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td>5409213</td>
	</tr>
	<tr>
		<td>1622854</td>
		<td>【题目6】下列说法不正确的是</td>
		<td>多选题</td>
		<td>5330527</td>
		<td>TDM的全称是Total Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5330528</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5330529</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5330530</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5330532</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5330527,5330529,5330532</td>
	</tr>
	<tr>
		<td>1622859</td>
		<td>【题目7】在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5330555</td>
		<td>对话管理</td>
		<td>5330556</td>
		<td>路由选择</td>
		<td>5330557</td>
		<td>端到端报文段传输</td>
		<td>5330558</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td>5330555,5330557,5330558</td>
	</tr>
	<tr>
		<td>1647703</td>
		<td>【题目8】Android负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>5409214</td>
		<td>ActivityManagerService</td>
		<td>5409215</td>
		<td>ActivitySystemManager</td>
		<td>5409216</td>
		<td>ActivityManagerSystem</td>
		<td>5409217</td>
		<td>ActivityApplicationService</td>
		<td></td>
		<td></td>
		<td>5409214</td>
	</tr>
	<tr>
		<td>1622860</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>截图题</td>
		<td>0</td>
		<td>[截图识别码2014-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1647699</td>
		<td>【题目9】请简述BL解锁之后重新上锁的步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1622862</td>
		<td>【题目10】以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我最近购买了一款小米手机，我希望解锁手机的BL（Bootloader），来提升手机系统的稳定性和安全性，积极反馈刷机之后产生的各类bug。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1647700</td>
		<td>【题目11】请简述BL解锁之后可能带来的安全风险</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1622865</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>选做题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1622866</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>选做题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.05.29 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9592918) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/191)
- 答题链接: https://m.beehive.miui.com/nfE33DEReogqTdvq9AteGg/
- 题目数量: 17 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 5 月 28 日 00:00 - 2024 年 6 月 3 日 23:59
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1621666 [截图识别码 1229-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1621666 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1621653</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5326572</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5326573</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5326574</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5326575</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326572,5326573,5326574,5326575</td>
	</tr>
	<tr>
		<td>1621654</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5326576</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5326577</td>
		<td>出现被判定为作弊的行为</td>
		<td>5326578</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5326579</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5326580</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5326576,5326577,5326578,5326579,5326580</td>
	</tr>
	<tr>
		<td>1621655</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5326581</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5326582</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5326583</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5326584</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5326585</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5326581,5326582,5326583,5326584,5326585</td>
	</tr>
	<tr>
		<td>1621656</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5326586</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5326587</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326586</td>
	</tr>
	<tr>
		<td>1621659</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5326598</td>
		<td>文件级加密不如全盘加密灵活</td>
		<td>5326599</td>
		<td>若将某个 “/17”地址块划分为9个子块，则可能的最小子块中所包含的IP地址数量为127</td>
		<td>5326600</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5326601</td>
		<td>FASTBOOT模式下输出防回滚机制版本号的命令是fastboot getvar anti</td>
		<td>5326602</td>
		<td>FASTBOOT擦除设备存储的用户数据使用“-w”命令</td>
		<td>5338985</td>
		<td>通过流的read()方法读取数据，返回0表示流结尾 </td>
		<td>5326600,5326601,5326602</td>
	</tr>
	<tr>
		<td>1625621</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5338989</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5338990</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5338991</td>
		<td>对称加密最大的优点在于其密钥管理困难</td>
		<td>5338992</td>
		<td>密码分析学中，根据密码分析者可利用的数据资源，可将攻击密码的类型分为四种，选择密文攻击适合于攻击公开密钥密码体制，特别是攻击其数字签名</td>
		<td>5338993</td>
		<td>MTK刷机报错S_CHIP_TYPE_NOT_MATCH，代表文件类型不匹配</td>
		<td>5340668</td>
		<td>MTK刷机报错S_BROM_CMD_STARTCMD_FAIL，代表没有加载好刷机包文件</td>
		<td>5338990,5338992</td>
	</tr>
	<tr>
		<td>1621657</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5326588</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5326589</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5326590</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5326591</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326590</td>
	</tr>
	<tr>
		<td>1621665</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5326631</td>
		<td>对话管理</td>
		<td>5326632</td>
		<td>路由选择</td>
		<td>5326633</td>
		<td>端到端报文段传输</td>
		<td>5326634</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326631,5326633,5326634</td>
	</tr>
	<tr>
		<td>1626233</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5340669</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>5340670</td>
		<td>9008模式下的刷机会比FASTBOOT模式下的刷机更加彻底</td>
		<td>5340671</td>
		<td>AndroidManifest.xml中的manifest标签可以被嵌套在application的标签内</td>
		<td>5340672</td>
		<td>Android系统使用TEE来保护极度敏感的数据，小米BL解锁后会导致TEE熔断</td>
		<td>5340673</td>
		<td>安卓系统中负责启动应用，管理应用生命周期的系统服务是AndroidManagerService</td>
		<td>5340688</td>
		<td>正式版切换到开发版通常不用解锁</td>
		<td>5340671,5340673</td>
	</tr>
	<tr>
		<td>1621666</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1229-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1625600</td>
		<td>请阐述FASTBOOT模式与RECOVERY模式分别的用途</td>
		<td>填空题</td>
		<td>0</td>
		<td>不少于20字</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1625601</td>
		<td>请阐述如果设备已限制回滚低版本系统的解决方式</td>
		<td>填空题</td>
		<td>0</td>
		<td>不少于20字</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1625602</td>
		<td>请阐述已BL解锁设备重新上锁的步骤和注意事项</td>
		<td>填空题</td>
		<td>0</td>
		<td>不少于20字</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621667</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621668</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621669</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621670</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621671</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621672</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.05.28 08:00-08:15、2024.05.29 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9592917) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/191)
- 答题链接(更新): https://m.beehive.miui.com/nfE33DEReogqTdvq9AteGg/
- 题目数量(更新): 17 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 5 月 28 日 00:00 - 2024 年 6 月 3 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1621666 [截图识别码 1007-5] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1621666 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1621653</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5326572</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5326573</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5326574</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5326575</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326572,5326573,5326574,5326575</td>
	</tr>
	<tr>
		<td>1621654</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5326576</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5326577</td>
		<td>出现被判定为作弊的行为</td>
		<td>5326578</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5326579</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5326580</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5326576,5326577,5326578,5326579,5326580</td>
	</tr>
	<tr>
		<td>1621655</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5326581</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5326582</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5326583</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5326584</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5326585</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5326581,5326582,5326583,5326584,5326585</td>
	</tr>
	<tr>
		<td>1621656</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5326586</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5326587</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326586</td>
	</tr>
	<tr>
		<td>1621657</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5326588</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5326589</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5326590</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5326591</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326590</td>
	</tr>
	<tr>
		<td>1621658</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5326592</td>
		<td>设一维数组中有n个数组元素，则读取第i个数组元素的平均时间复杂度为O(n)</td>
		<td>5326593</td>
		<td>设某无向图中有n个顶点e条边，则该无向图中所有顶点的入度之和为2e</td>
		<td>5326594</td>
		<td>设一组初始记录关键字序列为(345, 253, 674, 924, 627)，则用基数排序需要进行4趟分配和回收才能使得初始关键字序列变成有序序列</td>
		<td>5326595</td>
		<td>设哈夫曼树中共有99个结点，则该树中有50个叶子结点，若采用二叉链表作为存储结构，则该树中有51个空指针域</td>
		<td>5326596</td>
		<td>已知一个顺序存储的线性表，设每个结点需占m个存储单元，若第一个结点的地址为d1，则第i个结点的地址为d1+(i+1)*m</td>
		<td>5326597</td>
		<td>关于AOE网的关键路径中，任何一个活动持续时间的改变可能会影响关键路径的改变</td>
		<td>5326593,5326597</td>
	</tr>
	<tr>
		<td>1621659</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5326598</td>
		<td>文件级加密不如全盘加密灵活</td>
		<td>5326599</td>
		<td>Lock Coarsening是指当虚拟机在编译或运行时分析代码，如果确定某个锁对象不会导致竞争，就会将锁操作完全消除，以提高性能</td>
		<td>5326600</td>
		<td>引导加载器负责在设备上启动内核，而不是系统</td>
		<td>5326601</td>
		<td>FASTBOOT模式下输出防回滚机制版本号的命令是fastboot getvar anti</td>
		<td>5326602</td>
		<td>FASTBOOT擦除设备存储的用户数据使用“-w”命令</td>
		<td>5338985</td>
		<td>通过流的read()方法读取数据，返回1表示流结尾 </td>
		<td>5326600,5326601,5326602</td>
	</tr>
	<tr>
		<td>1625621</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5338989</td>
		<td>基于MD4和MD5设计的S/Key口令是一种一次性口令生成方案，它可以对访问者的身份与设备进行综合验证，该方案可以对抗穷举攻击</td>
		<td>5338990</td>
		<td>TCP“三报文握手”过程中，第二个报文首部中被置为1的标志位有SYN、ACK和RST</td>
		<td>5338991</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>5338992</td>
		<td>密码分析学中，根据密码分析者可利用的数据资源，可将攻击密码的类型分为四种，选择密文攻击适合于攻击公开密钥密码体制，特别是攻击其数字签名</td>
		<td>5338993</td>
		<td>MTK刷机报错S_CHIP_TYPE_NOT_MATCH，代表文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>5338991,5338992</td>
	</tr>
	<tr>
		<td>1621665</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5326631</td>
		<td>对话管理</td>
		<td>5326632</td>
		<td>路由选择</td>
		<td>5326633</td>
		<td>端到端报文段传输</td>
		<td>5326634</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5326631,5326633,5326634</td>
	</tr>
	<tr>
		<td>1621666</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1007-5]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1625600</td>
		<td>请阐述FASTBOOT模式与RECOVERY模式分别的用途</td>
		<td>填空题</td>
		<td>0</td>
		<td>不少于20字</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1625601</td>
		<td>请阐述如果设备已限制回滚低版本系统的解决方式</td>
		<td>填空题</td>
		<td>0</td>
		<td>不少于20字</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1625602</td>
		<td>请阐述已BL解锁设备重新上锁的步骤和注意事项</td>
		<td>填空题</td>
		<td>0</td>
		<td>不少于20字</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621667</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621668</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621669</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621670</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621671</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1621672</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.05.15 08:00-08:15、2024.05.21 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9502739) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/187)
- 答题链接: https://m.beehive.miui.com/MF09v5DfQVvqe6r2eG-oWQ/
- 题目数量: 18 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 2024.05.15 得分有效期: 2024 年 5 月 14 日 00:00 - 2024 年 5 月 20 日 23:59
- 2024.05.21 得分有效期(更新): 2024 年 5 月 21 日 00:00 - 2024 年 5 月 27 日 23:59
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1596899 [截图识别码 1823-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1596899 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 本期客观题满分为 80 分;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1596885</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5241573</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5241574</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5241575</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5241576</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241573,5241574,5241575,5241576</td>
	</tr>
	<tr>
		<td>1596886</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5241577</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5241578</td>
		<td>出现被判定为作弊的行为</td>
		<td>5241579</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5241580</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5241581</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5241577,5241578,5241579,5241580,5241581</td>
	</tr>
	<tr>
		<td>1596887</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5241582</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5241583</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5241584</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5241585</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5241586</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5241582,5241583,5241584,5241585,5241586</td>
	</tr>
	<tr>
		<td>1596888</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5241587</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5241588</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241587</td>
	</tr>
	<tr>
		<td>1596889</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5241589</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5241590</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5241591</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5241592</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241591</td>
	</tr>
	<tr>
		<td>1596890</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241593</td>
		<td>设一维数组中有n个数组元素，则读取第i个数组元素的平均时间复杂度为O(n)</td>
		<td>5241594</td>
		<td>设某无向图中有n个顶点e条边，则该无向图中所有顶点的入度之和为2e</td>
		<td>5241595</td>
		<td>设一组初始记录关键字序列为(345, 253, 674, 924, 627)，则用基数排序需要进行4趟分配和回收才能使得初始关键字序列变成有序序列</td>
		<td>5241596</td>
		<td>设哈夫曼树中共有99个结点，则该树中有50个叶子结点，若采用二叉链表作为存储结构，则该树中有51个空指针域</td>
		<td>5241597</td>
		<td>已知一个顺序存储的线性表，设每个结点需占m个存储单元，若第一个结点的地址为d1，则第i个结点的地址为d1+(i+1)*m</td>
		<td>5307783</td>
		<td>关于AOE网的关键路径中，任何一个活动持续时间的改变可能会影响关键路径的改变</td>
		<td>5241594,5241597,5307783</td>
	</tr>
	<tr>
		<td>1596891</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241598</td>
		<td>VLAN使用的802.1Q帧的最大长度为1512字节</td>
		<td>5241599</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5241600</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5241601</td>
		<td>UDP向其上层提供面向连接的可靠传输服务</td>
		<td>5241602</td>
		<td>TCP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5241599,5241600</td>
	</tr>
	<tr>
		<td>1596892</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5241603</td>
		<td>TDM的全称是Total Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5241604</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5241605</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5241606</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5241607</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5241608</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5241603,5241605,5241608</td>
	</tr>
	<tr>
		<td>1596893</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241609</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5241610</td>
		<td>I2C也可以叫IIC，是两线式并行通信总线，用于设备间的通讯</td>
		<td>5241611</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5241612</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5241613</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5241609,5241611</td>
	</tr>
	<tr>
		<td>1596894</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5241614</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5241615</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5241616</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5241617</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数64</td>
		<td>5241618</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5241614,5241615,5241617</td>
	</tr>
	<tr>
		<td>1596896</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241624</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5241625</td>
		<td>EDL刷机不仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5241626</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5241627</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5241628</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5241629</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5241624,5241625,5241626,5241627</td>
	</tr>
	<tr>
		<td>1596897</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5241630</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有2条</td>
		<td>5241631</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5241632</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5241633</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5241634</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5241635</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5241630,5241631,5241634,5241635</td>
	</tr>
	<tr>
		<td>1596898</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5241636</td>
		<td>对话管理</td>
		<td>5241637</td>
		<td>路由选择</td>
		<td>5241638</td>
		<td>端到端报文段传输</td>
		<td>5241639</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241636,5241638,5241639</td>
	</tr>
	<tr>
		<td>1596899</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1823-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596900</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596901</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596902</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596903</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596904</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596905</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.05.14 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9502736) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/187)
- 答题链接(更新): https://m.beehive.miui.com/MF09v5DfQVvqe6r2eG-oWQ/
- 题目数量(更新): 18 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 5 月 14 日 00:00 - 2024 年 5 月 20 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1596899 [截图识别码 1823-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1596899 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 本期客观题满分为 80 分;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1596885</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5241573</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5241574</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5241575</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5241576</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241573,5241574,5241575,5241576</td>
	</tr>
	<tr>
		<td>1596886</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5241577</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5241578</td>
		<td>出现被判定为作弊的行为</td>
		<td>5241579</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5241580</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5241581</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5241577,5241578,5241579,5241580,5241581</td>
	</tr>
	<tr>
		<td>1596887</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5241582</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5241583</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5241584</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5241585</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5241586</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5241582,5241583,5241584,5241585,5241586</td>
	</tr>
	<tr>
		<td>1596888</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5241587</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5241588</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241587</td>
	</tr>
	<tr>
		<td>1596889</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5241589</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5241590</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5241591</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5241592</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241591</td>
	</tr>
	<tr>
		<td>1596890</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5241593</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5241594</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5241595</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5241596</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5241597</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5241594,5241595,5241597</td>
	</tr>
	<tr>
		<td>1596891</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241598</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5241599</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5241600</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5241601</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5241602</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5241598,5241599,5241600,5241601,5241602</td>
	</tr>
	<tr>
		<td>1596892</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5241603</td>
		<td>TDM的全称是Total Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5241604</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5241605</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5241606</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5241607</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5241608</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5241603,5241605,5241608</td>
	</tr>
	<tr>
		<td>1596893</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241609</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5241610</td>
		<td>I2C也可以叫IIC，是两线式串行通信总线，用于设备间的通讯</td>
		<td>5241611</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5241612</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5241613</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5241609,5241610,5241611</td>
	</tr>
	<tr>
		<td>1596894</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5241614</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5241615</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5241616</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5241617</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数64</td>
		<td>5241618</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5241614,5241615,5241617</td>
	</tr>
	<tr>
		<td>1596896</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241624</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5241625</td>
		<td>EDL刷机不仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5241626</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5241627</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5241628</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5241629</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5241624,5241625,5241626,5241627</td>
	</tr>
	<tr>
		<td>1596897</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5241630</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有2条</td>
		<td>5241631</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5241632</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5241633</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5241634</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5241635</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5241632,5241633</td>
	</tr>
	<tr>
		<td>1596898</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5241636</td>
		<td>对话管理</td>
		<td>5241637</td>
		<td>路由选择</td>
		<td>5241638</td>
		<td>端到端报文段传输</td>
		<td>5241639</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5241636,5241638,5241639</td>
	</tr>
	<tr>
		<td>1596899</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1823-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596900</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596901</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596902</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596903</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596904</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1596905</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.04.23 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9197240) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/184)
- 答题链接: https://m.beehive.miui.com/xBXDKX4BC8FpS6063P4o2w/
- 题目数量: 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 4 月 23 日 00:00 - 2024 年 4 月 29 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1586832 [截图识别码 1823-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1586832 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 经用户测试验证，本期客观题为满分答案（80 分）;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1586818</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5207245</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5207246</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5207247</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5207248</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207245,5207246,5207247,5207248</td>
	</tr>
	<tr>
		<td>1586819</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5207249</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5207250</td>
		<td>出现被判定为作弊的行为</td>
		<td>5207251</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5207252</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5207253</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5207249,5207250,5207251,5207252,5207253</td>
	</tr>
	<tr>
		<td>1586820</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5207254</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5207255</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5207256</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5207257</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5207258</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5207254,5207255,5207256,5207257,5207258</td>
	</tr>
	<tr>
		<td>1586821</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5207259</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5207260</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207259</td>
	</tr>
	<tr>
		<td>1586822</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5207261</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207262</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207263</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207264</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207263</td>
	</tr>
	<tr>
		<td>1586823</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207265</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5207266</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5207267</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5207268</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5207269</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5207266,5207267,5207269</td>
	</tr>
	<tr>
		<td>1586824</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207270</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5207271</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5207272</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5207273</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5207274</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5207270,5207271,5207272,5207273,5207274</td>
	</tr>
	<tr>
		<td>1586825</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207275</td>
		<td>TDM的全称是Total Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5207276</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5207277</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5207278</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5207279</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5207280</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5207275,5207277,5207280</td>
	</tr>
	<tr>
		<td>1586826</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207281</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5207282</td>
		<td>I2C也可以叫IIC，是两线式串行通信总线，用于设备间的通讯</td>
		<td>5207283</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5207284</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5207285</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5207281,5207282,5207283</td>
	</tr>
	<tr>
		<td>1586827</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207286</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5207287</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5207288</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5207289</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数64</td>
		<td>5207290</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5207286,5207287,5207289</td>
	</tr>
	<tr>
		<td>1586828</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5207291</td>
		<td>SNMP</td>
		<td>5207292</td>
		<td>ICMP</td>
		<td>5207293</td>
		<td>UDP</td>
		<td>5207294</td>
		<td>ARP</td>
		<td>5207295</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5207291,5207293,5207294,5207295</td>
	</tr>
	<tr>
		<td>1586829</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207296</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5207297</td>
		<td>EDL刷机不仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5207298</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5207299</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5207300</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5207301</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5207296,5207297,5207298,5207299</td>
	</tr>
	<tr>
		<td>1586830</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207302</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有2条</td>
		<td>5207303</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5207304</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5207305</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5207306</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5207307</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5207304,5207305</td>
	</tr>
	<tr>
		<td>1586831</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5207308</td>
		<td>对话管理</td>
		<td>5207309</td>
		<td>路由选择</td>
		<td>5207310</td>
		<td>端到端报文段传输</td>
		<td>5207311</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207308,5207310,5207311</td>
	</tr>
	<tr>
		<td>1586832</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1823-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586833</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586834</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586835</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586836</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586837</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586838</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.04.19 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9185874) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/179)
- 答题链接: https://m.beehive.miui.com/xBXDKX4BC8FpS6063P4o2w/
- 题目数量: 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 4 月 16 日 00:00 - 2024 年 4 月 22 日 23:59
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1586832 [截图识别码 1823-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1586832 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 本期客观题满分为 80 分;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1586818</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5207245</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5207246</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5207247</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5207248</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207245,5207246,5207247,5207248</td>
	</tr>
	<tr>
		<td>1586819</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5207249</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5207250</td>
		<td>出现被判定为作弊的行为</td>
		<td>5207251</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5207252</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5207253</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5207249,5207250,5207251,5207252,5207253</td>
	</tr>
	<tr>
		<td>1586820</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5207254</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5207255</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5207256</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5207257</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5207258</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5207254,5207255,5207256,5207257,5207258</td>
	</tr>
	<tr>
		<td>1586821</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5207259</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5207260</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207259</td>
	</tr>
	<tr>
		<td>1586822</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5207261</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207262</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207263</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207264</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207263</td>
	</tr>
	<tr>
		<td>1586823</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207265</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5207266</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5207267</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5207268</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5207269</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5207266,5207267,5207269</td>
	</tr>
	<tr>
		<td>1586824</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207270</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5207271</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5207272</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5207273</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5207274</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5207270,5207271,5207272,5207273,5207274</td>
	</tr>
	<tr>
		<td>1586825</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207275</td>
		<td>TDM的全称是Total Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5207276</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5207277</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5207278</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5207279</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5207280</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5207275,5207277,5207280</td>
	</tr>
	<tr>
		<td>1586826</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207281</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5207282</td>
		<td>I2C也可以叫IIC，是两线式串行通信总线，用于设备间的通讯</td>
		<td>5207283</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5207284</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5207285</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5207281,5207282,5207283</td>
	</tr>
	<tr>
		<td>1586827</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207286</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5207287</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5207288</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5207289</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数64</td>
		<td>5207290</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5207286,5207287,5207289</td>
	</tr>
	<tr>
		<td>1586828</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5207291</td>
		<td>SNMP</td>
		<td>5207292</td>
		<td>ICMP</td>
		<td>5207293</td>
		<td>UDP</td>
		<td>5207294</td>
		<td>ARP</td>
		<td>5207295</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5207291,5207293,5207294,5207295</td>
	</tr>
	<tr>
		<td>1586829</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207296</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5207297</td>
		<td>EDL刷机不仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5207298</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5207299</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5207300</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5207301</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5207296,5207297,5207298,5207299</td>
	</tr>
	<tr>
		<td>1586830</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207302</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有2条</td>
		<td>5207303</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5207304</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5207305</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5207306</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5207307</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5207304,5207305</td>
	</tr>
	<tr>
		<td>1586831</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5207308</td>
		<td>对话管理</td>
		<td>5207309</td>
		<td>路由选择</td>
		<td>5207310</td>
		<td>端到端报文段传输</td>
		<td>5207311</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207308,5207310,5207311</td>
	</tr>
	<tr>
		<td>1586832</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1823-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586833</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586834</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586835</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586836</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586837</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586838</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.04.16 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9132067) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/179)
- 答题链接(更新): https://m.beehive.miui.com/xBXDKX4BC8FpS6063P4o2w/
- 题目数量: 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 4 月 16 日 00:00 - 2024 年 4 月 22 日 23:59
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1586832 [截图识别码 1823-2] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1586832 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 本期客观题满分为 80 分;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1586818</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5207245</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5207246</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5207247</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5207248</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207245,5207246,5207247,5207248</td>
	</tr>
	<tr>
		<td>1586819</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5207249</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5207250</td>
		<td>出现被判定为作弊的行为</td>
		<td>5207251</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5207252</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5207253</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5207249,5207250,5207251,5207252,5207253</td>
	</tr>
	<tr>
		<td>1586820</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5207254</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5207255</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5207256</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5207257</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5207258</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5207254,5207255,5207256,5207257,5207258</td>
	</tr>
	<tr>
		<td>1586821</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5207259</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5207260</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207259</td>
	</tr>
	<tr>
		<td>1586822</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5207261</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207262</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207263</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5207264</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207263</td>
	</tr>
	<tr>
		<td>1586823</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207265</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5207266</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5207267</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5207268</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5207269</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5207266,5207267,5207269</td>
	</tr>
	<tr>
		<td>1586824</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207270</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5207271</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5207272</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5207273</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5207274</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5207270,5207271,5207272,5207273,5207274</td>
	</tr>
	<tr>
		<td>1586825</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207275</td>
		<td>TDM的全称是Time Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5207276</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5207277</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5207278</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5207279</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5207280</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5207277,5207280</td>
	</tr>
	<tr>
		<td>1586826</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5207281</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5207282</td>
		<td>I2C也可以叫IIC，是两线式串行通信总线，用于设备间的通讯</td>
		<td>5207283</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5207284</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5207285</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5207281,5207282,5207283</td>
	</tr>
	<tr>
		<td>1586827</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207286</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5207287</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5207288</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5207289</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数63</td>
		<td>5207290</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5207286,5207287</td>
	</tr>
	<tr>
		<td>1586828</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5207291</td>
		<td>SNMP</td>
		<td>5207292</td>
		<td>ICMP</td>
		<td>5207293</td>
		<td>UDP</td>
		<td>5207294</td>
		<td>ARP</td>
		<td>5207295</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5207291,5207293,5207294,5207295</td>
	</tr>
	<tr>
		<td>1586829</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207296</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5207297</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5207298</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5207299</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5207300</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5207301</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5207297,5207300,5207301</td>
	</tr>
	<tr>
		<td>1586830</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5207302</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有1条</td>
		<td>5207303</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5207304</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5207305</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5207306</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5207307</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5207303,5207306,5207307</td>
	</tr>
	<tr>
		<td>1586831</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5207308</td>
		<td>对话管理</td>
		<td>5207309</td>
		<td>路由选择</td>
		<td>5207310</td>
		<td>端到端报文段传输</td>
		<td>5207311</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5207308,5207310,5207311</td>
	</tr>
	<tr>
		<td>1586832</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1823-2]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586833</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586834</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586835</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586836</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586837</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1586838</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.04.09 08:00-08:15 14:45-15:00、2024.04.10 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-9055960) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/173)
- 答题链接(更新): https://m.beehive.miui.com/XthN5hiIYiKEETu1hYutAw/
- 题目数量: 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 4 月 9 日 00:00 - 2024 年 4 月 15 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1574518 [截图识别码 1099-1] 或 [截图识别码 2341-3] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1574518 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 本期客观题满分为 80 分;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1574504</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5165527</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5165528</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5165529</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5165530</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5165527,5165528,5165529,5165530</td>
	</tr>
	<tr>
		<td>1574505</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5165531</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5165532</td>
		<td>出现被判定为作弊的行为</td>
		<td>5165533</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5165534</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5165535</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5165531,5165532,5165533,5165534,5165535</td>
	</tr>
	<tr>
		<td>1574506</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5165536</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5165537</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5165538</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5165539</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5165540</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5165536,5165537,5165538,5165539,5165540</td>
	</tr>
	<tr>
		<td>1574507</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5165541</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5165542</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5165541</td>
	</tr>
	<tr>
		<td>1574508</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5165543</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5165544</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5165545</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5165546</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5165545</td>
	</tr>
	<tr>
		<td>1574509</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5165547</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5165548</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5165549</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5165550</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5165551</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5165548,5165549,5165551</td>
	</tr>
	<tr>
		<td>1574510</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5165552</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5165553</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5165554</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5165555</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5165556</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5165552,5165553,5165554,5165555,5165556</td>
	</tr>
	<tr>
		<td>1574511</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5165557</td>
		<td>TDM的全称是Time Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5165558</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5165559</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5165560</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5165561</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5165562</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5165559,5165562</td>
	</tr>
	<tr>
		<td>1574512</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5165563</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5165564</td>
		<td>I2C也可以叫IIC，是两线式串行通信总线，用于设备间的通讯</td>
		<td>5165565</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5165566</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5165567</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5165563,5165564,5165565</td>
	</tr>
	<tr>
		<td>1574513</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5165568</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5165569</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5165570</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5165571</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数63</td>
		<td>5165572</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5165568,5165569</td>
	</tr>
	<tr>
		<td>1574514</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5165573</td>
		<td>SNMP</td>
		<td>5165574</td>
		<td>ICMP</td>
		<td>5165575</td>
		<td>UDP</td>
		<td>5165576</td>
		<td>ARP</td>
		<td>5165577</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5165573,5165575,5165576,5165577</td>
	</tr>
	<tr>
		<td>1574515</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5165578</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5165579</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5165580</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5165581</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5165582</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5165583</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5165579,5165582,5165583</td>
	</tr>
	<tr>
		<td>1574516</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5165584</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有1条</td>
		<td>5165585</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5165586</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5165587</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5165588</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5165589</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5165585,5165588,5165589</td>
	</tr>
	<tr>
		<td>1574517</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5165590</td>
		<td>对话管理</td>
		<td>5165591</td>
		<td>路由选择</td>
		<td>5165592</td>
		<td>端到端报文段传输</td>
		<td>5165593</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5165590,5165592,5165593</td>
	</tr>
	<tr>
		<td>1574518-1</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1099-1]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574518-2</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码2341-3]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574519</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574520</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574521</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574522</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574523</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1574524</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.26 14:45-15:00、2024.03.27 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8925624) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/170)
- 答题链接: https://m.beehive.miui.com/QBOSU7MPzlTtmePYaEzylg/
- 题目数量: 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 3 月 26 日 00:00 - 2024 年 4 月 1 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1569548 [截图识别码 1099-1] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1569548 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 根据本《BL 解锁申请资格答题测试》问卷标题提示，该问卷分数构成为「**选择 80 分 + 填空 20 分**」;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1569534</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5147297</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5147298</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5147299</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5147300</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147297,5147298,5147299,5147300</td>
	</tr>
	<tr>
		<td>1569535</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5147301</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5147302</td>
		<td>出现被判定为作弊的行为</td>
		<td>5147303</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5147304</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5147305</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5147301,5147302,5147303,5147304,5147305</td>
	</tr>
	<tr>
		<td>1569536</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5147306</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5147307</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5147308</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5147309</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5147310</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5147306,5147307,5147308,5147309,5147310</td>
	</tr>
	<tr>
		<td>1569537</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5147311</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5147312</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147311</td>
	</tr>
	<tr>
		<td>1569538</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5147313</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5147314</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5147315</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5147316</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147315</td>
	</tr>
	<tr>
		<td>1569539</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147317</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5147318</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5147319</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5147320</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5147321</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5147318,5147319,5147321</td>
	</tr>
	<tr>
		<td>1569540</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5147322</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5147323</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5147324</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5147325</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5147326</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5147322,5147323,5147324,5147325,5147326</td>
	</tr>
	<tr>
		<td>1569541</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147327</td>
		<td>TDM的全称是Time Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5147328</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5147329</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5147330</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5147331</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5147332</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5147329,5147332</td>
	</tr>
	<tr>
		<td>1569542</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5147333</td>
		<td>系统总线的位宽指的是总线能同时传送的二进制数据的位数，或数据总线的位数，即32位、64位等总线宽度的概念。总线的位宽越宽，每秒钟数据传输率越大，总线的带宽越宽</td>
		<td>5147334</td>
		<td>I2C也可以叫IIC，是两线式串行通信总线，用于设备间的通讯</td>
		<td>5147335</td>
		<td>I2C通讯只需要两根线，一根是数据线SDA，一根是时钟线SCL</td>
		<td>5147336</td>
		<td>I2C是多主从架构，每个设备都有唯一的地址，一个主设备理论上可以接128个从设备</td>
		<td>5147337</td>
		<td>I2C数据的传输有开始和停止条件，中间进行8bit的数据传输，不校验奇偶，当数据线从低电平转为高电平时，会形成一个开始条件</td>
		<td></td>
		<td></td>
		<td>5147333,5147334,5147335</td>
	</tr>
	<tr>
		<td>1569543</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147338</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5147339</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5147340</td>
		<td>64进制数3aGC转换为二进制数为11001010101010100110</td>
		<td>5147341</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数63</td>
		<td>5147342</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5147338,5147339</td>
	</tr>
	<tr>
		<td>1569544</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5147343</td>
		<td>SNMP</td>
		<td>5147344</td>
		<td>ICMP</td>
		<td>5147345</td>
		<td>UDP</td>
		<td>5147346</td>
		<td>ARP</td>
		<td>5147347</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5147343,5147345,5147346,5147347</td>
	</tr>
	<tr>
		<td>1569545</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147348</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5147349</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5147350</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5147351</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5147352</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5147353</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5147349,5147352,5147353</td>
	</tr>
	<tr>
		<td>1569546</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147354</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有1条</td>
		<td>5147355</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5147356</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5147357</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5147358</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5147359</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5147355,5147358,5147359</td>
	</tr>
	<tr>
		<td>1569547</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5147360</td>
		<td>对话管理</td>
		<td>5147361</td>
		<td>路由选择</td>
		<td>5147362</td>
		<td>端到端报文段传输</td>
		<td>5147363</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147360,5147362,5147363</td>
	</tr>
	<tr>
		<td>1569548</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1099-1]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569549</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569550</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569551</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569552</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569553</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569554</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.26 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8925588) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/170)
- 答题链接(更新): https://m.beehive.miui.com/QBOSU7MPzlTtmePYaEzylg/
- 题目数量: 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 3 月 26 日 00:00 - 2024 年 4 月 1 日 23:59
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1569548 [截图识别码 1099-1] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1569548 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1569534</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5147297</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5147298</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5147299</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5147300</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147297,5147298,5147299,5147300</td>
	</tr>
	<tr>
		<td>1569535</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5147301</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5147302</td>
		<td>出现被判定为作弊的行为</td>
		<td>5147303</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5147304</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5147305</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5147301,5147302,5147303,5147304,5147305</td>
	</tr>
	<tr>
		<td>1569536</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5147306</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5147307</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5147308</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5147309</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5147310</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5147306,5147307,5147308,5147309,5147310</td>
	</tr>
	<tr>
		<td>1569537</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5147311</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5147312</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147311</td>
	</tr>
	<tr>
		<td>1569538</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5147313</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5147314</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5147315</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5147316</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147315</td>
	</tr>
	<tr>
		<td>1569539</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147317</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5147318</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5147319</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5147320</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5147321</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5147318,5147319,5147321</td>
	</tr>
	<tr>
		<td>1569540</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5147322</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5147323</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5147324</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5147325</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5147326</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5147322,5147323,5147324,5147325,5147326</td>
	</tr>
	<tr>
		<td>1569541</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147327</td>
		<td>TDM的全称是Time Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5147328</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5147329</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5147330</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5147331</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5147332</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5147329,5147332</td>
	</tr>
	<tr>
		<td>1569542</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5147333</td>
		<td>外部中断中，CPU处于关中断状态时，也能响应NMI请求，且不可屏蔽中断的优先级比可屏蔽中断的优先级高</td>
		<td>5147334</td>
		<td>QPI总线是一种点对点全I同步串行总线，总线上的设备可同时接收和发送信息，每个方向可同时传输20位信息（16位数据+4位校验位），每个QPI数据包有80位信息，分2个时钟周期传送，每个时钟周期传递2次。因此，QPI总线带宽为：每秒传送次数×2B×2。若QPI时钟频率为1.2GHz，则总线带宽为19.2GB/s</td>
		<td>5147335</td>
		<td>多周期CPU中所有指令的指令周期为多个时钟周期，CPI大于1</td>
		<td>5147336</td>
		<td>现有长度为11且初始为空的散列表HT，散列函数是H(key)=key%7，采用线性探查(线性探测再散列)法解决冲突。将关键字序列87,40,30,6,11,22,90,20依次插入HT后，HT查找失败的平均查找长度是6</td>
		<td>5147337</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备不使用全盘加密</td>
		<td></td>
		<td></td>
		<td>5147333,5147335,5147336,5147337</td>
	</tr>
	<tr>
		<td>1569543</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147338</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5147339</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5147340</td>
		<td>十进制数0.4541转换为二进制数为0.101001</td>
		<td>5147341</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数63</td>
		<td>5147342</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5147338,5147339,5147340</td>
	</tr>
	<tr>
		<td>1569544</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5147343</td>
		<td>SNMP</td>
		<td>5147344</td>
		<td>ICMP</td>
		<td>5147345</td>
		<td>UDP</td>
		<td>5147346</td>
		<td>ARP</td>
		<td>5147347</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5147343,5147345,5147346,5147347</td>
	</tr>
	<tr>
		<td>1569545</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147348</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5147349</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5147350</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5147351</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5147352</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5147353</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5147349,5147352,5147353</td>
	</tr>
	<tr>
		<td>1569546</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5147354</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有1条</td>
		<td>5147355</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5147356</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5147357</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5147358</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5147359</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5147355,5147358,5147359</td>
	</tr>
	<tr>
		<td>1569547</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5147360</td>
		<td>对话管理</td>
		<td>5147361</td>
		<td>路由选择</td>
		<td>5147362</td>
		<td>端到端报文段传输</td>
		<td>5147363</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5147360,5147362,5147363</td>
	</tr>
	<tr>
		<td>1569548</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1099-1]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569549</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569550</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569551</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569552</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569553</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569554</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.20 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8881209) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/163)
- 答题链接: https://m.beehive.miui.com/zIiljtwytIhDVaDUO8gvwg/
- 题目数量(更新): 19 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 3 月 19 日 00:00 - 2024 年 3 月 25 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1561563 [截图识别码 1881-4] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 小米将依据您在题目 1561563 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1561554</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5120304</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5120305</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5120306</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5120307</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120304,5120305,5120306,5120307</td>
	</tr>
	<tr>
		<td>1561555</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5120308</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5120309</td>
		<td>出现被判定为作弊的行为</td>
		<td>5120310</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5120311</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5120312</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5120308,5120309,5120310,5120311,5120312</td>
	</tr>
	<tr>
		<td>1561556</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5120313</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5120314</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5120315</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5120316</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5120317</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5120313,5120314,5120315,5120316,5120317</td>
	</tr>
	<tr>
		<td>1561557</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5120318</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5120319</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120318</td>
	</tr>
	<tr>
		<td>1561558</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5120320</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5120321</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5120322</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5120323</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120322</td>
	</tr>
	<tr>
		<td>1561568</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120349</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5120350</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5120351</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5120352</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5120353</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5120350,5120351,5120353</td>
	</tr>
	<tr>
		<td>1561561</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5120333</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5120334</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5120335</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5120336</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5120337</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5120333,5120334,5120335,5120336,5120337</td>
	</tr>
	<tr>
		<td>1561564</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120338</td>
		<td>TDM的全称是Time Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5120339</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5120340</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5120341</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5120342</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5120343</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5120340,5120343</td>
	</tr>
	<tr>
		<td>1561571</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5120366</td>
		<td>外部中断中，CPU处于关中断状态时，也能响应NMI请求，且不可屏蔽中断的优先级比可屏蔽中断的优先级高</td>
		<td>5120367</td>
		<td>QPI总线是一种点对点全I同步串行总线，总线上的设备可同时接收和发送信息，每个方向可同时传输20位信息（16位数据+4位校验位），每个QPI数据包有80位信息，分2个时钟周期传送，每个时钟周期传递2次。因此，QPI总线带宽为：每秒传送次数×2B×2。若QPI时钟频率为1.2GHz，则总线带宽为19.2GB/s</td>
		<td>5120368</td>
		<td>多周期CPU中所有指令的指令周期为多个时钟周期，CPI大于1</td>
		<td>5120369</td>
		<td>现有长度为11且初始为空的散列表HT，散列函数是H(key)=key%7，采用线性探查(线性探测再散列)法解决冲突。将关键字序列87,40,30,6,11,22,90,20依次插入HT后，HT查找失败的平均查找长度是6</td>
		<td>5120370</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备不使用全盘加密</td>
		<td></td>
		<td></td>
		<td>5120366,5120368,5120369,5120370</td>
	</tr>
	<tr>
		<td>1561565</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120344</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5120345</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5120346</td>
		<td>十进制数0.4541转换为二进制数为0.101001</td>
		<td>5120347</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数63</td>
		<td>5120348</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5120344,5120345,5120346</td>
	</tr>
	<tr>
		<td>1561559</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5120324</td>
		<td>SNMP</td>
		<td>5120325</td>
		<td>ICMP</td>
		<td>5120326</td>
		<td>UDP</td>
		<td>5120327</td>
		<td>ARP</td>
		<td>5120328</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5120324,5120326,5120327,5120328</td>
	</tr>
	<tr>
		<td>1561569</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120354</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5120355</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5120356</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5120357</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5120358</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5120359</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5120355,5120358,5120359</td>
	</tr>
	<tr>
		<td>1561570</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120360</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有1条</td>
		<td>5120361</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5120362</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5120363</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5120364</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5120365</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5120361,5120364,5120365</td>
	</tr>
	<tr>
		<td>1561560</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5120329</td>
		<td>对话管理</td>
		<td>5120330</td>
		<td>路由选择</td>
		<td>5120331</td>
		<td>端到端报文段传输</td>
		<td>5120332</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120329,5120331,5120332</td>
	</tr>
	<tr>
		<td>1561563</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1881-4]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569194</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过可能的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的审核人员，我想申请解锁我的手机 bootloader，因为我希望能够完全掌控自己的设备。我相信这是我的权利，也可以提高我对手机的使用体验。解锁 bootloader 是一个简单而有效的方式，可以让我使用更多的自定义选项和优化，从而帮助我更好地管理我的手机。除此之外，我也是一名开发者和技术爱好者，我相信通过解锁 bootloader，我可以更深入地了解...”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569195</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“尊敬的小米公司：您好！我是一名小米手机用户，最近我购买了一款小米手机，在使用过程中，我发现了一些特别的功能和特点。因此，我希望能够申请解锁手机的BL（Bootloader），以便更好地了解和使用这些功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1569196</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“愿意尝试新事物，有毅力和精力进行测试，并能随时报告测试情况。具备测试和反馈的能力，能够分析系统存在的问题并提供详细的反馈报告。精通MIUI系统的使用和问题解决，MIUI系统是小米的操作系统，熟悉其风格和功能。”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561567</td>
		<td>以下是BL解锁高频申请理由，请分析该理由不通过的原因有哪些</td>
		<td>填空题</td>
		<td>0</td>
		<td>摘录于用户的BL解锁申请理由：“我迫切希望能够解锁BL，以便能够更加深入地了解和体验澎湃OS的强大功能，解锁BL后，我可以更好地参与到系统的优化和完善过程中，为澎湃OS的改进和发展贡献”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561572</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561573</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.19 08:00-08:15 14:45-15:00
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8837257) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/163)
- 答题链接(更新): https://m.beehive.miui.com/zIiljtwytIhDVaDUO8gvwg/
- 题目数量(更新): 18 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 3 月 19 日 00:00 - 2024 年 3 月 25 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 填空题 1561567-8 是 08:00-08:15 场的题，1561567-14 是 14:45-15:00 场的题;
  3. 未正确上传题目 1561563 [截图识别码 1881-4] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  4. 小米将依据您在题目 1561563 中上传的截图所显示的答题剩余时间，来判断您实际填空题用时，如填空题用时过短，将有可能会被判为无效答卷;
  5. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  6. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  7. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  8. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  9. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  10. 已答题账号在 7 天内无法重新答题;
  11. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 将根据截图题显示的答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1561554</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5120304</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5120305</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5120306</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5120307</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120304,5120305,5120306,5120307</td>
	</tr>
	<tr>
		<td>1561555</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5120308</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5120309</td>
		<td>出现被判定为作弊的行为</td>
		<td>5120310</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5120311</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5120312</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5120308,5120309,5120310,5120311,5120312</td>
	</tr>
	<tr>
		<td>1561556</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5120313</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5120314</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5120315</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5120316</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5120317</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5120313,5120314,5120315,5120316,5120317</td>
	</tr>
	<tr>
		<td>1561557</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5120318</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5120319</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120318</td>
	</tr>
	<tr>
		<td>1561564</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120338</td>
		<td>TDM的全称是Time Division Multiplexing，是指所有用户在不同的时间占用同样的频带宽度</td>
		<td>5120339</td>
		<td>除源站和目的站以外的其他各站，在收到CTS帧或数据帧后，就推迟接入到无线局域网中，保证了源站和目的站之间的通信不会受到其他站的干扰</td>
		<td>5120340</td>
		<td>虚拟存储容量只受内存容量的限制</td>
		<td>5120341</td>
		<td>若一棵二叉树的前序遍历序列为t,e,w,n,b，后序遍历序列为w,b,n,e,t，则根节点的孩子节点只有e</td>
		<td>5120342</td>
		<td>BGP协议中，open分组用来与相邻的另一个BGP发言人建立关系</td>
		<td>5120343</td>
		<td>C语言中的每条可执行语句和非执行语句最终都将被转换成二进制的机器指令</td>
		<td>5120340,5120343</td>
	</tr>
	<tr>
		<td>1561571</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5120366</td>
		<td>外部中断中，CPU处于关中断状态时，也能响应NMI请求，且不可屏蔽中断的优先级比可屏蔽中断的优先级高</td>
		<td>5120367</td>
		<td>QPI总线是一种点对点全I同步串行总线，总线上的设备可同时接收和发送信息，每个方向可同时传输20位信息（16位数据+4位校验位），每个QPI数据包有80位信息，分2个时钟周期传送，每个时钟周期传递2次。因此，QPI总线带宽为：每秒传送次数×2B×2。若QPI时钟频率为1.2GHz，则总线带宽为19.2GB/s</td>
		<td>5120368</td>
		<td>多周期CPU中所有指令的指令周期为多个时钟周期，CPI大于1</td>
		<td>5120369</td>
		<td>现有长度为11且初始为空的散列表HT，散列函数是H(key)=key%7，采用线性探查(线性探测再散列)法解决冲突。将关键字序列87,40,30,6,11,22,90,20依次插入HT后，HT查找失败的平均查找长度是6</td>
		<td>5120370</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备不使用全盘加密</td>
		<td></td>
		<td></td>
		<td>5120366,5120368,5120369,5120370</td>
	</tr>
	<tr>
		<td>1561558</td>
		<td>下列说法正确的是</td>
		<td>单选题</td>
		<td>5120320</td>
		<td>fastboot getvar all &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5120321</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5120322</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td>5120323</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;烧录img、bin、mbn、elf等镜像文件内容到指定分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120322</td>
	</tr>
	<tr>
		<td>1561559</td>
		<td>以下不是用于进行网络异常状态监测和诊断的是</td>
		<td>多选题</td>
		<td>5120324</td>
		<td>SNMP</td>
		<td>5120325</td>
		<td>ICMP</td>
		<td>5120326</td>
		<td>UDP</td>
		<td>5120327</td>
		<td>ARP</td>
		<td>5120328</td>
		<td>TCPIP</td>
		<td></td>
		<td></td>
		<td>5120324,5120326,5120327,5120328</td>
	</tr>
	<tr>
		<td>1561568</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120349</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5120350</td>
		<td>在计算机的文件系统中，一般采用树型目录结构，在树型目录结构中，树的根结点为根目录，数据文件作为树的结点</td>
		<td>5120351</td>
		<td>LRU算法是指当需要淘汰一个页面时，选择驻留主存时间最长的页面进行淘汰</td>
		<td>5120352</td>
		<td>中断技术使多道批处理系统和I/O设备可与CPU并行工作</td>
		<td>5120353</td>
		<td>中继器、路由器、集线器不能抑制广播风暴</td>
		<td></td>
		<td></td>
		<td>5120350,5120351,5120353</td>
	</tr>
	<tr>
		<td>1561561</td>
		<td>下列说法正确的是</td>
		<td>多选题</td>
		<td>5120333</td>
		<td>VLAN使用的802.1Q帧的最大长度为1522字节</td>
		<td>5120334</td>
		<td>给路由器的接口配置好IP地址和地址掩码后，路由器会自动得出该接口的直连网络地址</td>
		<td>5120335</td>
		<td>在一条带宽为4kHz的无噪声通信链路上，若采用8个相位的PSK调制，则该通信链路的最大数据传输速率是24kbps</td>
		<td>5120336</td>
		<td>TCP向其上层提供面向连接的可靠传输服务</td>
		<td>5120337</td>
		<td>UDP向其上层提供无连接、不可靠传输服务</td>
		<td></td>
		<td></td>
		<td>5120333,5120334,5120335,5120336,5120337</td>
	</tr>
	<tr>
		<td>1561565</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120344</td>
		<td>汉字的拼音输入码属于汉字的内码</td>
		<td>5120345</td>
		<td>关系数据库中的数据逻辑结构是树形结构</td>
		<td>5120346</td>
		<td>十进制数0.4541转换为二进制数为0.101001</td>
		<td>5120347</td>
		<td>字长为6位的二进制无符号整数，其最大值是十进制数63</td>
		<td>5120348</td>
		<td>SPOOLing需要外存的支持</td>
		<td></td>
		<td></td>
		<td>5120344,5120345,5120346</td>
	</tr>
	<tr>
		<td>1561569</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120354</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5120355</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>5120356</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td>5120357</td>
		<td>假脱机的意思是外部设备同时联机操作，采用一组程序或进程模拟一台输入/输出处理器</td>
		<td>5120358</td>
		<td>TDM所有用户可以在同样的时间使用同样的频带进行通信</td>
		<td>5120359</td>
		<td>如果网络的传输速率是108.5Kbps，传输27.9M的数据需要约30分钟</td>
		<td>5120355,5120358,5120359</td>
	</tr>
	<tr>
		<td>1561570</td>
		<td>下列说法不正确的是</td>
		<td>多选题</td>
		<td>5120360</td>
		<td>如果本地域名服务器无缓存，当采用递归法解析另一个网络的某主机域名时，本地域名服务器发送的域名请求消息有1条</td>
		<td>5120361</td>
		<td>用户代理和邮件传输代理构成电子邮件系统，常见的邮件协议有SMTP、IMTP、POP3等</td>
		<td>5120362</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是电气特性</td>
		<td>5120363</td>
		<td>管程用于实现进程互斥和进程同步，但管程中定义的变量仅能被管程内的过程访问</td>
		<td>5120364</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Examination ClassLoader，最后是System ClassLoader</td>
		<td>5120365</td>
		<td>Trap处理完成后不会返回到Trap指令的下一条指令执行</td>
		<td>5120361,5120364,5120365</td>
	</tr>
	<tr>
		<td>1561560</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5120329</td>
		<td>对话管理</td>
		<td>5120330</td>
		<td>路由选择</td>
		<td>5120331</td>
		<td>端到端报文段传输</td>
		<td>5120332</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120329,5120331,5120332</td>
	</tr>
	<tr>
		<td>1561563</td>
		<td>请截图本页面，并上传截图（此题根据答题时间情况来判断您实际填空题用时，填空题用时过短会被判为无效答卷）</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1881-4]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561562</td>
		<td>请写出您申请BL解锁的具体用途</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561566</td>
		<td>请写出BL解锁对手机的危害</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561567-8</td>
		<td>请简述线刷可以用来解决哪些问题</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561567-14</td>
		<td>请简述卡刷可以用来解决哪些问题</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561572</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561573</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.13 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8768737) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/157)
- 答题链接: https://m.beehive.miui.com/8qGdNjsaRn_9eBPfUymgLg/
- 题目数量(更新): 18
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 3 月 12 日 00:00 - 2024 年 3 月 18 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1557483 [截图识别码 3161-1] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】的分值，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  3. 您提交问卷时的实时成绩仅为【选择题得分】;
  4. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. 等级未达 5 段，无法展示成绩;
  8. 答题超时提交，无法展示成绩;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  10. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="8">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1557478</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5106256</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5106257</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5106256</td>
	</tr>
	<tr>
		<td>1561405</td>
		<td>在TCP/IP参考模型中，不是由传输层相邻的下一层实现的主要功能是</td>
		<td>多选题</td>
		<td>5119856</td>
		<td>对话管理</td>
		<td>5119857</td>
		<td>路由选择</td>
		<td>5119858</td>
		<td>端到端报文段传输</td>
		<td>5119859</td>
		<td>结点到结点流量控制</td>
		<td>5119856,5119858,5119859</td>
	</tr>
	<tr>
		<td>1561581</td>
		<td>下列给出的处理器类型中，理想情况下，CPI为1的是</td>
		<td>多选题</td>
		<td>5120379</td>
		<td>单周期CPU</td>
		<td>5120380</td>
		<td>多周期CPU</td>
		<td>5120381</td>
		<td>基本流水线CPU</td>
		<td>5120382</td>
		<td>超标量流水线CPU</td>
		<td>5120379,5120381</td>
	</tr>
	<tr>
		<td>1561585</td>
		<td>HTTP是一个无状态协议，然而Web站点经常希望能够识别用户，这时需要用到Cookie</td>
		<td>单选题</td>
		<td>5120391</td>
		<td>正确</td>
		<td>5120392</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120391</td>
	</tr>
	<tr>
		<td>1561589</td>
		<td>若一个栈的入栈序列为1、2、3、...、N，输出序列的第一个元素是i，则第j个输出的元素是i-j</td>
		<td>单选题</td>
		<td>5120401</td>
		<td>正确</td>
		<td>5120402</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5120402</td>
	</tr>
	<tr>
		<td>1561606</td>
		<td>主机A和主机B之间已建立了一个TCP连接，TCP最大段长度为1000字节。若主机A的当前拥塞窗口为4000字节，在主机A向主机B连续发送两个最大段后，成功收到主机B发送的对第一个段的确认段，确认段中通告的接收窗口大小为2000字节，则此时主机A还可以向主机B发送的最大字节数是</td>
		<td>单选题</td>
		<td>5120450</td>
		<td>1000</td>
		<td>5120451</td>
		<td>2000</td>
		<td>5120452</td>
		<td>3000</td>
		<td>5120453</td>
		<td>4000</td>
		<td>5120450</td>
	</tr>
	<tr>
		<td>1561610</td>
		<td>一个TCP连接总是以1KB的最大段发送TCP段，发送方有足够多的数据要发送。当拥塞窗口为16KB时发生了超时，如果接下来的4个RTT（往返时间）时间内的TCP段的传输都是成功的，那么当第4个RTT时间内发送的所有TCP段都得到肯定应答时，拥塞窗口大小是</td>
		<td>单选题</td>
		<td>5120458</td>
		<td>7KB</td>
		<td>5120459</td>
		<td>8KB</td>
		<td>5120460</td>
		<td>9KB</td>
		<td>5120461</td>
		<td>10KB</td>
		<td>5120460</td>
	</tr>
	<tr>
		<td>1561612</td>
		<td>主机A与主机B之间已建立一个TCP连接，双方持续有数据传输，且数据无差错与丢失。若A收到1个来自B的TCP段，该段的序号为1913、确认序号为2046、有效载荷为100字节，则A立即发送给B的确认序号和TCP段序号分别是</td>
		<td>单选题</td>
		<td>5120464</td>
		<td>2046 2013</td>
		<td>5120465</td>
		<td>2013 2046</td>
		<td>5120466</td>
		<td>2047 2012</td>
		<td>5120467</td>
		<td>2012 2047</td>
		<td>5120464</td>
	</tr>
	<tr>
		<td>1561618</td>
		<td>对给定的关键字序列110,119,007,911,114,120,122进行基数排序，则第2趟分配收集后得到的关键字序列是</td>
		<td>单选题</td>
		<td>5120476</td>
		<td>007,110,119,114,911,120,122</td>
		<td>5120477</td>
		<td>007,110,119,114,911,122,120</td>
		<td>5120478</td>
		<td>007,110,911,114,119,120,122</td>
		<td>5120479</td>
		<td>110,120,911,122,114,007,119</td>
		<td>5120478</td>
	</tr>
	<tr>
		<td>1557482</td>
		<td>请写出您申请BL解锁的具体用途</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561577</td>
		<td>请简述使用小米手机抓取284log的作用</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557483</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码3161-1]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561578</td>
		<td>请简述如果手机只能进入FASTBOOT，意味着什么</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561579</td>
		<td>请谈谈你对小米BL解锁申请的看法</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561580</td>
		<td>有部分用户填空题的答案雷同，甚至标点符号、格式、措辞几乎完全一致，导致其答题无效，请你谈谈对于这类违规用户应该如何处理</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561426</td>
		<td>请写出BL解锁对手机的危害</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561553</td>
		<td>请简述卡刷可以用来解决哪些问题</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561619</td>
		<td>下列关于RISC的叙述中，错误的是</td>
		<td>单选题</td>
		<td>5120480</td>
		<td>RISC普遍采用微程序控制器</td>
		<td>5120481</td>
		<td>RISC大多数指令在一个时钟周期内完成</td>
		<td>5120482</td>
		<td>RISC的内部通用寄存器数量相对CISC多</td>
		<td>5120483</td>
		<td>RISC的指令数、寻址方式和指令格式种类相对CISC少</td>
		<td>5120480</td>
	</tr>
</table>

## 2024.03.12 14:45-15:00
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8756488) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/157)
- 答题链接: https://m.beehive.miui.com/8qGdNjsaRn_9eBPfUymgLg/
- 题目数量: 14 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 3 月 12 日 00:00 - 2024 年 3 月 18 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1557483 [截图识别码 1471-8] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1557475</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5106242</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5106243</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5106244</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5106245</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5106242,5106243,5106244,5106245</td>
	</tr>
	<tr>
		<td>1557476</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5106246</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5106247</td>
		<td>出现被判定为作弊的行为</td>
		<td>5106248</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5106249</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5106250</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5106246,5106247,5106248,5106249,5106250</td>
	</tr>
	<tr>
		<td>1557477</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5106251</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5106252</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5106253</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5106254</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5106255</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5106251,5106252,5106253,5106254,5106255</td>
	</tr>
	<tr>
		<td>1557478</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5106256</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5106257</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5106256</td>
	</tr>
	<tr>
		<td>1557482</td>
		<td>请写出您申请BL解锁的具体用途</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557484</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5106273</td>
		<td>MBR: verify success!是引导加载程序的日志</td>
		<td>5106274</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>5106275</td>
		<td>假设信息位是8位，用海明码来发现并纠正1位出错的情况，则校验位的位数至少为8位</td>
		<td>5106276</td>
		<td>中断处理和子程序调用度需要压栈以保护现场，中断处理一定会保存通用地址寄存器而子程序调用不需要保存</td>
		<td>5106277</td>
		<td>对有n个节点、e条边且使用邻接表存储的有向图进行广度优先遍历，其算法时间复杂度是O(n+e)</td>
		<td>5106274,5106275,5106276</td>
	</tr>
	<tr>
		<td>1557483</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1471-8]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557480</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>5106263</td>
		<td>下列介质访问控制方法中，不会发生冲突的有CDMA、TDMA、FDMA</td>
		<td>5106264</td>
		<td>Android原生提供的ContentProvider有联系人、通话记录、应用列表</td>
		<td>5106265</td>
		<td>计算机开机后，操作系统最终被加载到RAM里</td>
		<td>5106266</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5106267</td>
		<td>ARP协议的功能是根据IP地址查询MAC地址</td>
		<td>5106263,5106265,5106266,5106267</td>
	</tr>
	<tr>
		<td>1561379</td>
		<td>假设某计算机按字编址，Cache有4个行，Cache和主存之间交换的块大小为1个字。若Cache的内容初始为空，采用2路组相联映射方式和LRU替换策略。访问的主存地址依次为0,4,8,2,0,6,8,6,4,8时，命中Cache的次数为</td>
		<td>单选题</td>
		<td>5119821</td>
		<td>1</td>
		<td>5119822</td>
		<td>2</td>
		<td>5119823</td>
		<td>3</td>
		<td>5119824</td>
		<td>4</td>
		<td></td>
		<td></td>
		<td>5119823</td>
	</tr>
	<tr>
		<td>1557488</td>
		<td>请写出使用卡刷方式的好处</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557479</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5106258</td>
		<td>已知长度分别为m和n的升序链表，若将它们合并为一个长度为m+n的降序链表，则最坏情况下的时间复杂度是O(m+n)</td>
		<td>5106259</td>
		<td>已知三叉树T中6个叶结点的权分别是2,3,4,5,6,7，T的带权外部路径长度最小为46</td>
		<td>5106260</td>
		<td>adb的全称是Android Debug Bridge，起到调试桥的作用执行</td>
		<td>5106261</td>
		<td>用于提高RAID可靠性的措施有磁盘镜像、奇偶检验、增加Cache机制等</td>
		<td>5106262</td>
		<td>fastboot getvar product命令会输出该机型的BL解锁状态</td>
		<td>5106261,5106262</td>
	</tr>
	<tr>
		<td>1557481</td>
		<td>以下关于类别加载器说法正确的有</td>
		<td>多选题</td>
		<td>5106268</td>
		<td>Bootstrap ClassLoader通常作为启动类加载器</td>
		<td>5106269</td>
		<td>Extension ClassLoader通常作为扩展加载器</td>
		<td>5106270</td>
		<td>Application ClassLoader通常作为应用程序加载器</td>
		<td>5106271</td>
		<td>通过继承Classloader实现自定义加载器，加载自定义的双亲分配模型</td>
		<td>5106272</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Extension ClassLoader，最后是System ClassLoader</td>
		<td>5106268,5106269,5106270,5106271,5106272</td>
	</tr>
	<tr>
		<td>1561385</td>
		<td>请写出BL解锁后，银行软件不能正常使用的原因</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1561380</td>
		<td>对一待排序序列分别进行折半插入排序和直接插入排序，两者之间可能的不同之处是</td>
		<td>单选题</td>
		<td>5119825</td>
		<td>排序的总趟数</td>
		<td>5119826</td>
		<td>元素之间的比较次数</td>
		<td>5119827</td>
		<td>元素的移动次数</td>
		<td>5119828</td>
		<td>使用辅助空间的数量</td>
		<td></td>
		<td></td>
		<td>5119826</td>
	</tr>
	<tr>
		<td>1557489</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557490</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.12 08:00-08:15 10:45-11:00
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8756467) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/157)
- 答题链接(更新): https://m.beehive.miui.com/8qGdNjsaRn_9eBPfUymgLg/
- 题目数量: 14 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 3 月 12 日 00:00 - 2024 年 3 月 18 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1557483 [截图识别码 6058-0] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 经用户测试验证，本问卷客观题分数可拿到 80 分;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1557475</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5106242</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5106243</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5106244</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5106245</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5106242,5106243,5106244,5106245</td>
	</tr>
	<tr>
		<td>1557476</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5106246</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5106247</td>
		<td>出现被判定为作弊的行为</td>
		<td>5106248</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5106249</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5106250</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5106246,5106247,5106248,5106249,5106250</td>
	</tr>
	<tr>
		<td>1557477</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5106251</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5106252</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5106253</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5106254</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5106255</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5106251,5106252,5106253,5106254,5106255</td>
	</tr>
	<tr>
		<td>1557478</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5106256</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5106257</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5106256</td>
	</tr>
	<tr>
		<td>1557479</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5106258</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>5106259</td>
		<td>执行fastboot reboot命令会重启手机</td>
		<td>5106260</td>
		<td>执行fastboot getvar product命令会输出该机型的BL解锁状态</td>
		<td>5106261</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5106262</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td>5106260,5106261,5106262</td>
	</tr>
	<tr>
		<td>1557480</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5106263</td>
		<td>在CRC码计算中，与101101对应的多项式为x^4+x^3+x^2+1</td>
		<td>5106264</td>
		<td>Android权限中，PROCESS_OUTGOING_CALLS权限允许应用程序记录拨出电话</td>
		<td>5106265</td>
		<td>Android原生提供的ContentProvider有联系人、通话记录、应用列表</td>
		<td>5106266</td>
		<td>Android安全策略基于DAC+Sandbox，因此root用户不受任何限制，可执行任意操作</td>
		<td>5106267</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5106263,5106265,5106266</td>
	</tr>
	<tr>
		<td>1557481</td>
		<td>以下关于类别加载器说法正确的有</td>
		<td>多选题</td>
		<td>5106268</td>
		<td>Bootstrap ClassLoader通常作为启动类加载器</td>
		<td>5106269</td>
		<td>Extension ClassLoader通常作为扩展加载器</td>
		<td>5106270</td>
		<td>Application ClassLoader通常作为应用程序加载器</td>
		<td>5106271</td>
		<td>通过继承Classloader实现自定义加载器，加载自定义的双亲分配模型</td>
		<td>5106272</td>
		<td>类加载器的顺序是，先是Bootstrap ClassLoader，然后是Extension ClassLoader，最后是System ClassLoader</td>
		<td>5106268,5106269,5106270,5106271,5106272</td>
	</tr>
	<tr>
		<td>1557482</td>
		<td>请写出您申请BL解锁的具体用途</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557483</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码6058-0]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557484</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>5106273</td>
		<td>RBAC模型同时具有强制访问控制和自主访问控制属性</td>
		<td>5106274</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>5106275</td>
		<td>MBR: verify success!是引导加载程序的日志</td>
		<td>5106276</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>5106277</td>
		<td>假设信息位是8位，用海明码来发现并纠正1位出错的情况，则校验位的位数至少为4位</td>
		<td>5106274,5106275,5106277</td>
	</tr>
	<tr>
		<td>1557485</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>5106278</td>
		<td>非空B树删除操作一定会导致叶结点变化</td>
		<td>5106279</td>
		<td>指令系统中采用不同寻址方式的目的主要是缩短指令长度、扩大寻址空间、提高编程灵活性</td>
		<td>5106280</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>5106281</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>5106282</td>
		<td>Lock Coarsening是指当虚拟机在编译或运行时分析代码，如果确定某个锁对象不会导致竞争，就会将锁操作完全消除，以提高性能</td>
		<td>5106278,5106279,5106281</td>
	</tr>
	<tr>
		<td>1557486</td>
		<td>下列内核的数据结构或程序中，分时系统实现时间片轮转调度需要使用的有</td>
		<td>多选题</td>
		<td>5106283</td>
		<td>进程控制块</td>
		<td>5106284</td>
		<td>时钟中断处理程序</td>
		<td>5106285</td>
		<td>进程就绪队列</td>
		<td>5106286</td>
		<td>进程阻塞队列</td>
		<td>5106287</td>
		<td>策略状态机</td>
		<td>5106283,5106284,5106285</td>
	</tr>
	<tr>
		<td>1557487</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>5106288</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>5106289</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量+键即可进入Recovery</td>
		<td>5106290</td>
		<td>执行fastboot oem poweroff命令会清除手机中所有数据后关机</td>
		<td>5106291</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>5106292</td>
		<td>数据通路中的流动数据路径由控制信号进行控制</td>
		<td>5106289,5106291,5106292</td>
	</tr>
	<tr>
		<td>1557488</td>
		<td>请写出BL解锁后的各类危害</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557489</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557490</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.07 08:00-08:15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8704173) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/103)
- 答题链接: https://m.beehive.miui.com/ElQ44NFRW_iWBRdiCajvnA/
- 题目数量: 14 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 3 月 5 日 00:00 - 2024 年 3 月 11 日 23:59
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1551467 [截图识别码 2268-4] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 目前已有多名用户采用第三方网站上提供的答案，被系统判定为雷同试卷，影响后续资格申请，请谨慎作答;
  4. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  5. 您提交问卷时的实时成绩仅为【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  7. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  8. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  9. 等级未达 5 段，无法展示成绩;
  10. 答题超时提交，无法展示成绩;
  11. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  12. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1551462</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5086224</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5086225</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5086226</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5086227</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5086224,5086225,5086226,5086227</td>
	</tr>
	<tr>
		<td>1551463</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5086228</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5086229</td>
		<td>出现被判定为作弊的行为</td>
		<td>5086230</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5086231</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5086232</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5086228,5086229,5086230,5086231,5086232</td>
	</tr>
	<tr>
		<td>1551464</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5086233</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5086234</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5086235</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5086236</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5086237</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5086233,5086234,5086235,5086236,5086237</td>
	</tr>
	<tr>
		<td>1551465</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5086238</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5086239</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5086238</td>
	</tr>
	<tr>
		<td>1555677</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5100822</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>5100823</td>
		<td>OEM是英文Original Environment Manufacturer的缩写，通常指原始设备制造商</td>
		<td>5100824</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>5100825</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5100826</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td>5100823,5100824,5100825</td>
	</tr>
	<tr>
		<td>1555682</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>5100842</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>5100843</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5100844</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，不可能是由于设备没有连接计算机</td>
		<td>5100845</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5100846</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>5100844,5100846</td>
	</tr>
	<tr>
		<td>1555195</td>
		<td>请写出您申请BL解锁的具体用途</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551467</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码2268-4]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1555679</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>5100829</td>
		<td>TCP“三报文握手”过程中，第二个报文首部中被置为1的标志位有SYN、ACK</td>
		<td>5100830</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>5100831</td>
		<td>假设信息位是8位，用海明码来发现并纠正1位出错的情况，则校验位的位数至少为8位</td>
		<td>5100832</td>
		<td>突发传送总线事务可以在总线上连续传送多个数据</td>
		<td>5100833</td>
		<td>哈希函数是一种双向密码机制</td>
		<td>5100829,5100830,5100832</td>
	</tr>
	<tr>
		<td>1555675</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>5100816</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>5100817</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量+键即可进入Recovery</td>
		<td>5100818</td>
		<td>VLAN使用的802.1Q帧的最大长度为1518字节</td>
		<td>5100819</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>5100864</td>
		<td>若系统中有n(n≥2)个进程，每个进程均需要使用某类临界资源2个，则系统不会发生死锁所需的该类资源总数至少是n+1个</td>
		<td>5100817,5100819,5100864</td>
	</tr>
	<tr>
		<td>1555703</td>
		<td>请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td>目前已有多名用户采用第三方网站上提供的答案，被系统判定为雷同试卷，影响后续资格申请，请谨慎作答</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557742</td>
		<td>用于进行网络异常状态监测和诊断的是</td>
		<td>单选题</td>
		<td>5107092</td>
		<td>SNMP</td>
		<td>5107093</td>
		<td>ICMP</td>
		<td>5107094</td>
		<td>UDP</td>
		<td>5107095</td>
		<td>ARP</td>
		<td></td>
		<td></td>
		<td>5107093</td>
	</tr>
	<tr>
		<td>1557728</td>
		<td>请简述使用小米手机开发者选项的作用</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1557739</td>
		<td>在TCP/IP参考模型中，由传输层相邻的下一层实现的主要功能是</td>
		<td>单选题</td>
		<td>5107076</td>
		<td>对话管理</td>
		<td>5107077</td>
		<td>路由选择</td>
		<td>5107078</td>
		<td>端到端报文段传输</td>
		<td>5107079</td>
		<td>结点到结点流量控制</td>
		<td></td>
		<td></td>
		<td>5107077</td>
	</tr>
	<tr>
		<td>1551476</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551477</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.05 10:45-11:00
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8676833) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/99)
- 答题链接: https://m.beehive.miui.com/ElQ44NFRW_iWBRdiCajvnA/
- 题目数量(更新): 14 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 3 月 5 日 00:00 - 2024 年 3 月 11 日 23:59
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1551467 [截图识别码 5227-3] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 目前已有多名用户采用第三方网站上提供的答案，被系统判定为雷同试卷，影响后续资格申请，请谨慎作答;
  4. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  5. 您提交问卷时的实时成绩仅为【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  7. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  8. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  9. 等级未达 5 段，无法展示成绩;
  10. 答题超时提交，无法展示成绩;
  11. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  12. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1551462</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5086224</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5086225</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5086226</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5086227</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5086224,5086225,5086226,5086227</td>
	</tr>
	<tr>
		<td>1551463</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5086228</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5086229</td>
		<td>出现被判定为作弊的行为</td>
		<td>5086230</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5086231</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5086232</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5086228,5086229,5086230,5086231,5086232</td>
	</tr>
	<tr>
		<td>1551464</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5086233</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5086234</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5086235</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5086236</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5086237</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5086233,5086234,5086235,5086236,5086237</td>
	</tr>
	<tr>
		<td>1551465</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5086238</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5086239</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5086238</td>
	</tr>
	<tr>
		<td>1555144</td>
		<td>下列事件可能引起进程调度程序的是</td>
		<td>多选题</td>
		<td>5098870</td>
		<td>中断处理结束</td>
		<td>5098871</td>
		<td>进程阻塞</td>
		<td>5098872</td>
		<td>进程执行结束</td>
		<td>5098873</td>
		<td>进程的时间片用完</td>
		<td></td>
		<td></td>
		<td>5098870,5098871,5098872,5098873</td>
	</tr>
	<tr>
		<td>1551469</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5086250</td>
		<td>一个手机如果只能进入FASTBOOT，可能是因为系统或引导程序损坏</td>
		<td>5086251</td>
		<td>VLAN使用的802.1Q帧的最大长度为1518字节</td>
		<td>5086252</td>
		<td>异步总线由握手信号定时，一次握手过程完成一位数据交换</td>
		<td>5086253</td>
		<td>若系统中有n(n≥2)个进程，每个进程均需要使用某类临界资源2个，则系统不会发生死锁所需的该类资源总数至少是n+1个</td>
		<td>5098874</td>
		<td>操作系统在创建新进程时，需要设置进程状态为执行态</td>
		<td>5086251,5086252</td>
	</tr>
	<tr>
		<td>1551471</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5086254</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5086255</td>
		<td>属于同一个VLAN中的两个站点可能连接在不同的交换机上</td>
		<td>5086256</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5086257</td>
		<td>数据链路层采用了后退N帧协议，发送方已经发送了编号为0~6的帧，计时器超时时，若发送方只收到了对1、3、5号帧的确认，则发送方需要重发的帧的数量是2</td>
		<td>5086258</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5086256,5086257</td>
	</tr>
	<tr>
		<td>1555190</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5098992</td>
		<td>TCP“三报文握手”过程中，第二个报文首部中被置为1的标志位有SYN、ACK和RST</td>
		<td>5098993</td>
		<td>因特网采用的网络体系结构是五层原理体系结构</td>
		<td>5098994</td>
		<td>TCP报文段首部中可以在OpenFlow1.0中匹配的字段是源端口</td>
		<td>5098995</td>
		<td>在OSI/RM中，透明传输属于网络层相邻下层涉及的范畴</td>
		<td></td>
		<td></td>
		<td>5098994,5098995</td>
	</tr>
	<tr>
		<td>1551474</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>多选题</td>
		<td>5086259</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5086260</td>
		<td>MBR: verify success!</td>
		<td>5086261</td>
		<td>remount failed</td>
		<td>5086262</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5086262</td>
	</tr>
	<tr>
		<td>1551475</td>
		<td>若将某个 “/17”地址块划分为9（不多也不少）个子块，则可能的最小子块中所包含的IP地址数量为</td>
		<td>单选题</td>
		<td>5086263</td>
		<td>64</td>
		<td>5086264</td>
		<td>128</td>
		<td>5086265</td>
		<td>256</td>
		<td>5086266</td>
		<td>255</td>
		<td></td>
		<td></td>
		<td>5086264</td>
	</tr>
	<tr>
		<td>1555194</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5099000</td>
		<td>HTTP是一个无状态协议，然而Web站点经常希望能够识别用户，这时需要用到Cookie</td>
		<td>5099001</td>
		<td>由6个字符组成的字符集S中，各字符出现的频次分别为3、4、6、8、10，为S构造的哈夫曼编码的加权平均长度为2.67</td>
		<td>5099002</td>
		<td>ACK-Flood攻击属于利用ICP协议发起的攻击</td>
		<td>5099003</td>
		<td>某网络在物理层规定，信号的电平用+10V~+15V表示二进制0，用-10V~-15V表示二进制1，电线长度限于15m以内，这种物理层接口特性是功能特性</td>
		<td>5099004</td>
		<td>虚拟局域网只是局域网给用户提供的一种服务，而不是一种新型局域网</td>
		<td>5099000,5099004</td>
	</tr>
	<tr>
		<td>1551470</td>
		<td>请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td>目前已有多名用户采用第三方网站上提供的答案，被系统判定为雷同试卷，影响后续资格申请，请谨慎作答</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551467</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码5227-3]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1555195</td>
		<td>请写出您申请BL解锁的具体用途</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551476</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551477</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.03.05 08:30-08:45
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8676826) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/99)
- 答题链接(更新): https://m.beehive.miui.com/ElQ44NFRW_iWBRdiCajvnA/
- 题目数量: 15 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 3 月 5 日 00:00 - 2024 年 3 月 11 日 23:59
- 注:
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1551467 [截图识别码 1281-4] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1551462</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5086224</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5086225</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5086226</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5086227</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5086224,5086225,5086226,5086227</td>
	</tr>
	<tr>
		<td>1551463</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5086228</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5086229</td>
		<td>出现被判定为作弊的行为</td>
		<td>5086230</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5086231</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5086232</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5086228,5086229,5086230,5086231,5086232</td>
	</tr>
	<tr>
		<td>1551464</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5086233</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5086234</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5086235</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5086236</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5086237</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5086233,5086234,5086235,5086236,5086237</td>
	</tr>
	<tr>
		<td>1551465</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5086238</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5086239</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5086238</td>
	</tr>
	<tr>
		<td>1551466</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5086240</td>
		<td>关机状态下长按电源键和音量-键可以进入FASTBOOT模式</td>
		<td>5086241</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>5086242</td>
		<td>线性表若采用链式存储结构时，则内存中可用存储单元的地址可以连续也可以不连续</td>
		<td>5086243</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5086244</td>
		<td>线刷开发版ROM不需要解锁Bootloader</td>
		<td>5086240,5086241,5086242,5086243</td>
	</tr>
	<tr>
		<td>1551467</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1281-4]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551468</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5086245</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5086246</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5086247</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5086248</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5086249</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5086245,5086246,5086249</td>
	</tr>
	<tr>
		<td>1551469</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5086250</td>
		<td>一个手机如果只能进入FASTBOOT，可能是因为系统或引导程序损坏</td>
		<td>5086251</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m*n)</td>
		<td>5086252</td>
		<td>异步总线由握手信号定时，一次握手过程完成一位数据交换</td>
		<td>5086253</td>
		<td>若元素1、2、3、4、5、6依次进栈，允许进栈和退栈操作交替进行，但不允许连续三次进行退栈，则可能的出栈序列是1、6、5、4、3、2</td>
		<td></td>
		<td></td>
		<td>5086251,5086252,5086253</td>
	</tr>
	<tr>
		<td>1551470</td>
		<td>请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551471</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5086254</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5086255</td>
		<td>栈顶元素和栈底元素不可能是同一个元素</td>
		<td>5086256</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5086257</td>
		<td>突发传送总线事务可以在总线上连续传送多个数据</td>
		<td>5086258</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5086255,5086256</td>
	</tr>
	<tr>
		<td>1551472</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>329271</td>
		<td>风险1</td>
		<td>329272</td>
		<td>风险2</td>
		<td>329273</td>
		<td>风险3</td>
		<td>329274</td>
		<td>风险4</td>
		<td></td>
		<td></td>
		<td>329271,329272,329273,329274</td>
	</tr>
	<tr>
		<td>1551473</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>329275</td>
		<td>线刷</td>
		<td>329276</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>329275,329276</td>
	</tr>
	<tr>
		<td>1551474</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>多选题</td>
		<td>5086259</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5086260</td>
		<td>MBR: verify success!</td>
		<td>5086261</td>
		<td>remount failed</td>
		<td>5086262</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5086262</td>
	</tr>
	<tr>
		<td>1551475</td>
		<td>若short型变量x=-8190，则x的机器数为</td>
		<td>单选题</td>
		<td>5086263</td>
		<td>E002H</td>
		<td>5086264</td>
		<td>9FFFH</td>
		<td>5086265</td>
		<td>E001H</td>
		<td>5086266</td>
		<td>9FFEH</td>
		<td></td>
		<td></td>
		<td>5086263</td>
	</tr>
	<tr>
		<td>1551476</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551477</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1551478</td>
		<td>【温馨提示】将下面的提示文案内容完整输入至答题框内</td>
		<td>填空题</td>
		<td>0</td>
		<td>本人知悉需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数。</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.02.29 10:45-11:00
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8675959) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/93)
- 答题链接: https://m.beehive.miui.com/wlH2yKwBvy_Iu85HjlYFjg/
- 题目数量(更新): 15 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 2 月 27 日 00:00 - 2024 年 3 月 4 日 23:59
- 注:
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1546447 [截图识别码 1281-4] 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1546436</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5071889</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5071890</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5071891</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5071892</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5071889,5071890,5071891,5071892</td>
	</tr>
	<tr>
		<td>1546437</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5071893</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5071894</td>
		<td>出现被判定为作弊的行为</td>
		<td>5071895</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5071896</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5071897</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5071893,5071894,5071895,5071896,5071897</td>
	</tr>
	<tr>
		<td>1546438</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5071898</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5071899</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5071900</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5071901</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5071902</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5071898,5071899,5071900,5071901,5071902</td>
	</tr>
	<tr>
		<td>1546439</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5071903</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5071904</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5071903</td>
	</tr>
	<tr>
		<td>1546448</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071929</td>
		<td>关机状态下长按电源键和音量-键可以进入FASTBOOT模式</td>
		<td>5071930</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>5071931</td>
		<td>线性表若采用链式存储结构时，则内存中可用存储单元的地址可以连续也可以不连续</td>
		<td>5071933</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5071949</td>
		<td>线刷开发版ROM不需要解锁Bootloader</td>
		<td>5071929,5071930,5071931,5071933</td>
	</tr>
	<tr>
		<td>1546447</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>[截图识别码1281-4]未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546444</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5071914</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5071915</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5071916</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5071917</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5071918</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5071914,5071915,5071918</td>
	</tr>
	<tr>
		<td>1546445</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5071919</td>
		<td>一个手机如果只能进入FASTBOOT，可能是因为系统或引导程序损坏</td>
		<td>5071921</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m*n)</td>
		<td>5071922</td>
		<td>异步总线由握手信号定时，一次握手过程完成一位数据交换</td>
		<td>5071923</td>
		<td>若元素1、2、3、4、5、6依次进栈，允许进栈和退栈操作交替进行，但不允许连续三次进行退栈，则可能的出栈序列是1、6、5、4、3、2</td>
		<td></td>
		<td></td>
		<td>5071921,5071922,5071923</td>
	</tr>
	<tr>
		<td>1547177</td>
		<td>请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546446</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5071925</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5071926</td>
		<td>栈顶元素和栈底元素不可能是同一个元素</td>
		<td>5071927</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5071928</td>
		<td>突发传送总线事务可以在总线上连续传送多个数据</td>
		<td>5071948</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5071926,5071927</td>
	</tr>
	<tr>
		<td>1546441</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>328270</td>
		<td>风险1</td>
		<td>328271</td>
		<td>风险2</td>
		<td>328272</td>
		<td>风险3</td>
		<td>328427</td>
		<td>风险4</td>
		<td></td>
		<td></td>
		<td>328270,328271,328272,328427</td>
	</tr>
	<tr>
		<td>1546440</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>328268</td>
		<td>线刷</td>
		<td>328269</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>328268,328269</td>
	</tr>
	<tr>
		<td>1546442</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>多选题</td>
		<td>5071905</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5071906</td>
		<td>MBR: verify success!</td>
		<td>5071907</td>
		<td>remount failed</td>
		<td>5071908</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5071908</td>
	</tr>
	<tr>
		<td>1551460</td>
		<td>若short型变量x=-8190，则x的机器数为</td>
		<td>单选题</td>
		<td>5086216</td>
		<td>E002H</td>
		<td>5086217</td>
		<td>9FFFH</td>
		<td>5086218</td>
		<td>E001H</td>
		<td>5086219</td>
		<td>9FFEH</td>
		<td></td>
		<td></td>
		<td>5086216</td>
	</tr>
	<tr>
		<td>1546451</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546452</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1547175</td>
		<td>【温馨提示】将下面的提示文案内容完整输入至答题框内</td>
		<td>填空题</td>
		<td>0</td>
		<td>本人知悉需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数。</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.02.29 08:30-08:45
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8675894) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/93)
- 答题链接: https://m.beehive.miui.com/wlH2yKwBvy_Iu85HjlYFjg/
- 题目数量(更新): 14 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制(更新): **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 2 月 27 日 00:00 - 2024 年 3 月 4 日 23:59
- 注:
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1546447 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1546436</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5071889</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5071890</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5071891</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5071892</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5071889,5071890,5071891,5071892</td>
	</tr>
	<tr>
		<td>1546437</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5071893</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5071894</td>
		<td>出现被判定为作弊的行为</td>
		<td>5071895</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5071896</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5071897</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5071893,5071894,5071895,5071896,5071897</td>
	</tr>
	<tr>
		<td>1546438</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5071898</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5071899</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5071900</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5071901</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5071902</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5071898,5071899,5071900,5071901,5071902</td>
	</tr>
	<tr>
		<td>1546439</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5071903</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5071904</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5071903</td>
	</tr>
	<tr>
		<td>1546442</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>多选题</td>
		<td>5071905</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5071906</td>
		<td>MBR: verify success!</td>
		<td>5071907</td>
		<td>remount failed</td>
		<td>5071908</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5071908</td>
	</tr>
	<tr>
		<td>1546440</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>328268</td>
		<td>线刷</td>
		<td>328269</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>328268,328269</td>
	</tr>
	<tr>
		<td>1546448</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071929</td>
		<td>关机状态下长按电源键和音量+键可以进入FASTBOOT模式</td>
		<td>5071930</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>5071931</td>
		<td>线性表若采用链式存储结构时，则内存中可用存储单元的地址必须连续</td>
		<td>5071933</td>
		<td>线刷不可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5071949</td>
		<td>线刷开发版ROM需要解锁Bootloader</td>
		<td>5071930,5071949</td>
	</tr>
	<tr>
		<td>1546444</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5071914</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5071915</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5071916</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5071917</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5071918</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5071914,5071915,5071918</td>
	</tr>
	<tr>
		<td>1546447</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546445</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5071919</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>5071921</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m+n)</td>
		<td>5071922</td>
		<td>算法可以没有输出，但必须要有输入</td>
		<td>5071923</td>
		<td>若元素1、2、3、4、5、6依次进栈，允许进栈和退栈操作交替进行，但不允许连续三次进行退栈，则可能的出栈序列是4、3、5、2、6、1</td>
		<td></td>
		<td></td>
		<td>5071919,5071921,5071922</td>
	</tr>
	<tr>
		<td>1547177</td>
		<td>请简述使用小米手机抓取284log的操作步骤</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546446</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071925</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td>5071926</td>
		<td>栈顶元素和栈底元素有可能是同一个元素</td>
		<td>5071927</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5071928</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>5071948</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5071926,5071928,5071948</td>
	</tr>
	<tr>
		<td>1546441</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>328270</td>
		<td>风险1</td>
		<td>328271</td>
		<td>风险2</td>
		<td>328272</td>
		<td>风险3</td>
		<td>328427</td>
		<td>风险4</td>
		<td></td>
		<td></td>
		<td>328270,328271,328272,328427</td>
	</tr>
	<tr>
		<td>1546451</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546452</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1547175</td>
		<td>【温馨提示】将下面的提示文案内容完整输入至答题框内</td>
		<td>填空题</td>
		<td>0</td>
		<td>本人知悉需要在 倒计时结束前 和 本场次答题的规定时间结束前 提交本问卷，超时提交将无法展示分数。</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.02.27 10:45-11:00
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8626685) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/89)
- 答题链接: https://m.beehive.miui.com/wlH2yKwBvy_Iu85HjlYFjg/
- 题目数量(更新): 16 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在倒计时结束前提交问卷，超时提交将无法展示分数**
- 得分有效期: 2024 年 2 月 27 日 00:00 - 2024 年 3 月 4 日 23:59
- 注:
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1546447 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1546436</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5071889</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5071890</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5071891</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5071892</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5071889,5071890,5071891,5071892</td>
	</tr>
	<tr>
		<td>1546437</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5071893</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5071894</td>
		<td>出现被判定为作弊的行为</td>
		<td>5071895</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5071896</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5071897</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5071893,5071894,5071895,5071896,5071897</td>
	</tr>
	<tr>
		<td>1546438</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5071898</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5071899</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5071900</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5071901</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5071902</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5071898,5071899,5071900,5071901,5071902</td>
	</tr>
	<tr>
		<td>1546439</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5071903</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5071904</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5071903</td>
	</tr>
	<tr>
		<td>1546441</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>328270</td>
		<td>风险1</td>
		<td>328271</td>
		<td>风险2</td>
		<td>328272</td>
		<td>风险3</td>
		<td>328427</td>
		<td>风险4</td>
		<td></td>
		<td></td>
		<td>328270,328271,328272,328427</td>
	</tr>
	<tr>
		<td>1546442</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>多选题</td>
		<td>5071905</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5071906</td>
		<td>MBR: verify success!</td>
		<td>5071907</td>
		<td>remount failed</td>
		<td>5071908</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5071908</td>
	</tr>
	<tr>
		<td>1546440</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>328268</td>
		<td>线刷</td>
		<td>328269</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>328268,328269</td>
	</tr>
	<tr>
		<td>1546448</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5071929</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>5071930</td>
		<td>关机状态下长按电源键和音量-键可以进入FASTBOOT模式</td>
		<td>5071931</td>
		<td>线性表若采用链式存储结构时，则内存中可用存储单元的地址必须连续</td>
		<td>5071933</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5071949</td>
		<td>线刷开发版ROM不需要解锁Bootloader</td>
		<td>5071931,5071949</td>
	</tr>
	<tr>
		<td>1546444</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5071914</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5071915</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5071916</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5071917</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5071918</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5071914,5071915,5071918</td>
	</tr>
	<tr>
		<td>1546447</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546445</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071919</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>5071920</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m+n)</td>
		<td>5071921</td>
		<td>算法可以没有输入，但必须要有输出</td>
		<td>5071922</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5071923</td>
		<td>若一个栈的入栈序列为1、2、3、...、N，输出序列的第一个元素是i，则无法确定第j个输出的元素</td>
		<td>5071921,5071922,5071923</td>
	</tr>
	<tr>
		<td>1547177</td>
		<td>请写出“擦除系统分区”的FASTBOOT的命令</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546446</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071925</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>5071926</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td>5071927</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5071928</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>5071948</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5071925,5071928,5071948</td>
	</tr>
	<tr>
		<td>1547178</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546450</td>
		<td>请简述对“小米BL解锁申请”的看法</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546451</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546452</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1547175</td>
		<td>【温馨提示】将下面的提示文案内容完整输入至答题框内</td>
		<td>填空题</td>
		<td>0</td>
		<td>本人知悉需要在倒计时结束前提交本问卷，超时提交将无法展示分数。</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.02.27 08:30-08:45
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8601016) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/89)
- 答题链接(更新): https://m.beehive.miui.com/wlH2yKwBvy_Iu85HjlYFjg/
- 题目数量(更新): 17 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制(更新): **建议最短不少于 5 分钟**；**最长不超过 15 分钟，需要在倒计时结束前提交问卷，超时提交将无法展示分数**
- 得分有效期(更新): 2024 年 2 月 27 日 00:00 - 2024 年 3 月 4 日 23:59
- 注(更新):
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1546447 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  5. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  6. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  7. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  8. 已答题账号在 7 天内无法重新答题;
  9. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 为避免成绩无效，建议作答时间不少于【5分钟】且不超过【15分钟】，请合理安排答题时间。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1546436</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5071889</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td>5071890</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5071891</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5071892</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td>5071889,5071890,5071891,5071892</td>
	</tr>
	<tr>
		<td>1546437</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5071893</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5071894</td>
		<td>出现被判定为作弊的行为</td>
		<td>5071895</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5071896</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5071897</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5071893,5071894,5071895,5071896,5071897</td>
	</tr>
	<tr>
		<td>1546438</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5071898</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5071899</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5071900</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5071901</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5071902</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5071898,5071899,5071900,5071901,5071902</td>
	</tr>
	<tr>
		<td>1546439</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5071903</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5071904</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5071903</td>
	</tr>
	<tr>
		<td>1546440</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>328268</td>
		<td>线刷</td>
		<td>328269</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>328268,328269</td>
	</tr>
	<tr>
		<td>1546448</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5071929</td>
		<td>某二叉树有5个叶结点，其权值分别为10、12、16、21、30，则其最小的带权路径长度是200</td>
		<td>5071930</td>
		<td>计算机主存地址为32位，按字节编址，Cache数据区大小和主存块大小均为32KB，采用直接映射方式和回写策略，则Cache行的位数至少是274</td>
		<td>5071931</td>
		<td>线性表若采用链式存储结构时，则内存中可用存储单元的地址必须连续</td>
		<td>5071933</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5071949</td>
		<td>用三叉链表作为二叉树的存储结构，当二叉树有n个结点时，有n+2个空指针</td>
		<td>5071930,5071931</td>
	</tr>
	<tr>
		<td>1546441</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>328270</td>
		<td>风险1</td>
		<td>328271</td>
		<td>风险2</td>
		<td>328272</td>
		<td>风险3</td>
		<td>328427</td>
		<td>风险4</td>
		<td></td>
		<td></td>
		<td>328270,328271,328272,328427</td>
	</tr>
	<tr>
		<td>1546442</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>多选题</td>
		<td>5071905</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5071906</td>
		<td>MBR: verify success!</td>
		<td>5071907</td>
		<td>remount failed</td>
		<td>5071908</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5071908</td>
	</tr>
	<tr>
		<td>1546443</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>5071909</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>5071910</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>5071911</td>
		<td>fastboot reboot：重启手机</td>
		<td>5071912</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>5071913</td>
		<td>fastboot delete：擦除所有分区</td>
		<td>5071911,5071912</td>
	</tr>
	<tr>
		<td>1546444</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5071914</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5071915</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5071916</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5071917</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5071918</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5071914,5071915,5071918</td>
	</tr>
	<tr>
		<td>1546447</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546445</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071919</td>
		<td>设置界地址保护是分区分配内存管理方式的主要保护措施</td>
		<td>5071920</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m*n)</td>
		<td>5071921</td>
		<td>一棵完全二叉树第六层有8个叶结点，则该二叉树的第5层结点个数为32个（根为第一层）</td>
		<td>5071922</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5071923</td>
		<td>若一个栈的入栈序列为1、2、3、...、N，输出序列的第一个元素是i，则无法确定第j个输出的元素</td>
		<td>5071919,5071922,5071923</td>
	</tr>
	<tr>
		<td>1547177</td>
		<td>请输入FASTBOOT模式下输出防回滚机制版本号的命令</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546446</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5071925</td>
		<td>若采用三元组表存储结构存储稀疏矩阵M，则除三元组外，还需要保存矩阵M的行数和列数</td>
		<td>5071926</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td>5071927</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5071928</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>5071948</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5071925,5071948</td>
	</tr>
	<tr>
		<td>1547178</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>填空题</td>
		<td>0</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546450</td>
		<td>请简述对“小米BL解锁申请”的看法</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546451</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1546452</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1547175</td>
		<td>【温馨提示】将下面的提示文案内容完整输入至答题框内</td>
		<td>填空题</td>
		<td>0</td>
		<td>本人知悉需要在倒计时结束前提交本问卷，超时提交将无法展示分数。</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.02.22
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8555307) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/73)
- 答题链接: https://m.beehive.miui.com/2CYcdd6kRoPhFQiAjg3Knw/
- 题目数量: 15 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制(更新): **最短不得少于 5 分钟，否则将视为无效问卷**；最长不超过 15 分钟，超时结算已回答题目的分数
- 得分有效期: 2024 年 2 月 20 日 00:00 - 2024 年 2 月 26 日 23:59
- **特别提示(更新)：在 2024.02.22 期答题过程中，小米曾 8 次关闭问卷并临时更改题目。假如您在小米更改题目前就已经开始答题且尚处于作答过程中，那么在您提交问卷的那一刻，由于某些题目的标准答案较您先前作答时已经发生变化，所以即使您在作答时选择了当时的正确答案，也无法避免在结算分数时被系统判定为回答错误。如您的作答分数仅有 1 分、2 分或十几分，那么很可能您遇到了上述情况。由于关闭问卷只能拦住尚未开始答题的用户，故假如您此时正处于答题过程中，您不会收到任何通知。并且小米未启用问卷「返回上一题」的功能，因此您无法通过回退来查看题目是否已经变动，亦不存在重新修改答案的可能。同时，由于无法提前预知小米会在何时改题，且题目和选项描述都可能会随机变动，因此对于上述问题将不存在任何规避措施。小米早已抛弃极客精神，我们对此无能为力。**
- 注:
  1. 若选项 ID 后带有 -1/-2/-3 等后缀，则表明对应的选项描述在答题开放期间曾被小米反复修改，答题时还请注意细节，耐心比对;
  2. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  3. 未正确上传题目 1542661 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数;
  3. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  4. 您提交问卷时的实时成绩仅为【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  6. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  7. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  8. 等级未达 5 段，无法展示成绩;
  9. 答题超时提交，无法展示成绩;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁;
  11. 最短答题时间不得少于【5】分钟。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="24">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1542647</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5058406</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5058407</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5058408</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td>5069026</td>
		<td>填空题务必不要复制粘贴其他网站的答案，答案雷同或相似度高，将视为无效问卷，无法获得分数</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058406,5058407,5058408,5069026</td>
	</tr>
	<tr>
		<td>1542648</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5058409</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5058410</td>
		<td>出现被判定为作弊的行为</td>
		<td>5058411</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5058412</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5058413</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058409,5058410,5058411,5058412,5058413</td>
	</tr>
	<tr>
		<td>1542649</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5058414</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5058415</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5058416</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5058417</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5058418</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058414,5058415,5058416,5058417,5058418</td>
	</tr>
	<tr>
		<td>1544598</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5065565</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5065566</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5065565</td>
	</tr>
	<tr>
		<td>1542653</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>327666</td>
		<td>线刷</td>
		<td>327667</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>327666,327667</td>
	</tr>
	<tr>
		<td>1542655</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>327702</td>
		<td>风险1</td>
		<td>327703</td>
		<td>风险2</td>
		<td>327704</td>
		<td>风险3</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>327702,327703,327704</td>
	</tr>
	<tr>
		<td>1542656</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>5058433</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5058434</td>
		<td>MBR: verify success!</td>
		<td>5058435</td>
		<td>remount failed</td>
		<td>5058436</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058436</td>
	</tr>
	<tr>
		<td>1542663</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>5058457</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>5058458</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>5058459</td>
		<td>fastboot reboot：重启手机</td>
		<td>5058460</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>5058461</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058459,5058460</td>
	</tr>
	<tr>
		<td>1542654</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5058428</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5058429</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5058430</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5058431-1</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5058431-2</td>
		<td>S_CHIP_TYPE_NOT_MATCH：没有加载好刷机包文件</td>
		<td>5058432-1</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5058432-2</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058428,5058429,5058431-2,5058432-1,5058432-2</td>
	</tr>
	<tr>
		<td>1542652</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5058424-1</td>
		<td>已知初始为空的队列Q的一端仅能进行入队操作，另外一端既能进行入队操作又能进行出队操作。若Q的入队序列是1, 2, 3, 4, 5，则4, 2, 1, 3, 5是可能得到的出队序列</td>
		<td>5058424-2</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m+n)</td>
		<td>5058424-3</td>
		<td>将长度分别为m,n的两个单链表合并为一个单链表的时间复杂度为O(m*n)</td>
		<td>5058425-1</td>
		<td>已知二维数组A按行优先方式存储，每个元素占用1个存储单元。若元素A[0][0]的存储地址是100, A[3][3]的存储地址是220 ,则元素A[5][5]的存储地址是200</td>
		<td>5058425-2</td>
		<td>已知二维数组A按行优先方式存储，每个元素占用1个存储单元。若元素A[0][0]的存储地址是100, A[3][3]的存储地址是220 ,则元素A[5][5]的存储地址是300</td>
		<td>5058425-3</td>
		<td>设置界地址保护和栈保护是分区分配内存管理方式的主要保护措施</td>
		<td>5058426-1</td>
		<td>一棵完全二叉树第六层有8个叶结点，则结点个数最多有111个（根为第一层）</td>
		<td>5058426-2</td>
		<td>一棵完全二叉树第六层有8个叶结点，则该二叉树的第7层结点个数为48个（根为第一层）</td>
		<td>5058426-3</td>
		<td>一棵完全二叉树第六层有8个叶结点，则该二叉树的第6层结点个数为48个（根为第一层）</td>
		<td>5058427</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5067755-1</td>
		<td>快速排序在最好情况下的时间复杂度为O(n^2)</td>
		<td>5067755-2</td>
		<td>若一个栈的入栈序列为1、2、3、...、N，输出序列的第一个元素是i，则第j个输出的元素是i-j</td>
		<td>5058424-2,5058424-3,5058425-1,5058425-3,5058426-3,5067755-1,5067755-2</td>
	</tr>
	<tr>
		<td>1542659</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5058442-1</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5058442-2</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>5058443-1</td>
		<td>若采用三元组表存储结构存储稀疏矩阵M，则除三元组外，还需要保存矩阵M的行数和列数</td>
		<td>5058443-2</td>
		<td>若采用三元组表存储结构存储稀疏矩阵M，则除三元组外，还需要保存矩阵M的非零行数和列数</td>
		<td>5058444-1</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td>5058444-2</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>5058445</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5058446-1</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、访问控制机制、应用程序签名机制等</td>
		<td>5058446-2</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、数据保护机制、应用程序签名机制等</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058442-2,5058443-2,5058444-1,5058445</td>
	</tr>
	<tr>
		<td>1542661</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1542662</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5067607-1</td>
		<td>若将101.200.16.0/20划分为4个子网，则可能的最小子网的可分配IP地址数是254</td>
		<td>5067607-2</td>
		<td>线性表若采用链式存储结构时，则内存中可用存储单元的地址连续或不连续都可以</td>
		<td>5067608-1</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5067608-2</td>
		<td>以太网二层交换机在进行数据转发时，根据STP端口表来决定目的端口</td>
		<td>5067609-1</td>
		<td>对大部分元素已有序的数组进行排序时，直接插入排序比简单选择排序效率更高，其原因是直接插入排序过程中元素之间比较次数更少</td>
		<td>5067609-2</td>
		<td>设数组A[]={93,946,372,9,146,151,301,485,236,327,43,892}，采用LSD基数排序将A排成升序序列，第一趟分配、收集后，元素372之前的元素是301</td>
		<td>5067609-3</td>
		<td>设数组A[]={93,946,372,9,146,151,301,485,236,327,43,892}，采用LSD基数排序将A排成升序序列，第一趟分配、收集后，元素372之后的元素是301</td>
		<td>5067610-1</td>
		<td>用三叉链表作为二叉树的存储结构，当二叉树有n个结点时，有n+2个空指针</td>
		<td>5067610-2</td>
		<td>用三叉链表作为二叉树的存储结构，当二叉树有n个结点时，有n+1个空指针</td>
		<td>5067610-3</td>
		<td>已知初始为空的队列Q的一端仅能进行入队操作，另外一端既能进行入队操作又能进行出队操作。若Q的入队序列是1, 2, 3, 4, 5，则4, 1, 3, 2, 5是可能得到的出队序列</td>
		<td>5067610-4</td>
		<td>已知初始为空的队列Q的一端仅能进行入队操作，另外一端既能进行入队操作又能进行出队操作。若Q的入队序列是1, 2, 3, 4, 5，则4, 2, 3, 1, 5是可能得到的出队序列</td>
		<td>5067611</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>5067607-1,5067608-2,5067609-3,5067610-2,5067610-3,5067611</td>
	</tr>
	<tr>
		<td>1542665</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>5058462-1</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>5058462-2</td>
		<td>在FASTBOOT模式下长按电源键约7-15秒重启进入系统</td>
		<td>5058463</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>5058464-1</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5058464-2</td>
		<td>部分机型在FASTBOOT模式下插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5058465</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058462-2,5058463,5058464-1</td>
	</tr>
	<tr>
		<td>1542664</td>
		<td>请简述对“小米BL解锁申请”的看法</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1542803</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1542804</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.02.20
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8529246) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/73)
- 答题链接(更新): https://m.beehive.miui.com/2CYcdd6kRoPhFQiAjg3Knw/
- 题目数量(更新): 15 (必答题) + 2 (选答题)
- 合格分数: 86
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2024 年 2 月 20 日 00:00 - 2024 年 2 月 26 日 23:59
- 注(更新):
  1. 若选项 ID 后带有 -1/-2/-3 等后缀，则表明对应的选项描述在答题开放期间曾被小米反复修改，答题时还请注意细节，耐心比对;
  2. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  3. 未正确上传题目 1542661 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  4. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  5. 因小米不再标注【填空题】和【多项填空题】的分值，且增加了选答题，**无法再确定客观题满分分数**;
  6. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  7. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  8. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  9. 已答题账号在 7 天内无法重新答题;
  10. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. BL 解锁危害多，BL 解锁可能造成各类 App 无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请 BL 解锁;
  2. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  3. 您提交问卷时的实时成绩仅为【选择题得分】;
  4. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  5. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  6. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  7. 等级未达 5 段，无法展示成绩;
  8. 答题超时提交，无法展示成绩;
  9. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="22">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1542647</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5058406</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5058407</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5058408</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058406,5058407,5058408</td>
	</tr>
	<tr>
		<td>1542648</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5058409</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5058410</td>
		<td>出现被判定为作弊的行为</td>
		<td>5058411</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5058412</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5058413</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058409,5058410,5058411,5058412,5058413</td>
	</tr>
	<tr>
		<td>1542649</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5058414</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5058415</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5058416</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5058417</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，不会肆意谩骂</td>
		<td>5058418</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058414,5058415,5058416,5058417,5058418</td>
	</tr>
	<tr>
		<td>1544598</td>
		<td>BL解锁危害多，BL解锁可能造成各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况，因此强烈建议您非必要情况不申请BL解锁。请问您是否已经知悉以上风险和危害，并愿意承担以上全部风险和危害？</td>
		<td>单选题</td>
		<td>5065565</td>
		<td>本人愿意承担以上全部风险和危害，接受各类App无法正常使用、个人数据信息泄露、手机变砖、资产损失等情况</td>
		<td>5065566</td>
		<td>本人不愿意承担以上全部风险和危害，立即关闭界面，停止答题和申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5065565</td>
	</tr>
	<tr>
		<td>1542653</td>
		<td>请简述线刷和卡刷的步骤</td>
		<td>多项填空题</td>
		<td>327666</td>
		<td>线刷</td>
		<td>327667</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>327666,327667</td>
	</tr>
	<tr>
		<td>1542655</td>
		<td>请简述手机BL解锁后可能产生的风险</td>
		<td>多项填空题</td>
		<td>327702</td>
		<td>风险1</td>
		<td>327703</td>
		<td>风险2</td>
		<td>327704</td>
		<td>风险3</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>327702,327703,327704</td>
	</tr>
	<tr>
		<td>1542656</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>5058433</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5058434</td>
		<td>MBR: verify success!</td>
		<td>5058435</td>
		<td>remount failed</td>
		<td>5058436</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058436</td>
	</tr>
	<tr>
		<td>1542663</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>5058457</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>5058458</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>5058459</td>
		<td>fastboot reboot：重启手机</td>
		<td>5058460</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>5058461</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058459,5058460</td>
	</tr>
	<tr>
		<td>1542654</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5058428</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5058429</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5058430</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5058431</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5058432</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058428,5058429,5058432</td>
	</tr>
	<tr>
		<td>1542652</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5058423</td>
		<td>若采用三元组表存储结构存储系数矩阵M，则除三元组外，还需要保存M中包含非零元素的行数和列数</td>
		<td>5058424-1</td>
		<td>已知初始为空的队列Q的一端仅能进行入队操作，另外一端既能进行入队操作又能进行出队操作。若Q的入队序列是1, 2, 3, 4, 5，则4, 2, 1, 3, 5是可能得到的出队序列</td>
		<td>5058424-2</td>
		<td>已知初始为空的队列Q的一端仅能进行入队操作，另外一端既能进行入队操作又能进行出队操作。若Q的入队序列是1, 2, 3, 4, 5，则4, 1, 3, 2, 5是可能得到的出队序列</td>
		<td>5058425-1</td>
		<td>已知二维数组A按行优先方式存储，每个元素占用1个存储单元。若元素A[0][0]的存储地址是100, A[3][3]的存储地址是220 ,则元素A[5][5]的存储地址是300</td>
		<td>5058425-2</td>
		<td>已知二维数组A按行优先方式存储，每个元素占用1个存储单元。若元素A[0][0]的存储地址是100, A[3][3]的存储地址是220 ,则元素A[5][5]的存储地址是200</td>
		<td>5058426-1</td>
		<td>可以将大根堆（至少含2个元素）看成是一棵二叉排序树</td>
		<td>5058426-2</td>
		<td>一棵完全二叉树第六层有8个叶结点，则结点个数最多有112个（根为第一层）</td>
		<td>5058426-3</td>
		<td>一棵完全二叉树第六层有8个叶结点，则结点个数最多有111个（根为第一层）</td>
		<td>5058427</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5067755-1</td>
		<td>快速排序在最坏情况下的时间复杂度为O(n)</td>
		<td>5067755-2</td>
		<td>快速排序在最好情况下的时间复杂度为O(n^2)</td>
		<td>5058423,5058424-2,5058425-2,5058426-1,5058426-2,5067755-1,5067755-2</td>
	</tr>
	<tr>
		<td>1542659</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5058442</td>
		<td>9008模式下的刷机比fastboot模式下的刷机更加彻底</td>
		<td>5058443-1</td>
		<td>OpenVAS是一个开放式漏洞评估系统，也可以说它是一个包含着相关工具的网络扫描器，主要用来检测远程系统和应用程序中的安全漏洞</td>
		<td>5058443-2</td>
		<td>若采用三元组表存储结构存储稀疏矩阵M，则除三元组外，还需要保存矩阵M的行数和列数</td>
		<td>5058444</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td>5058445</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>5058446</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、访问控制机制、应用程序签名机制等</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058442,5058443-1,5058443-2,5058446</td>
	</tr>
	<tr>
		<td>1542661</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1542662</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5067607-1</td>
		<td>若将101.200.16.0/20划分为5个子网，则可能的最小子网的可分配IP地址数是255</td>
		<td>5067607-2</td>
		<td>若将101.200.16.0/20划分为5个子网，则可能的最小子网的可分配IP地址数是254</td>
		<td>5067608</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5067609</td>
		<td>对大部分元素已有序的数组进行排序时，直接插入排序比简单选择排序效率更高，其原因是直接插入排序过程中元素之间比较次数更少</td>
		<td>5067610-1</td>
		<td>若三叉树T有244个结点（叶结点的高度为1），则T的高度至少是7</td>
		<td>5067610-2</td>
		<td>若三叉树T有244个结点（叶结点的高度为1），则T的高度至少是6</td>
		<td>5067610-3</td>
		<td>用三叉链表作为二叉树的存储结构，当二叉树有n个结点时，有n+1个空指针</td>
		<td>5067610-4</td>
		<td>用三叉链表作为二叉树的存储结构，当二叉树有n个结点时，有n+2个空指针</td>
		<td>5067611</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5067607-2,5067608,5067609,5067610-2,5067610-4</td>
	</tr>
	<tr>
		<td>1542665</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>5058462</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>5058463</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>5058464</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5058465</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5058463,5058464</td>
	</tr>
	<tr>
		<td>1542664</td>
		<td>请简述对“小米BL解锁申请”的看法</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1542803</td>
		<td>如您在其他技术交流平台有较多贡献（如：GitHub等），可将相关信息进行填写，并在下一题上传相关截图凭证</td>
		<td>填空题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1542804</td>
		<td>请将上一题填写的其他技术交流平台贡献信息，上传相关截图凭证，以供审核使用</td>
		<td>文件题</td>
		<td>0</td>
		<td>非必填，此题的有效填写会提升审核通过率</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
</table>

## 2024.01.31、2024.02.01、2024.02.02、2024.02.05、2024.02.06
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8443406) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/48)
- 答题链接(更新): https://m.beehive.miui.com/cwkjfxs5jE2Nl002D6ENGA/
- 题目数量: 20
- 合格分数: 86，其中【填空题】和【多项填空题】占 32 分
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2024 年 1 月 31 日上午 10:00 - 2024 年 2 月 6 日下午 18:00
- 注(更新):
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1534130 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 经用户测试验证，本期客观题为满分答案（68 分）;
  4. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  5. 通过「小米社区」APP 以外的方式答题，账号将有可能:
    - 被永久拉入 BL 解锁风控黑名单，无法对 MIUI 以及 HyperOS 进行绑定和解锁操作;
    - 被永久拉入「小米社区」访问受限名单，无法浏览社区内容，也无法使用包括内测申请、BL 解锁申请等任何社区相关功能;
    - 被踢出「小米社区」中的所有内测项目、收回已获取到的 HyperOS 解锁权限、《BL 解锁答题资格测试》分数清零等。
  6. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  7. 已答题账号在 7 天内无法重新答题;
  8. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  6. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  7. 您提交问卷时的实时成绩仅为【选择题得分】;
  8. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  9. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1534116</td>
		<td>以下关于《小米账号使用协议》和《BL解锁申请资格答题测试》的相关要求，说法正确的有</td>
		<td>多选题</td>
		<td>5031232</td>
		<td>如果小米发现您并非该账号初始申请注册人，小米有权在未经通知的情况下终止您使用该账号</td>
		<td>5031233</td>
		<td>当您获得BL解锁资格后，通过其他途径参与本答题测试，会根据行为严重程度，面临取消资格、账号终止使用等处罚</td>
		<td>5031234</td>
		<td>当您小米社区等级未达到5段及以上时，通过其他途径参与本答题测试，会根据行为严重程度，面临账号终止使用等处罚</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5031232,5031233,5031234</td>
	</tr>
	<tr>
		<td>1534117</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5029895</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5029896</td>
		<td>出现被判定为作弊的行为</td>
		<td>5029897</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5029898</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5029899</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td>5029895,5029896,5029897,5029898,5029899</td>
	</tr>
	<tr>
		<td>1534118</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5029900</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5029901</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5029902</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5029903</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但会肆意谩骂</td>
		<td>5029904</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td>5029900,5029901,5029902,5029904</td>
	</tr>
	<tr>
		<td>1534119</td>
		<td>通过fastboot -r ANTI命令可以输出ANTI版本号</td>
		<td>单选题</td>
		<td>5029905</td>
		<td>错误</td>
		<td>5029906</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5029905</td>
	</tr>
	<tr>
		<td>1534120</td>
		<td>通过流的read()方法读取数据，返回1表示流结尾</td>
		<td>单选题</td>
		<td>5029907</td>
		<td>正确</td>
		<td>5029908</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5029908</td>
	</tr>
	<tr>
		<td>1534121</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5029909</td>
		<td>在多线程开发中，对多个同步代码的同步锁，按照以一定的顺序依次获取，可以有效避免死锁发生</td>
		<td>5029910</td>
		<td>对顺序存储的线性表，设其长度为n，在任何位置上插入或删除操作都是等概率的。插入一个元素时平均要移动表中的(n-1)/2个元素</td>
		<td>5029911</td>
		<td>Xiaomi/Redmi手机，一般长按电源键即可进入Recovery</td>
		<td>5029912</td>
		<td>使用数组实现的栈是线性存储结构</td>
		<td>5029913</td>
		<td>队列和栈都可以用链表来实现</td>
		<td>5029909,5029912,5029913</td>
	</tr>
	<tr>
		<td>1534122</td>
		<td>请简述线刷和卡刷的步骤（8分）</td>
		<td>多项填空题</td>
		<td>326566</td>
		<td>线刷</td>
		<td>326567</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>326566,326567</td>
	</tr>
	<tr>
		<td>1534123</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5029914</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5029915</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5029916</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5029917</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5029918</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td>5029914,5029915,5029918</td>
	</tr>
	<tr>
		<td>1534124</td>
		<td>请简述手机BL解锁后可能产生的风险（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1534125</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>5029919</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5029920</td>
		<td>MBR: verify success!</td>
		<td>5029921</td>
		<td>remount failed</td>
		<td>5029922</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td>5029922</td>
	</tr>
	<tr>
		<td>1534126</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5029923</td>
		<td>DES、AES、RC4都是对称加密算法</td>
		<td>5029924</td>
		<td>认证常用的参数有口令、标识符、生物特征等，认证允许第三方参与验证过程</td>
		<td>5029925</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>5029926</td>
		<td>密钥为256位的AES需要16个子密钥</td>
		<td>5029927</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>5029923,5029924,5029925,5029927</td>
	</tr>
	<tr>
		<td>1534127</td>
		<td>简述以下几款第三方recovery的特点和区别（8分）</td>
		<td>多项填空题</td>
		<td>326568</td>
		<td>Team Win Recovery Project</td>
		<td>326569</td>
		<td>Pitch Black Recovery Project</td>
		<td>326570</td>
		<td>OrangeFox Recovery</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>326568,326569,326570</td>
	</tr>
	<tr>
		<td>1534128</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5029928</td>
		<td>端口扫描是通过与目标系统的TCP/IP端口连接，并查看该系统处于监听或运行状态的服务</td>
		<td>5029929</td>
		<td>网络的拓扑结构是逻辑结构，与实际设备的物理连接没有必然的关系</td>
		<td>5029930</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>5029931</td>
		<td>Blowfish是一个128位分组及可变密钥长度的分组密码算法</td>
		<td>5029932</td>
		<td>OpenVAS是一个开放式漏洞评估系统，也可以说它是一个包含着相关工具的网络扫描器，主要用来检测远程系统和应用程序中的安全漏洞</td>
		<td>5029930,5029931</td>
	</tr>
	<tr>
		<td>1534129</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5029933</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>5029934</td>
		<td>RAM存储器在掉电状态下，不保留其内容</td>
		<td>5029935</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5029936</td>
		<td>HAProxy配置中包含的组件有frontend、daemon、listen、global等</td>
		<td>5029937</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td>5029934,5029935</td>
	</tr>
	<tr>
		<td>1534130</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1534131</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5029938</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5029939</td>
		<td>软件测试最基础性的测试是单元测试</td>
		<td>5029940</td>
		<td>衡量模块的独立性的两个标准是内聚和外联</td>
		<td>5029941</td>
		<td>UML不属于面向对象开发方法</td>
		<td>5029942</td>
		<td>构造函数的返回类型只能是void型</td>
		<td>5029940,5029942</td>
	</tr>
	<tr>
		<td>1534132</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>5029943</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>5029944</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>5029945</td>
		<td>fastboot reboot：重启手机</td>
		<td>5029946</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>5029947</td>
		<td>fastboot delete：擦除所有分区</td>
		<td>5029945,5029946</td>
	</tr>
	<tr>
		<td>1534133</td>
		<td>请简述对“小米BL解锁申请”的看法（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1534134</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>5029948</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>5029949</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>5029950</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5029951</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td>5029949,5029950</td>
	</tr>
	<tr>
		<td>1534135</td>
		<td>关于本问卷中的填空题，请您务必认真阅读并了解以下注意事项</td>
		<td>多选题</td>
		<td>5029952</td>
		<td>本问卷中的填空题共计32分，采用人工阅卷方式，人工阅卷预计在【下一周期答题开始前】完成</td>
		<td>5029953</td>
		<td>您提交问卷时，系统所显示的成绩仅为【选择题得分】</td>
		<td>5029954</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【达到】分数线，系统会显示您的【选择题和填空题的总分】</td>
		<td>5029955</td>
		<td>人工阅卷后，如您的  选择题+填空题 总分【未达到】分数线，系统仅显示您的【选择题得分】</td>
		<td>5029956</td>
		<td>请您及时关注答题分数变化，如您的答题分数达到分数线，请您务必在下一答题周期开始前申请解锁资格</td>
		<td>5029952,5029953,5029954,5029955,5029956</td>
	</tr>
</table>

## 2024.01.24、2024.01.25、2024.01.26、2024.01.29、2024.01.30
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8253243) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/43)
- 答题链接(更新): https://m.beehive.miui.com/2502bGI1tPhaATYR1KQK8g/
- 题目数量: 20
- 合格分数(更新): 86，其中【填空题】和【多项填空题】占 32 分
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2024 年 1 月 24 日上午 10:00 - 2024 年 1 月 30 日下午 18:00
- 注(更新):
  1. 【填空题】和【多项填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1529956 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 经用户测试验证，本期客观题为满分答案（68 分）;
  4. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  5. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  6. 已答题账号在 7 天内无法重新答题;
  7. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  6. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  7. 您提交问卷时的实时成绩仅为【选择题得分】;
  8. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  9. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1529942</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>5017234</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>5017235</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>5017236</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>5017237</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>5017238</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>5017239</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>5017234,5017235,5017236,5017237,5017238,5017239</td>
	</tr>
	<tr>
		<td>1529943</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5017240</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5017241</td>
		<td>出现被判定为作弊的行为</td>
		<td>5017242</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5017243</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5017244</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5017240,5017241,5017242,5017243,5017244</td>
	</tr>
	<tr>
		<td>1529944</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5017245</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5017246</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5017247</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5017248</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但会肆意谩骂</td>
		<td>5017249</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5017245,5017246,5017247,5017249</td>
	</tr>
	<tr>
		<td>1529949</td>
		<td>通过fastboot -r ANTI命令可以输出ANTI版本号</td>
		<td>单选题</td>
		<td>5017266</td>
		<td>错误</td>
		<td>5017267</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5017266</td>
	</tr>
	<tr>
		<td>1529946</td>
		<td>通过流的read()方法读取数据，返回-1表示流结尾</td>
		<td>单选题</td>
		<td>5017254</td>
		<td>正确</td>
		<td>5017255</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5017254</td>
	</tr>
	<tr>
		<td>1529947</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5017256</td>
		<td>在多线程开发中，对多个同步代码的同步锁，按照以一定的顺序依次获取，可以有效避免死锁发生</td>
		<td>5017257</td>
		<td>对顺序存储的线性表，设其长度为n，在任何位置上插入或删除操作都是等概率的。插入一个元素时平均要移动表中的(n-1)/2个元素</td>
		<td>5017258</td>
		<td>Xiaomi/Redmi手机，一般长按电源键即可进入Recovery</td>
		<td>5017259</td>
		<td>使用数组实现的栈是线性存储结构</td>
		<td>5017260</td>
		<td>队列和栈都可以用链表来实现</td>
		<td></td>
		<td></td>
		<td>5017257,5017258</td>
	</tr>
	<tr>
		<td>1530139</td>
		<td>请简述线刷和卡刷的步骤（8分）</td>
		<td>多项填空题</td>
		<td>325767</td>
		<td>线刷</td>
		<td>325768</td>
		<td>卡刷</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>325767,325768</td>
	</tr>
	<tr>
		<td>1529948</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>5017261</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5017262</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5017263</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5017264</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5017265</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>5017261,5017262,5017265</td>
	</tr>
	<tr>
		<td>1529950</td>
		<td>请简述手机BL解锁后可能产生的风险（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1529951</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>5017268</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5017269</td>
		<td>MBR: verify success!</td>
		<td>5017270</td>
		<td>remount failed</td>
		<td>5017271</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5017271</td>
	</tr>
	<tr>
		<td>1529953</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5017277</td>
		<td>DES、AES、RC4都是对称加密算法</td>
		<td>5017278</td>
		<td>认证常用的参数有口令、标识符、生物特征等，认证允许第三方参与验证过程</td>
		<td>5017279</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>5017280</td>
		<td>密钥为256位的AES需要16个子密钥</td>
		<td>5017281</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td></td>
		<td></td>
		<td>5017277,5017278,5017279,5017281</td>
	</tr>
	<tr>
		<td>1530142</td>
		<td>简述以下几款第三方recovery的特点和区别（8分）</td>
		<td>多项填空题</td>
		<td>325769</td>
		<td>Team Win Recovery Project</td>
		<td>325770</td>
		<td>Pitch Black Recovery Project</td>
		<td>325771</td>
		<td>OrangeFox Recovery</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>325769,325770,325771</td>
	</tr>
	<tr>
		<td>1529954</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5017282</td>
		<td>端口扫描是通过与目标系统的TCP/IP端口连接，并查看该系统处于监听或运行状态的服务</td>
		<td>5017283</td>
		<td>网络的拓扑结构是逻辑结构，与实际设备的物理连接没有必然的关系</td>
		<td>5017284</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>5017285</td>
		<td>Blowfish是一个128位分组及可变密钥长度的分组密码算法</td>
		<td>5017864</td>
		<td>OpenVAS是一个开放式漏洞评估系统，也可以说它是一个包含着相关工具的网络扫描器，主要用来检测远程系统和应用程序中的安全漏洞</td>
		<td></td>
		<td></td>
		<td>5017284,5017285</td>
	</tr>
	<tr>
		<td>1529955</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5017287</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>5017288</td>
		<td>RAM存储器在掉电状态下，不保留其内容</td>
		<td>5017289</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5017290</td>
		<td>HAProxy配置中包含的组件有frontend、daemon、listen、global等</td>
		<td>5017291</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行二清</td>
		<td></td>
		<td></td>
		<td>5017288,5017289</td>
	</tr>
	<tr>
		<td>1529956</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1529957</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5017292</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5017294</td>
		<td>软件测试最基础性的测试是单元测试</td>
		<td>5017295</td>
		<td>衡量模块的独立性的两个标准是内聚和外联</td>
		<td>5017296</td>
		<td>UML不属于面向对象开发方法</td>
		<td>5017957</td>
		<td>构造函数的返回类型只能是void型</td>
		<td></td>
		<td></td>
		<td>5017295,5017957</td>
	</tr>
	<tr>
		<td>1529959</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>5017301</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>5017302</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>5017303</td>
		<td>fastboot reboot：重启手机</td>
		<td>5017304</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>5017305</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>5017303,5017304</td>
	</tr>
	<tr>
		<td>1529960</td>
		<td>请简述对“小米BL解锁申请”的看法（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1529945</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>5017250</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>5017251</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>5017252</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5017253</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5017251,5017252</td>
	</tr>
	<tr>
		<td>1529961</td>
		<td>关于本问卷中的填空题，请您务必认真阅读并了解以下注意事项</td>
		<td>多选题</td>
		<td>5017306</td>
		<td>本问卷中的填空题共计32分，采用人工阅卷方式，人工阅卷预计在【下一周期答题开始前】完成</td>
		<td>5017307</td>
		<td>您提交问卷时，系统所显示的成绩仅为【选择题得分】</td>
		<td>5017308</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【达到】分数线，系统会显示您的【选择题和填空题的总分】</td>
		<td>5017309</td>
		<td>人工阅卷后，如您的  选择题+填空题 总分【未达到】分数线，系统仅显示您的【选择题得分】</td>
		<td>5017310</td>
		<td>请您及时关注答题分数变化，如您的答题分数达到分数线，请您务必在下一答题周期开始前申请解锁资格</td>
		<td></td>
		<td></td>
		<td>5017306,5017307,5017308,5017309,5017310</td>
	</tr>
</table>

## 2024.01.17、2024.01.18、2024.01.19、2024.01.22、2024.01.23
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8229152) [题目讨论](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/38)
- 答题链接(更新): https://m.beehive.miui.com/KIbd1XXJgmlTEw9-xJ1ikw/
- 题目数量: 20
- 合格分数: 86，其中【填空题】占 16 分
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2024 年 1 月 17 日上午 10:00 - 2024 年 1 月 23 日下午 18:00
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1525370 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  5. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  6. 已答题账号在 7 天内无法重新答题;
  7. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  6. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  7. 您提交问卷时的实时成绩仅为【选择题得分】;
  8. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  9. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1525356</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>5003542</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>5003543</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>5003544</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>5003545</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>5003546</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>5003547</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>5003542,5003543,5003544,5003545,5003546,5003547</td>
	</tr>
	<tr>
		<td>1525357</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>5003548</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>5003549</td>
		<td>出现被判定为作弊的行为</td>
		<td>5003550</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>5003551</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>5003552</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>5003548,5003549,5003550,5003551,5003552</td>
	</tr>
	<tr>
		<td>1525358</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>5003553</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>5003554</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>5003555</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>5003556</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>5003557</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，不会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>5003553,5003554,5003555,5003556,5003557</td>
	</tr>
	<tr>
		<td>1525359</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>5003558</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>5003559</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>5003560</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>5003561</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5003559,5003560</td>
	</tr>
	<tr>
		<td>1525361</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>5003562</td>
		<td>正确</td>
		<td>5003563</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5003563</td>
	</tr>
	<tr>
		<td>1525362</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5003564</td>
		<td>SSL协议属于网络层协议</td>
		<td>5003565</td>
		<td>FDDI光纤分布式数据接口使用有容错能力的双环拓扑</td>
		<td>5003566</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和音量减键即可进入Recovery</td>
		<td>5003567</td>
		<td>局域网的传输速率一般比广域网高，但误码率也较高</td>
		<td>5003568</td>
		<td>adb的全称是Android Debug Bridge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>5003564,5003566,5003567</td>
	</tr>
	<tr>
		<td>1525363</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>5003569</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>5003570</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>5003571</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>5003572</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>5003573</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>5003571,5003572</td>
	</tr>
	<tr>
		<td>1525364</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>5003574</td>
		<td>错误</td>
		<td>5003575</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5003574</td>
	</tr>
	<tr>
		<td>1525360</td>
		<td>请简述手机BL解锁后可能产生的风险（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1525365</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>5003576</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>5003577</td>
		<td>MBR: verify success!</td>
		<td>5003578</td>
		<td>remount failed</td>
		<td>5003579</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5003579</td>
	</tr>
	<tr>
		<td>1525366</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5003580</td>
		<td>以太网二层交换机在进行数据转发时，根据STP端口表来决定目的端口</td>
		<td>5003581</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>5003582</td>
		<td>中继器和网关属于物理层设备</td>
		<td>5003583</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td>5004978</td>
		<td>数据通信中将二进制数据位传输时出错的概率称为误码率</td>
		<td></td>
		<td></td>
		<td>5003580,5003581,5003582,5003583</td>
	</tr>
	<tr>
		<td>1525367</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5003584</td>
		<td>并非所有小米手机均可使用9008模式</td>
		<td>5003585</td>
		<td>认证常用的参数有口令、标识符、生物特征等，但认证不允许第三方参与验证过程</td>
		<td>5003586</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>5003587</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>5003588</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td></td>
		<td></td>
		<td>5003584,5003586,5003587,5003588</td>
	</tr>
	<tr>
		<td>1525368</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5003589</td>
		<td>SNMP工作在应用层</td>
		<td>5003590</td>
		<td>DNS工作在应用层</td>
		<td>5003591</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>5003592</td>
		<td>网络的拓扑结构是逻辑结构，与实际设备的物理连接没有必然的关系</td>
		<td>5003593</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>5003591,5003593</td>
	</tr>
	<tr>
		<td>1525369</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>5003594</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>5003595</td>
		<td>RAM存储器在掉电状态下，不保留其内容</td>
		<td>5003596</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>5003597</td>
		<td>HAProxy配置中包含的组件有frontend、daemon、listen、global等</td>
		<td>5003598</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td></td>
		<td></td>
		<td>5003594,5003597</td>
	</tr>
	<tr>
		<td>1525370</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1525372</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>5003599</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>5003600</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>5003601</td>
		<td>软件测试最基础性的测试是集成测试</td>
		<td>5003602</td>
		<td>衡量模块的独立性的两个标准是内聚和耦合</td>
		<td>5003603</td>
		<td>UML不属于面向对象开发方法</td>
		<td></td>
		<td></td>
		<td>5003599,5003602,5003603</td>
	</tr>
	<tr>
		<td>1525373</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>5003604</td>
		<td>fastboot -w ANTI</td>
		<td>5003605</td>
		<td>fastboot -r ANTI</td>
		<td>5003606</td>
		<td>fastboot getvar anti</td>
		<td>5003607</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>5003606</td>
	</tr>
	<tr>
		<td>1525374</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>5003608</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>5003609</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>5003610</td>
		<td>fastboot reboot：重启手机</td>
		<td>5003611</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>5003612</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>5003608,5003609,5003612</td>
	</tr>
	<tr>
		<td>1525371</td>
		<td>请简述对“小米BL解锁申请”的看法（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1525375</td>
		<td>关于本问卷中的填空题，请您务必认真阅读并了解以下注意事项</td>
		<td>多选题</td>
		<td>5003613</td>
		<td>本问卷中的填空题共计16分，采用人工阅卷方式，人工阅卷预计在【下一周期答题开始前】完成</td>
		<td>5003614</td>
		<td>您提交问卷时，系统所显示的成绩仅为【选择题得分】</td>
		<td>5003615</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【达到】分数线，系统会显示您的【选择题和填空题的总分】</td>
		<td>5003616</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【未达到】分数线，系统仅显示您的【选择题得分】</td>
		<td>5003617</td>
		<td>请您及时关注答题分数变化，如您的答题分数达到分数线，请您务必在下一答题周期开始前申请解锁资格</td>
		<td></td>
		<td></td>
		<td>5003613,5003614,5003615,5003616,5003617</td>
	</tr>
</table>

## 2024.01.10、2024.01.11、2024.01.12、2024.01.15、2024.01.16
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8076534)
- 答题链接(更新): https://m.beehive.miui.com/rEjxjt0Ow_WNC_hr99hoZQ/
- 题目数量: 20
- 合格分数: 86，其中【填空题】占 16 分
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2024 年 1 月 10 日上午 10:00 - 2024 年 1 月 16 日下午 18:00
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1518683 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 经用户测试验证，本期客观题为满分答案（84 分）;
  4. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  5. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  6. 已答题账号在 7 天内无法重新答题;
  7. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  6. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  7. 您提交问卷时的实时成绩仅为【选择题得分】;
  8. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  9. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1518669</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4981260</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4981261</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，但不影响后续申请</td>
		<td>4981262</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4981263</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4981264</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4981265</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4981260,4981262,4981263,4981264,4981265</td>
	</tr>
	<tr>
		<td>1518670</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4981266</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4981267</td>
		<td>出现被判定为作弊的行为</td>
		<td>4981268</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4981269</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4981270</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4981266,4981267,4981268,4981269,4981270</td>
	</tr>
	<tr>
		<td>1518671</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4981271</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4981272</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4981273</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4981274</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4981275</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，也会去利用“资源”去“谋利”</td>
		<td></td>
		<td></td>
		<td>4981271,4981272,4981273,4981274</td>
	</tr>
	<tr>
		<td>1518672</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4981276</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4981277</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4981278</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4981279</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4981277,4981278</td>
	</tr>
	<tr>
		<td>1518673</td>
		<td>请简述手机BL解锁后可能产生的风险（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1518674</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>单选题</td>
		<td>4981280</td>
		<td>正确</td>
		<td>4981281</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4981281</td>
	</tr>
	<tr>
		<td>1518675</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4981282</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td>4981283</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4981284</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4981285</td>
		<td>基于MD4和MD5设计的S/Key口令是一种一次性口令生成方案，它可以对访问者的身份与设备进行综合验证，该方案可以对抗穷举攻击</td>
		<td>4981286</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4981283,4981285,4981286</td>
	</tr>
	<tr>
		<td>1518676</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4981287</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4981288</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4981289</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4981290</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4981291</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4981287,4981288,4981291</td>
	</tr>
	<tr>
		<td>1518677</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4981292</td>
		<td>错误</td>
		<td>4981293</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4981292</td>
	</tr>
	<tr>
		<td>1518678</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4981294</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4981295</td>
		<td>MBR: verify success!</td>
		<td>4981296</td>
		<td>remount failed</td>
		<td>4981297</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4981297</td>
	</tr>
	<tr>
		<td>1518679</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4981298</td>
		<td>在白盒法技术测试用例的设计中，语句覆盖是必须要满足的覆盖标准</td>
		<td>4981299</td>
		<td>inetd是UNIX系统最重要的网络服务进程</td>
		<td>4981300</td>
		<td>Android提供了Handler和Looper来满足线程间的通信，其中Looper类用来管理特定线程内对象之间的消息交换</td>
		<td>4981301</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4981298,4981301</td>
	</tr>
	<tr>
		<td>1518680</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4981302</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4981303</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4981304</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4981305</td>
		<td>交换机可以实现从多个端口上接收数据，并根据数据包头部的信息将其转发到正确的目标地址</td>
		<td>4981306</td>
		<td>认证常用的参数有口令、标识符、生物特征等，但认证不允许第三方参与验证过程</td>
		<td></td>
		<td></td>
		<td>4981303,4981305</td>
	</tr>
	<tr>
		<td>1518681</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4981307</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4981308</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4981309</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>4981310</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4981311</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4981308,4981309,4981311</td>
	</tr>
	<tr>
		<td>1518682</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4981312</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>4981313</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4981314</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>4981315</td>
		<td>ServerSocket这个类是实现了一个服务器端的Socket，利用这个类可以监听来自网络的请求</td>
		<td>4981316</td>
		<td>计算机系统中，CPU对主存的访问方式属于随机存取</td>
		<td></td>
		<td></td>
		<td>4981313,4981314,4981315,4981316</td>
	</tr>
	<tr>
		<td>1518683</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1518684</td>
		<td>请简述对“小米BL解锁申请”的看法（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1518685</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4981317</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4981318</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4981319</td>
		<td>软件测试最基础性的测试是集成测试</td>
		<td>4981320</td>
		<td>衡量模块的独立性的两个标准是内聚和耦合</td>
		<td>4981321</td>
		<td>UML不属于面向对象开发方法</td>
		<td></td>
		<td></td>
		<td>4981317,4981320,4981321</td>
	</tr>
	<tr>
		<td>1518686</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4981322</td>
		<td>fastboot -w ANTI</td>
		<td>4981323</td>
		<td>fastboot -r ANTI</td>
		<td>4981324</td>
		<td>fastboot getvar anti</td>
		<td>4981325</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4981324</td>
	</tr>
	<tr>
		<td>1518687</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4981326</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4981327</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4981328</td>
		<td>fastboot reboot：重启手机</td>
		<td>4981329</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>4981330</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>4981326,4981327,4981330</td>
	</tr>
	<tr>
		<td>1518688</td>
		<td>关于本问卷中的填空题，请您务必认真阅读并了解以下注意事项</td>
		<td>多选题</td>
		<td>4981331</td>
		<td>本问卷中的填空题共计16分，采用人工阅卷方式，人工阅卷预计在【下一周期答题开始前】完成</td>
		<td>4981332</td>
		<td>您提交问卷时，系统所显示的成绩仅为【选择题得分】</td>
		<td>4981333</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【达到】分数线，系统会显示您的【选择题和填空题的总分】</td>
		<td>4981334</td>
		<td>人工阅卷后，如您的  选择题+填空题 总分【未达到】分数线，系统仅显示您的【选择题得分】</td>
		<td>4981335</td>
		<td>请您及时关注答题分数变化，如您的答题分数达到分数线，请您务必在下一答题周期开始前申请解锁资格</td>
		<td></td>
		<td></td>
		<td>4981331,4981332,4981333,4981334,4981335</td>
	</tr>
</table>

## 2024.01.08、2024.01.09
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8054771)
- 答题链接: https://m.beehive.miui.com/Ou_Y3tYMxr5Bs11kyQCOww/
- 题目数量: 20
- 合格分数: 86，其中【填空题】占 16 分
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期: 2024 年 1 月 3 日上午 10:00 - 2024 年 1 月 10 日下午 18:00
- 注:
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1511853 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  5. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  6. 已答题账号在 7 天内无法重新答题;
  7. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  6. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  7. 您提交问卷时的实时成绩仅为【选择题得分】;
  8. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  9. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1511841</td>
		<td>【答题注意事项】关于BL解锁说法正确的是</td>
		<td>公告题</td>
		<td>4960773</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4960774</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4960775</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4960776</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4960777</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4960778</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4960773,4960774,4960775,4960776,4960777,4960778</td>
	</tr>
	<tr>
		<td>1511842</td>
		<td>【答题注意事项】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>4960779</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4960780</td>
		<td>出现被判定为作弊的行为</td>
		<td>4960781</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4960782</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4960783</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4960779,4960780,4960781,4960782,4960783</td>
	</tr>
	<tr>
		<td>1511843</td>
		<td>【答题注意事项】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>4960784</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4960785</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4960786</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4960787</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4960788</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4960784,4960785,4960786,4960787,4960788</td>
	</tr>
	<tr>
		<td>1511855</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4960831</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4960832</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4960833</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4960834</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960832,4960833</td>
	</tr>
	<tr>
		<td>1515529</td>
		<td>请简述手机BL解锁后可能产生的风险（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1515587</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>单选题</td>
		<td>4971384</td>
		<td>正确</td>
		<td>4971385</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4971385</td>
	</tr>
	<tr>
		<td>1513735</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4966038</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td>4966039</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4966040</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4966041</td>
		<td>基于MD4和MD5设计的S/Key口令是一种一次性口令生成方案，它可以对访问者的身份与设备进行综合验证，该方案可以对抗穷举攻击</td>
		<td>4966042</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4966038,4966040</td>
	</tr>
	<tr>
		<td>1513718</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4965972</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4965973</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4965974</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4965975</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4965976</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4965972,4965973,4965976</td>
	</tr>
	<tr>
		<td>1511848</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4960809</td>
		<td>错误</td>
		<td>4960810</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960809</td>
	</tr>
	<tr>
		<td>1511849</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4960811</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4960812</td>
		<td>MBR: verify success!</td>
		<td>4960813</td>
		<td>remount failed</td>
		<td>4960814</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960814</td>
	</tr>
	<tr>
		<td>1511850</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960815</td>
		<td>在白盒法技术测试用例的设计中，语句覆盖是必须要满足的覆盖标准</td>
		<td>4960816</td>
		<td>inetd是UNIX系统最重要的网络服务进程</td>
		<td>4960817</td>
		<td>Android提供了Handler和Looper来满足线程间的通信，其中Looper类用来管理特定线程内对象之间的消息交换</td>
		<td>4960819</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960816,4960817</td>
	</tr>
	<tr>
		<td>1511847</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960804</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4960805</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4960806</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4960807</td>
		<td>交换机可以实现从多个端口上接收数据，并根据数据包头部的信息将其转发到正确的目标地址</td>
		<td>4960808</td>
		<td>认证常用的参数有口令、标识符、生物特征等，但认证不允许第三方参与验证过程</td>
		<td></td>
		<td></td>
		<td>4960805,4960807</td>
	</tr>
	<tr>
		<td>1511852</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4960824</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4960825</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4960826</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>4960827</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4960828</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4960825,4960826,4960828</td>
	</tr>
	<tr>
		<td>1511856</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960835</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>4960836</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4960837</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>4960838</td>
		<td>ServerSocket这个类是实现了一个服务器端的Socket，利用这个类可以监听来自网络的请求</td>
		<td>4960839</td>
		<td>计算机系统中，CPU对主存的访问方式属于随机存取</td>
		<td></td>
		<td></td>
		<td>4960836,4960837,4960838,4960839</td>
	</tr>
	<tr>
		<td>1511853</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1515530</td>
		<td>请分别说明卡刷和线刷的步骤（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1511858</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960842</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4960843</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4960844</td>
		<td>软件测试最基础性的测试是集成测试</td>
		<td>4960845</td>
		<td>衡量模块的独立性的两个标准是内聚和耦合</td>
		<td>4960846</td>
		<td>UML不属于面向对象开发方法</td>
		<td></td>
		<td></td>
		<td>4960842,4960845,4960846</td>
	</tr>
	<tr>
		<td>1511861</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4960857</td>
		<td>fastboot -w ANTI</td>
		<td>4960858</td>
		<td>fastboot -r ANTI</td>
		<td>4960859</td>
		<td>fastboot getvar anti</td>
		<td>4960860</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960859</td>
	</tr>
	<tr>
		<td>1513736</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4966043</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4966044</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4966045</td>
		<td>fastboot reboot：重启手机</td>
		<td>4966046</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>4966047</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>4966043,4966044,4966047</td>
	</tr>
	<tr>
		<td>1515588</td>
		<td>【答题注意事项】关于本问卷中的填空题，请您务必认真阅读并了解以下注意事项</td>
		<td>公告题</td>
		<td>4971386</td>
		<td>本问卷中的填空题共计16分，采用人工阅卷方式，人工阅卷预计在【下一周期答题开始前】完成</td>
		<td>4971387</td>
		<td>您提交问卷时，系统所显示的成绩仅为【选择题得分】</td>
		<td>4971388</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【达到】分数线，系统会显示您的【选择题和填空题的总分】</td>
		<td>4971389</td>
		<td>人工阅卷后，如您的  选择题+填空题 总分【未达到】分数线，系统仅显示您的【选择题得分】</td>
		<td>4971390</td>
		<td>请您及时关注答题分数变化，如您的答题分数达到分数线，请您务必在下一答题周期开始前申请解锁资格</td>
		<td></td>
		<td></td>
		<td>4971386,4971387,4971388,4971389,4971390</td>
	</tr>
</table>

## 2024.01.05
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8020935)
- 答题链接: https://m.beehive.miui.com/Ou_Y3tYMxr5Bs11kyQCOww/
- 题目数量(更新): 20（【公告题】x4，【多选题】x9，【单选题】x4，【文件题】x1，【填空题】x2）
- 合格分数(更新): 86，其中【填空题】占 16 分
- 时间限制: 15 分钟，超时结算已回答题目的分数
- 得分有效期: 2024 年 1 月 3 日上午 10:00 - 2024 年 1 月 10 日下午 18:00
- 注(更新):
  1. 【填空题】为人工阅卷评分，所给答案仅供参考;
  2. 未正确上传题目 1511853 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  3. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  4. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  5. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  6. 已答题账号在 7 天内无法重新答题;
  7. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  6. 填空题采用人工阅卷方式，人工阅卷预计在【下一答题周期开始前】完成;
  7. 您提交问卷时的实时成绩仅为【选择题得分】;
  8. 人工阅卷后，如您的【选择题 + 填空题总分】未达到分数线时，您的成绩将仅展示【选择题得分】;
  9. 人工阅卷后，如您的【选择题 + 填空题总分】达到分数线时，您的成绩将展示为【选择题 + 填空题总分】;
  10. 请您充分知晓解锁和刷机存在的风险，并在可承担该风险的情况下申请 Bootloader 解锁。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1511841</td>
		<td>【答题注意事项】关于BL解锁说法正确的是</td>
		<td>公告题</td>
		<td>4960773</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4960774</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4960775</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4960776</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4960777</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4960778</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4960773,4960774,4960775,4960776,4960777,4960778</td>
	</tr>
	<tr>
		<td>1511842</td>
		<td>【答题注意事项】已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>公告题</td>
		<td>4960779</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4960780</td>
		<td>出现被判定为作弊的行为</td>
		<td>4960781</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4960782</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4960783</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4960779,4960780,4960781,4960782,4960783</td>
	</tr>
	<tr>
		<td>1511843</td>
		<td>【答题注意事项】BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>公告题</td>
		<td>4960784</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4960785</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4960786</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4960787</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4960788</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4960784,4960785,4960786,4960787,4960788</td>
	</tr>
	<tr>
		<td>1511855</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4960831</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4960832</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4960833</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4960834</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960832,4960833</td>
	</tr>
	<tr>
		<td>1515529</td>
		<td>请简述Magisk的作用（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1515587</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>单选题</td>
		<td>4971384</td>
		<td>正确</td>
		<td>4971385</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4971385</td>
	</tr>
	<tr>
		<td>1513735</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4966038</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td>4966039</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4966040</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4966041</td>
		<td>基于MD4和MD5设计的S/Key口令是一种一次性口令生成方案，它可以对访问者的身份与设备进行综合验证，该方案可以对抗穷举攻击</td>
		<td>4966042</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4966038,4966040</td>
	</tr>
	<tr>
		<td>1513718</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4965972</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4965973</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4965974</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4965975</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4965976</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4965972,4965973,4965976</td>
	</tr>
	<tr>
		<td>1511848</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4960809</td>
		<td>错误</td>
		<td>4960810</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960809</td>
	</tr>
	<tr>
		<td>1511849</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4960811</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4960812</td>
		<td>MBR: verify success!</td>
		<td>4960813</td>
		<td>remount failed</td>
		<td>4960814</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960814</td>
	</tr>
	<tr>
		<td>1511850</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960815</td>
		<td>在白盒法技术测试用例的设计中，语句覆盖是必须要满足的覆盖标准</td>
		<td>4960816</td>
		<td>inetd是UNIX系统最重要的网络服务进程</td>
		<td>4960817</td>
		<td>Android提供了Handler和Looper来满足线程间的通信，其中Looper类用来管理特定线程内对象之间的消息交换</td>
		<td>4960819</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960816,4960817</td>
	</tr>
	<tr>
		<td>1511847</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960804</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4960805</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4960806</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4960807</td>
		<td>交换机可以实现从多个端口上接收数据，并根据数据包头部的信息将其转发到正确的目标地址</td>
		<td>4960808</td>
		<td>认证常用的参数有口令、标识符、生物特征等，但认证不允许第三方参与验证过程</td>
		<td></td>
		<td></td>
		<td>4960805,4960807</td>
	</tr>
	<tr>
		<td>1511852</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4960824</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4960825</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4960826</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>4960827</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4960828</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4960825,4960826,4960828</td>
	</tr>
	<tr>
		<td>1511856</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960835</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>4960836</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4960837</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能是由于设备没有连接计算机</td>
		<td>4960838</td>
		<td>ServerSocket这个类是实现了一个服务器端的Socket，利用这个类可以监听来自网络的请求</td>
		<td>4960839</td>
		<td>计算机系统中，CPU对主存的访问方式属于随机存取</td>
		<td></td>
		<td></td>
		<td>4960836,4960837,4960838,4960839</td>
	</tr>
	<tr>
		<td>1515530</td>
		<td>请分别说明卡刷和线刷的步骤（8分）</td>
		<td>填空题</td>
		<td>0</td>
		<td>此题为人工阅卷，如出现使用AI生成、复制粘贴、雷同试卷等情况，将视为无效作答，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1511853</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1511858</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960842</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4960843</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4960844</td>
		<td>软件测试最基础性的测试是集成测试</td>
		<td>4960845</td>
		<td>衡量模块的独立性的两个标准是内聚和耦合</td>
		<td>4960846</td>
		<td>UML不属于面向对象开发方法</td>
		<td></td>
		<td></td>
		<td>4960842,4960845,4960846</td>
	</tr>
	<tr>
		<td>1511861</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4960857</td>
		<td>fastboot -w ANTI</td>
		<td>4960858</td>
		<td>fastboot -r ANTI</td>
		<td>4960859</td>
		<td>fastboot getvar anti</td>
		<td>4960860</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960859</td>
	</tr>
	<tr>
		<td>1513736</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4966043</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4966044</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4966045</td>
		<td>fastboot reboot：重启手机</td>
		<td>4966046</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>4966047</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>4966043,4966044,4966047</td>
	</tr>
	<tr>
		<td>1515588</td>
		<td>【答题注意事项】关于本问卷中的填空题，请您务必认真阅读并了解以下注意事项</td>
		<td>公告题</td>
		<td>4971386</td>
		<td>本问卷中的填空题共计16分，采用人工阅卷方式，人工阅卷预计在【下一周期答题开始前】完成</td>
		<td>4971387</td>
		<td>您提交问卷时，系统所显示的成绩仅为【选择题得分】</td>
		<td>4971388</td>
		<td>人工阅卷后，如您的 选择题+填空题 总分【达到】分数线，系统会显示您的【选择题和填空题的总分】</td>
		<td>4971389</td>
		<td>人工阅卷后，如您的  选择题+填空题 总分【未达到】分数线，系统仅显示您的【选择题得分】</td>
		<td>4971390</td>
		<td>请您及时关注答题分数变化，如您的答题分数达到分数线，请您务必在下一答题周期开始前申请解锁资格</td>
		<td></td>
		<td></td>
		<td>4971386,4971387,4971388,4971389,4971390</td>
	</tr>
</table>

## 2024.01.04
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8014492)
- 答题链接(更新): https://m.beehive.miui.com/Ou_Y3tYMxr5Bs11kyQCOww/
- 题目数量: 21
- 合格分数: 86
- 时间限制(更新): 15 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2024 年 1 月 3 日上午 10:00 - 2024 年 1 月 10 日下午 18:00
- 注:
  1. 未正确上传题目 1511853 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  2. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  3. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  4. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  5. 已答题账号在 7 天内无法重新答题;
  6. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1511841</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4960773</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4960774</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4960775</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4960776</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4960777</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4960778</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4960773,4960774,4960775,4960776,4960777,4960778</td>
	</tr>
	<tr>
		<td>1511842</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4960779</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4960780</td>
		<td>出现被判定为作弊的行为</td>
		<td>4960781</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4960782</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4960783</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4960779,4960780,4960781,4960782,4960783</td>
	</tr>
	<tr>
		<td>1511843</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4960784</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4960785</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4960786</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4960787</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4960788</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4960784,4960785,4960786,4960787,4960788</td>
	</tr>
	<tr>
		<td>1511855</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4960831</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4960832</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4960833</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4960834</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960832,4960833</td>
	</tr>
	<tr>
		<td>1511860</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960852</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4960853</td>
		<td>MD5算法要比SHA算法更快</td>
		<td>4960854</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td>4960855</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4960856</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td></td>
		<td></td>
		<td>4960853,4960855,4960856</td>
	</tr>
	<tr>
		<td>1511857</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>单选题</td>
		<td>4960840</td>
		<td>正确</td>
		<td>4960841</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960840</td>
	</tr>
	<tr>
		<td>1513735</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4966038</td>
		<td>《信息安全技术—SM3密码杂凑算法》中，SM3的杂凑值长度为16字节</td>
		<td>4966039</td>
		<td>BS7799标准是英国标准协会制定的信息安全管理体系标准，它包括两个部分：《信息安全管理实施指南》和《信息安全管理体系规范和应用指南》。依据该标准可以组织建立、实施与保持信息安全管理体系、对组织内关键信息资产的安全态势进行动态监测</td>
		<td>4966040</td>
		<td>研究密码破译的科学称为密码分析学。密码分析学中，根据密码分析者可利用的数据资源，可将攻击密码的类型分为四种，选择密文攻击适合于攻击公开密钥密码体制，特别是攻击其数字签名</td>
		<td>4966041</td>
		<td>基于MD4和MD5设计的S/Key口令是一种一次性口令生成方案，它可以对访问者的身份与设备进行综合验证，该方案可以对抗穷举攻击</td>
		<td>4966042</td>
		<td>蜜罐是一种在互联网上运行的计算机系统，是专门为吸引并诱骗那些试图非法闯入他人计算机系统的人而设计的</td>
		<td></td>
		<td></td>
		<td>4966040,4966042</td>
	</tr>
	<tr>
		<td>1511848</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4960809</td>
		<td>错误</td>
		<td>4960810</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960809</td>
	</tr>
	<tr>
		<td>1511849</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4960811</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4960812</td>
		<td>MBR: verify success!</td>
		<td>4960813</td>
		<td>remount failed</td>
		<td>4960814</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960814</td>
	</tr>
	<tr>
		<td>1511850</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960815</td>
		<td>在白盒法技术测试用例的设计中，语句覆盖是必须要满足的覆盖标准</td>
		<td>4960816</td>
		<td>inetd是UNIX系统最重要的网络服务进程</td>
		<td>4960817</td>
		<td>Android提供了Handler和Looper来满足线程间的通信，其中Looper类用来管理特定线程内对象之间的消息交换</td>
		<td>4960818</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4960819</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4960816,4960817,4960818</td>
	</tr>
	<tr>
		<td>1511851</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4960820</td>
		<td>在线ota升级后没自动双清</td>
		<td>4960821</td>
		<td>设备没有连接计算机</td>
		<td>4960822</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4960823</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960821,4960822</td>
	</tr>
	<tr>
		<td>1511847</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960804</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4960805</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4960806</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4960807</td>
		<td>交换机可以实现从多个端口上接收数据，并根据数据包头部的信息将其转发到正确的目标地址</td>
		<td>4960808</td>
		<td>认证常用的参数有口令、标识符、生物特征等，但认证不允许第三方参与验证过程</td>
		<td></td>
		<td></td>
		<td>4960805,4960807</td>
	</tr>
	<tr>
		<td>1511852</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4960824</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4960825</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4960826</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>4960827</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4960828</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4960825,4960826,4960828</td>
	</tr>
	<tr>
		<td>1511854</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>单选题</td>
		<td>4960829</td>
		<td>正确</td>
		<td>4960830</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960830</td>
	</tr>
	<tr>
		<td>1511856</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960835</td>
		<td>根据《计算机软件保护条例》，著作权法保护的计算机软件是指程序及其相关文档</td>
		<td>4960836</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4960837</td>
		<td>若计算机中的地址总线的宽度为24位，则最多允许直接访问主存储器的8MB物理空间</td>
		<td>4960838</td>
		<td>ServerSocket这个类是实现了一个服务器端的Socket，利用这个类可以监听来自网络的请求</td>
		<td>4960839</td>
		<td>计算机系统中，CPU对主存的访问方式属于随机存取</td>
		<td></td>
		<td></td>
		<td>4960835,4960836,4960838,4960839</td>
	</tr>
	<tr>
		<td>1511853</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1511858</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960842</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4960843</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4960844</td>
		<td>软件测试最基础性的测试是集成测试</td>
		<td>4960845</td>
		<td>衡量模块的独立性的两个标准是内聚和耦合</td>
		<td>4960846</td>
		<td>UML不属于面向对象开发方法</td>
		<td></td>
		<td></td>
		<td>4960842,4960845,4960846</td>
	</tr>
	<tr>
		<td>1511861</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4960857</td>
		<td>fastboot -w ANTI</td>
		<td>4960858</td>
		<td>fastboot -r ANTI</td>
		<td>4960859</td>
		<td>fastboot getvar anti</td>
		<td>4960860</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4960859</td>
	</tr>
	<tr>
		<td>1513718</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4965972</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4965973</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4965974</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4965975</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4965976</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4965972,4965973,4965976</td>
	</tr>
	<tr>
		<td>1511846</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4960799</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4960800</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td>4960801</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td>4960802</td>
		<td>《中华人民共和国网络安全法》第五十八条明确规定，因维护国家安全和社会公共秩序，处置重大突发社会安全事件的需要，经国务院决定或者批准，可以在特定区域对网络通信采取限制等临时措施</td>
		<td>4960803</td>
		<td>删除一个视图的SQL命令是DROP VIEW</td>
		<td></td>
		<td></td>
		<td>4960799,4960801,4960802,4960803</td>
	</tr>
	<tr>
		<td>1513736</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4966043</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4966044</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4966045</td>
		<td>fastboot reboot：重启手机</td>
		<td>4966046</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>4966047</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>4966043,4966044,4966047</td>
	</tr>
</table>

## 2024.01.03
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-8000368)
- 答题链接: https://m.beehive.miui.com/NbeZO6WNvSEZFDDw2zuq-A/
- 题目数量(更新): 21
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 27 日上午 11:00 - 2024 年 1 月 2 日下午 18:00（小米忘了更新时间）
- 注(更新):
  1. 未正确上传题目 1509700 在「小米社区」APP 的界面截图或伪造截图，将视为无效答卷，无法通过审核;
  2. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  3. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  4. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  5. 已答题账号在 7 天内无法重新答题;
  6. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1508224</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4948220</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4948221</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4948222</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4948223</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4948224</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4948225</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4948220,4948221,4948222,4948223,4948224,4948225</td>
	</tr>
	<tr>
		<td>1508225</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4948226</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4948227</td>
		<td>出现被判定为作弊的行为</td>
		<td>4948228</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4948229</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4948230</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4948226,4948227,4948228,4948229,4948230</td>
	</tr>
	<tr>
		<td>1508226</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4948231</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4948232</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4948233</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4948234</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4948235</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4948231,4948232,4948233,4948234,4948235</td>
	</tr>
	<tr>
		<td>1508227</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4948236</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4948237</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4948238</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4948239</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4948240</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4948238,4948239</td>
	</tr>
	<tr>
		<td>1508228</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4948242</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4948243</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4948244</td>
		<td>fastboot reboot：重启手机</td>
		<td>4951538</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>4951539</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>4948242,4948243,4951539</td>
	</tr>
	<tr>
		<td>1508239</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948285</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4948286</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td>4948287</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td>4948288</td>
		<td>Android 7及更低版本的设备中，使用JIT/AOT混合编译模式</td>
		<td>4948289</td>
		<td>删除一个视图的SQL命令是DELETE VIEW</td>
		<td></td>
		<td></td>
		<td>4948286,4948288,4948289</td>
	</tr>
	<tr>
		<td>1508229</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948247</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4948248</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4948249</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4948250</td>
		<td>交换机可以实现从多个端口上接收数据，并根据数据包头部的信息将其转发到正确的目标地址</td>
		<td>4948251</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td></td>
		<td></td>
		<td>4948248,4948250,4948251</td>
	</tr>
	<tr>
		<td>1508230</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4948252</td>
		<td>错误</td>
		<td>4948253</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948252</td>
	</tr>
	<tr>
		<td>1508231</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4948254</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4948255</td>
		<td>MBR: verify success!</td>
		<td>4948256</td>
		<td>remount failed</td>
		<td>4948257</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948257</td>
	</tr>
	<tr>
		<td>1508232</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948258</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4948259</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>4948260</td>
		<td>Android提供了Handler和Looper来满足线程间的通信，其中Looper类用来管理特定线程内对象之间的消息交换</td>
		<td>4948261</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4948262</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4948258,4948259,4948262</td>
	</tr>
	<tr>
		<td>1508233</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4948263</td>
		<td>在线ota升级后没自动双清</td>
		<td>4948264</td>
		<td>设备没有连接计算机</td>
		<td>4948265</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4948266</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948264,4948265</td>
	</tr>
	<tr>
		<td>1508234</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948267</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4948268</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4948269</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>4948270</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4948271</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4948267,4948270</td>
	</tr>
	<tr>
		<td>1509700</td>
		<td>请截图本页面，并上传截图</td>
		<td>文件题</td>
		<td>0</td>
		<td>未正确上传该页面截图或伪造截图，将视为无效答卷，无法通过审核</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>0</td>
	</tr>
	<tr>
		<td>1508235</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>单选题</td>
		<td>4948272</td>
		<td>正确</td>
		<td>4948273</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948273</td>
	</tr>
	<tr>
		<td>1508236</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4948274</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4948275</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4948276</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4948277</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948275,4948276</td>
	</tr>
	<tr>
		<td>1508237</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948278</td>
		<td>ACK-Flood攻击属于利用ICP协议发起的攻击</td>
		<td>4948279</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4948280</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>4948281</td>
		<td>ServerSocket这个类是实现了一个服务器端的Socket，利用这个类可以监听来自网络的请求</td>
		<td>4948282</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td></td>
		<td></td>
		<td>4948279,4948280,4948281,4948282</td>
	</tr>
	<tr>
		<td>1508238</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>单选题</td>
		<td>4948283</td>
		<td>正确</td>
		<td>4948284</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948283</td>
	</tr>
	<tr>
		<td>1508240</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948290</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4948291</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4948292</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4948293</td>
		<td>在不做子网划分的情况下，154.21.0.0/12能支持65534台主机</td>
		<td>4948294</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td></td>
		<td></td>
		<td>4948290,4948292,4948294</td>
	</tr>
	<tr>
		<td>1508241</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948295</td>
		<td>Redmi所有手机均可使用EDL模式</td>
		<td>4948296</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4948297</td>
		<td>ROM指的是手机的运行内存</td>
		<td>4948298</td>
		<td>特征码查杀技术可以有效检测采用加壳技术的恶意程序</td>
		<td>4948299</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4948295,4948296,4948297,4948298,4948299</td>
	</tr>
	<tr>
		<td>1508242</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948300</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4948301</td>
		<td>MD5算法要比SHA算法更快</td>
		<td>4948302</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td>4948303</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4948304</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td></td>
		<td></td>
		<td>4948300,4948302</td>
	</tr>
	<tr>
		<td>1508243</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4948305</td>
		<td>fastboot -w ANTI</td>
		<td>4948306</td>
		<td>fastboot -r ANTI</td>
		<td>4948307</td>
		<td>fastboot getvar anti</td>
		<td>4948308</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948307</td>
	</tr>
</table>

## 2023.12.29、2024.01.02
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7975037)
- 答题链接: https://m.beehive.miui.com/NbeZO6WNvSEZFDDw2zuq-A/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 27 日上午 11:00 - 2024 年 1 月 2 日下午 18:00
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1508224</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4948220</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4948221</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4948222</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4948223</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4948224</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4948225</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4948220,4948221,4948222,4948223,4948224,4948225</td>
	</tr>
	<tr>
		<td>1508225</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4948226</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4948227</td>
		<td>出现被判定为作弊的行为</td>
		<td>4948228</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4948229</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4948230</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4948226,4948227,4948228,4948229,4948230</td>
	</tr>
	<tr>
		<td>1508226</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4948231</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4948232</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4948233</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4948234</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4948235</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4948231,4948232,4948233,4948234,4948235</td>
	</tr>
	<tr>
		<td>1508227</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4948236</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4948237</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4948238</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4948239</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4948240</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4948238,4948239</td>
	</tr>
	<tr>
		<td>1508228</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4948242</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4948243</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4948244</td>
		<td>fastboot reboot：重启手机</td>
		<td>4951538</td>
		<td>fastboot erase system：擦除系统分区</td>
		<td>4951539</td>
		<td>fastboot delete：擦除所有分区</td>
		<td></td>
		<td></td>
		<td>4948242,4948243,4951539</td>
	</tr>
	<tr>
		<td>1508229</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948247</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4948248</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4948249</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4948250</td>
		<td>交换机可以实现从多个端口上接收数据，并根据数据包头部的信息将其转发到正确的目标地址</td>
		<td>4948251</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td></td>
		<td></td>
		<td>4948248,4948250,4948251</td>
	</tr>
	<tr>
		<td>1508230</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4948252</td>
		<td>错误</td>
		<td>4948253</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948252</td>
	</tr>
	<tr>
		<td>1508231</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4948254</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4948255</td>
		<td>MBR: verify success!</td>
		<td>4948256</td>
		<td>remount failed</td>
		<td>4948257</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948257</td>
	</tr>
	<tr>
		<td>1508232</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948258</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4948259</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>4948260</td>
		<td>Android提供了Handler和Looper来满足线程间的通信，其中Looper类用来管理特定线程内对象之间的消息交换</td>
		<td>4948261</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4948262</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回非MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4948258,4948259,4948262</td>
	</tr>
	<tr>
		<td>1508233</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4948263</td>
		<td>在线ota升级后没自动双清</td>
		<td>4948264</td>
		<td>设备没有连接计算机</td>
		<td>4948265</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4948266</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948264,4948265</td>
	</tr>
	<tr>
		<td>1508234</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948267</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4948268</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4948269</td>
		<td>9008模式下的刷机不如fastboot模式下的刷机更加彻底</td>
		<td>4948270</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4948271</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4948267,4948270</td>
	</tr>
	<tr>
		<td>1508235</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>单选题</td>
		<td>4948272</td>
		<td>正确</td>
		<td>4948273</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948273</td>
	</tr>
	<tr>
		<td>1508236</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4948274</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4948275</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4948276</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4948277</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948275,4948276</td>
	</tr>
	<tr>
		<td>1508237</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948278</td>
		<td>ACK-Flood攻击属于利用ICP协议发起的攻击</td>
		<td>4948279</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4948280</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>4948281</td>
		<td>ServerSocket这个类是实现了一个服务器端的Socket，利用这个类可以监听来自网络的请求</td>
		<td>4948282</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td></td>
		<td></td>
		<td>4948279,4948280,4948281,4948282</td>
	</tr>
	<tr>
		<td>1508238</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>单选题</td>
		<td>4948283</td>
		<td>正确</td>
		<td>4948284</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948283</td>
	</tr>
	<tr>
		<td>1508239</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948285</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4948286</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td>4948287</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td>4948288</td>
		<td>Android 7及更低版本的设备中，使用JIT/AOT混合编译模式</td>
		<td>4948289</td>
		<td>删除一个视图的SQL命令是DELETE VIEW</td>
		<td></td>
		<td></td>
		<td>4948286,4948288,4948289</td>
	</tr>
	<tr>
		<td>1508240</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948290</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4948291</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4948292</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4948293</td>
		<td>在不做子网划分的情况下，154.21.0.0/12能支持65534台主机</td>
		<td>4948294</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td></td>
		<td></td>
		<td>4948290,4948292,4948294</td>
	</tr>
	<tr>
		<td>1508241</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948295</td>
		<td>Redmi所有手机均可使用EDL模式</td>
		<td>4948296</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4948297</td>
		<td>ROM指的是手机的运行内存</td>
		<td>4948298</td>
		<td>特征码查杀技术可以有效检测采用加壳技术的恶意程序</td>
		<td>4948299</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4948295,4948296,4948297,4948298,4948299</td>
	</tr>
	<tr>
		<td>1508242</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948300</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4948301</td>
		<td>MD5算法要比SHA算法更快</td>
		<td>4948302</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td>4948303</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4948304</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td></td>
		<td></td>
		<td>4948300,4948302</td>
	</tr>
	<tr>
		<td>1508243</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4948305</td>
		<td>fastboot -w ANTI</td>
		<td>4948306</td>
		<td>fastboot -r ANTI</td>
		<td>4948307</td>
		<td>fastboot getvar anti</td>
		<td>4948308</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948307</td>
	</tr>
</table>

## 2023.12.27、2023.12.28
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7954161)
- 答题链接(更新): https://m.beehive.miui.com/NbeZO6WNvSEZFDDw2zuq-A/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2023 年 12 月 27 日上午 11:00 - 2024 年 1 月 2 日下午 18:00
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1508224</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4948220</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4948221</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4948222</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4948223</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4948224</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4948225</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4948220,4948221,4948222,4948223,4948224,4948225</td>
	</tr>
	<tr>
		<td>1508225</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4948226</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4948227</td>
		<td>出现被判定为作弊的行为</td>
		<td>4948228</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4948229</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4948230</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4948226,4948227,4948228,4948229,4948230</td>
	</tr>
	<tr>
		<td>1508226</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4948231</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4948232</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4948233</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4948234</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4948235</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4948231,4948232,4948233,4948234,4948235</td>
	</tr>
	<tr>
		<td>1508227</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4948236</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4948237</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4948238</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4948239</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4948240</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4948238,4948239</td>
	</tr>
	<tr>
		<td>1508228</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>4948241</td>
		<td>fastboot flashing unlock：获取root权限</td>
		<td>4948242</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4948243</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4948244</td>
		<td>fastboot reboot：重启手机</td>
		<td>4948245</td>
		<td>fastboot getvar all：输出当前BL锁状态（非MTK）</td>
		<td>4948246</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4948244,4948246</td>
	</tr>
	<tr>
		<td>1508229</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948247</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4948248</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4948249</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4948250</td>
		<td>RBAC模型同时具有强制访问控制和自主访问控制属性</td>
		<td>4948251</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td></td>
		<td></td>
		<td>4948247,4948249,4948250</td>
	</tr>
	<tr>
		<td>1508230</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4948252</td>
		<td>错误</td>
		<td>4948253</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948252</td>
	</tr>
	<tr>
		<td>1508231</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4948254</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4948255</td>
		<td>MBR: verify success!</td>
		<td>4948256</td>
		<td>remount failed</td>
		<td>4948257</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948257</td>
	</tr>
	<tr>
		<td>1508232</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948258</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4948259</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>4948260</td>
		<td>哈希函数是一种双向密码机制</td>
		<td>4948261</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4948262</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4948258,4948259,4948260</td>
	</tr>
	<tr>
		<td>1508233</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4948263</td>
		<td>在线ota升级后没自动双清</td>
		<td>4948264</td>
		<td>设备没有连接计算机</td>
		<td>4948265</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4948266</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948264,4948265</td>
	</tr>
	<tr>
		<td>1508234</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948267</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4948268</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4948269</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4948270</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4948271</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4948268,4948271</td>
	</tr>
	<tr>
		<td>1508235</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>单选题</td>
		<td>4948272</td>
		<td>正确</td>
		<td>4948273</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948273</td>
	</tr>
	<tr>
		<td>1508236</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4948274</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4948275</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4948276</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4948277</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948275,4948276</td>
	</tr>
	<tr>
		<td>1508237</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948278</td>
		<td>ACK-Flood攻击属于利用TCP协议发起的攻击</td>
		<td>4948279</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4948280</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>4948281</td>
		<td>原始设备制造商简称OEM，是英文Original Environment Manufacturer的缩写</td>
		<td>4948282</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td></td>
		<td></td>
		<td>4948278,4948279,4948280,4948282</td>
	</tr>
	<tr>
		<td>1508238</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>单选题</td>
		<td>4948283</td>
		<td>正确</td>
		<td>4948284</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948283</td>
	</tr>
	<tr>
		<td>1508239</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948285</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4948286</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td>4948287</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td>4948288</td>
		<td>Android 7及更低版本的设备中，使用JIT/AOT混合编译模式</td>
		<td>4948289</td>
		<td>删除一个视图的SQL命令是DROP VIEW</td>
		<td></td>
		<td></td>
		<td>4948286,4948288</td>
	</tr>
	<tr>
		<td>1508240</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4948290</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4948291</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4948292</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4948293</td>
		<td>在不做子网划分的情况下，154.27.0.0/16能支持65534台主机</td>
		<td>4948294</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td></td>
		<td></td>
		<td>4948290,4948292,4948293,4948294</td>
	</tr>
	<tr>
		<td>1508241</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948295</td>
		<td>Redmi所有手机均可使用EDL模式</td>
		<td>4948296</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4948297</td>
		<td>ROM指的是手机的运行内存</td>
		<td>4948298</td>
		<td>特征码查杀技术可以有效检测采用加壳技术的恶意程序</td>
		<td>4948299</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4948295,4948296,4948297,4948298,4948299</td>
	</tr>
	<tr>
		<td>1508242</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4948300</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4948301</td>
		<td>MD5算法要比SHA算法更快</td>
		<td>4948302</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td>4948303</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4948304</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td></td>
		<td></td>
		<td>4948300,4948302</td>
	</tr>
	<tr>
		<td>1508243</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4948305</td>
		<td>fastboot -w ANTI</td>
		<td>4948306</td>
		<td>fastboot -r ANTI</td>
		<td>4948307</td>
		<td>fastboot getvar anti</td>
		<td>4948308</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4948307</td>
	</tr>
</table>

## 2023.12.25、2023.12.26
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7943441)
- 答题链接: https://m.beehive.miui.com/-lyJ-PH9v-I3yqXYQNNQCQ/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 20 日上午 11:00 - 2023 年 12 月 26 日下午 18:00
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1501803</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4924856</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4924857</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4924858</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4924859</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4924860</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4924861</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4924856,4924857,4924858,4924859,4924860,4924861</td>
	</tr>
	<tr>
		<td>1501804</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4924862</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4924863</td>
		<td>出现被判定为作弊的行为</td>
		<td>4924864</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4924865</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4924866</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4924862,4924863,4924864,4924865,4924866</td>
	</tr>
	<tr>
		<td>1501805</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4924867</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4924868</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4924869</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4924870</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4924871</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4924867,4924868,4924869,4924870,4924871</td>
	</tr>
	<tr>
		<td>1501819</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4924924</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4924925</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4924926</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4924927</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4926718</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4924926,4924927</td>
	</tr>
	<tr>
		<td>1501811</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>4924890</td>
		<td>fastboot flashing unlock：获取root权限</td>
		<td>4924891</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4924892</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4924894</td>
		<td>fastboot reboot：重启手机</td>
		<td>4926278</td>
		<td>fastboot getvar all：输出当前BL锁状态（非MTK）</td>
		<td>4926279</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4924894,4926279</td>
	</tr>
	<tr>
		<td>1501806</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924872</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4924873</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4924874</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4924875</td>
		<td>RBAC模型同时具有强制访问控制和自主访问控制属性</td>
		<td>4933604</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td></td>
		<td></td>
		<td>4924872,4924874,4924875</td>
	</tr>
	<tr>
		<td>1501812</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4924895</td>
		<td>错误</td>
		<td>4924896</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924895</td>
	</tr>
	<tr>
		<td>1501807</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4924876</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4924877</td>
		<td>MBR: verify success!</td>
		<td>4924878</td>
		<td>remount failed</td>
		<td>4924879</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924879</td>
	</tr>
	<tr>
		<td>1501815</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924906</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4924907</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>4924908</td>
		<td>哈希函数是一种双向密码机制</td>
		<td>4924909</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4924910</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4924906,4924907,4924908</td>
	</tr>
	<tr>
		<td>1501809</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4924882</td>
		<td>在线ota升级后没自动双清</td>
		<td>4924883</td>
		<td>设备没有连接计算机</td>
		<td>4924884</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4924885</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924883,4924884</td>
	</tr>
	<tr>
		<td>1501813</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924897</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4924899</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4924900</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4924901</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4929464</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4924899,4929464</td>
	</tr>
	<tr>
		<td>1501822</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>单选题</td>
		<td>4924937</td>
		<td>正确</td>
		<td>4924938</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924938</td>
	</tr>
	<tr>
		<td>1501816</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4924911</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4924912</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4924913</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4924914</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924912,4924913</td>
	</tr>
	<tr>
		<td>1501817</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924915</td>
		<td>ACK-Flood攻击属于利用TCP协议发起的攻击</td>
		<td>4924916</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4924917</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>4924918</td>
		<td>原始设备制造商简称OEM，是英文Original Environment Manufacturer的缩写</td>
		<td>4925978</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td></td>
		<td></td>
		<td>4924915,4924916,4924917,4925978</td>
	</tr>
	<tr>
		<td>1503025</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>单选题</td>
		<td>4929465</td>
		<td>正确</td>
		<td>4929466</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4929465</td>
	</tr>
	<tr>
		<td>1501818</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924919</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4924920</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td>4924921</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td>4924922</td>
		<td>Android 7及更低版本的设备中，使用JIT/AOT混合编译模式</td>
		<td>4924923</td>
		<td>删除一个视图的SQL命令是DROP VIEW</td>
		<td></td>
		<td></td>
		<td>4924920,4924922</td>
	</tr>
	<tr>
		<td>1502155</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4925869</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4925870</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4925871</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4925872</td>
		<td>在不做子网划分的情况下，154.27.0.0/16能支持65534台主机</td>
		<td>4925873</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td></td>
		<td></td>
		<td>4925869,4925871,4925872,4925873</td>
	</tr>
	<tr>
		<td>1502156</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4925874</td>
		<td>Redmi所有手机均可使用EDL模式</td>
		<td>4925875</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4925876</td>
		<td>ROM指的是手机的运行内存</td>
		<td>4925877</td>
		<td>特征码查杀技术可以有效检测采用加壳技术的恶意程序</td>
		<td>4929457</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4925874,4925875,4925876,4925877,4929457</td>
	</tr>
	<tr>
		<td>1501820</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924929</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4924930</td>
		<td>MD5算法要比SHA算法更快</td>
		<td>4924931</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td>4925868</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4933609</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td></td>
		<td></td>
		<td>4924929,4924931</td>
	</tr>
	<tr>
		<td>1501810</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4924886</td>
		<td>fastboot -w ANTI</td>
		<td>4924887</td>
		<td>fastboot -r ANTI</td>
		<td>4924888</td>
		<td>fastboot getvar anti</td>
		<td>4924889</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924888</td>
	</tr>
</table>

## 2023.12.22
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7926273)
- 答题链接: https://m.beehive.miui.com/-lyJ-PH9v-I3yqXYQNNQCQ/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 20 日上午 11:00 - 2023 年 12 月 26 日下午 18:00
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1501803</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4924856</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4924857</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4924858</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4924859</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4924860</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4924861</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4924856,4924857,4924858,4924859,4924860,4924861</td>
	</tr>
	<tr>
		<td>1501804</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4924862</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4924863</td>
		<td>出现被判定为作弊的行为</td>
		<td>4924864</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4924865</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4924866</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4924862,4924863,4924864,4924865,4924866</td>
	</tr>
	<tr>
		<td>1501805</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4924867</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4924868</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4924869</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4924870</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4924871</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4924867,4924868,4924869,4924870,4924871</td>
	</tr>
	<tr>
		<td>1501819</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4924924</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4924925</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4924926</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4924927</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4926718</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4924926,4924927</td>
	</tr>
	<tr>
		<td>1502155</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4925869</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4925870</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4925871</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4925872</td>
		<td>在不做子网划分的情况下，154.27.0.0/16能支持65534台主机</td>
		<td>4925873</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td></td>
		<td></td>
		<td>4925869,4925871,4925872,4925873</td>
	</tr>
	<tr>
		<td>1501811</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>4924890</td>
		<td>fastboot flashing unlock：获取root权限</td>
		<td>4924891</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4924892</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4924894</td>
		<td>fastboot reboot：重启手机</td>
		<td>4926278</td>
		<td>fastboot getvar all：输出当前BL锁状态（非MTK）</td>
		<td>4926279</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4924894,4926279</td>
	</tr>
	<tr>
		<td>1501806</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924872</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4924873</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4924874</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4924875</td>
		<td>RBAC模型同时具有强制访问控制和自主访问控制属性</td>
		<td>4933604</td>
		<td>网桥不可以有选择地转发数据帧</td>
		<td></td>
		<td></td>
		<td>4924872,4924874,4924875,4933604</td>
	</tr>
	<tr>
		<td>1501812</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>单选题</td>
		<td>4924895</td>
		<td>错误</td>
		<td>4924896</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924895</td>
	</tr>
	<tr>
		<td>1501807</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4924876</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4924877</td>
		<td>MBR: verify success!</td>
		<td>4924878</td>
		<td>remount failed</td>
		<td>4924879</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924879</td>
	</tr>
	<tr>
		<td>1501815</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924906</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4924907</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>4924908</td>
		<td>哈希函数是一种双向密码机制</td>
		<td>4924909</td>
		<td>RAM指的是手机的运行内存</td>
		<td>4924910</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4924906,4924907,4924908</td>
	</tr>
	<tr>
		<td>1501809</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4924882</td>
		<td>在线ota升级后没自动双清</td>
		<td>4924883</td>
		<td>设备没有连接计算机</td>
		<td>4924884</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4924885</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924883,4924884</td>
	</tr>
	<tr>
		<td>1501813</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924897</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td>4924899</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4924900</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4924901</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4929464</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td></td>
		<td></td>
		<td>4924899,4929464</td>
	</tr>
	<tr>
		<td>1501822</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>单选题</td>
		<td>4924937</td>
		<td>正确</td>
		<td>4924938</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924938</td>
	</tr>
	<tr>
		<td>1502156</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4925874</td>
		<td>Redmi所有手机均可使用EDL模式</td>
		<td>4925875</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4925876</td>
		<td>ROM指的是手机的运行内存</td>
		<td>4925877</td>
		<td>特征码查杀技术可以有效检测采用加壳技术的恶意程序</td>
		<td>4929457</td>
		<td>adb的全称是Android Debug Badge，起到调试桥的作用</td>
		<td></td>
		<td></td>
		<td>4925874,4925875,4925876,4925877,4929457</td>
	</tr>
	<tr>
		<td>1501816</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4924911</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4924912</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4924913</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4924914</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924912,4924913</td>
	</tr>
	<tr>
		<td>1501817</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924915</td>
		<td>ACK-Flood攻击属于利用TCP协议发起的攻击</td>
		<td>4924916</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4924917</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>4924918</td>
		<td>原始设备制造商简称OEM，是英文Original Environment Manufacturer的缩写</td>
		<td>4925978</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td></td>
		<td></td>
		<td>4924915,4924916,4924917,4925978</td>
	</tr>
	<tr>
		<td>1503025</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>单选题</td>
		<td>4929465</td>
		<td>正确</td>
		<td>4929466</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4929465</td>
	</tr>
	<tr>
		<td>1501818</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924919</td>
		<td>Xiaomi/Redmi手机，一般长按音量加键和电源键即可进入Recovery</td>
		<td>4924920</td>
		<td>擦除cache分区数据，个人数据通常会丢失</td>
		<td>4924921</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td>4924922</td>
		<td>Android 7及更低版本的设备中，使用JIT/AOT混合编译模式</td>
		<td>4924923</td>
		<td>删除一个视图的SQL命令是DROP VIEW</td>
		<td></td>
		<td></td>
		<td>4924920,4924922</td>
	</tr>
	<tr>
		<td>1501820</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924929</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4924930</td>
		<td>MD5算法要比SHA算法更快</td>
		<td>4924931</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td>4925868</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4933609</td>
		<td>DNS欺骗是攻击者冒充域名服务器的一种欺骗行为</td>
		<td></td>
		<td></td>
		<td>4924930,4925868,4933609</td>
	</tr>
	<tr>
		<td>1501810</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4924886</td>
		<td>fastboot -w ANTI</td>
		<td>4924887</td>
		<td>fastboot -r ANTI</td>
		<td>4924888</td>
		<td>fastboot getvar anti</td>
		<td>4924889</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924888</td>
	</tr>
</table>

## 2023.12.21
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7920330)
- 答题链接: https://m.beehive.miui.com/-lyJ-PH9v-I3yqXYQNNQCQ/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 20 日上午 11:00 - 2023 年 12 月 26 日下午 18:00
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1501803</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4924856</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4924857</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4924858</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4924859</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4924860</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4924861</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4924856,4924857,4924858,4924859,4924860,4924861</td>
	</tr>
	<tr>
		<td>1501804</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4924862</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4924863</td>
		<td>出现被判定为作弊的行为</td>
		<td>4924864</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4924865</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4924866</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4924862,4924863,4924864,4924865,4924866</td>
	</tr>
	<tr>
		<td>1501805</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4924867</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4924868</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4924869</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4924870</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4924871</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4924867,4924868,4924869,4924870,4924871</td>
	</tr>
	<tr>
		<td>1501819</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4924924</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4924925</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4924926</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4924927</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4926718</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td>4924926,4924927</td>
	</tr>
	<tr>
		<td>1502155</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4925869</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4925870</td>
		<td>ACK-Flood攻击属于利用TCP协议发起的攻击</td>
		<td>4925871</td>
		<td>删除一个视图的SQL命令是DELETE</td>
		<td>4925872</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量加键即可进入Recovery</td>
		<td>4925873</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td></td>
		<td></td>
		<td>4925869,4925870,4925872</td>
	</tr>
	<tr>
		<td>1501811</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>4924890</td>
		<td>fastboot flashing unlock：获取root权限</td>
		<td>4924891</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4924892</td>
		<td>fastboot oem poweroff：清除手机中所有数据后关机</td>
		<td>4924894</td>
		<td>fastboot reboot：重启手机</td>
		<td>4926278</td>
		<td>fastboot getvar all：输出当前BL锁状态（非MTK）</td>
		<td>4926279</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4924894,4926279</td>
	</tr>
	<tr>
		<td>1501806</td>
		<td>关于9008模式刷机说法正确的有？</td>
		<td>多选题</td>
		<td>4924872</td>
		<td>手机必须搭载高通处理器才能使用9008模式刷机</td>
		<td>4924873</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4924874</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4924875</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924872,4924874</td>
	</tr>
	<tr>
		<td>1501815</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924906</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4924907</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4924908</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4924909</td>
		<td>DNS欺骗技术可分为基于DNS服务器的欺骗和基于用户计算机的欺骗</td>
		<td>4924910</td>
		<td>特征码查杀技术可以有效检测采用加壳技术的恶意程序</td>
		<td></td>
		<td></td>
		<td>4924906,4924910</td>
	</tr>
	<tr>
		<td>1501812</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4924895</td>
		<td>错误</td>
		<td>4924896</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924895</td>
	</tr>
	<tr>
		<td>1501807</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4924876</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4924877</td>
		<td>MBR: verify success!</td>
		<td>4924878</td>
		<td>remount failed</td>
		<td>4924879</td>
		<td>XMABC100-01 fastboot</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924879</td>
	</tr>
	<tr>
		<td>1501809</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4924882</td>
		<td>在线ota升级后没自动双清</td>
		<td>4924883</td>
		<td>设备没有连接计算机</td>
		<td>4924884</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4924885</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924883,4924884</td>
	</tr>
	<tr>
		<td>1501813</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924897</td>
		<td>刷机过程中，出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>4924899</td>
		<td>刷机过程中，执行fastboot erase system可擦除全部数据</td>
		<td>4924900</td>
		<td>正式版切换到开发版一般不需要BL解锁</td>
		<td>4924901</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4929464</td>
		<td>重定向是指将网络请求从一个网址转移到其他网址</td>
		<td></td>
		<td></td>
		<td>4924897,4924900,4929464</td>
	</tr>
	<tr>
		<td>1501822</td>
		<td>原始设备制造商简称OEM，是英文Original Equipment Manufacturer的缩写</td>
		<td>单选题</td>
		<td>4924937</td>
		<td>正确</td>
		<td>4924938</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924937</td>
	</tr>
	<tr>
		<td>1502156</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4925874</td>
		<td>刷机过程中，刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4925875</td>
		<td>对称加密最大的缺点在于其密钥管理困难</td>
		<td>4925876</td>
		<td>inet是UNIX系统最重要的网络服务进程</td>
		<td>4925877</td>
		<td>RBAC模型同时具有强制访问控制和自主访问控制属性</td>
		<td>4929457</td>
		<td>刷机过程中，官方提供给用户的刷机工具是MiFlash</td>
		<td></td>
		<td></td>
		<td>4925874,4925875,4929457</td>
	</tr>
	<tr>
		<td>1501816</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4924911</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4924912</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4924913</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4924914</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924912,4924913</td>
	</tr>
	<tr>
		<td>1501817</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924915</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4924916</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4924917</td>
		<td>SHA算法要比MD5算法更快</td>
		<td>4924918</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td>4925978</td>
		<td>在计算机网络参考模型中，第N层为第N+1层提供服务</td>
		<td></td>
		<td></td>
		<td>4924916,4924918,4925978</td>
	</tr>
	<tr>
		<td>1503025</td>
		<td>adb的全称是Android Debug Bridge，起到调试桥的作用</td>
		<td>单选题</td>
		<td>4929465</td>
		<td>正确</td>
		<td>4929466</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4929465</td>
	</tr>
	<tr>
		<td>1501818</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924919</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据等</td>
		<td>4924920</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4924921</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4924922</td>
		<td>哈希函数是一种双向密码机制</td>
		<td>4924923</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td></td>
		<td></td>
		<td>4924919,4924920,4924923</td>
	</tr>
	<tr>
		<td>1501820</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924929</td>
		<td>网桥不可以有选择地转发数据帧</td>
		<td>4924930</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4924931</td>
		<td>BL锁可以防止用户在设备上安装非官方或未授权的操作系统</td>
		<td>4925868</td>
		<td>在不做子网划分的情况下，154.27.0.0/16能支持65534台主机</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924930,4924931,4925868</td>
	</tr>
	<tr>
		<td>1501810</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4924886</td>
		<td>fastboot -w ANTI</td>
		<td>4924887</td>
		<td>fastboot -r ANTI</td>
		<td>4924888</td>
		<td>fastboot getvar anti</td>
		<td>4924889</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924888</td>
	</tr>
</table>

## 2023.12.20
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7910015)
- 答题链接(更新): https://m.beehive.miui.com/-lyJ-PH9v-I3yqXYQNNQCQ/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2023 年 12 月 20 日上午 11:00 - 2023 年 12 月 26 日下午 18:00
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示(更新):
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩;
  2. 等级未达 5 段，无法展示成绩;
  3. 答题超时提交，无法展示成绩;
  4. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”;
  5. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="14">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1501803</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4924856</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4924857</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4924858</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4924859</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4924860</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4924861</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td></td>
		<td></td>
		<td>4924856,4924857,4924858,4924859,4924860,4924861</td>
	</tr>
	<tr>
		<td>1501804</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4924862</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4924863</td>
		<td>出现被判定为作弊的行为</td>
		<td>4924864</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4924865</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4924866</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924862,4924863,4924864,4924865,4924866</td>
	</tr>
	<tr>
		<td>1501805</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4924867</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4924868</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4924869</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4924870</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4924871</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924867,4924868,4924869,4924870,4924871</td>
	</tr>
	<tr>
		<td>1501811</td>
		<td>以下FASTBOOT基本命令，对应正确的有</td>
		<td>多选题</td>
		<td>4924890</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4924891</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4924892</td>
		<td>fastboot erase userdata：清除手机中所有数据</td>
		<td>4924893</td>
		<td>fastboot reboot：输出FASTBOOT模式下连接的设备</td>
		<td>4924894</td>
		<td>fastboot oem lks：输出当前BL锁状态（MTK）</td>
		<td>4926278</td>
		<td>fastboot getvar all：输出当前BL锁状态（非MTK）</td>
		<td>4926279</td>
		<td>fastboot oem lock：获取root权限</td>
		<td>4924890,4924892,4924894</td>
	</tr>
	<tr>
		<td>1501819</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4924924</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4924925</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4924926</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4924927</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4926718</td>
		<td>S_CHIP_TYPE_NOT_MATCH：文件类型不匹配</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924924,4924927</td>
	</tr>
	<tr>
		<td>1501806</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4924872</td>
		<td>手机必须搭载高通处理器才能使用9008模式刷机</td>
		<td>4924873</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4924874</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4924875</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924874,4924875</td>
	</tr>
	<tr>
		<td>1501807</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4924876</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4924877</td>
		<td>XMABC100-01   fastboot</td>
		<td>4924878</td>
		<td>remount failed</td>
		<td>4924879</td>
		<td>MBR: verify success!</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924877</td>
	</tr>
	<tr>
		<td>1501808</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>单选题</td>
		<td>4924880</td>
		<td>正确</td>
		<td>4924881</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924880</td>
	</tr>
	<tr>
		<td>1501809</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4924882</td>
		<td>在线ota升级后没自动双清</td>
		<td>4924883</td>
		<td>设备没有连接计算机</td>
		<td>4924884</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4924885</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924883,4924884</td>
	</tr>
	<tr>
		<td>1501810</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4924886</td>
		<td>fastboot -w ANTI</td>
		<td>4924887</td>
		<td>fastboot -r ANTI</td>
		<td>4924888</td>
		<td>fastboot getvar anti</td>
		<td>4924889</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924888</td>
	</tr>
	<tr>
		<td>1501812</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4924895</td>
		<td>错误</td>
		<td>4924896</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924895</td>
	</tr>
	<tr>
		<td>1501813</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924897</td>
		<td>刷机过程中出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>4924898</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4924899</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4924900</td>
		<td>执行fastboot erase system可擦除全部数据</td>
		<td>4924901</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924900,4924901</td>
	</tr>
	<tr>
		<td>1502156</td>
		<td>在CRC码计算中，与101101对应的多项式为</td>
		<td>单选题</td>
		<td>4925874</td>
		<td>x^6+x^4+x^3+1</td>
		<td>4925875</td>
		<td>x^5+x^3+x^2+x</td>
		<td>4925876</td>
		<td>x^6+x^5+x^4+x</td>
		<td>4925877</td>
		<td>x^5+x^3+x^2+1</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4925877</td>
	</tr>
	<tr>
		<td>1501815</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4924906</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4924907</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4924908</td>
		<td>假设信息位是8位，用海明码来发现并纠正1位出错的情况，则校验位的位数至少为8位</td>
		<td>4924909</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4924910</td>
		<td>隐式Intent必须使用Bundle携带额外的数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924906,4924908,4924910</td>
	</tr>
	<tr>
		<td>1501816</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4924911</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4924912</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4924913</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4924914</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924912,4924913</td>
	</tr>
	<tr>
		<td>1501817</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924915</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4924916</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4924917</td>
		<td>同一个应用程序，versionCode变动时，versionName不可以保持不变</td>
		<td>4924918</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td>4925978</td>
		<td>在计算机网络参考模型中，第N层为第N+1层提供服务</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924916,4924918,4925978</td>
	</tr>
	<tr>
		<td>1501818</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924919</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>4924920</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4924921</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4924922</td>
		<td>如果需要自定义绘制视图，不必重写onDraw方法</td>
		<td>4924923</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924920,4924923</td>
	</tr>
	<tr>
		<td>1501820</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4924929</td>
		<td>网桥不可以有选择地转发数据帧</td>
		<td>4924930</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4924931</td>
		<td>总线位宽是指总线上同时能够传输的数据位数，通常是指数据总线的根数</td>
		<td>4925868</td>
		<td>在不做子网划分的情况下，154.27.0.0/16能支持65534台主机</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924930,4924931,4925868</td>
	</tr>
	<tr>
		<td>1502155</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4925869</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4925870</td>
		<td>versionCode与用户侧显示的应用程序版本号相同</td>
		<td>4925871</td>
		<td>CRC校验在接收端发现差错后采取的措施是反馈重发</td>
		<td>4925872</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量加键即可进入Recovery</td>
		<td>4925873</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4925869,4925871,4925872</td>
	</tr>
	<tr>
		<td>1501822</td>
		<td>比特率是指将模拟声音信号转换成数字声音信号后单位时间内的二进制数据量，因此比特率越大的音质就越好</td>
		<td>单选题</td>
		<td>4924937</td>
		<td>正确</td>
		<td>4924938</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4924937</td>
	</tr>
</table>

## 2023.12.19
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7900718)
- 答题链接: https://m.beehive.miui.com/IQJD-8kLP5zO9GYoj9-2AA/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 13 日上午 11:00 - 2023 年 12 月 20 日上午 10:59
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请，敬请知悉;
  2. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法通过 BL 解锁审核，影响后续申请，敬请知悉;
  3. 请在规定时间内及时提交答卷，避免超时提交，超时将无法展示成绩，敬请知悉;
  4. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  5. 在此，特别感谢热心网友们举报“代答”等违规行为，相关违规用户均已处理。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1496245</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4906020</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4906021</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4906022</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4906023</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4906024</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4911376</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4906020,4906021,4906022,4906023,4906024,4911376</td>
	</tr>
	<tr>
		<td>1497992</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4911372</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等</td>
		<td>4911373</td>
		<td>出现被判定为作弊的行为</td>
		<td>4911374</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4911375</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4911400</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4911372,4911373,4911374,4911375,4911400</td>
	</tr>
	<tr>
		<td>1498611</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4914323</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4914324</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4914325</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4914326</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4914327</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4914323,4914324,4914325,4914326,4914327</td>
	</tr>
	<tr>
		<td>1483422</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4865077</td>
		<td>手机必须搭载高通处理器或联发科处理器才能使用9008模式刷机</td>
		<td>4865078</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4865079</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4865080</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865077,4865079,4865080</td>
	</tr>
	<tr>
		<td>1496270</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4906131</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4906132</td>
		<td>XMABC100-01   fastboot</td>
		<td>4906133</td>
		<td>remount failed</td>
		<td>4906134</td>
		<td>MBR: verify success!</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906132</td>
	</tr>
	<tr>
		<td>1483408</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>单选题</td>
		<td>4911633</td>
		<td>错误</td>
		<td>4911634</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4911634</td>
	</tr>
	<tr>
		<td>1496265</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4906108</td>
		<td>在线ota升级后没自动双清</td>
		<td>4906109</td>
		<td>设备没有连接计算机</td>
		<td>4906110</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4906111</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906109,4906110</td>
	</tr>
	<tr>
		<td>1483423</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4865081</td>
		<td>fastboot -w ANTI</td>
		<td>4865082</td>
		<td>fastboot -r ANTI</td>
		<td>4865083</td>
		<td>fastboot getvar anti</td>
		<td>4865084</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865083</td>
	</tr>
	<tr>
		<td>1501431</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4923900</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4923901</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4923902</td>
		<td>fastboot erase userdata：清除手机中所有数据</td>
		<td>4923903</td>
		<td>fastboot oem lks：查看当前BL锁状态（MTK）</td>
		<td>4923904</td>
		<td>fastboot reboot：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td></td>
		<td></td>
		<td>4923901,4923904</td>
	</tr>
	<tr>
		<td>1496669</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4907317</td>
		<td>错误</td>
		<td>4907318</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907317</td>
	</tr>
	<tr>
		<td>1497994</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911382</td>
		<td>刷机过程中出现Flash antirbpass error的报错，不可以直接修改脚本强刷</td>
		<td>4911383</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4911384</td>
		<td>手机如只能进入FASTBOOT，不可能是引导程序损毁</td>
		<td>4911385</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4911386</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td></td>
		<td></td>
		<td>4911384,4911386</td>
	</tr>
	<tr>
		<td>1483415</td>
		<td>以下说法关于Android权限的说法，不正确的有</td>
		<td>多选题</td>
		<td>4865048</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序访问通话记录</td>
		<td>4865049</td>
		<td>PROCESS_OUTGOING_CALLS权限应用程序监控或中止拨出呼叫</td>
		<td>4865050</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序记录拨出电话</td>
		<td>4865051</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序转接来电</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865048,4865051</td>
	</tr>
	<tr>
		<td>1498417</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4913662</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4913664</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4913665</td>
		<td>假设信息位是8位，用海明码来发现并纠正1位出错的情况，则校验位的位数至少为8位</td>
		<td>4913666</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4923891</td>
		<td>隐式Intent必须使用Bundle携带额外的数据</td>
		<td></td>
		<td></td>
		<td>4913662,4913665,4923891</td>
	</tr>
	<tr>
		<td>1483416</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4865052</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4865053</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4865054</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4865055</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865053,4865054</td>
	</tr>
	<tr>
		<td>1498580</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4914258</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4914259</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4914260</td>
		<td>同一个应用程序，versionCode变动时，versionName不可以保持不变</td>
		<td>4914261</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914259,4914261</td>
	</tr>
	<tr>
		<td>1498418</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4913667</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>4913668</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4913669</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4913670</td>
		<td>如果需要自定义绘制视图，不必重写onDraw方法</td>
		<td>4913671</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td></td>
		<td></td>
		<td>4913668,4913671</td>
	</tr>
	<tr>
		<td>1498607</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4914314</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4914315</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4914316</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4914317</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914314,4914315</td>
	</tr>
	<tr>
		<td>1496690</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4907388</td>
		<td>采用CRC进行差错校验，生成多项式为G(X)=X4+X+1，信息码字为10110，则计算出的CRC校验码是0010</td>
		<td>4907389</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td>4907390</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4923840</td>
		<td>总线位宽是指总线上同时能够传输的数据位数，通常是指数据总线的根数</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907389,4907390,4923840</td>
	</tr>
	<tr>
		<td>1501434</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4923912</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4923913</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4923914</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量加键即可进入Recovery</td>
		<td>4923915</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制等</td>
		<td>4923916</td>
		<td>versionCode与用户侧显示的应用程序版本号相同</td>
		<td></td>
		<td></td>
		<td>4923913,4923916</td>
	</tr>
	<tr>
		<td>1501439</td>
		<td>比特率是指将模拟声音信号转换成数字声音信号后单位时间内的二进制数据量，因此比特率越大的音质就越好</td>
		<td>单选题</td>
		<td>4923928</td>
		<td>正确</td>
		<td>4923929</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4923928</td>
	</tr>
</table>

## 2023.12.18
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7888804)
- 答题链接: https://m.beehive.miui.com/IQJD-8kLP5zO9GYoj9-2AA/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 13 日上午 11:00 - 2023 年 12 月 20 日上午 10:59
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请，敬请知悉;
  2. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法通过 BL 解锁审核，影响后续申请，敬请知悉;
  3. 请在规定时间内及时提交答卷，避免超时提交，超时将无法展示成绩，敬请知悉;
  4. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  5. 在此，特别感谢热心网友们举报“代答”等违规行为，相关违规用户均已处理。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1496245</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4906020</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4906021</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4906022</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4906023</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4906024</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4911376</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4906020,4906021,4906022,4906023,4906024,4911376</td>
	</tr>
	<tr>
		<td>1497992</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4911372</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等（包括但不限于各论坛、微博、微信、QQ群等）</td>
		<td>4911373</td>
		<td>出现被判定为作弊的行为（包括但不限于找人“代答”、使用脚本或工具达到申请条件等）</td>
		<td>4911374</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4911375</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4911400</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4911372,4911373,4911374,4911375,4911400</td>
	</tr>
	<tr>
		<td>1498611</td>
		<td>BL解锁面向发烧友和开发者开放，因此在资格筛选时，会考察是否符合发烧友的特质。下面关于发烧友的特质，说法正确的有</td>
		<td>多选题</td>
		<td>4914323</td>
		<td>发烧友指的是对某一领域极度热爱，并对此领域的产品进行深入研究</td>
		<td>4914324</td>
		<td>发烧友具备探究精神，因此在遇到不了解的问题时，会在合理范围内主动探寻答案，但不会寻求不正当“捷径”或采用违规方式</td>
		<td>4914325</td>
		<td>发烧友具备坚韧不拔的品质，因此在遇到失败或挫折时，会不断尝试和努力，但不会去造谣、诋毁</td>
		<td>4914326</td>
		<td>发烧友具备学习精神，因此在遇到新鲜事物或新知识时，会乐于学习和钻研，但不会肆意谩骂</td>
		<td>4914327</td>
		<td>发烧友具备分享精神，因此在有一些好的知识或经验时，会积极分享和交流，但不会去利用“资源”去“谋利”，更不会将获得的“资源”去“转租/转售”</td>
		<td></td>
		<td></td>
		<td>4914323,4914324,4914325,4914326,4914327</td>
	</tr>
	<tr>
		<td>1498607</td>
		<td>MTK刷机的报错，原因匹配的有</td>
		<td>多选题</td>
		<td>4914314</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4914315</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4914316</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td>4914317</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914314,4914315</td>
	</tr>
	<tr>
		<td>1496270</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4906131</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4906132</td>
		<td>XMABC100-01   fastboot</td>
		<td>4906133</td>
		<td>remount failed</td>
		<td>4906134</td>
		<td>MBR: verify success!</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906132</td>
	</tr>
	<tr>
		<td>1483408</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>单选题</td>
		<td>4911633</td>
		<td>错误</td>
		<td>4911634</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4911634</td>
	</tr>
	<tr>
		<td>1496265</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4906108</td>
		<td>在线ota升级后没自动双清</td>
		<td>4906109</td>
		<td>设备没有连接计算机</td>
		<td>4906110</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4906111</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906109,4906110</td>
	</tr>
	<tr>
		<td>1483422</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4865077</td>
		<td>手机必须搭载高通处理器或联发科处理器才能使用9008模式刷机</td>
		<td>4865078</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4865079</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4865080</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865077,4865079,4865080</td>
	</tr>
	<tr>
		<td>1483416</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4865052</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4865053</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4865054</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4865055</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865053,4865054</td>
	</tr>
	<tr>
		<td>1497994</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911382</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4911383</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4911384</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td>4911385</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4911386</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td></td>
		<td></td>
		<td>4911382,4911386</td>
	</tr>
	<tr>
		<td>1483423</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4865081</td>
		<td>fastboot -w ANTI</td>
		<td>4865082</td>
		<td>fastboot -r ANTI</td>
		<td>4865083</td>
		<td>fastboot getvar anti</td>
		<td>4865084</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865083</td>
	</tr>
	<tr>
		<td>1483412</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4865036</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4865037</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4865038</td>
		<td>fastboot erase &lt;分区名&gt;：清除手机中所有数据</td>
		<td>4865039</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4865040</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td></td>
		<td></td>
		<td>4865037,4865038,4865040</td>
	</tr>
	<tr>
		<td>1498581</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4914264</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4914265</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4914266</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量减键即可进入Recovery</td>
		<td>4914267</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制等</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914265,4914266</td>
	</tr>
	<tr>
		<td>1496669</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4907317</td>
		<td>错误</td>
		<td>4907318</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907317</td>
	</tr>
	<tr>
		<td>1483415</td>
		<td>以下说法关于Android权限的说法，不正确的有</td>
		<td>多选题</td>
		<td>4865048</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序访问通话记录</td>
		<td>4865049</td>
		<td>PROCESS_OUTGOING_CALLS权限应用程序监控或中止拨出呼叫</td>
		<td>4865050</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序记录拨出电话</td>
		<td>4865051</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序转接来电</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865048,4865051</td>
	</tr>
	<tr>
		<td>1498417</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4913662</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4913663</td>
		<td>versionCode与用户侧显示的应用程序版本号相同</td>
		<td>4913664</td>
		<td>AndroidManifest.xml中的manifest标签可以被嵌套在application的标签内</td>
		<td>4913665</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4913666</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4913663,4913664,4913665</td>
	</tr>
	<tr>
		<td>1498580</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4914258</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4914259</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4914260</td>
		<td>同一个应用程序，versionCode变动时，versionName不可以保持不变</td>
		<td>4914261</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914259,4914261</td>
	</tr>
	<tr>
		<td>1497996</td>
		<td>现计划展出10台小米/Redmi手机，具体如下：3台Redmi K70（已BL解锁）、3台小米13（未BL解锁）、1台小米14Pro（未BL解锁）、3台Redmi K60至尊版（未BL解锁），现将这10台手机排成一列进行展示，但已BL解锁的手机不能挨在一起，请问有多少种展出陈列方式（同一机型视为完全一样）</td>
		<td>单选题</td>
		<td>4911392</td>
		<td>2240</td>
		<td>4911393</td>
		<td>2352</td>
		<td>4911394</td>
		<td>7840</td>
		<td>4911395</td>
		<td>8960</td>
		<td>4914328</td>
		<td>10080</td>
		<td></td>
		<td></td>
		<td>4911394</td>
	</tr>
	<tr>
		<td>1498418</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4913667</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>4913668</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4913669</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4913670</td>
		<td>如果需要自定义绘制视图，不必重写onDraw方法</td>
		<td>4913671</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td></td>
		<td></td>
		<td>4913668,4913671</td>
	</tr>
	<tr>
		<td>1496690</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4907388</td>
		<td>子网掩码的作用是识别子网</td>
		<td>4907389</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td>4907390</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4907391</td>
		<td>通信子网为资源子网提供信息传输服务</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907388,4907389,4907390,4907391</td>
	</tr>
</table>

## 2023.12.15
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7866911)
- 答题链接: https://m.beehive.miui.com/IQJD-8kLP5zO9GYoj9-2AA/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 13 日上午 11:00 - 2023 年 12 月 20 日上午 10:59
- 注:
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请，敬请知悉;
  2. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法通过 BL 解锁审核，影响后续申请，敬请知悉;
  3. 请在规定时间内及时提交答卷，避免超时提交，超时将无法展示成绩，敬请知悉;
  4. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  5. 在此，特别感谢热心网友们举报“代答”等违规行为，相关违规用户均已处理。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1496245</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4906020</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4906021</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4906022</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4906023</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4906024</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4911376</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4906020,4906021,4906022,4906023,4906024,4911376</td>
	</tr>
	<tr>
		<td>1497992</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4911372</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等（包括但不限于各论坛、微博、微信、QQ群等）</td>
		<td>4911373</td>
		<td>出现被判定为作弊的行为（包括但不限于找人“代答”、使用脚本或工具达到申请条件等）</td>
		<td>4911374</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4911375</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4911400</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4911372,4911373,4911374,4911375,4911400</td>
	</tr>
	<tr>
		<td>1498418</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4913667</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>4913668</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4913669</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4913670</td>
		<td>如果需要自定义绘制视图，不必重写onDraw方法</td>
		<td>4913671</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td></td>
		<td></td>
		<td>4913668,4913671</td>
	</tr>
	<tr>
		<td>1496266</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4906112</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4906113</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4906114</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4906115</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906112,4906115</td>
	</tr>
	<tr>
		<td>1496270</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4906131</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4906132</td>
		<td>XMABC100-01   fastboot</td>
		<td>4906133</td>
		<td>remount failed</td>
		<td>4906134</td>
		<td>MBR: verify success!</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906132</td>
	</tr>
	<tr>
		<td>1483408</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>单选题</td>
		<td>4911633</td>
		<td>错误</td>
		<td>4911634</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4911634</td>
	</tr>
	<tr>
		<td>1496265</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4906108</td>
		<td>在线ota升级后没自动双清</td>
		<td>4906109</td>
		<td>设备没有连接计算机</td>
		<td>4906110</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4906111</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906109,4906110</td>
	</tr>
	<tr>
		<td>1483422</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4865077</td>
		<td>手机必须搭载高通处理器或联发科处理器才能使用9008模式刷机</td>
		<td>4865078</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4865079</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4865080</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865077,4865079,4865080</td>
	</tr>
	<tr>
		<td>1483416</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4865052</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4865053</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4865054</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4865055</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865053,4865054</td>
	</tr>
	<tr>
		<td>1497994</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911382</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4911383</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4911384</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td>4911385</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4911386</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td></td>
		<td></td>
		<td>4911382,4911386</td>
	</tr>
	<tr>
		<td>1483423</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4865081</td>
		<td>fastboot -w ANTI</td>
		<td>4865082</td>
		<td>fastboot -r ANTI</td>
		<td>4865083</td>
		<td>fastboot getvar anti</td>
		<td>4865084</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865083</td>
	</tr>
	<tr>
		<td>1483412</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4865036</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4865037</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4865038</td>
		<td>fastboot erase &lt;分区名&gt;：清除手机中所有数据</td>
		<td>4865039</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4865040</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td></td>
		<td></td>
		<td>4865037,4865038,4865040</td>
	</tr>
	<tr>
		<td>1496229</td>
		<td>Android原生提供的ContentProvider有</td>
		<td>多选题</td>
		<td>4906002</td>
		<td>应用列表</td>
		<td>4906003</td>
		<td>通话记录</td>
		<td>4906004</td>
		<td>书签</td>
		<td>4906005</td>
		<td>联系人</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906003,4906005</td>
	</tr>
	<tr>
		<td>1498581</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4914264</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4914265</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4914266</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量减键即可进入Recovery</td>
		<td>4914267</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制等</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914265,4914266</td>
	</tr>
	<tr>
		<td>1496669</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4907317</td>
		<td>错误</td>
		<td>4907318</td>
		<td>正确</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907317</td>
	</tr>
	<tr>
		<td>1483415</td>
		<td>以下说法关于Android权限的说法，不正确的有</td>
		<td>多选题</td>
		<td>4865048</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序访问通话记录</td>
		<td>4865049</td>
		<td>PROCESS_OUTGOING_CALLS权限应用程序监控或中止拨出呼叫</td>
		<td>4865050</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序记录拨出电话</td>
		<td>4865051</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序转接来电</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865048,4865051</td>
	</tr>
	<tr>
		<td>1498417</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4913662</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4913663</td>
		<td>versionCode与用户侧显示的应用程序版本号相同</td>
		<td>4913664</td>
		<td>AndroidManifest.xml中的manifest标签可以被嵌套在application的标签内</td>
		<td>4913665</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4913666</td>
		<td>刷机过程中如果变砖，不可以通过9008的模式刷机救回MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4913663,4913664,4913665</td>
	</tr>
	<tr>
		<td>1498580</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4914258</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4914259</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4914260</td>
		<td>同一个应用程序，versionCode变动时，versionName不可以保持不变</td>
		<td>4914261</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4914259,4914260,4914261</td>
	</tr>
	<tr>
		<td>1497996</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911392</td>
		<td>隐式Intent没有指定组件</td>
		<td>4911393</td>
		<td>隐式Intent有指定的组件来运行一个确切的类</td>
		<td>4911394</td>
		<td>隐式Intent必须包含足够的数据，允许Android系统选择最佳组件来运行</td>
		<td>4911395</td>
		<td>隐式Intent必须使用Bundle携带额外的数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4911393,4911395</td>
	</tr>
	<tr>
		<td>1496690</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4907388</td>
		<td>子网掩码的作用是识别子网</td>
		<td>4907389</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td>4907390</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4907391</td>
		<td>通信子网为资源子网提供信息传输服务</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907388,4907389,4907390,4907391</td>
	</tr>
</table>

## 2023.12.14
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7856488)
- 答题链接: https://m.beehive.miui.com/IQJD-8kLP5zO9GYoj9-2AA/
- 题目数量: 20
- 合格分数: 86
- 时间限制: 10 分钟，超时结算已回答题目的分数
- 得分有效期: 2023 年 12 月 13 日上午 11:00 - 2023 年 12 月 20 日上午 10:59
- 注(更新):
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题;
  5. 用户若出现下列情形，将无法通过解锁审核:
    - 在社交媒介恶意诋毁、谩骂、造谣等;
    - 出现被判定为作弊的行为;
    - 不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容;
    - 其他违反小米账号使用协议的相关情形。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请，敬请知悉;
  2. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法通过 BL 解锁审核，影响后续申请，敬请知悉;
  3. 请在规定时间内及时提交答卷，避免超时提交，超时将无法展示成绩，敬请知悉;
  4. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  5. 在此，特别感谢热心网友们举报“代答”等违规行为，相关违规用户均已处理。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1496245</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4906020</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4906021</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4906022</td>
		<td>本期答题的通过分数线为85分以上（不含85分）</td>
		<td>4906023</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4906024</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4911376</td>
		<td>BL解锁名额充足，满足申请条件后即可申请</td>
		<td>4906020,4906021,4906022,4906023,4906024,4911376</td>
	</tr>
	<tr>
		<td>1497992</td>
		<td>已满足BL解锁申请条件，但申请后被拒绝的原因，下列说法正确的有</td>
		<td>多选题</td>
		<td>4911372</td>
		<td>在社交媒介恶意诋毁、谩骂、造谣等（包括但不限于各论坛、微博、微信、QQ群等）</td>
		<td>4911373</td>
		<td>出现被判定为作弊的行为（包括但不限于找人“代答”、使用脚本或工具达到申请条件等）</td>
		<td>4911374</td>
		<td>不填写申请理由、或使用AI生成申请理由、或申请理由出现过辱骂威胁等内容</td>
		<td>4911375</td>
		<td>其他违反小米账号使用协议的相关情形</td>
		<td>4911400</td>
		<td>确认无任何违规情形，被拒绝后可尝试再次申请</td>
		<td></td>
		<td></td>
		<td>4911372,4911373,4911374,4911375,4911400</td>
	</tr>
	<tr>
		<td>1483415</td>
		<td>以下说法关于Android权限的说法，不正确的有</td>
		<td>多选题</td>
		<td>4865048</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序访问通话记录</td>
		<td>4865049</td>
		<td>PROCESS_OUTGOING_CALLS权限应用程序监控或中止拨出呼叫</td>
		<td>4865050</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序记录拨出电话</td>
		<td>4865051</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序转接来电</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865048,4865051</td>
	</tr>
	<tr>
		<td>1496266</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4906112</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4906113</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4906114</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4906115</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906112,4906115</td>
	</tr>
	<tr>
		<td>1496270</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4906131</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4906132</td>
		<td>XMABC100-01   fastboot</td>
		<td>4906133</td>
		<td>remount failed</td>
		<td>4906134</td>
		<td>MBR: verify success!</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906132</td>
	</tr>
	<tr>
		<td>1483408</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td>单选题</td>
		<td>4911633</td>
		<td>正确</td>
		<td>4911634</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4911633</td>
	</tr>
	<tr>
		<td>1483411</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4865032</td>
		<td>versionCode与用户侧显示的应用程序版本号相同</td>
		<td>4865033</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4865034</td>
		<td>同一个应用程序，versionCode变动时，versionName可以保持不变</td>
		<td>4865035</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865033,4865034,4865035</td>
	</tr>
	<tr>
		<td>1496265</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4906108</td>
		<td>在线ota升级后没自动双清</td>
		<td>4906109</td>
		<td>设备没有连接计算机</td>
		<td>4906110</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4906111</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906109,4906110</td>
	</tr>
	<tr>
		<td>1483422</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4865077</td>
		<td>手机必须搭载高通处理器或联发科处理器才能使用9008模式刷机</td>
		<td>4865078</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4865079</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4865080</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865077,4865079,4865080</td>
	</tr>
	<tr>
		<td>1483416</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4865052</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4865053</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4865054</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4865055</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865053,4865054</td>
	</tr>
	<tr>
		<td>1497995</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911387</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4911388</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4911389</td>
		<td>AndroidManifest.xml中的manifest标签可以被嵌套在application的标签内</td>
		<td>4911390</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制等</td>
		<td>4911391</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回MTK平台的机器</td>
		<td></td>
		<td></td>
		<td>4911388,4911389,4911391</td>
	</tr>
	<tr>
		<td>1497994</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911382</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4911383</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4911384</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td>4911385</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4911386</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td></td>
		<td></td>
		<td>4911382,4911386</td>
	</tr>
	<tr>
		<td>1483423</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4865081</td>
		<td>fastboot -w ANTI</td>
		<td>4865082</td>
		<td>fastboot -r ANTI</td>
		<td>4865083</td>
		<td>fastboot getvar anti</td>
		<td>4865084</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4865083</td>
	</tr>
	<tr>
		<td>1483412</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4865036</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4865037</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4865038</td>
		<td>fastboot erase &lt;分区名&gt;：清除手机中所有数据</td>
		<td>4865039</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4865040</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td></td>
		<td></td>
		<td>4865037,4865038,4865040</td>
	</tr>
	<tr>
		<td>1496229</td>
		<td>Android原生提供的ContentProvider有</td>
		<td>多选题</td>
		<td>4906002</td>
		<td>联系人</td>
		<td>4906003</td>
		<td>通话记录</td>
		<td>4906004</td>
		<td>书签</td>
		<td>4906005</td>
		<td>应用列表</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4906002,4906003</td>
	</tr>
	<tr>
		<td>1497997</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4911396</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4911397</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4911398</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4911399</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量减键即可进入Recovery</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4911396,4911398,4911399</td>
	</tr>
	<tr>
		<td>1496269</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4906127</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>4906128</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4906129</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4906130</td>
		<td>如果需要自定义绘制视图，则必须重写onDraw方法</td>
		<td>4907314</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td></td>
		<td></td>
		<td>4906128,4906130,4907314</td>
	</tr>
	<tr>
		<td>1496669</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4907317</td>
		<td>正确</td>
		<td>4907318</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907318</td>
	</tr>
	<tr>
		<td>1496224</td>
		<td>以下说法不正确的有</td>
		<td>多选题</td>
		<td>4905996</td>
		<td>隐式Intent没有指定组件</td>
		<td>4905997</td>
		<td>隐式Intent有指定的组件来运行一个确切的类</td>
		<td>4905998</td>
		<td>隐式Intent必须包含足够的数据，允许Android系统选择最佳组件来运行</td>
		<td>4905999</td>
		<td>隐式Intent必须使用Bundle携带额外的数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4905997,4905999</td>
	</tr>
	<tr>
		<td>1496690</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4907388</td>
		<td>子网掩码的作用是识别子网</td>
		<td>4907389</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td>4907390</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4907391</td>
		<td>通信子网为资源子网提供信息传输服务</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907388,4907389,4907390,4907391</td>
	</tr>
</table>

## 2023.12.13
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7845331)
- 答题链接(更新): https://m.beehive.miui.com/IQJD-8kLP5zO9GYoj9-2AA/
- 题目数量(更新): 20
- 合格分数(更新): 86
- 时间限制(更新): 10 分钟，超时结算已回答题目的分数
- 得分有效期(更新): 2023 年 12 月 13 日上午 11:00 - 2023 年 12 月 20 日上午 10:59
- 注(更新):
  1. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  2. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题。
- 官方提示(更新):
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入本次答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请，敬请知悉;
  2. “代答”是违规行为，为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法通过 BL 解锁审核，影响后续申请，敬请知悉;
  3. 请在规定时间内及时提交答卷，避免超时提交，超时将无法展示成绩，敬请知悉;
  4. 答题分数仅当期有效，超过当期再次申请时需要重新答题，敬请知悉;
  5. 在此，特别感谢热心网友们举报“代答”等违规行为，相关违规用户均已处理。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1496245</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4906020</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4906021</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4906022</td>
		<td>本期（2023 年 12 月 13 日上午 11:00 - 2023 年 12 月 20 日上午 10:59）答题的通过分数线为 85 分以上（不含 85 分）</td>
		<td>4906023</td>
		<td>租借/转让/借用BL解锁资格、“代答”等行为均属违规</td>
		<td>4906024</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4906020,4906021,4906022,4906023,4906024</td>
	</tr>
	<tr>
		<td>1483408</td>
		<td>如何在FASTBOOT命令行内，刷入twrp到boot分区？</td>
		<td>单选题</td>
		<td>4865019</td>
		<td>fastboot flash update boot.img</td>
		<td>4865020</td>
		<td>fastboot flash recovery boot.img</td>
		<td>4865021</td>
		<td>fastboot flash boot boot.img</td>
		<td>4865022</td>
		<td>fastboot flash update recovery boot.img</td>
		<td></td>
		<td></td>
		<td>4865021</td>
	</tr>
	<tr>
		<td>1483422</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4865077</td>
		<td>手机必须搭载高通处理器或联发科处理器才能使用9008模式刷机</td>
		<td>4865078</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4865079</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4865080</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td>4865077,4865079,4865080</td>
	</tr>
	<tr>
		<td>1483423</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4865081</td>
		<td>fastboot -w ANTI</td>
		<td>4865082</td>
		<td>fastboot -r ANTI</td>
		<td>4865083</td>
		<td>fastboot getvar anti</td>
		<td>4865084</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td>4865083</td>
	</tr>
	<tr>
		<td>1483415</td>
		<td>以下说法关于Android权限的说法，不正确的有</td>
		<td>多选题</td>
		<td>4865048</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序访问通话记录</td>
		<td>4865049</td>
		<td>PROCESS_OUTGOING_CALLS权限应用程序监控或中止拨出呼叫</td>
		<td>4865050</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序记录拨出电话</td>
		<td>4865051</td>
		<td>PROCESS_OUTGOING_CALLS权限允许应用程序转接来电</td>
		<td></td>
		<td></td>
		<td>4865048,4865051</td>
	</tr>
	<tr>
		<td>1496270</td>
		<td>输入fastboot devices命令后，可能输出的结果是</td>
		<td>单选题</td>
		<td>4906131</td>
		<td>$ wget https://xxx.xxx/xxx/xxx/xxx.img</td>
		<td>4906132</td>
		<td>XMABC100-01   fastboot</td>
		<td>4906133</td>
		<td>remount failed</td>
		<td>4906134</td>
		<td>MBR: verify success!</td>
		<td></td>
		<td></td>
		<td>4906132</td>
	</tr>
	<tr>
		<td>1483414</td>
		<td>MTK刷机时，报错4004的意思是</td>
		<td>单选题</td>
		<td>4865044</td>
		<td>驱动问题</td>
		<td>4865045</td>
		<td>内存损坏</td>
		<td>4865046</td>
		<td>刷机软件版本不匹配</td>
		<td>4865047</td>
		<td>ROM文件和手机系统差距太大</td>
		<td></td>
		<td></td>
		<td>4865044</td>
	</tr>
	<tr>
		<td>1483411</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4865032</td>
		<td>versionCode与用户侧显示的应用程序版本号相同</td>
		<td>4865033</td>
		<td>如果同一台手机已经安装一个高versionCode的客户端版本，则无法安装同包名的低versionCode客户端</td>
		<td>4865034</td>
		<td>同一个应用程序，versionCode变动时，versionName可以保持不变</td>
		<td>4865035</td>
		<td>发布新版本的应用程序时，必须从之前的versionCode开始递增</td>
		<td></td>
		<td></td>
		<td>4865033,4865034,4865035</td>
	</tr>
	<tr>
		<td>1496265</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4906108</td>
		<td>在线ota升级后没自动双清</td>
		<td>4906109</td>
		<td>设备没有连接计算机</td>
		<td>4906110</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4906111</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td>4906109,4906110</td>
	</tr>
	<tr>
		<td>1496268</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4906121</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4906122</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4906124</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td>4906125</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4906126</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4906122,4906124,4906125</td>
	</tr>
	<tr>
		<td>1483416</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4865052</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4865053</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4865054</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4865055</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td>4865053,4865054</td>
	</tr>
	<tr>
		<td>1496267</td>
		<td>以下说法错误的有</td>
		<td>多选题</td>
		<td>4906116</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4906117</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4906118</td>
		<td>AndroidManifest.xml中的manifest标签可以被嵌套在application的标签内</td>
		<td>4906119</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制等</td>
		<td>4906120</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4906117,4906118,4906120</td>
	</tr>
	<tr>
		<td>1483412</td>
		<td>以下FASTBOOT基本命令，对应不正确的有</td>
		<td>多选题</td>
		<td>4865036</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4865037</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4865038</td>
		<td>fastboot erase &lt;分区名&gt;：清除手机中所有数据</td>
		<td>4865039</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4865040</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4865037,4865038,4865040</td>
	</tr>
	<tr>
		<td>1496224</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4905996</td>
		<td>隐式Intent没有指定组件</td>
		<td>4905997</td>
		<td>隐式Intent有指定的组件来运行一个确切的类</td>
		<td>4905998</td>
		<td>隐式Intent必须包含足够的数据，允许Android系统选择最佳组件来运行</td>
		<td>4905999</td>
		<td>隐式Intent必须使用Bundle携带额外的数据</td>
		<td></td>
		<td></td>
		<td>4905996,4905998</td>
	</tr>
	<tr>
		<td>1496229</td>
		<td>Android原生提供的ContentProvider有</td>
		<td>多选题</td>
		<td>4906002</td>
		<td>联系人</td>
		<td>4906003</td>
		<td>通话记录</td>
		<td>4906004</td>
		<td>书签</td>
		<td>4906005</td>
		<td>应用列表</td>
		<td></td>
		<td></td>
		<td>4906002,4906003</td>
	</tr>
	<tr>
		<td>1496246</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4906025</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4906026</td>
		<td>刷入第三方Recovery，通常数据不会丢失</td>
		<td>4906027</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4906028</td>
		<td>Xiaomi/Redmi手机，一般长按电源键和音量加键即可进入Recovery</td>
		<td></td>
		<td></td>
		<td>4906026,4906028</td>
	</tr>
	<tr>
		<td>1496266</td>
		<td>MTK刷机的报错，原因不匹配的有</td>
		<td>多选题</td>
		<td>4906112</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4906113</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4906114</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4906115</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td></td>
		<td></td>
		<td>4906112,4906115</td>
	</tr>
	<tr>
		<td>1496269</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4906127</td>
		<td>线刷可以用来降级回到之前的系统版本、彻底删除设备数据、恢复误删除数据等</td>
		<td>4906128</td>
		<td>在FASTBOOT模式下，用flash命令刷写固件</td>
		<td>4906129</td>
		<td>Android系统启动时，首先启动的是zygote进程</td>
		<td>4906130</td>
		<td>如果需要自定义绘制视图，则必须重写onDraw方法</td>
		<td>4907314</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>4906128,4906130,4907314</td>
	</tr>
	<tr>
		<td>1496669</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>单选题</td>
		<td>4907317</td>
		<td>正确</td>
		<td>4907318</td>
		<td>错误</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4907318</td>
	</tr>
	<tr>
		<td>1496690</td>
		<td>以下说法正确的有</td>
		<td>多选题</td>
		<td>4907388</td>
		<td>子网掩码的作用是识别子网</td>
		<td>4907389</td>
		<td>网桥可以有选择地转发数据帧</td>
		<td>4907390</td>
		<td>网络配置后不能进入Internet服务，ping 127.0.0.1是通的，ping 网关不通，原因可能是网关没有正确配置</td>
		<td>4907391</td>
		<td>通信子网为资源子网提供信息传输服务</td>
		<td></td>
		<td></td>
		<td>4907388,4907389,4907390,4907391</td>
	</tr>
</table>

## 2023.12.12
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7832828)
- 答题链接: https://m.beehive.miui.com/NhTPAE5m-ZurhVKqMhvHCQ/
- 题目数量: 18
- 合格分数: 93
- 每题分数: 8
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注(更新):
  1. 题目 1482820 的选项之一 4863692 暂无法确定答案准确性（即无法确定是否应该选中）;
  2. 因小米不再对 5 级以下的账号登记和展示得分，无法再确定题目**在小米那边**的正确答案是什么（小米的题目/选项中含有答案出错/不合理/与现有文档不符，误导用户的描述），不保证所给答案为满分答案;
  3. 社区等级低于 5 级无法答题，且答题后不记录、不展示是否合格和得分;
  4. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  5. 已答题账号在 7 天内无法重新答题。
- 官方提示(更新):
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请;
  2. “代答”是违规行为，目前接到用户举报，已处理多名在其他平台利用解锁答题“谋利”的用户（昵称为“小黄人鸭”、“浪屿铭铭”、“睡醒了就困”等多人），为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法通过BL解锁审核，影响后续申请，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1489752</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4883294</td>
		<td>未答题或未达到答题的分数线时，每7天可重新参与一次答题</td>
		<td>4883295</td>
		<td>参与答题必须从“小米社区App的内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4883296</td>
		<td>本周答题通过分数线为92分以上（不含92分）</td>
		<td>4883297</td>
		<td>租借/转让/借用BL解锁的资格，属于违规行为，将被永久封号</td>
		<td>4883298</td>
		<td>如果本次BL解锁的申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4889570</td>
		<td>“代答”是违规行为，目前已处理多名“利用解锁答题谋利”的用户，为避免您的经济损失，请勿购买相关“代答服务”，使用“代答服务”将无法申请通过</td>
		<td>4883294,4883295,4883296,4883297,4883298,4889570</td>
	</tr>
	<tr>
		<td>1482813</td>
		<td>烧录img、bin、mbn、elf等镜像文件内容到指定分区，正确的指令是</td>
		<td>单选题</td>
		<td>4863660</td>
		<td>fastboot boot&lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863661</td>
		<td>fastboot boot &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td>4863662</td>
		<td>fastboot flash &lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863663</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863663</td>
	</tr>
	<tr>
		<td>1482820</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863692</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4886524</td>
		<td>隐式Intent有指定的组件来运行一个确切的类</td>
		<td>4886525</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制、事件分发机制等</td>
		<td>4886526</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4886524,4886525,4886526</td>
	</tr>
	<tr>
		<td>1482890</td>
		<td>MTK刷机，报错原因匹配的有</td>
		<td>多选题</td>
		<td>4863814</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4863815</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4863816</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4863817</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863815,4863816</td>
	</tr>
	<tr>
		<td>1482817</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4863677</td>
		<td>降级回到之前的系统版本</td>
		<td>4863678</td>
		<td>彻底删除设备数据</td>
		<td>4863679</td>
		<td>解决已解锁手机无法开机的问题</td>
		<td>4878307</td>
		<td>恢复误删除数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863677,4863678,4863679</td>
	</tr>
	<tr>
		<td>1482825</td>
		<td>fastboot oem reboot-recovery的作用是</td>
		<td>单选题</td>
		<td>4863709</td>
		<td>退出FASTBOOT模式并重启进入Recovery模式</td>
		<td>4863710</td>
		<td>退出FASTBOOT模式并重启进入系统</td>
		<td>4863711</td>
		<td>退出FASTBOOT模式并重启进入EDL模式</td>
		<td>4863712</td>
		<td>退出FASTBOOT模式并关机</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863709</td>
	</tr>
	<tr>
		<td>1482818</td>
		<td>关于安卓系统的说法不正确的是</td>
		<td>多选题</td>
		<td>4863680</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4863681</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4863682</td>
		<td>刷机过程中出现的Missmatching image and device报错，可以直接修改脚本强刷</td>
		<td>4863683</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863680,4863681,4863682</td>
	</tr>
	<tr>
		<td>1483298</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4864363</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4864364</td>
		<td>对于刷入的系统包的操作，通常建议执行四清</td>
		<td>4864365</td>
		<td>三清后不刷入系统，通常无法开机进入系统</td>
		<td>4864366</td>
		<td>双清通常是指的清除Data、Cache</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4864364,4864365</td>
	</tr>
	<tr>
		<td>1482810</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863648</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4863649</td>
		<td>解锁时需要登录小米账号</td>
		<td>4863650</td>
		<td>解锁时小米账号不需要与手机绑定</td>
		<td>4863651</td>
		<td>解锁后系统的安全系数不会降低</td>
		<td>4889559</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td></td>
		<td></td>
		<td>4863650,4863651</td>
	</tr>
	<tr>
		<td>1482816</td>
		<td>下列指令对应不正确的有</td>
		<td>多选题</td>
		<td>4863672</td>
		<td>fastboot getvar code：输出该机型的内部代号名称</td>
		<td>4863673</td>
		<td>fastboot oem device-info：输出当前BL锁的状态</td>
		<td>4863674</td>
		<td>fastboot erase &lt;分区名&gt;：擦除分区数据</td>
		<td>4863675</td>
		<td>fastboot oem lock：解锁设备</td>
		<td>4863676</td>
		<td>fastboot -r：擦除设备上的所有数据</td>
		<td></td>
		<td></td>
		<td>4863672,4863675,4863676</td>
	</tr>
	<tr>
		<td>1482809</td>
		<td>下列说法不正确的有？</td>
		<td>多选题</td>
		<td>4863644</td>
		<td>搭载Qualcomm手机不可以使用EDL刷机</td>
		<td>4863645</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>4863646</td>
		<td>EDL刷机需要进入Fastboot模式后使用</td>
		<td>4863647</td>
		<td>在没有root情况下可以安装Magisk</td>
		<td>4884823</td>
		<td>FASTBOOT模式下，通过fastboot -r ANTI可以输出防回滚机制版本号</td>
		<td>4886597</td>
		<td>Android系统启动时，第一个启动的进程是zygote进程</td>
		<td>4863644,4863645,4863646,4884823,4886597</td>
	</tr>
	<tr>
		<td>1482819</td>
		<td>下列关于说法正确的有</td>
		<td>多选题</td>
		<td>4863684</td>
		<td>Parallel Collector适合于内存有限的情况</td>
		<td>4863685</td>
		<td>G1垃圾回收器作为分代的收集器，区分年轻代和老年代</td>
		<td>4863686</td>
		<td>G1垃圾回收器设计原则是收集尽可能少的垃圾</td>
		<td>4863736</td>
		<td>G1垃圾回收器将堆内存划分多个大小相等的Region</td>
		<td>4878322</td>
		<td>G1垃圾回收器采用的是分布式垃圾收集器</td>
		<td></td>
		<td></td>
		<td>4863736,4878322</td>
	</tr>
	<tr>
		<td>1482821</td>
		<td>以下关于Dialog类的描述正确的是</td>
		<td>多选题</td>
		<td>4863693</td>
		<td>可以调用setContentView()将自定义布局添加到Dialog</td>
		<td>4863694</td>
		<td>Dialog具有独立于Activity的生命周期</td>
		<td>4863695</td>
		<td>调用show()方法在屏幕上显示一个Dialog</td>
		<td>4863696</td>
		<td>Dialog没有访问拥有它的Activity的方法</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863693,4863695</td>
	</tr>
	<tr>
		<td>1482808</td>
		<td>以下关于BL解锁刷机的说法中，不正确的有</td>
		<td>多选题</td>
		<td>4863640</td>
		<td>刷入第三方Recovery，个人数据通常是不会丢失</td>
		<td>4863641</td>
		<td>擦除cache分区数据，个人数据通常是会丢失</td>
		<td>4863642</td>
		<td>Xiaomi/Redmi的手机，一般同时按住音量+键和电源键可以进入Recovery</td>
		<td>4863643</td>
		<td>线刷前不建议备份重要数据</td>
		<td>4884841</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td></td>
		<td></td>
		<td>4863641,4863643</td>
	</tr>
	<tr>
		<td>1482814</td>
		<td>关于AndroidManifest.xml中的manifest标签，以下说法正确的是</td>
		<td>多选题</td>
		<td>4863664</td>
		<td>它声明的应用程序特定的属性</td>
		<td>4863665</td>
		<td>它可以被嵌套在application的标签内</td>
		<td>4863666</td>
		<td>它声明组件特定属性</td>
		<td>4863667</td>
		<td>这是AndroidManifest.xml中必须标签</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863664,4863667</td>
	</tr>
	<tr>
		<td>1482824</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4863705</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4863706</td>
		<td>设备没有连接计算机</td>
		<td>4863707</td>
		<td>在线ota升级后没自动双清</td>
		<td>4863708</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863705,4863706</td>
	</tr>
	<tr>
		<td>1482811</td>
		<td>以下适用于View类的onDraw()方法有</td>
		<td>多选题</td>
		<td>4863652</td>
		<td>如果需要自定义绘制视图，则必须重写onDraw方法</td>
		<td>4863653</td>
		<td>它接收两个参数：Canvas和View</td>
		<td>4863654</td>
		<td>它接收一个Canvas类型的参数</td>
		<td>4863655</td>
		<td>它使用Canvas参数来绘制包含它的Activity的边缘</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863652,4863654</td>
	</tr>
	<tr>
		<td>1482822</td>
		<td>关于Android安全策略相关内容，以下说法正确的是</td>
		<td>多选题</td>
		<td>4863697</td>
		<td>Android安全策略基于DAC+Sandbox，因此root用户不受任何限制，可执行任意操作</td>
		<td>4863698</td>
		<td>在正常情况下，所有非system分区，APP运行时的UID不是完全一样的</td>
		<td>4863699</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4863700</td>
		<td>Android系统使用TEE来保护极度敏感的数据，BL解锁后会导致TEE熔断</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863698,4863700</td>
	</tr>
</table>

## 2023.12.11
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7822251)
- 答题链接: https://m.beehive.miui.com/NhTPAE5m-ZurhVKqMhvHCQ/
- 题目数量: 18
- 合格分数: 93
- 每题分数: 8
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注(更新):
  1. 题目 1482820 的选项之一 4863692 存在误导用户行为，请参见「题目解析」;
  2. 社区等级低于 5 级无法答题;
  3. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  4. 已答题账号在 7 天内无法重新答题。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请;
  2. 寻找“代答”是违规行为，经过核查发现答题时所使用的 IP 地址异常波动的用户，将无法通过 BL 解锁审核，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1489752</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4883294</td>
		<td>未答题或未达到答题的分数线时，每7天可重新参与一次答题</td>
		<td>4883295</td>
		<td>参与答题必须从“小米社区App的内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4883296</td>
		<td>本周答题通过分数线为92分以上（不含92分）</td>
		<td>4883297</td>
		<td>租借/转让/借用BL解锁的资格，属于违规行为，将被永久封号</td>
		<td>4883298</td>
		<td>如果本次BL解锁的申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4889570</td>
		<td>“代答”是违规行为，经过核查发现答题异常的用户，将无法通过BL解锁审核</td>
		<td>4883294,4883295,4883296,4883297,4883298,4889570</td>
	</tr>
	<tr>
		<td>1482813</td>
		<td>烧录img、bin、mbn、elf等镜像文件内容到指定分区，正确的指令是</td>
		<td>单选题</td>
		<td>4863660</td>
		<td>fastboot boot&lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863661</td>
		<td>fastboot boot &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td>4863662</td>
		<td>fastboot flash &lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863663</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863663</td>
	</tr>
	<tr>
		<td>1482824</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4863705</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4863706</td>
		<td>设备没有连接计算机</td>
		<td>4863707</td>
		<td>在线ota升级后没自动双清</td>
		<td>4863708</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863705,4863706</td>
	</tr>
	<tr>
		<td>1482810</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863648</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4863649</td>
		<td>解锁时需要登录小米账号</td>
		<td>4863650</td>
		<td>解锁时小米账号不需要与手机绑定</td>
		<td>4863651</td>
		<td>解锁后系统的安全系数不会降低</td>
		<td>4889559</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td></td>
		<td></td>
		<td>4863650,4863651</td>
	</tr>
	<tr>
		<td>1482820</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863692</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4886524</td>
		<td>隐式Intent有指定的组件来运行一个确切的类</td>
		<td>4886525</td>
		<td>Android的安全机制的包括进程沙箱隔离机制、应用程序签名机制、访问控制机制、事件分发机制等</td>
		<td>4886526</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4886524,4886525,4886526</td>
	</tr>
	<tr>
		<td>1482890</td>
		<td>MTK刷机，报错原因匹配的有</td>
		<td>多选题</td>
		<td>4863814</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4863815</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4863816</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4863817</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863815,4863816</td>
	</tr>
	<tr>
		<td>1482819</td>
		<td>下列关于说法正确的有</td>
		<td>多选题</td>
		<td>4863684</td>
		<td>Parallel Collector适合于内存有限的情况</td>
		<td>4863685</td>
		<td>G1垃圾回收器作为分代的收集器，区分年轻代和老年代</td>
		<td>4863686</td>
		<td>G1垃圾回收器设计原则是收集尽可能少的垃圾</td>
		<td>4863736</td>
		<td>G1垃圾回收器将堆内存划分多个大小相等的Region</td>
		<td>4878322</td>
		<td>G1垃圾回收器采用的是分布式垃圾收集器</td>
		<td></td>
		<td></td>
		<td>4863736,4878322</td>
	</tr>
	<tr>
		<td>1482825</td>
		<td>fastboot oem reboot-recovery的作用是</td>
		<td>单选题</td>
		<td>4863709</td>
		<td>退出FASTBOOT模式并重启进入Recovery模式</td>
		<td>4863710</td>
		<td>退出FASTBOOT模式并重启进入系统</td>
		<td>4863711</td>
		<td>退出FASTBOOT模式并重启进入EDL模式</td>
		<td>4863712</td>
		<td>退出FASTBOOT模式并关机</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863709</td>
	</tr>
	<tr>
		<td>1482811</td>
		<td>以下适用于View类的onDraw()方法有</td>
		<td>多选题</td>
		<td>4863652</td>
		<td>如果需要自定义绘制视图，则必须重写onDraw方法</td>
		<td>4863653</td>
		<td>它接收两个参数：Canvas和View</td>
		<td>4863654</td>
		<td>它接收一个Canvas类型的参数</td>
		<td>4863655</td>
		<td>它使用Canvas参数来绘制包含它的Activity的边缘</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863652,4863654</td>
	</tr>
	<tr>
		<td>1482818</td>
		<td>关于安卓系统的说法不正确的是</td>
		<td>多选题</td>
		<td>4863680</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4863681</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4863682</td>
		<td>刷机过程中出现的Missmatching image and device报错，不可以直接修改脚本强刷</td>
		<td>4863683</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863680,4863681</td>
	</tr>
	<tr>
		<td>1482817</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4863677</td>
		<td>降级回到之前的系统版本</td>
		<td>4863678</td>
		<td>彻底删除设备数据</td>
		<td>4863679</td>
		<td>解决已解锁手机无法开机的问题</td>
		<td>4878307</td>
		<td>恢复误删除数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863677,4863678,4863679</td>
	</tr>
	<tr>
		<td>1483298</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4864363</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4864364</td>
		<td>对于刷入的系统包的操作，通常建议执行四清</td>
		<td>4864365</td>
		<td>三清后不刷入系统，通常无法开机进入系统</td>
		<td>4864366</td>
		<td>双清通常是指的清除Data、Cache</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4864364,4864365</td>
	</tr>
	<tr>
		<td>1482816</td>
		<td>下列指令对应正确的有</td>
		<td>多选题</td>
		<td>4863672</td>
		<td>fastboot getvar code：输出该机型的内部代号名称</td>
		<td>4863673</td>
		<td>fastboot oem device-info：输出当前BL锁的状态</td>
		<td>4863674</td>
		<td>fastboot erase &lt;分区名&gt;：擦除分区数据</td>
		<td>4863675</td>
		<td>fastboot oem lock：解锁设备</td>
		<td>4863676</td>
		<td>fastboot -r：擦除设备上的所有数据</td>
		<td></td>
		<td></td>
		<td>4863673,4863674</td>
	</tr>
	<tr>
		<td>1482809</td>
		<td>下列说法不正确的有？</td>
		<td>多选题</td>
		<td>4863644</td>
		<td>搭载Qualcomm手机不可以使用EDL刷机</td>
		<td>4863645</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>4863646</td>
		<td>EDL刷机不需要进入Fastboot模式后使用</td>
		<td>4863647</td>
		<td>在没有root情况下可以安装Magisk</td>
		<td>4884823</td>
		<td>FASTBOOT模式下，通过fastboot -r ANTI可以输出防回滚机制版本号</td>
		<td>4886597</td>
		<td>Android系统启动时，第一个启动的进程是zygote进程</td>
		<td>4863644,4863645,4884823,4886597</td>
	</tr>
	<tr>
		<td>1482821</td>
		<td>以下关于Dialog类的描述中正确的是</td>
		<td>多选题</td>
		<td>4863693</td>
		<td>可以调用setContentView()将自定义布局添加到Dialog</td>
		<td>4863694</td>
		<td>Dialog具有独立于Activity的生命周期</td>
		<td>4863695</td>
		<td>调用show()方法在屏幕上显示一个Dialog</td>
		<td>4863696</td>
		<td>Dialog没有访问拥有它的Activity的方法</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863693,4863695</td>
	</tr>
	<tr>
		<td>1482808</td>
		<td>以下关于BL解锁刷机的说法中，不正确的有</td>
		<td>多选题</td>
		<td>4863640</td>
		<td>刷入第三方Recovery，个人数据通常是不会丢失</td>
		<td>4863641</td>
		<td>擦除cache分区数据，个人数据通常是会丢失</td>
		<td>4863642</td>
		<td>Xiaomi/Redmi的手机，一般同时按住音量+键和电源键可以进入Recovery</td>
		<td>4863643</td>
		<td>线刷前不建议备份重要数据</td>
		<td>4884841</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td></td>
		<td></td>
		<td>4863641,4863643</td>
	</tr>
	<tr>
		<td>1482814</td>
		<td>关于AndroidManifest.xml中的manifest标签，以下说法正确的是</td>
		<td>多选题</td>
		<td>4863664</td>
		<td>它声明的应用程序特定的属性</td>
		<td>4863665</td>
		<td>它可以被嵌套在application的标签内</td>
		<td>4863666</td>
		<td>它声明组件特定属性</td>
		<td>4863667</td>
		<td>这是AndroidManifest.xml中必须标签</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863664,4863667</td>
	</tr>
	<tr>
		<td>1482822</td>
		<td>关于Android安全策略相关内容，以下说法正确的是</td>
		<td>多选题</td>
		<td>4863697</td>
		<td>Android安全策略基于DAC+Sandbox，因此root用户不受任何限制，可执行任意操作</td>
		<td>4863698</td>
		<td>在正常情况下，所有非system分区，APP运行时的UID不是完全一样的</td>
		<td>4863699</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4863700</td>
		<td>Android系统使用TEE来保护极度敏感的数据，BL解锁后会导致TEE熔断</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863698,4863700</td>
	</tr>
</table>

## 2023.12.08
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7803263)
- 答题链接: https://m.beehive.miui.com/NhTPAE5m-ZurhVKqMhvHCQ/
- 题目数量: 18
- 合格分数: 93
- 每题分数: 8
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注(更新):
  1. 题目 1482822 的选项之一 4863700 去除了不确定的描述（“可能”）。但对于 Xiaomi/Redmi 手机，该选项仍然为真命题。请参见「题目解析」;
  2. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  3. 已答题账号在 7 天内无法重新答题。
- 官方提示:
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请;
  2. 寻找“代答”是违规行为，经过核查发现答题时所使用的 IP 地址异常波动的用户，将无法通过 BL 解锁审核，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1489752</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4883294</td>
		<td>未答题或未达到答题的分数线时，每7天可重新参与一次答题</td>
		<td>4883295</td>
		<td>参与答题必须从“小米社区App的内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4883296</td>
		<td>本周答题通过分数线为92分以上（不含92分）</td>
		<td>4883297</td>
		<td>租借/转让/借用BL解锁的资格，属于违规行为，将被永久封号</td>
		<td>4883298</td>
		<td>如果本次BL解锁的申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4889570</td>
		<td>寻找“代答”是违规行为，经过核查发现答题时所使用的IP地址异常波动的用户，将无法通过BL解锁审核</td>
		<td>4883294,4883295,4883296,4883297,4883298,4889570</td>
	</tr>
	<tr>
		<td>1482824</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4863705</td>
		<td>ADB驱动程序没正确安装</td>
		<td>4863706</td>
		<td>设备没有连接计算机</td>
		<td>4863707</td>
		<td>在线ota升级后没自动双清</td>
		<td>4863708</td>
		<td>安装包签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863705,4863706</td>
	</tr>
	<tr>
		<td>1482820</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863688</td>
		<td>Android 8或更高版本的设备中，APK文件中包含运行所需全部资源，运行应用实际上是在运行APK</td>
		<td>4863689</td>
		<td>Android 7及更低版本的设备中，同一APK文件不可以安装到所有Android系统的设备上</td>
		<td>4863692</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td>4886524</td>
		<td>HAL介于Android framework层和应用层之间，屏蔽了硬件底层的具体实现，防止AOSP受GPL污染</td>
		<td>4886525</td>
		<td>Android安全机制包括dm-verity，avb，bootloader等</td>
		<td>4886526</td>
		<td>BootLoader是在Android设备启动时最先加载到RAM中的程序，它的主要作用是把系统OS拉起来并运行</td>
		<td>4863688,4863689,4886524,4886526</td>
	</tr>
	<tr>
		<td>1482811</td>
		<td>以下不适用于View类的onDraw()方法有</td>
		<td>多选题</td>
		<td>4863652</td>
		<td>如果需要自定义绘制视图，则必须重写onDraw方法</td>
		<td>4863653</td>
		<td>它接收两个参数：Canvas和View</td>
		<td>4863654</td>
		<td>它接收一个Canvas类型的参数</td>
		<td>4863655</td>
		<td>它使用Canvas参数来绘制包含它的Activity的边缘</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863653,4863655</td>
	</tr>
	<tr>
		<td>1482818</td>
		<td>关于安卓系统的说法不正确的是</td>
		<td>多选题</td>
		<td>4863680</td>
		<td>刷机过程中出现Flash antirbpass error的报错，可以直接修改脚本强刷</td>
		<td>4863681</td>
		<td>刷机过程中如果变砖，可以通过9008的模式刷机救回MTK平台的机器</td>
		<td>4863682</td>
		<td>刷机过程中出现的Missmatching image and device报错，不可以直接修改脚本强刷</td>
		<td>4863683</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863680,4863681</td>
	</tr>
	<tr>
		<td>1482817</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4863677</td>
		<td>降级回到之前的系统版本</td>
		<td>4863678</td>
		<td>彻底删除设备数据</td>
		<td>4863679</td>
		<td>解决已解锁手机无法开机的问题</td>
		<td>4878307</td>
		<td>恢复误删除数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863677,4863678,4863679</td>
	</tr>
	<tr>
		<td>1483298</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>4864363</td>
		<td>刷入的系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4864364</td>
		<td>对于刷入的系统包的操作，通常建议执行四清</td>
		<td>4864365</td>
		<td>三清后不刷入系统，通常无法开机进入系统</td>
		<td>4864366</td>
		<td>双清通常是指的清除Data、Cache</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4864363,4864366</td>
	</tr>
	<tr>
		<td>1482809</td>
		<td>下列说法错误的有？</td>
		<td>多选题</td>
		<td>4863644</td>
		<td>搭载Qualcomm手机不可以使用EDL刷机</td>
		<td>4863645</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>4863646</td>
		<td>EDL刷机不需要进入Fastboot模式后使用</td>
		<td>4863647</td>
		<td>在没有root情况下可以安装Magisk</td>
		<td>4884823</td>
		<td>FASTBOOT模式下，通过fastboot -r ANTI可以输出防回滚机制版本号</td>
		<td>4886597</td>
		<td>Android系统启动时，第一个启动的进程是zygote进程</td>
		<td>4863644,4863645,4884823,4886597</td>
	</tr>
	<tr>
		<td>1482821</td>
		<td>以下关于Dialog类的描述中正确的是</td>
		<td>多选题</td>
		<td>4863693</td>
		<td>可以调用setContentView()将自定义布局添加到Dialog</td>
		<td>4863694</td>
		<td>Dialog具有独立于Activity的生命周期</td>
		<td>4863695</td>
		<td>调用show()方法在屏幕上显示一个Dialog</td>
		<td>4863696</td>
		<td>Dialog没有访问拥有它的Activity的方法</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863693,4863695</td>
	</tr>
	<tr>
		<td>1482814</td>
		<td>关于AndroidManifest.xml中的manifest标签，以下说法不正确的是</td>
		<td>多选题</td>
		<td>4863664</td>
		<td>它声明的应用程序特定的属性</td>
		<td>4863665</td>
		<td>它可以被嵌套在application的标签内</td>
		<td>4863666</td>
		<td>它声明组件特定属性</td>
		<td>4863667</td>
		<td>这是AndroidManifest.xml中必须标签</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863665,4863666</td>
	</tr>
	<tr>
		<td>1482822</td>
		<td>关于Android安全策略相关内容，以下说法不正确的是</td>
		<td>多选题</td>
		<td>4863697</td>
		<td>Android安全策略基于DAC+Sandbox，因此root用户不受任何限制，可执行任意操作</td>
		<td>4863698</td>
		<td>在正常情况下，所有非system分区，APP运行时的UID不是完全一样的</td>
		<td>4863699</td>
		<td>Android系统加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4863700</td>
		<td>Android系统使用TEE来保护极度敏感的数据，BL解锁后会导致TEE熔断</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863697,4863699</td>
	</tr>
	<tr>
		<td>1482816</td>
		<td>下列指令对应正确的有</td>
		<td>多选题</td>
		<td>4863672</td>
		<td>fastboot getvar code：输出该机型的内部代号名称</td>
		<td>4863673</td>
		<td>fastboot oem device-info：输出当前BL锁的状态</td>
		<td>4863674</td>
		<td>fastboot erase &lt;分区名&gt;：擦除分区数据</td>
		<td>4863675</td>
		<td>fastboot oem lock：解锁设备</td>
		<td>4863676</td>
		<td>fastboot -r：擦除设备上的所有数据</td>
		<td></td>
		<td></td>
		<td>4863673,4863674</td>
	</tr>
	<tr>
		<td>1482825</td>
		<td>fastboot oem reboot-recovery的作用是</td>
		<td>单选题</td>
		<td>4863709</td>
		<td>退出FASTBOOT模式并重启进入Recovery模式</td>
		<td>4863710</td>
		<td>退出FASTBOOT模式并重启进入系统</td>
		<td>4863711</td>
		<td>退出FASTBOOT模式并重启进入EDL模式</td>
		<td>4863712</td>
		<td>退出FASTBOOT模式并关机</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863709</td>
	</tr>
	<tr>
		<td>1482810</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863648</td>
		<td>正式版切换到开发版一般不需要解锁</td>
		<td>4863649</td>
		<td>解锁时需要登录小米账号</td>
		<td>4863650</td>
		<td>解锁时小米账号不需要与手机绑定</td>
		<td>4863651</td>
		<td>解锁后系统的安全系数不会降低</td>
		<td>4889559</td>
		<td>官方提供给用户的刷机工具是MiFlash</td>
		<td></td>
		<td></td>
		<td>4863650,4863651</td>
	</tr>
	<tr>
		<td>1482808</td>
		<td>以下关于BL解锁刷机的说法中，不正确的有</td>
		<td>多选题</td>
		<td>4863640</td>
		<td>刷入第三方Recovery，个人数据通常是不会丢失</td>
		<td>4863641</td>
		<td>擦除cache分区数据，个人数据通常是会丢失</td>
		<td>4863642</td>
		<td>Xiaomi/Redmi的手机，一般同时按住音量+键和电源键可以进入Recovery</td>
		<td>4863643</td>
		<td>线刷前不建议备份重要数据</td>
		<td>4884841</td>
		<td>手机如只能进入FASTBOOT，可能是引导程序损毁</td>
		<td></td>
		<td></td>
		<td>4863641,4863643</td>
	</tr>
	<tr>
		<td>1482819</td>
		<td>下列关于说法不正确的有</td>
		<td>多选题</td>
		<td>4863684</td>
		<td>Parallel Collector适合于内存有限的情况</td>
		<td>4863685</td>
		<td>G1垃圾回收器作为分代的收集器，区分年轻代和老年代</td>
		<td>4863686</td>
		<td>G1垃圾回收器设计原则是收集尽可能少的垃圾</td>
		<td>4863736</td>
		<td>G1垃圾回收器将堆内存划分多个大小相等的Region</td>
		<td>4878322</td>
		<td>G1垃圾回收器采用的是分布式垃圾收集器</td>
		<td></td>
		<td></td>
		<td>4863684,4863685,4863686</td>
	</tr>
	<tr>
		<td>1482890</td>
		<td>MTK刷机，报错原因匹配的有</td>
		<td>多选题</td>
		<td>4863814</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机的内存己经损坏</td>
		<td>4863815</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机系统差距过大</td>
		<td>4863816</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包文件</td>
		<td>4863817</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名的程序</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863815,4863816</td>
	</tr>
	<tr>
		<td>1482813</td>
		<td>烧录img、bin、mbn、elf等镜像文件内容到指定分区，正确的指令是</td>
		<td>单选题</td>
		<td>4863660</td>
		<td>fastboot boot&lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863661</td>
		<td>fastboot boot &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td>4863662</td>
		<td>fastboot flash &lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863663</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863663</td>
	</tr>
</table>

## 2023.12.07
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7790915)
- 答题链接: https://m.beehive.miui.com/NhTPAE5m-ZurhVKqMhvHCQ/
- 题目数量: 18
- 合格分数: 93
- 每题分数: 8
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注(更新):
  1. 题目 1483298 的正确答案之一 4864364 存在误导用户行为，请参见「题目解析」;
  2. 部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  3. 已答题账号在 7 天内无法重新答题。
- 官方提示(更新):
  1. 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请;
  2. 寻找“代答”是违规行为，经过核查发现答题时所使用的 IP 地址异常波动的用户，将无法通过 BL 解锁审核，敬请知悉。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1489752</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4883294</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4883295</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4883296</td>
		<td>本周答题的通过分数线为92分以上（不含92分）</td>
		<td>4883297</td>
		<td>租借/转让/借用BL解锁资格，属于违规行为，将被永久封号</td>
		<td>4883298</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td>4883294,4883295,4883296,4883297,4883298</td>
	</tr>
	<tr>
		<td>1483298</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>4864363</td>
		<td>刷入系统版本与原系统差异较大时，通常建议执行三清</td>
		<td>4864364</td>
		<td>对于刷入系统包的操作，通常建议执行三清</td>
		<td>4864365</td>
		<td>三清后不刷入系统，通常无法开机进系统</td>
		<td>4864366</td>
		<td>双清通常是指清除Data、Cache</td>
		<td></td>
		<td></td>
		<td>4864364,4864366</td>
	</tr>
	<tr>
		<td>1482825</td>
		<td>fastboot oem reboot-recovery的作用是</td>
		<td>单选题</td>
		<td>4863709</td>
		<td>退出FASTBOOT模式并重启进入Recovery模式</td>
		<td>4863710</td>
		<td>退出FASTBOOT模式并重启进入系统</td>
		<td>4863711</td>
		<td>退出FASTBOOT模式并重启进入EDL模式</td>
		<td>4863712</td>
		<td>退出FASTBOOT模式并关机</td>
		<td></td>
		<td></td>
		<td>4863709</td>
	</tr>
	<tr>
		<td>1482818</td>
		<td>以下关于安卓系统的说法不正确的是</td>
		<td>多选题</td>
		<td>4863680</td>
		<td>刷机过程中出现Flash antirbpass error报错，不可以直接修改脚本强刷</td>
		<td>4863681</td>
		<td>刷机过程中如果变砖，可以通过9008模式刷机救回MTK平台的机器 </td>
		<td>4863682</td>
		<td>刷机过程中出现Missmatching image and device报错，可以直接修改脚本强刷，不会变砖</td>
		<td>4863683</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td>4863681,4863682</td>
	</tr>
	<tr>
		<td>1482890</td>
		<td>关于MTK刷机常见报错的原因不匹配的有</td>
		<td>多选题</td>
		<td>4863814</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机内存己经损坏</td>
		<td>4863815</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机的系统差距过大</td>
		<td>4863816</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包的文件</td>
		<td>4863817</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名程序</td>
		<td></td>
		<td></td>
		<td>4863814,4863817</td>
	</tr>
	<tr>
		<td>1482824</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4863705</td>
		<td>ADB驱动程序没有正确安装</td>
		<td>4863706</td>
		<td>设备没有连接到计算机</td>
		<td>4863707</td>
		<td>在线ota升级后没有自动双清</td>
		<td>4863708</td>
		<td>安装包的签名不一致</td>
		<td></td>
		<td></td>
		<td>4863705,4863706</td>
	</tr>
	<tr>
		<td>1482819</td>
		<td>下列关于JVM垃圾回收机制的说法不正确的有</td>
		<td>多选题</td>
		<td>4863684</td>
		<td>Parallel Collector适合内存有限的情况</td>
		<td>4863685</td>
		<td>G1垃圾回收器作为分代收集器，区分年轻代和老年代</td>
		<td>4863686</td>
		<td>G1垃圾回收器的设计原则是收集尽可能多的垃圾</td>
		<td>4863736</td>
		<td>G1垃圾回收器将堆内存划分为多个大小不等的Region</td>
		<td>4878322</td>
		<td>G1垃圾回收器采用的是分布式的垃圾收集器</td>
		<td>4863684,4863685,4863736</td>
	</tr>
	<tr>
		<td>1482820</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>4863688</td>
		<td>Android 8或更高版本的设备中，APK文件中包含运行所需全部资源，运行应用实际上是在运行APK</td>
		<td>4863689</td>
		<td>Android 7及更低版本的设备中，同一APK文件不可以安装到所有Android系统的设备上</td>
		<td>4863690</td>
		<td>Android 8或更高版本的设备中，用户必须授予权限，系统才能从应用商店以外的来源安装应用</td>
		<td>4863692</td>
		<td>Android 7及更低版本的设备中，不使用JIT/AOT混合编译模式</td>
		<td></td>
		<td></td>
		<td>4863690,4863692</td>
	</tr>
	<tr>
		<td>1482811</td>
		<td>下列刷机工具中，不属于官方提供给用户的工具是？</td>
		<td>多选题</td>
		<td>4863652</td>
		<td>MIUI一键刷机</td>
		<td>4863653</td>
		<td>刷机大师</td>
		<td>4863654</td>
		<td>线刷宝</td>
		<td>4863655</td>
		<td>91助手</td>
		<td>4883288</td>
		<td>MiFlash</td>
		<td>4863652,4863653,4863654,4863655</td>
	</tr>
	<tr>
		<td>1482809</td>
		<td>下列说法错误的有？</td>
		<td>多选题</td>
		<td>4863644</td>
		<td>搭载Qualcomm的手机可以使用EDL刷机</td>
		<td>4863645</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>4863646</td>
		<td>EDL刷机不需要进入Fastboot模式后使用</td>
		<td>4863647</td>
		<td>在没有root的情况下可以安装Magisk</td>
		<td>4884823</td>
		<td>FASTBOOT模式下，通过fastboot -r ANTI可以输出防回滚机制（ANTI）版本号</td>
		<td>4863645,4884823</td>
	</tr>
	<tr>
		<td>1482821</td>
		<td>安卓系统中负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>4863693</td>
		<td>ActivityManagerSystem</td>
		<td>4863694</td>
		<td>ActivitySystemManager</td>
		<td>4863695</td>
		<td>ActivityManagerService</td>
		<td>4863696</td>
		<td>ApplicationManagerService</td>
		<td></td>
		<td></td>
		<td>4863695</td>
	</tr>
	<tr>
		<td>1482808</td>
		<td>以下关于BL解锁刷机的说法中，正确的有</td>
		<td>多选题</td>
		<td>4863640</td>
		<td>刷入第三方Recovery，个人数据通常会丢失</td>
		<td>4863641</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>4863642</td>
		<td>Xiaomi/Redmi手机，一般同时按住音量上键和下键可以进入Recovery</td>
		<td>4863643</td>
		<td>线刷刷机前，无需备份重要数据</td>
		<td>4884841</td>
		<td>手机如果只能进入FASTBOOT，可能是引导程序损毁</td>
		<td>4863641,4884841</td>
	</tr>
	<tr>
		<td>1482813</td>
		<td>如何烧录img、bin、mbn、elf等镜像文件内容到指定分区？</td>
		<td>单选题</td>
		<td>4863660</td>
		<td>fastboot boot&lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863661</td>
		<td>fastboot boot &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td>4863662</td>
		<td>fastboot flash &lt;镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4863663</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td>4863663</td>
	</tr>
	<tr>
		<td>1482817</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4863677</td>
		<td>降级回到之前的系统版本</td>
		<td>4863678</td>
		<td>彻底删除设备数据</td>
		<td>4863679</td>
		<td>解决已解锁手机无法开机的问题</td>
		<td>4878307</td>
		<td>恢复误删除的数据</td>
		<td></td>
		<td></td>
		<td>4863677,4863678,4863679</td>
	</tr>
	<tr>
		<td>1482822</td>
		<td>关于Android安全策略相关内容，以下说法错误的是</td>
		<td>多选题</td>
		<td>4863697</td>
		<td>Android的安全策略基于DAC+Sandbox，因此root用户不受任何限制，可以执行任意操作</td>
		<td>4863698</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID不是完全一样的</td>
		<td>4863699</td>
		<td>Android系统通过加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4863700</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td></td>
		<td></td>
		<td>4863697,4863699</td>
	</tr>
	<tr>
		<td>1482814</td>
		<td>关于AndroidManifest.xml中的manifest标签，以下说法不正确的是</td>
		<td>多选题</td>
		<td>4863664</td>
		<td>它声明应用程序特定的属性</td>
		<td>4863665</td>
		<td>它可以被嵌套在application标签内</td>
		<td>4863666</td>
		<td>它声明组件特定的属性</td>
		<td>4863667</td>
		<td>这是AndroidManifest.xml中必须的标签</td>
		<td></td>
		<td></td>
		<td>4863665,4863666</td>
	</tr>
	<tr>
		<td>1482816</td>
		<td>下列指令对应正确的有</td>
		<td>多选题</td>
		<td>4863672</td>
		<td>fastboot getvar code：输出该机型内部代号名称</td>
		<td>4863673</td>
		<td>fastboot oem device-info：输出当前BL锁状态</td>
		<td>4863674</td>
		<td>fastboot erase &lt;分区名&gt;：擦除分区内数据</td>
		<td>4863675</td>
		<td>fastboot oem lock：解锁设备</td>
		<td>4863676</td>
		<td>fastboot -w：擦除设备上所有数据</td>
		<td>4863673,4863674,4863676</td>
	</tr>
	<tr>
		<td>1482810</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863648</td>
		<td>正式版切换到开发版通常不需要解锁</td>
		<td>4863649</td>
		<td>解锁时需要登录小米账号</td>
		<td>4863650</td>
		<td>解锁时小米账号不需要与手机绑定</td>
		<td>4863651</td>
		<td>解锁后系统安全系数不会降低</td>
		<td></td>
		<td></td>
		<td>4863650,4863651</td>
	</tr>
</table>

## 2023.12.06
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/4#discussioncomment-7784763)
- 答题链接(更新): https://m.beehive.miui.com/NhTPAE5m-ZurhVKqMhvHCQ/
- 题目数量: 18
- 合格分数: 93
- 每题分数(更新): 8
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注(更新):
  1. 本次更新后，部分题目和选项的顺序和细节描述可能会随机变动，请仔细检查后选择;
  2. 已答题账号在 7 天内无法重新答题。
- 官方提示(更新): 请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请。

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="12">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1489752</td>
		<td>关于BL解锁说法正确的是</td>
		<td>多选题</td>
		<td>4883294</td>
		<td>未答题或未达到答题分数线时，每7天可重新参与一次答题</td>
		<td>4883295</td>
		<td>参与答题必须从“小米社区App-内测中心-BL解锁申请-去答题”进入，其他方式进入答题将无法展示分数，影响后续申请</td>
		<td>4883296</td>
		<td>本周答题的通过分数线为96分以上（不含96分）</td>
		<td>4883297</td>
		<td>租借/转让/借用BL解锁资格，属于违规行为，将被永久封号</td>
		<td>4883298</td>
		<td>如果本次BL解锁申请通过，所获得的3次解锁资格，有效期至2024年12月31日</td>
		<td></td>
		<td></td>
		<td>4883294,4883295,4883297,4883298</td>
	</tr>
	<tr>
		<td>1482811</td>
		<td>下列刷机工具中，不属于官方提供给用户的工具是？</td>
		<td>多选题</td>
		<td>4863652</td>
		<td>MIUI一键刷机</td>
		<td>4863653</td>
		<td>刷机大师</td>
		<td>4863654</td>
		<td>线刷宝</td>
		<td>4863655</td>
		<td>91助手</td>
		<td>4883288</td>
		<td>MiFlash</td>
		<td></td>
		<td></td>
		<td>4863652,4863653,4863654,4863655</td>
	</tr>
	<tr>
		<td>1482808</td>
		<td>以下关于BL解锁刷机的说法中，正确的有</td>
		<td>多选题</td>
		<td>4863640</td>
		<td>刷入第三方Recovery，个人数据通常会丢失</td>
		<td>4863641</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>4863642</td>
		<td>Xiaomi/Redmi手机，一般同时按住音量上键和下键可以进入Recovery</td>
		<td>4863643</td>
		<td>线刷刷机前，应当备份重要数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863641,4863643</td>
	</tr>
	<tr>
		<td>1482813</td>
		<td>如何烧录img、bin、mbn、elf等镜像文件内容到指定分区？</td>
		<td>单选题</td>
		<td>4863660</td>
		<td>fastboot boot<镜像文件名或路径> <分区名></td>
		<td>4863661</td>
		<td>fastboot boot <分区名> <镜像文件名或路径></td>
		<td>4863662</td>
		<td>fastboot flash <镜像文件名或路径> <分区名></td>
		<td>4863663</td>
		<td>fastboot flash <分区名> <镜像文件名或路径></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863663</td>
	</tr>
	<tr>
		<td>1482817</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4863677</td>
		<td>降级回到之前的系统版本</td>
		<td>4863678</td>
		<td>彻底删除设备数据</td>
		<td>4863679</td>
		<td>解决已解锁手机无法开机的问题</td>
		<td>4878307</td>
		<td>恢复误删除的数据</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863677,4863678,4863679</td>
	</tr>
	<tr>
		<td>1482822</td>
		<td>关于Android安全策略相关内容，以下说法错误的是</td>
		<td>多选题</td>
		<td>4863697</td>
		<td>Android的安全策略基于DAC+Sandbox，因此root用户不受任何限制，可以执行任意操作</td>
		<td>4863698</td>
		<td>在正常情况下，所有非system分区的APP运行时的UID都是一样的</td>
		<td>4863699</td>
		<td>Android系统通过加密保护用户数据，Android 10或更高版本的设备使用全盘加密</td>
		<td>4863700</td>
		<td>Android系统使用TEE来保护极度敏感的数据，解锁BootLoader后可能导致TEE熔断</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863697,4863698,4863699</td>
	</tr>
	<tr>
		<td>1482818</td>
		<td>以下关于安卓系统的说法不正确的是</td>
		<td>多选题</td>
		<td>4863680</td>
		<td>刷机过程中出现Flash antirbpass error报错，不可以直接修改脚本强刷</td>
		<td>4863681</td>
		<td>刷机过程中如果变砖，可以通过9008模式刷机救回MTK平台的机器</td>
		<td>4863682</td>
		<td>刷机过程中出现Missmatching image and device报错，可以直接修改脚本强刷，不会变砖</td>
		<td>4863683</td>
		<td>刷机过程中碰到数据线可能导致报错，重新刷机即可</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863681,4863682</td>
	</tr>
	<tr>
		<td>1482814</td>
		<td>下列关于退出FASTBOOT模式，做法不正确的有</td>
		<td>多选题</td>
		<td>4863664</td>
		<td>在FASTBOOT模式下长按电源键约7-15秒重启进入系统</td>
		<td>4863665</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4863666</td>
		<td>部分机型在FASTBOOT模式下插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4863667</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863666,4863667</td>
	</tr>
	<tr>
		<td>1482816</td>
		<td>下列指令对应正确的有</td>
		<td>多选题</td>
		<td>4863672</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4863673</td>
		<td>fastboot oem device-info：输出当前BL锁状态</td>
		<td>4863674</td>
		<td>fastboot wipe <分区名>：擦除分区内数据</td>
		<td>4863675</td>
		<td>fastboot oem lock：解锁设备</td>
		<td>4863676</td>
		<td>fastboot -w：擦除设备上所有数据</td>
		<td></td>
		<td></td>
		<td>4863672,4863673,4863676</td>
	</tr>
	<tr>
		<td>1482890</td>
		<td>关于MTK刷机常见报错的原因不匹配的有</td>
		<td>多选题</td>
		<td>4863814</td>
		<td>S_DA_EMMC_FLASH_NOT_FOUND：手机内存己经损坏</td>
		<td>4863815</td>
		<td>S_FT_NEED_DOWNLOAD_ALL_FAIL：目标ROM文件和手机的系统差距过大</td>
		<td>4863816</td>
		<td>S_BROM_CMD_STARTCMD_FAIL：没有加载好刷机包的文件</td>
		<td>4863817</td>
		<td>S_UNSUPPORTED_OPERATION：已存在同名程序</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863814,4863817</td>
	</tr>
	<tr>
		<td>1482825</td>
		<td>fastboot oem reboot-recovery的作用是</td>
		<td>单选题</td>
		<td>4863709</td>
		<td>退出FASTBOOT模式并重启进入Recovery模式</td>
		<td>4863710</td>
		<td>退出FASTBOOT模式并重启进入系统</td>
		<td>4863711</td>
		<td>退出FASTBOOT模式并重启进入EDL模式</td>
		<td>4863712</td>
		<td>退出FASTBOOT模式并关机</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863709</td>
	</tr>
	<tr>
		<td>1483298</td>
		<td>下列说法正确的有</td>
		<td>单选题</td>
		<td>4864363</td>
		<td>刷入系统版本与原系统差异较大时，通常建议执行四清</td>
		<td>4864364</td>
		<td>对于刷入系统包的操作，通常建议执行四清</td>
		<td>4864365</td>
		<td>三清后不刷入系统，通常无法开机进系统</td>
		<td>4864366</td>
		<td>双清通常是指清除Data、Cache</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4864363,4864366</td>
	</tr>
	<tr>
		<td>1482819</td>
		<td>下列关于JVM垃圾回收机制的说法正确的有</td>
		<td>多选题</td>
		<td>4863684</td>
		<td>Serial Collector适合内存有限的情况</td>
		<td>4863685</td>
		<td>Concurrent Mark Sweep Collector在Old区回收暂停时间长</td>
		<td>4863686</td>
		<td>Parallel Collector效率高</td>
		<td>4863687</td>
		<td>Serial Collector回收速度快</td>
		<td>4863736</td>
		<td>G1垃圾回收器将堆内存划分为多个大小不等的Region</td>
		<td>4878322</td>
		<td>G1垃圾回收器采用的是区域化、分布式的垃圾收集器</td>
		<td>4863684,4863686,4878322</td>
	</tr>
	<tr>
		<td>1482820</td>
		<td>下列说法正确的有</td>
		<td>多选题</td>
		<td>4863688</td>
		<td>Android 8或更高版本的设备中，APK文件中包含运行所需全部资源，运行应用实际上是在运行APK</td>
		<td>4863689</td>
		<td>Android 8或更高版本的设备中，同一份APK文件不可以安装到所有Android系统的设备上</td>
		<td>4863690</td>
		<td>Android 8或更高版本的设备中，用户必须授予权限，系统才能从应用商店以外的来源安装应用</td>
		<td>4863692</td>
		<td>Android 7或更高版本的设备中，使用JIT/AOT混合编译模式</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863690,4863692</td>
	</tr>
	<tr>
		<td>1482810</td>
		<td>下列说法不正确的有</td>
		<td>多选题</td>
		<td>4863648</td>
		<td>正式版切换到开发版通常不用解锁</td>
		<td>4863649</td>
		<td>解锁时需要登录小米账号</td>
		<td>4863650</td>
		<td>解锁时小米账号不需要与手机绑定</td>
		<td>4863651</td>
		<td>解锁后系统安全系数不会降低</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863650,4863651</td>
	</tr>
	<tr>
		<td>1482809</td>
		<td>下列说法错误的有？</td>
		<td>多选题</td>
		<td>4863644</td>
		<td>搭载Qualcomm或MTK处理器的手机可以使用EDL刷机</td>
		<td>4863645</td>
		<td>EDL刷机仅适用于小米14系列和Redmi K70系列之前发布的手机</td>
		<td>4863646</td>
		<td>EDL刷机无需进入Fastboot模式后使用</td>
		<td>4863647</td>
		<td>在没有root的情况下，不可以安装Magisk</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863644,4863645,4863647</td>
	</tr>
	<tr>
		<td>1482821</td>
		<td>安卓系统中负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>4863693</td>
		<td>ActivityManagerSystem</td>
		<td>4863694</td>
		<td>ActivitySystemManager</td>
		<td>4863695</td>
		<td>ActivityManagerService</td>
		<td>4863696</td>
		<td>ApplicationManagerService</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863695</td>
	</tr>
	<tr>
		<td>1482824</td>
		<td>输入“adb logcat”后，出现“waiting for device”信息，可能的原因是</td>
		<td>多选题</td>
		<td>4863705</td>
		<td>ADB驱动程序没有正确安装</td>
		<td>4863706</td>
		<td>设备没有连接到计算机</td>
		<td>4863707</td>
		<td>在线ota升级后没有自动双清</td>
		<td>4863708</td>
		<td>安装包的签名不一致</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4863705,4863706</td>
	</tr>
</table>

## 2023.12.01
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/69#discussioncomment-8507431)
- 答题链接: https://m.beehive.miui.com/Wc2BAFI5U3xqe_bYlNMT2g/
- 题目数量(更新): 18
- 合格分数: 93
- 每题分数: 7
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注: 已答题账号在 7 天内无法重新答题

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1482217</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4862237</td>
		<td>fastboot -w ANTI</td>
		<td>4862238</td>
		<td>fastboot -r ANTI</td>
		<td>4862239</td>
		<td>fastboot getvar anti</td>
		<td>4862240</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td>4862239</td>
	</tr>
	<tr>
		<td>1481264</td>
		<td>以下Bootloader锁表述错误的是？</td>
		<td>单选题</td>
		<td>4859673</td>
		<td>正式版切换到开发版必须解锁</td>
		<td>4859674</td>
		<td>解锁时需要登录小米账号</td>
		<td>4859675</td>
		<td>小米账号需要与手机绑定</td>
		<td>4859676</td>
		<td>解锁后系统安全系数会降低</td>
		<td></td>
		<td></td>
		<td>4859673</td>
	</tr>
	<tr>
		<td>1481265</td>
		<td>下列刷机工具中，属于官方提供给用户的工具是？</td>
		<td>单选题</td>
		<td>4859677</td>
		<td>MiFlash</td>
		<td>4859678</td>
		<td>刷机大师</td>
		<td>4859679</td>
		<td>线刷宝</td>
		<td>4859946</td>
		<td>91助手</td>
		<td></td>
		<td></td>
		<td>4859677</td>
	</tr>
	<tr>
		<td>1481266</td>
		<td>如何在FASTBOOT命令行内，刷入twrp到boot分区？</td>
		<td>单选题</td>
		<td>4859680</td>
		<td>fastboot flash boot boot.img</td>
		<td>4859681</td>
		<td>fastboot flash recovery boot.img</td>
		<td>4859682</td>
		<td>fastboot flash update boot.img</td>
		<td>4859683</td>
		<td>fastboot flash update recovery boot.img</td>
		<td></td>
		<td></td>
		<td>4859680</td>
	</tr>
	<tr>
		<td>1481268</td>
		<td>如何烧录img、bin、mbn、elf等镜像文件内容到指定分区？</td>
		<td>单选题</td>
		<td>4859688</td>
		<td>fastboot getvar all &lt;分区名&gt;</td>
		<td>4859689</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4859690</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;</td>
		<td>4859691</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td>4859691</td>
	</tr>
	<tr>
		<td>1481260</td>
		<td>以下关于BL解锁刷机的说法中，正确的有</td>
		<td>多选题</td>
		<td>4859659</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4859660</td>
		<td>刷入第三方Recovery，数据通常不会丢失</td>
		<td>4859661</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>4859662</td>
		<td>Xiaomi/Redmi手机一般长按音量减键和音量加键即可进入Recovery</td>
		<td>4859752</td>
		<td>线刷刷机前应当备份重要数据</td>
		<td>4859660,4859661,4859752</td>
	</tr>
	<tr>
		<td>1481276</td>
		<td>MTK刷机时，报错4004的意思是</td>
		<td>单选题</td>
		<td>4859720</td>
		<td>驱动问题</td>
		<td>4859721</td>
		<td>内存损坏</td>
		<td>4859722</td>
		<td>刷机软件版本不匹配</td>
		<td>4859723</td>
		<td>ROM文件和手机系统差距太大</td>
		<td></td>
		<td></td>
		<td>4859720</td>
	</tr>
	<tr>
		<td>1481272</td>
		<td>关于FASTBOOT devices的作用，错误的说法有</td>
		<td>多选题</td>
		<td>4859704</td>
		<td>列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4859705</td>
		<td>列出当前已进入Recovery模式，且与PC连接正常的所有设备</td>
		<td>4859706</td>
		<td>无响应命令检测</td>
		<td>4859707</td>
		<td>检查手机是否已经更新</td>
		<td></td>
		<td></td>
		<td>4859705,4859706,4859707</td>
	</tr>
	<tr>
		<td>1481274</td>
		<td>以下FASTBOOT基本命令的说法，不正确的有</td>
		<td>多选题</td>
		<td>4859712</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4859713</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4859714</td>
		<td>fastboot erase <分区名>：清除手机中所有数据</td>
		<td>4859715</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4859985</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4859713,4859714,4859985</td>
	</tr>
	<tr>
		<td>1481275</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4859716</td>
		<td>希望降级回到之前的系统版本</td>
		<td>4859717</td>
		<td>希望彻底删除数据，保护隐私</td>
		<td>4859718</td>
		<td>手机无法开机但已解锁</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4859716,4859717,4859718</td>
	</tr>
	<tr>
		<td>1481277</td>
		<td>关于JVM的垃圾回收机制说法正确的是</td>
		<td>多选题</td>
		<td>4859724</td>
		<td>Serial Collector适合内存有限的情况</td>
		<td>4859725</td>
		<td>CMS Collctor在Old区回收暂停时间长</td>
		<td>4859726</td>
		<td>Parallel Collector效率低</td>
		<td>4859727</td>
		<td>Serial Collector回收速度慢</td>
		<td></td>
		<td></td>
		<td>4859724,4859727</td>
	</tr>
	<tr>
		<td>1481270</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4859696</td>
		<td>在FASTBOOT模式下长按电源键约7-15秒重启进入系统</td>
		<td>4859697</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4859698</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4859947</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td>4859696,4859697,4859698</td>
	</tr>
	<tr>
		<td>1481278</td>
		<td>FASTBOOT模式通常用于哪些操作？</td>
		<td>多选题</td>
		<td>4859728</td>
		<td>解锁引导加载程序</td>
		<td>4859729</td>
		<td>更新设备驱动程序</td>
		<td>4859730</td>
		<td>启用设备无线功能</td>
		<td>4859731</td>
		<td>刷写设备固件</td>
		<td>4859984</td>
		<td>大量文件数据传输</td>
		<td>4859728,4859731</td>
	</tr>
	<tr>
		<td>1481279</td>
		<td>安卓系统中负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>4859732</td>
		<td>SystemManager</td>
		<td>4859733</td>
		<td>ApplicationManagerService</td>
		<td>4859734</td>
		<td>SystemServer</td>
		<td>4859735</td>
		<td>ActivityManagerService</td>
		<td></td>
		<td></td>
		<td>4859735</td>
	</tr>
	<tr>
		<td>1481367</td>
		<td>以下哪条命令可间接直观检查出设备是否正常连接？</td>
		<td>单选题</td>
		<td>4859980</td>
		<td>fastboot getvar all</td>
		<td>4859981</td>
		<td>fastboot getvar product</td>
		<td>4859982</td>
		<td>fastboot devices</td>
		<td>4859983</td>
		<td>fastboot getvar anti</td>
		<td></td>
		<td></td>
		<td>4859982</td>
	</tr>
	<tr>
		<td>1482215</td>
		<td>FastBoot命令有哪些类型</td>
		<td>多选题</td>
		<td>4862229</td>
		<td>执行动作类</td>
		<td>4862230</td>
		<td>数据备份类</td>
		<td>4862231</td>
		<td>输出信息类</td>
		<td>4862232</td>
		<td>擦写数据类</td>
		<td></td>
		<td></td>
		<td>4862229,4862231,4862232</td>
	</tr>
	<tr>
		<td>1482216</td>
		<td>执行以下哪些操作需要解Bootloader锁？</td>
		<td>多选题</td>
		<td>4862233</td>
		<td>卡刷方法刷机</td>
		<td>4862234</td>
		<td>FASTBOOT模式下线刷</td>
		<td>4862235</td>
		<td>ROOT权限</td>
		<td>4862236</td>
		<td>线刷开发版ROM</td>
		<td></td>
		<td></td>
		<td>4862234,4862235,4862236</td>
	</tr>
	<tr>
		<td>1481262</td>
		<td>关于9008模式刷机说法不正确的有？</td>
		<td>多选题</td>
		<td>4859667</td>
		<td>手机必须搭载高通或联发科处理器才能使用9008模式刷机</td>
		<td>4859668</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4859669</td>
		<td>小米仅部分手机可使用9008模式</td>
		<td>4859941</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td>4859667,4859941</td>
	</tr>
</table>

## 2023.11.30
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/69#discussioncomment-8507430)
- 答题链接: https://m.beehive.miui.com/Wc2BAFI5U3xqe_bYlNMT2g/
- 题目数量(更新): 17
- 合格分数: 93
- 每题分数: 7
- 时间限制(更新): 6 分钟，超时结算已回答题目的分数
- 注(更新): 已答题账号在 7 天内无法重新答题

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1481260</td>
		<td>以下关于BL解锁刷机的说法中，正确的有</td>
		<td>多选题</td>
		<td>4859659</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4859660</td>
		<td>刷入第三方Recovery，数据通常不会丢失</td>
		<td>4859661</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>4859662</td>
		<td>Xiaomi/Redmi手机一般长按电源键和音量加键即可进入Recovery</td>
		<td>4859752</td>
		<td>线刷刷机前应当备份重要数据</td>
		<td>4859660,4859661,4859662,4859752</td>
	</tr>
	<tr>
		<td>1481262</td>
		<td>关于9008模式刷机说法正确的有？</td>
		<td>多选题</td>
		<td>4859667</td>
		<td>手机必须搭载高通处理器才能使用9008模式刷机</td>
		<td>4859668</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4859669</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4859941</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td>4859667,4859668</td>
	</tr>
	<tr>
		<td>1481264</td>
		<td>以下Bootloader锁表述错误的是？</td>
		<td>单选题</td>
		<td>4859673</td>
		<td>正式版切换到开发版必须解锁</td>
		<td>4859674</td>
		<td>解锁时需要登录小米账号</td>
		<td>4859675</td>
		<td>小米账号需要与手机绑定</td>
		<td>4859676</td>
		<td>解锁后系统安全系数会降低</td>
		<td></td>
		<td></td>
		<td>4859673</td>
	</tr>
	<tr>
		<td>1481265</td>
		<td>下列刷机工具中，属于官方提供给用户的工具是？</td>
		<td>单选题</td>
		<td>4859677</td>
		<td>MiFlash</td>
		<td>4859678</td>
		<td>刷机大师</td>
		<td>4859679</td>
		<td>线刷宝</td>
		<td>4859946</td>
		<td>91助手</td>
		<td></td>
		<td></td>
		<td>4859677</td>
	</tr>
	<tr>
		<td>1481266</td>
		<td>如何在FASTBOOT命令行内，刷入twrp到boot分区？</td>
		<td>单选题</td>
		<td>4859680</td>
		<td>fastboot flash boot boot.img</td>
		<td>4859681</td>
		<td>fastboot flash recovery boot.img</td>
		<td>4859682</td>
		<td>fastboot flash update boot.img</td>
		<td>4859683</td>
		<td>fastboot flash update recovery boot.img</td>
		<td></td>
		<td></td>
		<td>4859680</td>
	</tr>
	<tr>
		<td>1481268</td>
		<td>如何烧录img、bin、mbn、elf等镜像文件内容到指定分区？</td>
		<td>单选题</td>
		<td>4859688</td>
		<td>fastboot getvar all &lt;分区名&gt;</td>
		<td>4859689</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4859690</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;</td>
		<td>4859691</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td>4859691</td>
	</tr>
	<tr>
		<td>1481270</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4859696</td>
		<td>在FASTBOOT模式下长按电源键约7-15秒重启进入系统</td>
		<td>4859697</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4859698</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4859947</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td>4859696,4859697,4859698</td>
	</tr>
	<tr>
		<td>1481272</td>
		<td>关于FASTBOOT devices的作用，错误的说法有</td>
		<td>多选题</td>
		<td>4859704</td>
		<td>列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4859705</td>
		<td>列出当前已进入Recovery模式，且与PC连接正常的所有设备</td>
		<td>4859706</td>
		<td>无响应命令检测</td>
		<td>4859707</td>
		<td>检查手机是否已经更新</td>
		<td></td>
		<td></td>
		<td>4859705,4859706,4859707</td>
	</tr>
	<tr>
		<td>1481274</td>
		<td>以下FASTBOOT基本命令的说法，正确的有</td>
		<td>多选题</td>
		<td>4859712</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4859713</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4859714</td>
		<td>fastboot erase <分区名>：清除手机中所有数据</td>
		<td>4859715</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4859985</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4859712,4859715</td>
	</tr>
	<tr>
		<td>1481275</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4859716</td>
		<td>希望降级回到之前的系统版本</td>
		<td>4859717</td>
		<td>希望彻底删除数据，保护隐私</td>
		<td>4859718</td>
		<td>手机无法开机但已解锁</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4859716,4859717,4859718</td>
	</tr>
	<tr>
		<td>1481276</td>
		<td>FASTBOOT getvar all 命令有何作用？</td>
		<td>单选题</td>
		<td>4859720</td>
		<td>输出该设备的所有信息</td>
		<td>4859721</td>
		<td>输出该设备的手机密码</td>
		<td>4859722</td>
		<td>输出该设备的手机号</td>
		<td>4859723</td>
		<td>输出该设备的更新版本</td>
		<td></td>
		<td></td>
		<td>4859720</td>
	</tr>
	<tr>
		<td>1481277</td>
		<td>关于JVM的垃圾回收机制说法正确的是</td>
		<td>多选题</td>
		<td>4859724</td>
		<td>Serial Collector适合内存有限的情况</td>
		<td>4859725</td>
		<td>CMS Collctor在Old区回收暂停时间长</td>
		<td>4859726</td>
		<td>Parallel Collector效率高</td>
		<td>4859727</td>
		<td>Serial Collector回收速度快</td>
		<td></td>
		<td></td>
		<td>4859724,4859726</td>
	</tr>
	<tr>
		<td>1481278</td>
		<td>FASTBOOT模式通常用于哪些操作？</td>
		<td>多选题</td>
		<td>4859728</td>
		<td>解锁引导加载程序</td>
		<td>4859729</td>
		<td>更新设备驱动程序</td>
		<td>4859730</td>
		<td>启用设备无线功能</td>
		<td>4859731</td>
		<td>刷写设备固件</td>
		<td>4859984</td>
		<td>大量文件数据传输</td>
		<td>4859728,4859731</td>
	</tr>
	<tr>
		<td>1481279</td>
		<td>安卓系统中负责启动应用，管理应用生命周期的系统服务是</td>
		<td>单选题</td>
		<td>4859732</td>
		<td>SystemManager</td>
		<td>4859733</td>
		<td>ApplicationManagerService</td>
		<td>4859734</td>
		<td>SystemServer</td>
		<td>4859735</td>
		<td>ActivityManagerService</td>
		<td></td>
		<td></td>
		<td>4859735</td>
	</tr>
	<tr>
		<td>1481367</td>
		<td>以下哪条命令可间接直观检查出设备是否正常连接？</td>
		<td>单选题</td>
		<td>4859980</td>
		<td>fastboot getvar all</td>
		<td>4859981</td>
		<td>fastboot getvar product</td>
		<td>4859982</td>
		<td>fastboot devices</td>
		<td>4859983</td>
		<td>fastboot getvar anti</td>
		<td></td>
		<td></td>
		<td>4859982</td>
	</tr>
	<tr>
		<td>1482215</td>
		<td>FastBoot命令有哪些类型</td>
		<td>多选题</td>
		<td>4862229</td>
		<td>执行动作类</td>
		<td>4862230</td>
		<td>数据备份类</td>
		<td>4862231</td>
		<td>输出信息类</td>
		<td>4862232</td>
		<td>擦写数据类</td>
		<td></td>
		<td></td>
		<td>4862229,4862231,4862232</td>
	</tr>
	<tr>
		<td>1482216</td>
		<td>执行以下哪些操作需要解Bootloader锁？</td>
		<td>多选题</td>
		<td>4862233</td>
		<td>卡刷方法刷机</td>
		<td>4862234</td>
		<td>FASTBOOT模式下线刷</td>
		<td>4862235</td>
		<td>ROOT权限</td>
		<td>4862236</td>
		<td>线刷开发版ROM</td>
		<td></td>
		<td></td>
		<td>4862234,4862235,4862236</td>
	</tr>
</table>

## 2023.11.29
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/69#discussioncomment-8507429)
- 答题链接(更新): https://m.beehive.miui.com/Wc2BAFI5U3xqe_bYlNMT2g/
- 题目数量(更新): 18
- 合格分数(更新): 93
- 每题分数(更新): 7
- 时间限制(更新): 6 分钟
- 注(更新): 新增多选题，题目选项数量增加至最多 5 个

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="10">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1481260</td>
		<td>以下关于BL解锁刷机的说法中，正确的有</td>
		<td>多选题</td>
		<td>4859659</td>
		<td>刷入第三方TWRP，通常选择刷入到system分区</td>
		<td>4859660</td>
		<td>刷入第三方Recovery，数据通常不会丢失</td>
		<td>4859661</td>
		<td>擦除cache分区数据，个人数据通常不会丢失</td>
		<td>4859662</td>
		<td>Xiaomi/Redmi手机一般长按电源键和音量减键即可进入Recovery</td>
		<td>4859752</td>
		<td>线刷刷机前应当备份重要数据</td>
		<td>4859660,4859661,4859752</td>
	</tr>
	<tr>
		<td>1481262</td>
		<td>关于9008模式刷机说法正确的有？</td>
		<td>多选题</td>
		<td>4859667</td>
		<td>手机必须搭载高通处理器才能使用9008模式刷机</td>
		<td>4859668</td>
		<td>9008模式下的刷机会比fastboot模式下的刷机更加彻底</td>
		<td>4859669</td>
		<td>小米所有手机均可使用9008模式</td>
		<td>4859941</td>
		<td>9008模式仅限手机可正常进入系统时才可使用</td>
		<td></td>
		<td></td>
		<td>4859667,4859668</td>
	</tr>
	<tr>
		<td>1481264</td>
		<td>以下Bootloader锁表述错误的是？</td>
		<td>单选题</td>
		<td>4859673</td>
		<td>正式版切换到开发版必须解锁</td>
		<td>4859674</td>
		<td>解锁时需要登录小米账号</td>
		<td>4859675</td>
		<td>小米账号需要与手机绑定</td>
		<td>4859676</td>
		<td>解锁后系统安全系数会降低</td>
		<td></td>
		<td></td>
		<td>4859673</td>
	</tr>
	<tr>
		<td>1481265</td>
		<td>下列刷机工具中，属于官方提供给用户的工具是？</td>
		<td>单选题</td>
		<td>4859677</td>
		<td>MiFlash</td>
		<td>4859678</td>
		<td>刷机大师</td>
		<td>4859679</td>
		<td>线刷宝</td>
		<td>4859946</td>
		<td>91助手</td>
		<td></td>
		<td></td>
		<td>4859677</td>
	</tr>
	<tr>
		<td>1481266</td>
		<td>如何在FASTBOOT命令行内，刷入twrp到boot分区？</td>
		<td>单选题</td>
		<td>4859680</td>
		<td>fastboot flash boot boot.img</td>
		<td>4859681</td>
		<td>fastboot flash recovery boot.img</td>
		<td>4859682</td>
		<td>fastboot flash update boot.img</td>
		<td>4859683</td>
		<td>fastboot flash update recovery boot.img</td>
		<td></td>
		<td></td>
		<td>4859680</td>
	</tr>
	<tr>
		<td>1481268</td>
		<td>如何烧录img、bin、mbn、elf等镜像文件内容到指定分区？</td>
		<td>单选题</td>
		<td>4859688</td>
		<td>fastboot getvar all &lt;分区名&gt;</td>
		<td>4859689</td>
		<td>fastboot boot &lt;内核镜像文件名或路径&gt; &lt;分区名&gt;</td>
		<td>4859690</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;分区名&gt;</td>
		<td>4859691</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td></td>
		<td></td>
		<td>4859691</td>
	</tr>
	<tr>
		<td>1481270</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>多选题</td>
		<td>4859696</td>
		<td>在FASTBOOT模式下长按音量键约7-15秒重启进入系统</td>
		<td>4859697</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4859698</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4859947</td>
		<td>反复插拔数据线5次</td>
		<td></td>
		<td></td>
		<td>4859697,4859698</td>
	</tr>
	<tr>
		<td>1481272</td>
		<td>关于FASTBOOT devices的作用，错误的说法有</td>
		<td>多选题</td>
		<td>4859704</td>
		<td>列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4859705</td>
		<td>列出当前已进入Recovery模式，且与PC连接正常的所有设备</td>
		<td>4859706</td>
		<td>无响应命令检测</td>
		<td>4859707</td>
		<td>检查手机是否已经更新</td>
		<td></td>
		<td></td>
		<td>4859705,4859706,4859707</td>
	</tr>
	<tr>
		<td>1481274</td>
		<td>以下FASTBOOT基本命令的说法，正确的有</td>
		<td>多选题</td>
		<td>4859712</td>
		<td>fastboot getvar product：输出该机型内部代号名称</td>
		<td>4859713</td>
		<td>fastboot oem device-info：输出该设备的所有信息</td>
		<td>4859714</td>
		<td>fastboot erase <分区名>：清除手机中所有数据</td>
		<td>4859715</td>
		<td>fastboot oem lock：开启BL锁保护</td>
		<td>4859985</td>
		<td>fastboot -w：列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4859712,4859715</td>
	</tr>
	<tr>
		<td>1481275</td>
		<td>线刷可以用来解决哪些场景问题？</td>
		<td>多选题</td>
		<td>4859716</td>
		<td>希望降级回到之前的系统版本</td>
		<td>4859717</td>
		<td>希望彻底删除数据，保护隐私</td>
		<td>4859718</td>
		<td>手机无法开机但已解锁</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4859716,4859717,4859718</td>
	</tr>
	<tr>
		<td>1481276</td>
		<td>FASTBOOT getvar all 命令有何作用？</td>
		<td>单选题</td>
		<td>4859720</td>
		<td>输出该设备的所有信息</td>
		<td>4859721</td>
		<td>输出该设备的手机密码</td>
		<td>4859722</td>
		<td>输出该设备的手机号</td>
		<td>4859723</td>
		<td>输出该设备的更新版本</td>
		<td></td>
		<td></td>
		<td>4859720</td>
	</tr>
	<tr>
		<td>1481277</td>
		<td>关于JVM的垃圾回收机制说法正确的是</td>
		<td>多选题</td>
		<td>4859724</td>
		<td>Serial Collector适合内存有限的情况</td>
		<td>4859725</td>
		<td>CMS Collctor在Old区回收暂停时间长</td>
		<td>4859726</td>
		<td>Parallel Collector效率高</td>
		<td>4859727</td>
		<td>Serial Collector回收速度快</td>
		<td></td>
		<td></td>
		<td>4859724,4859726</td>
	</tr>
	<tr>
		<td>1481278</td>
		<td>FASTBOOT模式通常用于哪些操作？</td>
		<td>多选题</td>
		<td>4859728</td>
		<td>解锁引导加载程序</td>
		<td>4859729</td>
		<td>更新设备驱动程序</td>
		<td>4859730</td>
		<td>启用设备无线功能</td>
		<td>4859731</td>
		<td>刷写设备固件</td>
		<td>4859984</td>
		<td>大量文件数据传输</td>
		<td>4859728,4859731</td>
	</tr>
	<tr>
		<td>1481279</td>
		<td>安卓系统中负责启动应用，管理应用声明周期的系统服务是</td>
		<td>单选题</td>
		<td>4859732</td>
		<td>SystemManager</td>
		<td>4859733</td>
		<td>ApplicationManagerService</td>
		<td>4859734</td>
		<td>SystemServer</td>
		<td>4859735</td>
		<td>ActivityManagerService</td>
		<td></td>
		<td></td>
		<td>4859735</td>
	</tr>
	<tr>
		<td>1481367</td>
		<td>以下哪条命令可间接直观检查出设备是否正常连接？</td>
		<td>单选题</td>
		<td>4859980</td>
		<td>fastboot getvar all</td>
		<td>4859981</td>
		<td>fastboot getvar product</td>
		<td>4859982</td>
		<td>fastboot devices</td>
		<td>4859983</td>
		<td>fastboot getvar anti</td>
		<td></td>
		<td></td>
		<td>4859982</td>
	</tr>
	<tr>
		<td>1482215</td>
		<td>FastBoot命令有哪些类型</td>
		<td>多选题</td>
		<td>4862229</td>
		<td>执行动作类</td>
		<td>4862230</td>
		<td>数据备份类</td>
		<td>4862231</td>
		<td>输出信息类</td>
		<td>4862232</td>
		<td>擦写数据类</td>
		<td></td>
		<td></td>
		<td>4862229,4862231,4862232</td>
	</tr>
	<tr>
		<td>1482216</td>
		<td>执行以下哪些操作需要解Bootloader锁？</td>
		<td>多选题</td>
		<td>4862233</td>
		<td>卡刷方法刷机</td>
		<td>4862234</td>
		<td>FASTBOOT模式下线刷</td>
		<td>4862235</td>
		<td>ROOT权限</td>
		<td>4862236</td>
		<td>线刷开发版ROM</td>
		<td></td>
		<td></td>
		<td>4862234,4862235,4862236</td>
	</tr>
	<tr>
		<td>1482217</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4862237</td>
		<td>fastboot -w ANTI</td>
		<td>4862238</td>
		<td>fastboot -r ANTI</td>
		<td>4862239</td>
		<td>fastboot getvar anti</td>
		<td>4862240</td>
		<td>fastboot devices</td>
		<td></td>
		<td></td>
		<td>4862239</td>
	</tr>
</table>

## 2023.11.08
- [题目解析](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions/69#discussioncomment-8507426)
- 答题链接: https://m.beehive.miui.com/jdXtFrvJLlOK1T2omVdcFQ/
- 题目数量: 25
- 合格分数: 80
- 每题分数: 4
- 时间限制: 10 分钟

<table>
	<tr align="center">
		<th rowspan="2">题目 ID</td>
		<th rowspan="2">题目内容</td>
		<th rowspan="2">类型</td>
		<th colspan="8">选项</td>
		<th rowspan="2">答案</td>
	</tr>
	<tr align="center">
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
		<th>ID</td>
		<th>内容</td>
	</tr>
	<tr>
		<td>1461174</td>
		<td>如何解除手机Bootloader锁？</td>
		<td>单选题</td>
		<td>4787594</td>
		<td>进入MTK模式</td>
		<td>4787595</td>
		<td>进入Recovery模式</td>
		<td>4787596</td>
		<td>申请解锁通过后，下载工具解锁</td>
		<td>4787597</td>
		<td>通过小米助手解锁</td>
		<td>4787596</td>
	</tr>
	<tr>
		<td>1461175</td>
		<td>请问如何实现保存数据刷机？</td>
		<td>单选题</td>
		<td>4787598</td>
		<td>备份数据—解Bootloader锁—线刷</td>
		<td>4787599</td>
		<td>解Bootloader锁—备份数据—线刷</td>
		<td>4787600</td>
		<td>解Bootloader锁—线刷—备份数据</td>
		<td>4787601</td>
		<td>解Bootloader锁—下载ROM—线刷</td>
		<td>4787598</td>
	</tr>
	<tr>
		<td>1461176</td>
		<td>执行以下哪项操作不需要解Bootloader锁？</td>
		<td>单选题</td>
		<td>4787602</td>
		<td>卡刷方法刷机</td>
		<td>4787603</td>
		<td>FASTBOOT模式下线刷</td>
		<td>4787604</td>
		<td>修补boot/init_boot获取root权限</td>
		<td>4787605</td>
		<td>线刷开发版ROM</td>
		<td>4787602</td>
	</tr>
	<tr>
		<td>1461177</td>
		<td>线刷需要手机进入什么模式？</td>
		<td>单选题</td>
		<td>4787606</td>
		<td>系统更新界面</td>
		<td>4787607</td>
		<td>FASTBOOT界面</td>
		<td>4787608</td>
		<td>Recovery界面</td>
		<td></td>
		<td></td>
		<td>4787607</td>
	</tr>
	<tr>
		<td>1461178</td>
		<td>小米手机如何进入FASTBOOT模式？</td>
		<td>单选题</td>
		<td>4787610</td>
		<td>关机状态下长按音量+与音量-键</td>
		<td>4787611</td>
		<td>关机状态下长按音量+键与电源键</td>
		<td>4787612</td>
		<td>关机状态下长按音量-键与电源键</td>
		<td></td>
		<td></td>
		<td>4787612</td>
	</tr>
	<tr>
		<td>1461179</td>
		<td>以下Bootloader锁表述错误的是？</td>
		<td>单选题</td>
		<td>4787614</td>
		<td>正式版切换到开发版必须解锁</td>
		<td>4787615</td>
		<td>解锁时需要登录小米账号</td>
		<td>4787616</td>
		<td>小米账号需要与手机绑定</td>
		<td>4787617</td>
		<td>解锁后系统安全系数会降低</td>
		<td>4787614</td>
	</tr>
	<tr>
		<td>1461180</td>
		<td>下列刷机工具中，属于官方提供给用户的工具是？</td>
		<td>单选题</td>
		<td>4787618</td>
		<td>MiFlash</td>
		<td>4787619</td>
		<td>刷机大师</td>
		<td>4787620</td>
		<td>线刷宝</td>
		<td></td>
		<td></td>
		<td>4787618</td>
	</tr>
	<tr>
		<td>1461181</td>
		<td>如何在FASTBOOT命令行内，刷入twrp到boot分区？</td>
		<td>单选题</td>
		<td>4787622</td>
		<td>fastboot flash boot boot.img</td>
		<td>4787623</td>
		<td>fastboot flash recovery boot.img</td>
		<td>4787624</td>
		<td>fastboot flash update boot.img</td>
		<td>4787625</td>
		<td>fastboot flash update recovery boot.img</td>
		<td>4787622</td>
	</tr>
	<tr>
		<td>1461182</td>
		<td>FASTBOOT模式下如何输出防回滚机制（ANTI）版本号</td>
		<td>单选题</td>
		<td>4787626</td>
		<td>fastboot -w ANTI</td>
		<td>4787627</td>
		<td>fastboot -r ANTI</td>
		<td>4787628</td>
		<td>fastboot getvar anti</td>
		<td>4787948</td>
		<td>fastboot devices</td>
		<td>4787628</td>
	</tr>
	<tr>
		<td>1461183</td>
		<td>如何烧录img、bin、mbn、elf等镜像文件内容到指定分区？</td>
		<td>单选题</td>
		<td>4787629</td>
		<td>fastboot getvar anti&lt;镜像文件名或路径&gt;</td>
		<td>4787630</td>
		<td>fastboot getvar anti&lt;镜像文件名与路径&gt;</td>
		<td>4787631</td>
		<td>fastboot flash &lt;镜像路径&gt; &lt;文件名&gt;</td>
		<td>4787632</td>
		<td>fastboot flash &lt;分区名&gt; &lt;镜像文件名或路径&gt;</td>
		<td>4787632</td>
	</tr>
	<tr>
		<td>1461184</td>
		<td>在FASTBOOT模式中，手机通过什么方式连接到电脑？</td>
		<td>单选题</td>
		<td>4787633</td>
		<td>USB连接</td>
		<td>4787634</td>
		<td>无线连接</td>
		<td>4787635</td>
		<td>蓝牙连接</td>
		<td>4787636</td>
		<td>以太网连接</td>
		<td>4787633</td>
	</tr>
	<tr>
		<td>1461185</td>
		<td>如何退出FASTBOOT模式？</td>
		<td>单选题</td>
		<td>4787637</td>
		<td>在FASTBOOT模式下长按电源键约7-15秒重启进入系统</td>
		<td>4787638</td>
		<td>通过“fastboot reboot”及“fastboot oem poweroff”命令重启进入系统或拔线关机</td>
		<td>4787639</td>
		<td>部分机型在FASTBOOT模式下不插入数据线，5分钟到半小时内会自动重启或关机</td>
		<td>4787640</td>
		<td>全部都对</td>
		<td>4787640</td>
	</tr>
	<tr>
		<td>1461186</td>
		<td>FASTBOOT命令可大致分为哪几类？</td>
		<td>单选题</td>
		<td>4787641</td>
		<td>输出信息类</td>
		<td>4787642</td>
		<td>执行动作类</td>
		<td>4787643</td>
		<td>擦写数据类</td>
		<td>4787644</td>
		<td>全部都对</td>
		<td>4787644</td>
	</tr>
	<tr>
		<td>1461187</td>
		<td>FASTBOOT devices有什么作用？</td>
		<td>单选题</td>
		<td>4787645</td>
		<td>列出当前已进入FASTBOOT模式，且与PC连接正常的所有设备</td>
		<td>4787646</td>
		<td>列出当前已进入Recovery模式，且与PC连接正常的所有设备</td>
		<td>4787647</td>
		<td>无响应命令检测</td>
		<td>4787648</td>
		<td>检查手机是否已经更新</td>
		<td>4787645</td>
	</tr>
	<tr>
		<td>1461188</td>
		<td>如何检查连接设备是否正常连接？</td>
		<td>单选题</td>
		<td>4787649</td>
		<td>fastboot getvar all</td>
		<td>4787650</td>
		<td>fastboot getvar product</td>
		<td>4787651</td>
		<td>fastboot devices</td>
		<td>4787652</td>
		<td>fastboot getvar anti</td>
		<td>4787651</td>
	</tr>
	<tr>
		<td>1461189</td>
		<td>FASTBOOT命令中使用的标志“-w”代表什么操作？</td>
		<td>单选题</td>
		<td>4787653</td>
		<td>重启手机</td>
		<td>4787654</td>
		<td>下载最新完整包</td>
		<td>4787655</td>
		<td>更新系统</td>
		<td>4787656</td>
		<td>清除所有数据</td>
		<td>4787656</td>
	</tr>
	<tr>
		<td>1461190</td>
		<td>线刷用来解决哪些场景问题？</td>
		<td>单选题</td>
		<td>4787657</td>
		<td>希望降级回到之前的系统版本</td>
		<td>4787658</td>
		<td>希望彻底删除数据，保护隐私</td>
		<td>4787659</td>
		<td>手机无法开机但已解锁</td>
		<td>4787660</td>
		<td>全部都对</td>
		<td>4787660</td>
	</tr>
	<tr>
		<td>1461191</td>
		<td>FASTBOOT getvar all 命令有何作用？</td>
		<td>单选题</td>
		<td>4787661</td>
		<td>输出该设备的所有信息</td>
		<td>4787662</td>
		<td>输出该设备的手机密码</td>
		<td>4787663</td>
		<td>输出该设备的手机号</td>
		<td>4787664</td>
		<td>输出该设备的更新版本</td>
		<td>4787661</td>
	</tr>
	<tr>
		<td>1461192</td>
		<td>在FASTBOOT模式下，什么是用于刷写固件的命令？</td>
		<td>单选题</td>
		<td>4787665</td>
		<td>load</td>
		<td>4787666</td>
		<td>run</td>
		<td>4787667</td>
		<td>boot</td>
		<td>4787668</td>
		<td>flash</td>
		<td>4787668</td>
	</tr>
	<tr>
		<td>1461193</td>
		<td>FASTBOOT模式通常用于哪些操作？</td>
		<td>单选题</td>
		<td>4787669</td>
		<td>传输大型文件</td>
		<td>4787670</td>
		<td>更新设备驱动程序</td>
		<td>4787671</td>
		<td>启用设备无线功能</td>
		<td>4787672</td>
		<td>刷写设备固件、解锁引导加载程序</td>
		<td>4787672</td>
	</tr>
	<tr>
		<td>1461194</td>
		<td>FASTBOOT模式和Recovery模式有什么区别？</td>
		<td>单选题</td>
		<td>4787673</td>
		<td>Recovery能直接进入安全模式</td>
		<td>4787674</td>
		<td>FASTBOOT模式指的是“线刷”</td>
		<td>4787675</td>
		<td>Recovery模式指的是“卡刷”</td>
		<td>4787676</td>
		<td>全部都对</td>
		<td>4787676</td>
	</tr>
	<tr>
		<td>1461195</td>
		<td>MiFlash的全部删除是什么意思？</td>
		<td>单选题</td>
		<td>4787677</td>
		<td>删除包括Data在内的全部数据</td>
		<td>4787678</td>
		<td>删除小米云服务数据</td>
		<td>4787679</td>
		<td>删除小米商城购物车内所有数据</td>
		<td>4787680</td>
		<td>删除米家连接设备</td>
		<td>4787677</td>
	</tr>
	<tr>
		<td>1461196</td>
		<td>FASTBOOT模式进入后是什么样子？</td>
		<td>单选题</td>
		<td>4787681</td>
		<td>屏幕上显示Xiaomi</td>
		<td>4787683</td>
		<td>屏幕上显示Redmi</td>
		<td>4787684</td>
		<td>屏幕上显示英文FASTBOOT</td>
		<td></td>
		<td></td>
		<td>4787684</td>
	</tr>
	<tr>
		<td>1461197</td>
		<td>一个手机如果只能进入FASTBOOT意味着什么？</td>
		<td>单选题</td>
		<td>4787685</td>
		<td>系统可能损坏</td>
		<td>4787687</td>
		<td>引导程序损毁</td>
		<td>4787688</td>
		<td>全部都对</td>
		<td></td>
		<td></td>
		<td>4787688</td>
	</tr>
	<tr>
		<td>1461198</td>
		<td>Bootloader锁被解开还能上锁吗？</td>
		<td>单选题</td>
		<td>4787689</td>
		<td>能</td>
		<td>4787690</td>
		<td>不能</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>4787689</td>
	</tr>
</table>
