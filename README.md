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
