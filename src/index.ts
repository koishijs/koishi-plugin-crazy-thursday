import { Context, Random, Schema } from 'koishi'

const corpus: string[] = require('./corpus')

export interface Config {}

export const name = 'crazy-thursday'
export const schema: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('thursday', '随机输出 KFC 疯狂星期四段子')
    .shortcut('疯狂星期四')
    .action(() => Random.pick(corpus))
}
