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
		category: "video",
		phase: "building",
		technologies: ["视频", "哔哩哔哩"],
		icon: "material-symbols:video-library-rounded",
		repository: "https://m.bilibili.com/space/3546659699034625?plat_id=1&share_from=space&share_medium=android&share_plat=android&share_session_id=abbe7298-b8c8-4789-b946-19c81b5952be&share_source=COPY&share_tag=s_i&timestamp=1780200765&unique_k=is2z37Y",
	},
	{
		key: "douyin",
		title: "抖音",
		summary:
			"douyin",
		category: "video",
		phase: "building",
		technologies: ["抖音", "视频"],
		icon: "material-symbols:video-library-rounded",
		repository: "https://v.douyin.com/hzJCUqzF6pE/",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
