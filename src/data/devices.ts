/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "oppo-a58",
		name: 'OPPO A58 5G',
		brand: "OPPO",
		category: "mobile",
		status: "active",
		specs: "MT700 / 8GB / 256GB",
		description:
			"太卡了，不太喜欢",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2026.02",
		link: "https://www.oppo.com/en/smartphones/series-a/a58/",
	},
	{
		id: "lenovo-xiaoxin-pad-12.7-2025",
		name: "联想小新平板 12.7 2025",
		brand: "Lenovo",
		category: "mobile",
		status: "active",
		specs: "MT8300 / 8GB / 256GB",
		description:
                        "真吧唧好用",
		icon: "material-symbols:tablet-mac-rounded",
		featured: true,
		year: "2026.10",
               link: "https://m.lenovo.com.cn/wiki/product-doc-30225.html",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
