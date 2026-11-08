import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "HoshinoHB",
	bio: "ブルアブ的老师｜蔚蓝档案动画制作｜二次元爱好者",
	links: [
		{
			name: "抖音",
			icon: "fa7-brands:tiktok", // Visit https://icones.js.org for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://v.douyin.com/hzJCUqzF6pE/",
		},
		{
			name: "哔哩哔哩",
			icon: "fa7-brands:bilibili",
			url: "https://m.bilibili.com/space/3546659699034625?plat_id=1&share_from=space&share_medium=android&share_plat=android&share_session_id=abbe7298-b8c8-4789-b946-19c81b5952be&share_source=COPY&share_tag=s_i&timestamp=1780200765&unique_k=is2z37Y",
		},
                {
                       name: "快手",
                       icon: "fa7-brands:youtube",
                       url: "https://v.kuaishou.com/JyTiyZWP",
                },
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/LyraVoid/Shirone",
		},
                {
                        name: "CSDN",
                        icon: "simple-icons:csdn",
                        url: "https://blog.csdn.net/2606_96763730",
               },
	],
});
