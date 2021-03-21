const urlFrontBefor = './tech/front/'
const urlBackBefor = './tech/back/'
const urlGameBefor = './tech/game/'
const urlMobileBefor = './tech/mobile/'
const urlOtherBefor = './tech/other/'
const urlTaskBefor = './tech/task/'
const urlAfter = '.svg'

export type TechnologyInfo = {
  url: string
  name: string
}

export const frontendsURL = {
  angular: urlFrontBefor + 'angular' + urlAfter,
  bootstrap: urlFrontBefor + 'bootstrap' + urlAfter,
  css3: urlFrontBefor + 'css-3' + urlAfter,
  element: urlFrontBefor + 'element' + urlAfter,
  gatsby: urlFrontBefor + 'gatsby' + urlAfter,
  html: urlFrontBefor + 'html' + urlAfter,
  javascript: urlFrontBefor + 'javascript' + urlAfter,
  lighthouse: urlFrontBefor + 'lighthouse' + urlAfter,
  materialui: urlFrontBefor + 'material-ui' + urlAfter,
  materializecss: urlFrontBefor + 'materializecss' + urlAfter,
  nextjs: urlFrontBefor + 'nextjs' + urlAfter,
  nuxticon: urlFrontBefor + 'nuxt-icon' + urlAfter,
  postcss: urlFrontBefor + 'postcss' + urlAfter,
  preact: urlFrontBefor + 'preact' + urlAfter,
  react: urlFrontBefor + 'react' + urlAfter,
  sass: urlFrontBefor + 'sass' + urlAfter,
  svelte: urlFrontBefor + 'svelte-icon' + urlAfter,
  tailwindcss: urlFrontBefor + 'tailwindcss' + urlAfter,
  typescript: urlFrontBefor + 'typescript' + urlAfter,
  vue: urlFrontBefor + 'vue' + urlAfter,
  vuetifyjs: urlFrontBefor + 'vuetifyjs' + urlAfter
}
export const backendsURL = {
  cakephp: urlBackBefor + 'cakephp-icon' + urlAfter,
  django: urlBackBefor + 'django-icon' + urlAfter,
  express: urlBackBefor + 'express' + urlAfter,
  flask: urlBackBefor + 'flask' + urlAfter,
  go: urlBackBefor + 'go' + urlAfter,
  haskell: urlBackBefor + 'haskell-icon' + urlAfter,
  laravel: urlBackBefor + 'laravel' + urlAfter,
  nestjs: urlBackBefor + 'nestjs' + urlAfter,
  nodejs: urlBackBefor + 'nodejs-icon' + urlAfter,
  php: urlBackBefor + 'php' + urlAfter,
  python: urlBackBefor + 'python' + urlAfter,
  rails: urlBackBefor + 'rails' + urlAfter,
  ruby: urlBackBefor + 'ruby' + urlAfter,
  rust: urlBackBefor + 'rust' + urlAfter,
  scala: urlBackBefor + 'scala' + urlAfter
}
export const gamesURL = {
  cplusplus: urlGameBefor + 'c-plusplus' + urlAfter,
  csharp: urlGameBefor + 'c-sharp' + urlAfter,
  c: urlGameBefor + 'c' + urlAfter,
  unity: urlGameBefor + 'unity' + urlAfter
}
export const mobilesURL = {
  flutter: urlMobileBefor + 'flutter' + urlAfter,
  java: urlMobileBefor + 'java' + urlAfter,
  kotlin: urlMobileBefor + 'kotlin' + urlAfter,
  swift: urlMobileBefor + 'swift' + urlAfter
}

export const othersURL = {
  agora: urlOtherBefor + 'agora' + urlAfter,
  algolia: urlOtherBefor + 'algolia' + urlAfter,
  apache: urlOtherBefor + 'apache' + urlAfter,
  apollostack: urlOtherBefor + 'apollostack' + urlAfter,
  aws: urlOtherBefor + 'aws' + urlAfter,
  azure: urlOtherBefor + 'azure' + urlAfter,
  bitcoin: urlOtherBefor + 'bitcoin' + urlAfter,
  circleci: urlOtherBefor + 'circleci' + urlAfter,
  docker: urlOtherBefor + 'docker-icon' + urlAfter,
  electron: urlOtherBefor + 'electron' + urlAfter,
  firebase: urlOtherBefor + 'firebase' + urlAfter,
  googlecloudfunctions: urlOtherBefor + 'google-cloud-functions' + urlAfter,
  googlecloudrun: urlOtherBefor + 'google-cloud-run' + urlAfter,
  heroku: urlOtherBefor + 'heroku-icon' + urlAfter,
  kubernetes: urlOtherBefor + 'kubernetes' + urlAfter,
  mongodb: urlOtherBefor + 'mongodb' + urlAfter,
  mysql: urlOtherBefor + 'mysql' + urlAfter,
  netlify: urlOtherBefor + 'netlify' + urlAfter,
  nginx: urlOtherBefor + 'nginx' + urlAfter,
  opencv: urlOtherBefor + 'opencv' + urlAfter,
  postgresql: urlOtherBefor + 'postgresql' + urlAfter,
  rxjs: urlOtherBefor + 'rxjs' + urlAfter,
  webpack: urlOtherBefor + 'webpack' + urlAfter
}

export const tasksURL = {
  bitbucket: urlTaskBefor + 'bitbucket' + urlAfter,
  discord: urlTaskBefor + 'discord' + urlAfter,
  github: urlTaskBefor + 'github-icon' + urlAfter,
  slack: urlTaskBefor + 'slack' + urlAfter,
  sourcetree: urlTaskBefor + 'sourcetree' + urlAfter
}

export const frontends: TechnologyInfo[] = [
  { name: 'Angular', url: frontendsURL.angular },
  { name: 'Bootstrap', url: frontendsURL.bootstrap },
  { name: 'CSS3', url: frontendsURL.css3 },
  { name: 'Element UI', url: frontendsURL.element },
  { name: 'Gatsby', url: frontendsURL.gatsby },
  { name: 'HTML 5', url: frontendsURL.html },
  { name: 'Javascript', url: frontendsURL.javascript },
  { name: 'Materializecss', url: frontendsURL.materializecss },
  { name: 'Material UI', url: frontendsURL.materialui },
  { name: 'Next.js', url: frontendsURL.nextjs },
  { name: 'Nuxt.js', url: frontendsURL.nuxticon },
  { name: 'Postcss', url: frontendsURL.postcss },
  { name: 'Preact', url: frontendsURL.preact },
  { name: 'React', url: frontendsURL.react },
  { name: 'Sass', url: frontendsURL.sass },
  { name: 'Svelte', url: frontendsURL.svelte },
  { name: 'Tailwind css', url: frontendsURL.tailwindcss },
  { name: 'Typescript', url: frontendsURL.typescript },
  { name: 'Vue', url: frontendsURL.vue },
  { name: 'Vuetifyjs', url: frontendsURL.vuetifyjs }
]

export const backends: TechnologyInfo[] = [
  { url: backendsURL.cakephp, name: 'CakePHP' },
  { url: backendsURL.django, name: 'Django' },
  { url: backendsURL.express, name: 'Express' },
  { url: backendsURL.flask, name: 'Flask' },
  { url: backendsURL.go, name: 'Go' },
  { url: backendsURL.haskell, name: 'Haskell' },
  { url: backendsURL.laravel, name: 'Laravel' },
  { url: backendsURL.nestjs, name: 'Nest.js' },
  { url: backendsURL.nodejs, name: 'Node.js' },
  { url: backendsURL.php, name: 'PHP' },
  { url: backendsURL.python, name: 'Python' },
  { url: backendsURL.rails, name: 'Rails' },
  { url: backendsURL.ruby, name: 'Ruby' },
  { url: backendsURL.rust, name: 'Rust' },
  { url: backendsURL.scala, name: 'Scala' }
]

export const games: TechnologyInfo[] = [
  { url: gamesURL.c, name: 'C' },
  { url: gamesURL.cplusplus, name: 'C++' },
  { url: gamesURL.csharp, name: 'C#' },
  { url: gamesURL.unity, name: 'Unity' }
]

export const mobiles: TechnologyInfo[] = [
  { url: mobilesURL.flutter, name: 'Flutter' },
  { url: mobilesURL.java, name: 'Java' },
  { url: mobilesURL.kotlin, name: 'Kotlin' },
  { url: mobilesURL.swift, name: 'Swift' }
]

export const others: TechnologyInfo[] = [
  { url: othersURL.agora, name: 'Agora' },
  { url: othersURL.algolia, name: 'Algoria' },
  { url: othersURL.apache, name: 'Apache' },
  { url: othersURL.apollostack, name: 'Apollo' },
  { url: othersURL.aws, name: 'AWS' },
  { url: othersURL.azure, name: 'Azure' },
  { url: othersURL.bitcoin, name: 'Bitcoin' },
  { url: othersURL.circleci, name: 'CircleCI' },
  { url: othersURL.docker, name: 'Docker' },
  { url: othersURL.electron, name: 'Electron' },
  { url: othersURL.firebase, name: 'Firebase' },
  { url: othersURL.googlecloudfunctions, name: 'Cloud Functions' },
  { url: othersURL.googlecloudrun, name: 'Cloud Runs' },
  { url: othersURL.heroku, name: 'Heroku' },
  { url: othersURL.kubernetes, name: 'Kubernetes' },
  { url: othersURL.mongodb, name: 'MongoDB' },
  { url: othersURL.mysql, name: 'MySQL' },
  { url: othersURL.netlify, name: 'Netlify' },
  { url: othersURL.nginx, name: 'Nginx' },
  { url: othersURL.opencv, name: 'OpenCV' },
  { url: othersURL.postgresql, name: 'PostgreSQL' },
  { url: othersURL.rxjs, name: 'RxJS' },
  { url: othersURL.webpack, name: 'Webpack' }
]

export const tasks: TechnologyInfo[] = [
  { url: tasksURL.bitbucket, name: 'BitBucket' },
  { url: tasksURL.discord, name: 'Discord' },
  { url: tasksURL.github, name: 'Github' },
  { url: tasksURL.slack, name: 'Slack' },
  { url: tasksURL.sourcetree, name: 'Sourcetree' }
]
