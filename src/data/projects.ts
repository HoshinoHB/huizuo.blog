/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "blog",
		title: "博客站",
		summary:
			"博客，记录美好生活",
		category: "blog",
		phase: "shipped",
		technologies: ["GitHub", "Cloudflare", "博客"],
		icon: "material-symbols:edit-document",
		cover: "/assets/projects/huizuo_blog.webp",
		coverAlt: "huizuo_blog",
		featured: true,
		repository: "https://hoshinohb.de5.net/",
		year: "2026",
	},
	{
		key: "bilibili",
		title: "哔哩哔哩",
		summary: 
                        "bilibili",
		category: "中视频发布页",
		phase: "building",
		technologies: ["视频", "哔哩哔哩"],
		icon: "material-symbols:video-library-rounded",
		repository: "https://m.bilibili.com/space/3546659699034625?plat_id=1&share_from=space&share_medium=android&share_plat=android&share_session_id=abbe7298-b8c8-4789-b946-19c81b5952be&share_source=COPY&share_tag=s_i&timestamp=1780200765&unique_k=is2z37Y",
	},
	{
		key: "douyin",
		title: "抖音",
		summary:
			"短视频发布页",
		category: "video",
		phase: "building",
		technologies: ["抖音", "视频"],
		icon: "material-symbols:video-library-rounded",
		repository: "https://v.douyin.com/hzJCUqzF6pE/",
	},
        {
                key: "fan-well",
                title: "粉丝墙",
                summary:
                        "粉丝墙",
                category: "FanWell",
                phase: "shipped",
                technologies: ["粉丝墙", "抖音", "B站"],
                icon: "material-symbols:contacts-product-outline",
                repository: "https://www.hoshinohb.cc.cd",
        },
        {
                key: "femboyexam",
                title: "男娘测试",
                summary:
                        "测试你的男娘属性",
                category: "exam",
                phase: "shipped",
                technologies: ["男娘", "测试"],
                icon: "material-symbols:chrome-reader-mode-sharp",
                repository: "https://hoshinohb.github.io/femboyexam/",
       },
       {
                key: "scl-90",
                title: "SCL-90测试",
                summary:
                        "国际SCL－90测试",
                category: "exam",
                phase: "shipped",
                technologies: ["SCL-90", "测试"],
                icon: "material-symbols:chrome-reader-mode-sharp",
                repository: "https://hoshinohb.github.io/SCL-90/",
       },
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
