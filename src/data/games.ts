/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "nte-neverness-to-everness",
		name: "异环",
		developer: "Hotta Studio",
		category: "open-world",
		status: "playing",
		cover: "assets/games/yihuan-hero.jpg",
		icon: "material-symbols:explore-outline-rounded",
		rating: 4.5,
		hours: 86,
		platform: "手机",
		year: "2026",
		tags: ["开放世界", "城市", "超自然"],
		description:
                        "比原神好玩",
     		link: "https://yh.wanmei.com/main.html",
	},
	{
		id: "minecraft",
		name: "Minecraft",
		developer: "Mojang Studios",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/minecraft-hero.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 420,
		platform: "手机",
		year: "2011",
		tags: ["沙盒", "冒险", "创造"],
		description:
			"我最爱玩的沙盒游戏",
		link: "https://www.minecraft.net/",
                featured: true,
	},
        {
                id: "bluearchive",
                name: "蔚蓝档案",
                developer: "MX Studios & Nexon Games Studio",
                category: "rpg",
                status: "playing",
                cover: "assets/games/bluearchive.png",
                icon: "material-symbols:widgets-rounded",
                rating: 5,
                hours: 420,
                platform: "手机",
                year: "2023",
                tags: ["校园", "青春", "RPG"],
                description:
                        "我最爱玩的二次元游戏",
                link: "https://www.bluearchive-cn.com/",
                featured: true,
        },
];
