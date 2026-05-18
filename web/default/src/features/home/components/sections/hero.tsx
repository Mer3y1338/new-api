/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { LUOYIN_BRAND_NAME, LUOYIN_MICRO_TAGLINE, LUOYIN_TAGLINE } from '@/custom/luoyin/brand'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className='luoyin-shell luoyin-hero relative z-10 flex flex-col items-center overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24'>
      {/* Layered atmosphere */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-60'
        style={{
          background: [
            'linear-gradient(112deg, oklch(0.85 0.08 340 / 40%) 0 18%, transparent 42%)',
            'linear-gradient(246deg, oklch(0.88 0.06 250 / 35%) 0 16%, transparent 46%)',
            'linear-gradient(180deg, transparent 0%, oklch(0.82 0.07 320 / 25%) 100%)',
          ].join(', '),
        }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_100%)] bg-[size:4rem_4rem] opacity-[0.08]'
      />
      <div className='luoyin-stage-lines' aria-hidden='true' />
      <div className='luoyin-axis' aria-hidden='true'>
        <span className='luoyin-axis__ring' />
        <span className='luoyin-axis__ring luoyin-axis__ring--small' />
      </div>
      <div className='luoyin-petal-field' aria-hidden='true'>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className='luoyin-hero-copy flex max-w-3xl flex-col items-center text-center'>
        <div
          className='luoyin-chapter landing-animate-fade-up opacity-0 text-pink-500/80 dark:text-pink-400/80 font-medium'
          style={{ animationDelay: '0ms' }}
        >
          {t('✨ 欢迎来到我的奇妙 API 世界 🌸')}
        </div>
        <h1
          className='luoyin-title landing-animate-fade-up text-5xl leading-[1.02] font-bold sm:text-6xl md:text-7xl'
          style={{ animationDelay: '60ms' }}
        >
          {LUOYIN_BRAND_NAME}
        </h1>
        <p
          className='landing-animate-fade-up text-muted-foreground/85 mt-5 max-w-lg text-base leading-relaxed opacity-0 md:text-xl'
          style={{ animationDelay: '130ms' }}
        >
          {LUOYIN_TAGLINE}
        </p>
        <p
          className='luoyin-kicker landing-animate-fade-up mt-3 text-xs opacity-0 md:text-sm'
          style={{ animationDelay: '180ms' }}
        >
          {LUOYIN_MICRO_TAGLINE}
        </p>
        <div
          className='landing-animate-fade-up mt-8 flex items-center gap-3 opacity-0'
          style={{ animationDelay: '250ms' }}
        >
          {props.isAuthenticated ? (
            <Button
              className='group rounded-full shadow-sm hover:shadow-md transition-shadow'
              render={<Link to='/dashboard' />}
            >
              {t('Go to Dashboard')}
              <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          ) : (
            <>
              <Button
                className='group rounded-full shadow-sm hover:shadow-md transition-shadow'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className='border-border/50 hover:border-border hover:bg-muted/50 rounded-full'
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
            </>
          )}
        </div>
      </div>

      <div
        className='landing-animate-fade-up w-full max-w-2xl opacity-0 relative mt-16 flex flex-col items-center'
        style={{ animationDelay: '320ms' }}
      >
        <div className="w-full rounded-3xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-md p-8 md:p-12 text-center shadow-2xl shadow-pink-500/10 transition-transform hover:scale-[1.02] duration-300">
          <div className="text-5xl md:text-6xl mb-6 animate-bounce" style={{ animationDuration: '3s' }}>🌸</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground/90 tracking-tight">
            {t('这里是我的专属 API 接口站')}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto">
            {t('日常用的一些大模型接口，稳定、快速、可爱！(๑•̀ㅂ•́)و✧ 欢迎随便逛逛~')}
          </p>
        </div>
      </div>
    </section>
  )
}
