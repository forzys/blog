import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	 
  	plugins: [
		react(),
		{
			name: 'copy-404',
			async writeBundle() {
			  await fs.copyFileSync('./docs/index.html', './docs/404.html');
			}
		}
	],
  
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"src": path.resolve(__dirname, "src"),
			"components": path.resolve(__dirname, "src/components"),
			"interface": path.resolve(__dirname, "src/interface"),
		}
	},

	// base: "/component/",

	build:{
		outDir: 'docs', // 指定输出路径
		rollupOptions:{
			// external: ['react'],
		  	// input:[],
			output: {
			// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				// globals: {
				// 	react: 'React',
				// },
			},
		}
	},

	optimizeDeps: {
		entries: [],
	},
})
