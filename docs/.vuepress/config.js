module.exports = {
  title: 'oseongryu.github.io',
  description: 'Description',
  email: 'oseongryu@gmail.com',
  base: '',
  head: [
    ['link', { rel: 'icon', href: `/images/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/pwa',
      {
        serviceWorker: false,
        updatePopup: false,
      },
    ],
  ],
  themeConfig: {
    sidebar: [
{'title': '📕 os', 'collapsable': false, 'children': [['/os/azure', '- azure'], ['/os/bat-client_deploy', '- bat-client_deploy'], ['/os/centos', '- centos'], ['/os/centos-docker', '- centos-docker'], ['/os/centos-error', '- centos-error'], ['/os/centos-nginx', '- centos-nginx'], ['/os/mac', '- mac'], ['/os/powershell', '- powershell'], ['/os/shell', '- shell'], ['/os/ubuntu', '- ubuntu'], ['/os/windows', '- windows'], ['/os/wsl', '- wsl']]}, 
{'title': '📕 docker', 'collapsable': false, 'children': [['/docker/docker', '- docker'], ['/docker/docker-1_setup', '- docker-1_setup'], ['/docker/docker-2_using', '- docker-2_using'], ['/docker/docker-centos', '- docker-centos'], ['/docker/docker-env', '- docker-env'], ['/docker/docker-jekyll', '- docker-jekyll'], ['/docker/docker-mac-m1', '- docker-mac-m1'], ['/docker/docker-mariadb', '- docker-mariadb']]}, 
{'title': '📕 software', 'collapsable': false, 'children': [['/software/3dprinter-meshmixer', '- 3dprinter-meshmixer'], ['/software/activemq', '- activemq'], ['/software/appium', '- appium'], ['/software/chocolatey', '- chocolatey'], ['/software/chrome', '- chrome'], ['/software/dbeaver', '- dbeaver'], ['/software/eclipse', '- eclipse'], ['/software/edge', '- edge'], ['/software/fiddler', '- fiddler'], ['/software/git', '- git'], ['/software/github-action', '- github-action'], ['/software/github-slack', '- github-slack'], ['/software/googlesheet', '- googlesheet'], ['/software/httpie', '- httpie'], ['/software/intellij', '- intellij'], ['/software/jekyll', '- jekyll'], ['/software/kstudio-edu', '- kstudio-edu'], ['/software/mobaxterm', '- mobaxterm'], ['/software/mysqlworkbench', '- mysqlworkbench'], ['/software/n8n', '- n8n'], ['/software/notepad++', '- notepad++'], ['/software/notion', '- notion'], ['/software/office', '- office'], ['/software/pi', '- pi'], ['/software/proxy', '- proxy'], ['/software/quartz', '- quartz'], ['/software/software', '- software'], ['/software/sqlserver2017', '- sqlserver2017'], ['/software/userland', '- userland'], ['/software/vba', '- vba'], ['/software/visualstudio', '- visualstudio'], ['/software/vscode', '- vscode'], ['/software/vscode-setting', '- vscode-setting'], ['/software/zebra', '- zebra']]}, 
{'title': '📕 hadoop', 'collapsable': true, 'children': [['/hadoop/hadoop', '- hadoop']]}, 
{'title': '📕 dbms', 'collapsable': true, 'children': [['/dbms/dynamodb', '- dynamodb'], ['/dbms/mssql', '- mssql'], ['/dbms/mssql-backup', '- mssql-backup'], ['/dbms/mssql-copytablesyno', '- mssql-copytablesyno'], ['/dbms/mysql', '- mysql'], ['/dbms/oracle', '- oracle'], ['/dbms/oracle-index', '- oracle-index'], ['/dbms/sql', '- sql']]}, 
{'title': '📕 springboot', 'collapsable': true, 'children': [['/springboot/springboot-eatgo', '- springboot-eatgo'], ['/springboot/springboot-jpa', '- springboot-jpa'], ['/springboot/springboot-jsp', '- springboot-jsp'], ['/springboot/springboot-lecture', '- springboot-lecture']]}, 
{'title': '📕 jenkins', 'collapsable': true, 'children': [['/jenkins/jenkins', '- jenkins']]}, 
{'title': '📕 deploy', 'collapsable': true, 'children': [['/deploy/heroku', '- heroku']]}, 
{'title': '📕 aws', 'collapsable': true, 'children': [['/aws/aws', '- aws'], ['/aws/aws-api', '- aws-api']]}, 
{'title': '📕 flutter', 'collapsable': true, 'children': [['/flutter/flutter-ubuntu', '- flutter-ubuntu']]}, 
{'title': '📕 rn', 'collapsable': true, 'children': [['/rn/rn', '- rn'], ['/rn/rn-expo', '- rn-expo'], ['/rn/rn-lecture', '- rn-lecture'], ['/rn/rn-mac', '- rn-mac'], ['/rn/rn-setting', '- rn-setting'], ['/rn/rn-windows', '- rn-windows']]}, 
{'title': '📕 javascript', 'collapsable': true, 'children': [['/javascript/javascript', '- javascript'], ['/javascript/next', '- next'], ['/javascript/node', '- node'], ['/javascript/node-se2', '- node-se2'], ['/javascript/nuxt', '- nuxt'], ['/javascript/packages', '- packages']]}, 
{'title': '📕 react', 'collapsable': true, 'children': [['/react/react-boilerplate', '- react-boilerplate']]}, 
{'title': '📕 vue', 'collapsable': true, 'children': [['/vue/vue', '- vue'], ['/vue/vue-devextreme', '- vue-devextreme'], ['/vue/vue-lecture', '- vue-lecture'], ['/vue/vue-typescirpt', '- vue-typescirpt']]}, 
{'title': '📕 python', 'collapsable': true, 'children': [['/python/python', '- python'], ['/python/python-pyinstaller', '- python-pyinstaller'], ['/python/python-selenium', '- python-selenium']]}, 
{'title': '📕 java', 'collapsable': true, 'children': [['/java/android', '- android'], ['/java/java', '- java']]}, 
{'title': '📕 cs', 'collapsable': true, 'children': [['/cs/cs', '- cs'], ['/cs/cs-privatefontcollection', '- cs-privatefontcollection'], ['/cs/devexpresswinforms', '- devexpresswinforms'], ['/cs/mybatis', '- mybatis'], ['/cs/wcf', '- wcf'], ['/cs/wpf', '- wpf']]}, 
{'title': '📕 asp', 'collapsable': true, 'children': [['/asp/asp', '- asp']]}, 
{'title': '📕 education', 'collapsable': true, 'children': [['/education/education', '- education'], ['/education/querydsl', '- querydsl']]}, 
{'title': '📕 etc', 'collapsable': true, 'children': [['/etc/gpt', '- gpt'], ['/etc/stock', '- stock']]}, 
{'title': '📕 project', 'collapsable': true, 'children': [['/project/project', '- project'], ['/project/project-management', '- project-management']]}, 
{'title': '📕 domain', 'collapsable': true, 'children': [['/domain/spc-controlchart', '- spc-controlchart'], ['/domain/spc-processcapability', '- spc-processcapability']]}
    ],
    sidebarDepth: 0,
    nav: [
      { text: 'Home', link: 'https://oseongryu.github.io/', target: '_self' },
      {
        text: 'Github',
        link: 'https://github.com/oseongryu/',
      },
    ],
    smoothScroll: false,
    lastUpdated: 'Last Updated',
  },
}
