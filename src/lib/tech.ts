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
  hasDarkmode: boolean
  darkmodeUrl: string
}

export interface SearchTable {
  lowerCaseName: string
  technologyInfo: TechnologyInfo
}

export const frontendsURL = {
  angular: urlFrontBefor + 'angular' + urlAfter,
  babel: urlFrontBefor + 'babel' + urlAfter,
  bootstrap: urlFrontBefor + 'bootstrap' + urlAfter,
  css3: urlFrontBefor + 'css-3' + urlAfter,
  element: urlFrontBefor + 'element' + urlAfter,
  gatsby: urlFrontBefor + 'gatsby' + urlAfter,
  html: urlFrontBefor + 'html' + urlAfter,
  javascript: urlFrontBefor + 'javascript' + urlAfter,
  jquery: urlFrontBefor + 'jquery' + urlAfter,
  lighthouse: urlFrontBefor + 'lighthouse' + urlAfter,
  materialui: urlFrontBefor + 'material-ui' + urlAfter,
  materializecss: urlFrontBefor + 'materializecss' + urlAfter,
  nextjs: urlFrontBefor + 'nextjs' + urlAfter,
  nuxticon: urlFrontBefor + 'nuxt-icon' + urlAfter,
  postcss: urlFrontBefor + 'postcss' + urlAfter,
  preact: urlFrontBefor + 'preact' + urlAfter,
  react: urlFrontBefor + 'react' + urlAfter,
  sass: urlFrontBefor + 'sass' + urlAfter,
  storybook: urlFrontBefor + 'storybook' + urlAfter,
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
  graphql: urlOtherBefor + 'graphql' + urlAfter,
  heroku: urlOtherBefor + 'heroku-icon' + urlAfter,
  kubernetes: urlOtherBefor + 'kubernetes' + urlAfter,
  mongodb: urlOtherBefor + 'mongodb' + urlAfter,
  mysql: urlOtherBefor + 'mysql' + urlAfter,
  netlify: urlOtherBefor + 'netlify' + urlAfter,
  nginx: urlOtherBefor + 'nginx' + urlAfter,
  opencv: urlOtherBefor + 'opencv' + urlAfter,
  postgresql: urlOtherBefor + 'postgresql' + urlAfter,
  rxjs: urlOtherBefor + 'rxjs' + urlAfter,
  sendgrid: urlOtherBefor + 'sendgrid' + urlAfter,
  stripe: urlOtherBefor + 'stripe' + urlAfter,
  vercel: urlOtherBefor + 'vercel' + urlAfter,
  webpack: urlOtherBefor + 'webpack' + urlAfter,
  wordpress: urlOtherBefor + 'wordpress' + urlAfter
}

export const tasksURL = {
  asana: urlTaskBefor + 'asana' + urlAfter,
  bitbucket: urlTaskBefor + 'bitbucket' + urlAfter,
  discord: urlTaskBefor + 'discord' + urlAfter,
  github: urlTaskBefor + 'github-icon' + urlAfter,
  gitlab: urlTaskBefor + 'gitlab' + urlAfter,
  slack: urlTaskBefor + 'slack' + urlAfter,
  sourcetree: urlTaskBefor + 'sourcetree' + urlAfter,
  trello: urlTaskBefor + 'trello' + urlAfter
}

export const frontends: TechnologyInfo[] = [
  {
    name: 'Angular',
    url: frontendsURL.angular,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Babel',
    url: frontendsURL.babel,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Bootstrap',
    url: frontendsURL.bootstrap,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'CSS3',
    url: frontendsURL.css3,
    hasDarkmode: true,
    darkmodeUrl: urlFrontBefor + 'dark-css-3' + urlAfter
  },
  {
    name: 'Element UI',
    url: frontendsURL.element,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Gatsby',
    url: frontendsURL.gatsby,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'HTML 5',
    url: frontendsURL.html,
    hasDarkmode: false,
    darkmodeUrl: urlFrontBefor + 'dark-html' + urlAfter
  },
  {
    name: 'Javascript',
    url: frontendsURL.javascript,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'jQuery',
    url: frontendsURL.jquery,
    hasDarkmode: true,
    darkmodeUrl: urlFrontBefor + 'dark-jquery' + urlAfter
  },
  {
    name: 'Materializecss',
    url: frontendsURL.materializecss,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Material UI',
    url: frontendsURL.materialui,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Next.js',
    url: frontendsURL.nextjs,
    hasDarkmode: true,
    darkmodeUrl: urlFrontBefor + 'dark-nextjs' + urlAfter
  },
  {
    name: 'Nuxt.js',
    url: frontendsURL.nuxticon,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Postcss',
    url: frontendsURL.postcss,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Preact',
    url: frontendsURL.preact,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'React',
    url: frontendsURL.react,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { name: 'Sass', url: frontendsURL.sass, hasDarkmode: false, darkmodeUrl: '' },
  {
    name: 'StoryBook',
    url: frontendsURL.storybook,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Svelte',
    url: frontendsURL.svelte,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Tailwind css',
    url: frontendsURL.tailwindcss,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    name: 'Typescript',
    url: frontendsURL.typescript,
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { name: 'Vue', url: frontendsURL.vue, hasDarkmode: false, darkmodeUrl: '' },
  {
    name: 'Vuetifyjs',
    url: frontendsURL.vuetifyjs,
    hasDarkmode: false,
    darkmodeUrl: ''
  }
]

export const backends: TechnologyInfo[] = [
  {
    url: backendsURL.cakephp,
    name: 'CakePHP',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: backendsURL.django,
    name: 'Django',
    hasDarkmode: true,
    darkmodeUrl: urlBackBefor + 'dark-django-icon' + urlAfter
  },
  {
    url: backendsURL.express,
    name: 'Express',
    hasDarkmode: true,
    darkmodeUrl: urlBackBefor + 'dark-express' + urlAfter
  },
  {
    url: backendsURL.flask,
    name: 'Flask',
    hasDarkmode: true,
    darkmodeUrl: urlBackBefor + 'dark-flask' + urlAfter
  },
  { url: backendsURL.go, name: 'Go', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: backendsURL.haskell,
    name: 'Haskell',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: backendsURL.laravel,
    name: 'Laravel',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: backendsURL.nestjs,
    name: 'Nest.js',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: backendsURL.nodejs,
    name: 'Node.js',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: backendsURL.php, name: 'PHP', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: backendsURL.python,
    name: 'Python',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: backendsURL.rails,
    name: 'Rails',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: backendsURL.ruby, name: 'Ruby', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: backendsURL.rust,
    name: 'Rust',
    hasDarkmode: true,
    darkmodeUrl: urlBackBefor + 'dark-rust' + urlAfter
  },
  { url: backendsURL.scala, name: 'Scala', hasDarkmode: false, darkmodeUrl: '' }
]

export const games: TechnologyInfo[] = [
  { url: gamesURL.c, name: 'C', hasDarkmode: false, darkmodeUrl: '' },
  { url: gamesURL.cplusplus, name: 'C++', hasDarkmode: false, darkmodeUrl: '' },
  { url: gamesURL.csharp, name: 'C#', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: gamesURL.unity,
    name: 'Unity',
    hasDarkmode: true,
    darkmodeUrl: urlGameBefor + 'dark-unity' + urlAfter
  }
]

export const mobiles: TechnologyInfo[] = [
  {
    url: mobilesURL.flutter,
    name: 'Flutter',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: mobilesURL.java, name: 'Java', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: mobilesURL.kotlin,
    name: 'Kotlin',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: mobilesURL.swift, name: 'Swift', hasDarkmode: false, darkmodeUrl: '' }
]

export const others: TechnologyInfo[] = [
  { url: othersURL.agora, name: 'Agora', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: othersURL.algolia,
    name: 'Algoria',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.apache,
    name: 'Apache',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.apollostack,
    name: 'Apollo',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-apollostack' + urlAfter
  },
  {
    url: othersURL.aws,
    name: 'AWS',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-aws' + urlAfter
  },
  { url: othersURL.azure, name: 'Azure', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: othersURL.bitcoin,
    name: 'Bitcoin',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.circleci,
    name: 'CircleCI',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-circleci' + urlAfter
  },
  {
    url: othersURL.docker,
    name: 'Docker',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.electron,
    name: 'Electron',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.firebase,
    name: 'Firebase',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.googlecloudfunctions,
    name: 'Cloud Functions',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.googlecloudrun,
    name: 'Cloud Runs',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.graphql,
    name: 'GlaphQL',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.heroku,
    name: 'Heroku',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-heroku-icon' + urlAfter
  },
  {
    url: othersURL.kubernetes,
    name: 'Kubernetes',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.mongodb,
    name: 'MongoDB',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-mongodb' + urlAfter
  },
  {
    url: othersURL.mysql,
    name: 'MySQL',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-mysql' + urlAfter
  },
  {
    url: othersURL.netlify,
    name: 'Netlify',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: othersURL.nginx, name: 'Nginx', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: othersURL.opencv,
    name: 'OpenCV',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.postgresql,
    name: 'PostgreSQL',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: othersURL.rxjs, name: 'RxJS', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: othersURL.sendgrid,
    name: 'SendGrid',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.stripe,
    name: 'Stripe',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.vercel,
    name: 'Vercel',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-vercel' + urlAfter
  },
  {
    url: othersURL.webpack,
    name: 'Webpack',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: othersURL.wordpress,
    name: 'Wordpress',
    hasDarkmode: true,
    darkmodeUrl: urlOtherBefor + 'dark-wordpress' + urlAfter
  }
]

export const tasks: TechnologyInfo[] = [
  {
    url: tasksURL.asana,
    name: 'Asana',
    hasDarkmode: true,
    darkmodeUrl: urlTaskBefor + 'dark-asana' + urlAfter
  },
  {
    url: tasksURL.bitbucket,
    name: 'BitBucket',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: tasksURL.discord,
    name: 'Discord',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  {
    url: tasksURL.github,
    name: 'Github',
    hasDarkmode: true,
    darkmodeUrl: urlTaskBefor + 'dark-github-icon' + urlAfter
  },
  { url: tasksURL.gitlab, name: 'GitLab', hasDarkmode: false, darkmodeUrl: '' },
  { url: tasksURL.slack, name: 'Slack', hasDarkmode: false, darkmodeUrl: '' },
  {
    url: tasksURL.sourcetree,
    name: 'Sourcetree',
    hasDarkmode: false,
    darkmodeUrl: ''
  },
  { url: tasksURL.trello, name: 'Trello', hasDarkmode: false, darkmodeUrl: '' }
]
