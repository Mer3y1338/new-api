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
import { Link, useSearch } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { useStatus } from '@/hooks/use-status'

import { AuthLayout } from '../auth-layout'
import { TermsFooter } from '../components/terms-footer'
import { UserAuthForm } from './components/user-auth-form'

export function SignIn() {
  const { t } = useTranslation()
  const { redirect } = useSearch({ from: '/(auth)/sign-in' })
  const { status } = useStatus()

  return (
    <AuthLayout>
      <div className='w-full space-y-7'>
        <div className='mer3y-auth-heading space-y-3'>
          <p className='mer3y-auth-kicker'>AI Coding Gateway</p>
          <h2 className='mer3y-auth-title text-center text-3xl font-medium tracking-tight sm:text-left sm:text-4xl'>
            {t('Sign in')} Mer3y Sense
          </h2>
          <p className='mer3y-auth-subtitle text-left text-sm sm:text-base'>
            一个 API key，连接 Claude Code、Codex CLI 与 Gemini CLI。
          </p>
          {!status?.self_use_mode_enabled &&
            status?.register_enabled !== false && (
              <p className='mer3y-auth-register text-left text-sm sm:text-base'>
                {t("Don't have an account?")}{' '}
                <Link
                  to='/sign-up'
                  className='font-medium underline underline-offset-4'
                >
                  {t('Sign up')}
                </Link>
                .
              </p>
            )}
        </div>

        <UserAuthForm redirectTo={redirect} />

        <TermsFooter
          variant='sign-in'
          status={status}
          className='mer3y-auth-terms text-center'
        />
      </div>
    </AuthLayout>
  )
}
