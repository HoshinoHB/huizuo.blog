/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "确诊中度抑郁",
		date: "2026.10 - 至今",
		category: "life",
		subtitle: "确诊了中度抑郁和中度焦虑",
		description:
			"在我的逼迫下，我母亲终于带我去医院检查出心理问题",
		tags: ["医院", "抑郁症", "焦虑症", "心理疾病"],
		icon: "material-symbols:local-hospital-sharp",
		featured: true,
	},
	{
		title: "建站",
		date: "2026.07 – 至今",
		category: "project",
		subtitle: "开始搭建博客网站，正式快开始编写博客",
		description:
			"自学编程搭配AI开始做项目",
                tags: ["GitHub", "Cloudflare", "博客", "建站"],
        },
	{
		title: "成为视频创作者",
		date: "2023.7 - 至今",
		category: "video",
		subtitle: "开始做视频",
                description: 
                        "在抖音B站快手发布自制视频",
		tags: ["哔哩哔哩", "抖音", "快手"],
		icon: "material-symbols:video-library-rounded",
	},
	{
		title: "上中学",
		date: "2024.09 - 2026.03",
		category: "education",
		subtitle: "中学即将成为当年",
		location: "中国，江西",
		description:
			"九年级快毕业了",
		tags: ["教育", "中学"],
		icon: "material-symbols:school-rounded",
                featured: true,
	},
	{
		title: "结束小学阶段",
		date: "2014.03 - 2024.07",
		category: "education",
		subtitle: "再见文笔峰和崇文",
                location: "中国，江西",
		description:
			"成功毕业小学，正式步入中学阶段",
		tags: ["教育", "小学", "毕业"],
		icon: "material-symbols:school-rounded",
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
