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
import { useTranslation } from 'react-i18next'

import { LUOYIN_BRAND_NAME, LuoyinWordmark } from '@/custom/luoyin/brand'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()

  return (
    <div className='luoyin-shell luoyin-auth relative grid h-svh max-w-none overflow-hidden'>
      <div className='mer3y-auth-orb mer3y-auth-orb-left' aria-hidden='true' />
      <div className='mer3y-auth-orb mer3y-auth-orb-right' aria-hidden='true' />
      <div
        className='mer3y-auth-logo-watermark'
        aria-hidden='true'
        style={{ backgroundImage: "url('/aisz-homepage/assets/Mer3ylogo.svg')" }}
      />

      <Link
        to='/'
        aria-label={`${t('Go to home')} - ${LUOYIN_BRAND_NAME}`}
        className='mer3y-auth-home-link absolute top-4 left-4 z-20 sm:top-8 sm:left-8'
      >
        <div className='flex h-8 w-36 items-center justify-center md:w-40'>
          <LuoyinWordmark />
        </div>
      </Link>

      <div className='container relative z-10 flex items-center pt-20 sm:pt-0'>
        <div className='mer3y-auth-card mx-auto flex w-full flex-col justify-center space-y-2 px-6 py-8 sm:w-[500px] sm:p-10'>
          {children}
        </div>
      </div>
    </div>
  )
}
