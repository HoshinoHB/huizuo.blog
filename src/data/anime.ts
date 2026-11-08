/**
 * 番剧收藏数据（本地数据源）。
 * 用于番剧页：src/pages/anime.astro → organisms/AnimeSection → molecules/AnimeCard。
 *
 * 添加条目：在 animeData 中追加一项即可，状态筛选 chips 与计数自动生成。
 * - cover 省略时卡片显示主题色渐变占位（补图前不破版）；
 * - link 省略时封面不可点；rating 为 0-10 个人评分；
 * - progress 是结构化追番进度，watching 状态在卡片上渲染进度条。
 * JSON 数据源（外部收藏服务拉取）见 utils/anime-data.ts 的 AnimeSource 分发。
 */

import type { AnimeIdentity } from "../types/animeConfig.ts";

/** 收藏状态（Bangumi 领域通行五态） */
export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "onHold"
	| "dropped";

export interface AnimeItem {
	title: string;
	/** 封面图地址（相对 /public 或绝对 URL）；省略 = 渐变占位 */
	cover?: string;
	/** 条目外链（Bangumi/官方站等）；省略则封面不可点 */
	link?: string;
	status: AnimeStatus;
	/** 个人评分 0-10 */
	rating: number;
	/** 追番进度：已看 / 总集数（未知时可选省略） */
	progress?: { watched: number; total: number };
	/** 一句话感想 */
	description?: string;
	/** 放送年份（展示用） */
	year: string;
	/** 制作公司 */
	studio?: string;
	/** 题材标签 */
	genres: string[];
	/** 观看时间段（年-月） */
	period?: { start: string; end: string };
	/** 条目来源身份标识（可选，用于跨源去重与归档） */
	identity?: AnimeIdentity;
}

export const animeData: AnimeItem[] = [
	{
		title: "蔚蓝档案The Animation",
		cover: "/assets/anime/ba.webp",
		link: "https://space.bilibili.com/3493265644980448/lists/2689294?type=season",
		status: "completed",
		rating: 9.8,
		progress: { watched: 12, total: 12 },
		description: "把为师画帅了......什么时候更新第二部？！",
		year: "2024",
		studio: "Nexon Games Studio",
		genres: ["青春", "校园", "枪战", "游戏改"],
		period: { start: "2024-04-27", end: "2024-06-23" },
	},
	{
		title: "碧蓝航线",
		cover: "/assets/anime/al.webp",
		link: "https://www.bilibili.com/bangumi/media/md28222522",
		status: "watching",
		rating: 8.1,
		progress: { watched: 1, total: 12 },
		description: "舰娘真好看",
		year: "2019",
		studio: "Bibury Animation Studio",
		genres: ["架空", "科幻", "游戏改", "战斗"],
		period: { start: "2019-10-03", end: "2024-09" },
	},
];
