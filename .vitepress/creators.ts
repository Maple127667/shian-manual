export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'Maple_枫溪',
    avatar: '',
    username: 'Maple127667',
    title: '诗岸开发者',
    desc: 'JavaScript插件开发者，python插件开发者，draw牌堆开发者，手册也是我写的（',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Maple127667' },
      { type: 'QQ', icon: 'QQ', link: 'https://qm.qq.com/q/TUovag7J6g' },
    ],
    nameAliases: ['Maple','Mapleawa','Maple127667','Maple9255','Maple_枫溪'],
    emailAliases: ['1276679255@qq.com'],
  },
  // {
  //   name: '絢香猫',
  //   avatar: '',
  //   username: 'nekomeowww',
  //   title: 'Nólëbase 原始创作者',
  //   desc: '开发者，专注于基础设施维护，数据分析，后端、DevOps 开发',
  //   links: [
  //     { type: 'github', icon: 'github', link: 'https://github.com/nekomeowww' },
  //     { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
  //   ],
  //   nameAliases: ['nekomeowww', '绚香猫', '絢香猫', 'Neko Ayaka', 'Ayaka Neko'],
  //   emailAliases: ['neko@ayaka.moe'],
  // },
  // {
  //   name: '絢香音',
  //   avatar: '',
  //   username: 'LittleSound',
  //   title: 'Nólëbase 原始创作者',
  //   desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
  //   links: [
  //     { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
  //     { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/OikawaRizumu' },
  //   ],
  //   nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
  //   emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  // },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
