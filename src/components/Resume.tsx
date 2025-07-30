'use client'

import { Button } from '@/components/Button'
import { useTranslation } from '@/context/TranslationContext'
import salboLogo from '@/images/logos/salbo_logistics_logo.jpeg'
import newmanLogo from '@/images/logos/newman.jpeg'
import Image, { type ImageProps } from 'next/image'
import { Briefcase, ArrowDown } from 'lucide-react'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string
}

function Role({ role }: { role: Role }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={role.start}>{role.start}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={role.end}>{role.end}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  const { t } = useTranslation()

  const resume: Role[] = [
    {
      company: 'Newman International',
      title:
        'Ejecutiva de Operaciones (Marítimo, Terrestre, Aéreo, Trucking Service)',
      logo: newmanLogo,
      start: 'Agosto 2022',
      end: '2024',
    },
    {
      company: 'Salbo Logistics',
      title:
        'Ejecutiva de Operaciones Importe-Exportación y Coordinación Logística',
      logo: salboLogo,
      start: '2024',
      end: 'Presente',
    },
  ]

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a')
    link.href = `./${fileName}`
    link.download = fileName
    link.click()
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Briefcase className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('work')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        onClick={() => handleDownload('cv_esp.pdf')}
        variant="secondary"
        className="group mt-6 w-full"
      >
        {t('downloadCVESP')}
        <ArrowDown className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default Resume
