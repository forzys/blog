/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');
const pageLinkNum = 3; // 【配置项】自动生成页面间的超链接跳转的个数，设置为 0 则关闭该功能
const appendTagId = 'root'; // 【配置项】页面 seo 元素(超链接，图片，文字等)插入的容器 id
const outputBasePath = path.join(__dirname, '../docs'); // 【配置项】新建的 seo 入口文件，放在那个文件夹下
const templatePath = path.join(__dirname, '../docs', 'index.html'); // 【配置项】以那个文件作为模版，一般是 spa 项目的 index.html 文件

// SEO 参考资料：https://github.com/madawei2699/awesome-seo/blob/main/README_CN.md

// 【配置项】定义数组对象
const pageConfigs = [
  {
    // 参考资料：https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=zh-cn
    path: '/index.html', // 访问链接

    // 页面标题：搜索引擎通常显示页面标题的前 55 至 60 个字符，超出此范围的文本可能会丢失
    // 参考资料：https://developers.google.com/search/docs/appearance/title-link?hl=zh-cn
    // 参考资料：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title#page_titles_and_seo
    title: "Forzys's Blog",

    // 页面关键字，google 已经弃用该字段
    // https://zhuanlan.zhihu.com/p/382454488
    // https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=zh-cn
    keywords: "m3u8下载工具,Forzys's Blog,免费图床,在线图床,短网址",

    // 页面摘要
    // https://developers.google.com/search/docs/appearance/snippet?hl=zh-cn
    description: 'Github Pages构建的网络博客,提供m3u8下载工具,免费图床,免费短网址,一些前端网络技术信息', // 页面描述

    // 自定插入的图片
    img: [
      'https://image.19941024.xyz/file/b61630765bdd0796db344.png',
    ],

    // 自定义超链接跳转
    // 参考资料：https://developers.google.com/search/docs/appearance/sitelinks?hl=zh-cn
    link: [{
      text: 'm3u8-downloader 点击这里跳转',
      href: '/m3u8-downloader/index.html',
    }, {
      text: 'Iconfont在线预览 点击这里跳转',
      href: '/preview.html',
    }],

    // // 自定义插入的标签
    // content: [{
    //   tag: 'h1',
    //   text: '特大视频原格式下载，边下载边保存，彻底解决大文件下载内存不足问题',
    // }, {
    //   tag: 'div',
    //   text: '推荐一个 m3u8 网页版提取工具，无需下载软件，打开网站即可下载，自动检测，一键下载。',
    // }], 
    // 自定义插入的 html
    // 参考资料：https://zhuanlan.zhihu.com/p/391844443
    html: ` 
      页面加载中，请耐心等待...
      <h1 style="white-space: pre;"> 
        m3u8 提取工具：https://blog.19941024.xyz/m3u8-downloader/index.html
        Iconfont在线预览：https://blog.19941024.xyz/preview.html
        免费图床工具：https://image.19941024.xyz/
        免费短网址工具：https://short.19941024.xyz/ 
        BMI身体指数：https://blog.19941024.xyz/plugins/bmi
        渐变背景主题：https://blog.19941024.xyz/theme 
      </h1> 
  `,
  }
];

// 生成页面间随机页面跳转
pageLinkNum && pageConfigs.forEach(config => {
  config.link = config.link || [];
  const pageLinks = [...pageConfigs];
  for (let index = 0; index < Math.min(pageConfigs.length, pageLinkNum); index++) {
    const pageConfig = pageLinks.splice(Math.floor(Math.random() * pageLinks.length), 1)[0];
    config.link.push({ // 自定义插入的标签
      text: pageConfig.title || pageConfig.keywords || pageConfig.description,
      href: pageConfig.path,
    })
  }
})

const appendTagRegex = new RegExp(`(id="${appendTagId}"[^>]*>)`);
const templateStr = fs.readFileSync(templatePath, 'utf8');

 

pageConfigs.forEach(data => {
  // 读取目标文件内容
  let fileContent = templateStr;

  // 替换 title 标签
  if (data.title) {
    fileContent = fileContent.replace(/<title>.*<\/title>/, `<title>${data.title}</title>`);
  }

  // 替换 meta name="keywords" 标签
  if (data.keywords) {
    fileContent = fileContent.replace(/name="keywords"[^\/>]+/, `name="keywords" content="${data.keywords}"`);
  }

  // 替换 meta name="description" 标签
  if (data.description) {
    fileContent = fileContent.replace(/name="description"[^\/>]+/, `name="description" content="${data.description}"`);
  }

  // 插入自定义 html 标签
  if (data.html) {
    fileContent = fileContent.replace(appendTagRegex, `$1\n${data.html}`);
  }

  // 插入 content 标签
  if (data.content) {
    const contentTags = data.content.map(contentConf => typeof contentConf === 'object' ? `\n<${contentConf.tag}>${contentConf.text}</${contentConf.tag}>` : `\n<div>${content}</div>`).join('');
    fileContent = fileContent.replace(appendTagRegex, `$1${contentTags}`);
  }

  // 插入 a 标签，设置超链接跳转
  if (data.link) {
    const aTags = data.link.map(linkConf => `\n<a target="_blank" href="${linkConf.href}">${linkConf.text}</a>`).join('');
    fileContent = fileContent.replace(appendTagRegex, `$1${aTags}`);
  }

  // 插入 img 标签
  if (data.img) {
    const imgTags = data.img.map(imgUrl => `\n<img src="${imgUrl}"/>`).join('');
    fileContent = fileContent.replace(appendTagRegex, `$1${imgTags}`);
  }

  // 将修改后的内容写入目标文件
  const targetPath = path.join(outputBasePath, data.path);
  fs.mkdirSync(targetPath.substring(0, targetPath.lastIndexOf('/')), { recursive: true });
  fs.writeFileSync(targetPath, fileContent, 'utf8');

  console.log(`SEO 入口文件生成：${targetPath}`);
});
