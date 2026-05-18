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
import { cn } from '@/lib/utils'

export const LUOYIN_BRAND_NAME = '洛音云枢'
export const LUOYIN_TAGLINE = '洛水之畔，万模同声。'
export const LUOYIN_MICRO_TAGLINE = '星が落ちる前に、声を見つけよう。'

type LuoyinMarkProps = {
  className?: string
}

export function LuoyinMark({ className }: LuoyinMarkProps) {
  return (
    <span
      aria-hidden='true'
      className={cn('luoyin-mark', className)}
    >
      <span className='luoyin-mark__halo' />
      <span className='luoyin-mark__river' />
      <span className='luoyin-mark__star' />
      <span className='luoyin-mark__shine' />
    </span>
  )
}
