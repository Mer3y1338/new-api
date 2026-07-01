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
import { CherryStudio } from '@lobehub/icons'
import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'

import { useHomeBranding } from '../../hooks/use-home-branding'
import { HeroTerminalDemo } from '../hero-terminal-demo'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

const MoreIcon = () => (
  <svg
    className='text-muted-foreground/60 group-hover:text-foreground size-6 shrink-0 transition-colors'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='6' cy='12' r='2' fill='currentColor' />
    <circle cx='12' cy='12' r='2' fill='currentColor' />
    <circle cx='18' cy='12' r='2' fill='currentColor' />
  </svg>
)

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const branding = useHomeBranding()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const heroButtonClassName =
    'h-9 rounded-full px-3 text-xs font-medium shadow-sm transition-shadow hover:shadow-md sm:h-10 sm:px-4 sm:text-sm'
  const heroOutlineButtonClassName =
    'border-border/50 hover:border-border hover:bg-muted/50 h-9 rounded-full px-3 text-xs font-medium shadow-sm transition-shadow hover:shadow-md sm:h-10 sm:px-4 sm:text-sm'

  const renderDocsButton = () => {
    const isExternal = docsUrl.startsWith('http')
    if (isExternal) {
      return (
        <Button
          variant='outline'
          className={`group inline-flex items-center gap-1.5 ${heroOutlineButtonClassName}`}
          render={<a href={docsUrl} target='_blank' rel='noopener noreferrer' />}
        >
          <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
          <span>{t('Docs')}</span>
        </Button>
      )
    }
    return (
      <Button
        variant='outline'
        className={`group inline-flex items-center gap-1.5 ${heroOutlineButtonClassName}`}
        render={<Link to={docsUrl} />}
      >
        <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
        <span>{t('Docs')}</span>
      </Button>
    )
  }

  return (
    <section className='luoyin-shell relative z-10 flex h-svh min-h-0 flex-col items-center justify-center overflow-hidden px-5 pt-[clamp(4.25rem,13svh,6.25rem)] pb-[clamp(5.25rem,18svh,7rem)] sm:px-6 md:h-auto md:min-h-screen md:pt-32 md:pb-36'>
      <div
        aria-hidden
        className='absolute inset-0 -z-20 block bg-cover bg-center bg-no-repeat md:hidden'
        style={{
          backgroundImage: `url(${branding.bgImageMobile})`,
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-20 hidden bg-cover bg-center bg-no-repeat md:block'
        style={{
          backgroundImage: `url(${branding.bgImagePc})`,
        }}
      />

      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-soft-light'
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.48) 0 1px, rgba(20,24,38,0.26) 1px 3px)',
        }}
      />

      <div className='z-10 flex max-w-3xl flex-col items-center text-center'>
        <div
          className='luoyin-chapter landing-animate-fade-up font-bold text-pink-600 opacity-0 dark:text-pink-300'
          style={{ animationDelay: '0ms' }}
        >
          {branding.eyebrow}
        </div>
        <h1
          className='luoyin-title landing-animate-fade-up text-[clamp(2.75rem,13.5vw,4rem)] leading-[1.02] font-bold sm:text-6xl md:text-7xl'
          style={{ animationDelay: '60ms' }}
        >
          {branding.brandName}
        </h1>
        <p
          className='landing-animate-fade-up mt-3 max-w-md text-[0.9375rem] leading-snug font-semibold text-white opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.88)] max-[360px]:text-sm md:mt-5 md:max-w-lg md:text-xl md:leading-relaxed'
          style={{ animationDelay: '130ms' }}
        >
          {branding.tagline}
        </p>
        <p
          className='luoyin-kicker landing-animate-fade-up mt-2 text-[11px] opacity-0 [@media(max-width:767px)_and_(max-height:520px)]:hidden md:mt-3 md:text-sm'
          style={{ animationDelay: '180ms' }}
        >
          {branding.microTagline}
        </p>
        <div
          className='landing-animate-fade-up mt-5 flex flex-wrap items-center justify-center gap-2 opacity-0 sm:gap-3 md:mt-7'
          style={{ animationDelay: '250ms' }}
        >
          {props.isAuthenticated ? (
            <>
              <Button
                className={`group ${heroButtonClassName}`}
                render={<Link to='/dashboard' />}
              >
                {t('Go to Dashboard')}
                <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              {renderDocsButton()}
            </>
          ) : (
            <>
              <Button
                className={`group ${heroButtonClassName}`}
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className={heroOutlineButtonClassName}
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
              {renderDocsButton()}
            </>
          )}
        </div>

        <div
          className='landing-animate-fade-up mt-5 flex flex-wrap items-center justify-center gap-2 opacity-0 [@media(max-width:767px)_and_(max-height:590px)]:hidden md:mt-7'
          style={{ animationDelay: '290ms' }}
        >
          <a
            href='https://cherry-ai.com'
            target='_blank'
            rel='noopener noreferrer'
            className='group border-border/40 bg-white/[0.72] text-foreground/80 hover:border-border hover:bg-white/[0.86] hover:text-foreground flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-[0_10px_30px_-18px_rgba(30,41,59,0.55),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] dark:border-white/[0.16] dark:bg-white/[0.14] dark:text-white/[0.82] dark:hover:bg-white/[0.2] dark:hover:text-white'
          >
            <CherryStudio.Color size={18} className='shrink-0' />
            <span>Cherry Studio</span>
          </a>
          <a
            href='https://ccswitch.io'
            target='_blank'
            rel='noopener noreferrer'
            className='group border-border/40 bg-white/[0.72] text-foreground/80 hover:border-border hover:bg-white/[0.86] hover:text-foreground flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-[0_10px_30px_-18px_rgba(30,41,59,0.55),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] dark:border-white/[0.16] dark:bg-white/[0.14] dark:text-white/[0.82] dark:hover:bg-white/[0.2] dark:hover:text-white'
          >
            <img
              src='https://ccswitch.io/favicon.png'
              alt='CC Switch'
              className='size-[18px] shrink-0 rounded object-contain'
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextSibling as HTMLElement
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <span
              style={{ display: 'none' }}
              className='size-[18px] shrink-0 items-center justify-center rounded bg-blue-500/10 text-[9px] font-bold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400'
            >
              CC
            </span>
            <span>CC Switch</span>
          </a>
          <div className='group border-border/40 bg-white/[0.72] text-foreground/60 hover:border-border hover:bg-white/[0.86] hover:text-foreground flex cursor-default items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium shadow-[0_10px_30px_-18px_rgba(30,41,59,0.55),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] dark:border-white/[0.16] dark:bg-white/[0.14] dark:text-white/[0.68] dark:hover:bg-white/[0.2] dark:hover:text-white'>
            <MoreIcon />
            <span>{t('More Apps')}</span>
          </div>
        </div>
      </div>

      <div
        className='landing-animate-fade-up w-full opacity-0 [@media(max-width:767px)_and_(max-height:430px)]:hidden'
        style={{ animationDelay: '360ms' }}
      >
        <HeroTerminalDemo
          baseUrl={branding.baseUrl}
          displayHost={branding.displayHost}
          endpoints={branding.endpoints}
        />
      </div>
    </section>
  )
}
