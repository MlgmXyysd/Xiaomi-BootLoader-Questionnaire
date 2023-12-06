# Xiaomi-BootLoader-Questionnaire
小米 BootLoader《解锁资格答题测试》更新记录

- 各 ID 为 Beehive 问卷内部 ID，供用户写脚本使用
- 答案为收集整理，不一定完全正确，欢迎提交你的答案
- 选项以 ID 从小到大排序，实际答题时顺序可能会随机变动
- 文字游戏较多，注意题目和选项的细节
- 祝你们每个人都能天天签到 12 分，早日通过申请审批，解锁 BootLoader
- 催更/纠错左转 [Issues](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/issues)，讨论右转 [Discussions](https://github.com/MlgmXyysd/Xiaomi-BootLoader-Questionnaire/discussions)

## 2023.12.06
- 答题链接(更新): https://m.beehive.miui.com/NhTPAE5m-ZurhVKqMhvHCQ/
- 题目数量: 18
- 合格分数: 93
- 时间限制: 6 分钟，超时结算已回答题目的分数
- 注(更新): 已答题账号在 7 天内无法重新答题；请务必通过“小米社区 App-内测中心-BL 解锁申请-去答题”进入答题界面并完成答题，未使用小米社区 App 进行答题将视为无效答题，无法展示成绩，影响后续申请。

- 整理中

## 2023.12.01

- 答题链接: https://m.beehive.miui.com/Wc2BAFI5U3xqe_bYlNMT2g/
- 题目数量: 18
- 合格分数: 93
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
		<td>4859946</td>
		<td>91助手</td>
		<td>4859677</td>
		<td>MiFlash</td>
		<td>4859678</td>
		<td>刷机大师</td>
		<td>4859679</td>
		<td>线刷宝</td>
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
		<td>4859723</td>
		<td>ROM文件和手机系统差距太大</td>
		<td>4859722</td>
		<td>刷机软件版本不匹配</td>
		<td>4859721</td>
		<td>内存损坏</td>
		<td>4859720</td>
		<td>驱动问题</td>
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
		<td>4859941,4859667</td>
	</tr>
</table>

## 2023.11.30

- 答题链接: https://m.beehive.miui.com/Wc2BAFI5U3xqe_bYlNMT2g/
- 题目数量: 18
- 合格分数: 93
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
		<td>4859946</td>
		<td>91助手</td>
		<td>4859677</td>
		<td>MiFlash</td>
		<td>4859678</td>
		<td>刷机大师</td>
		<td>4859679</td>
		<td>线刷宝</td>
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

- 答题链接(更新): https://m.beehive.miui.com/Wc2BAFI5U3xqe_bYlNMT2g/
- 题目数量(更新): 18
- 合格分数(更新): 93
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
		<td>4859946</td>
		<td>91助手</td>
		<td>4859677</td>
		<td>MiFlash</td>
		<td>4859678</td>
		<td>刷机大师</td>
		<td>4859679</td>
		<td>线刷宝</td>
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

- 答题链接: https://m.beehive.miui.com/jdXtFrvJLlOK1T2omVdcFQ/
- 题目数量: 25
- 合格分数: 60
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
		<td>4787678</td>
		<td>删除小米云服务数据</td>
		<td>4787679</td>
		<td>删除小米商城购物车内所有数据</td>
		<td>4787677</td>
		<td>删除包括Data在内的全部数据</td>
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
