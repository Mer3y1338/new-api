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

export const LUOYIN_BRAND_NAME = 'Mer3y Sense'
export const LUOYIN_TAGLINE = 'Unified AI coding gateway.'
export const LUOYIN_MICRO_TAGLINE = 'Claude Code / Codex CLI / Gemini CLI, one gateway'
export const LUOYIN_WORDMARK_SRC = '/aisz-homepage/assets/Mer3ylogo.svg'

type LuoyinWordmarkProps = {
  className?: string
  src?: string
}

export function LuoyinWordmark({ className, src }: LuoyinWordmarkProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center gap-2 text-[15px] font-semibold tracking-[-0.03em] text-neutral-950 dark:text-white',
        className
      )}
    >
      <img
        src={src || LUOYIN_WORDMARK_SRC}
        alt=''
        draggable={false}
        className='h-[1.35em] w-[1.35em] shrink-0 object-contain drop-shadow-[0_1px_1px_rgba(38,54,92,0.28)]'
      />
      <span className='leading-none whitespace-nowrap'>Mer3y Sense</span>
    </div>
  )
}
