



// import type { RouteObject } from "react-router-dom";
 export interface MetaItem {
	title: string;
	key?: string;

	keepAlive?: boolean;
	requiresAuth?: boolean;
}

// interface CustomRouteObject extends RouteBase {
// 	// 扩展自定义属性
//   }



export interface RouteItem  { 
	path?: string|undefined;
	isLink?: string;  
	redirect?: string|boolean;
	component?: string;
	index?: boolean;
	children?: RouteItem[];
	element?: string|React.ReactNode;
	caseSensitive?: boolean; 
	meta?: MetaItem; 
	origin?: string;
}
// export interface RouteIndex1 extends RouteBase {
// 	index: true; 
// }
// export interface RouteIndex2 extends RouteBase {
// 	index?: false; 
// }

// export type RouteItem = RouteIndex1 | RouteIndex2