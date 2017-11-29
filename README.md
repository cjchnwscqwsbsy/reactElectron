# reactElectron
react+es6+webpack+electron

--------2017.11.20--------
目标:
    1.github远程仓库
    2.配置环境


前提:
  计算机上已经安装git, nodejs及其它必要的软件.
一.github远程仓库
  1.github新建一个仓库,仓库名即项目名,然后clone到本地,之后就可以直接进行git的有关操作;
  2.github上创建一个仓库, 本地新建一个项目,然后通过本地配置将项目提交至仓库:
    1>. 项目根目录打开命令行窗口,输入-- git init 进行初始化;
    2>. 为本地项目添加远程主机-- git remote add remoteName 远程仓库地址;
        本地分支关联远程分支-- git remote --set-upstream remoteName localName;
        remoteName-- 远程仓库名(自定义)
        eg.
        git remote add helloworld https://github.com/cjchnwscqwsbsy/hello-world
        通过以上配置后就可以将项目推送至远程仓库.

  详细了解git请参考git官网.

二.配置环境
  开发electron项目,package.json文件中的main属性的属性值要设置成项目的主进程(本项目中指
  的是main.js). 其他环境配置参考相关的官方教程.

--------2017.11.21--------
目标: 播放器

--------2017.11.22--------
问题: electron实现热更新 ?

--------2017.11.29--------
react动画实现轮播图已完成,还需要进行修饰优化, 接下来布局整个视频主页内容部分, 该部分通过Tab
组件来进行展示, 三个Tab分别为:
最新影视剧(时间倒叙排列),
评分较高的影视剧(评分从高到低),
观看次数较多(次数由高到低);
(视频主页对视频不做具体划分)

视频内容通过列表显示, 采用上图下名+作者的方式.

实现步骤:
<1>.ant-design Tab组件
<2>.构造列表item组件
<3>.列表布局
<4>.数据mock

完成以上目标后实现服务端和客户端数据通信---(fetch), 后端---java(ssm).
