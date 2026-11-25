/**
 * 友情链接数据配置（结构与 Mizuki 同款，便于互相迁移）。
 * 用于管理友情链接页面的数据：src/pages/friends.astro → organisms/FriendSection。
 *
 * 添加友链：在 friendsData 中追加一项即可，页面 / 筛选标签自动生成。
 * tags 会聚合为页面顶部的筛选 chip（OR 命中：选中多个标签时命中任一即显示）。
 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "BiliBili",
		imgurl: "https://a.favicon.im/bilibili.com",
		desc: "哔哩哔哩(゜-゜)tsuro ganpa~-bilibili",
		siteurl: "https://bilibili.com",
		tags: ["BiliBili", "VideoWebSite"],
	},
	{
		id: 2,
		title: "GitHub",
		imgurl: "https://a.favicon.im/github.com",
		desc: "GitHub 是一个基于用户反馈而构建的开发平台。从开源项目到商业用途，将源代码托管在 GitHub 上，您可以与数百万其他开发者协作，在软件开发过程中共同审查代码、管理项目",
		siteurl: "https://github.com/",
		tags: ["GitHub"],
	},
	{
		id: 3,
		title: "Clouflare",
		imgurl: "https://a.favicon.im/cloudflare.com",
		desc: "随时随地连接、保护和构建",
		siteurl: "https://cloudflare.com/",
		tags: ["WebSite Build", "Network", "Cloud Services", "DNS", "网站托管"],
	},
        {
                id: 4,
                title: "DNSHE",
                imgurl: "https://a.favicon.im/dnshe.com",
                deasc: "简单、快速、免费的。域名注册和DNS托管",
                siteurl: "https://dnshe.com",
                tags: ["DNS", "域名"],
        },
        {
                id: 5,
                title: "聚合链",
                imgurl: "https://a.favicon.im/vlink.cc",
                deasc: "聚合我的所有网站",
                siteurl: "https://vlink.cc/hoshinohb",
                tags: ["HoshinoHB", "聚合链"],
        },
        {
                id: 6,
                title: "Shirone",
                imgurl:"https://a.favicon.im/mysqil.com",
                deasc: "一款基于 Material 3 Expressive、Astro 7 和 Svelte 5 构建的、充满表现力的动漫风格博客主题",
                siteurl: "https://github.com/LyraVoid/Shirone",
                tags: ["Blog", "M3E", "Astro", "Svelte"],
        },
];

// 获取所有友情链接数据（稳定顺序，测试可复现）
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据（避免固定排序，按需使用）
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
