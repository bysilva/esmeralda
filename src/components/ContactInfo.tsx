'use client'

import { useTranslation } from '@/context/TranslationContext'
import { PhoneIcon, MailIcon, LinkedinIcon, GlobeIcon } from 'lucide-react' // Puedes reemplazarlos con los tuyos
import Link from 'next/link'

interface ContactItem {
  type: 'phone' | 'email' | 'linkedin' | 'website' | 'other'
  label: string
  value: string
  href: string
}

const icons = {
  phone: PhoneIcon,
  email: MailIcon,
  linkedin: LinkedinIcon,
  website: GlobeIcon,
  other: GlobeIcon,
}

const contactList: ContactItem[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'jazzesme@outlook.es',
    href: 'mailto:jazzesme@outlook.es',
  },
  //   {
  //     type: 'phone',
  //     label: 'Teléfono',
  //     value: '+52 55 1234 5678',
  //     href: 'tel:+525512345678',
  //   },
  //   {
  //     type: 'linkedin',
  //     label: 'LinkedIn',
  //     value: 'linkedin.com/in/ejemplo',
  //     href: 'https://linkedin.com/in/ejemplo',
  //   },
  //   {
  //     type: 'website',
  //     label: 'Sitio Web',
  //     value: 'www.portafolio.com',
  //     href: 'https://www.portafolio.com',
  //   },
]

export default function ContactInfo() {
  const { t } = useTranslation()

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GlobeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('contact') || 'Contacto'}</span>
      </h2>
      <ul className="mt-6 space-y-4 text-sm">
        {contactList.map((item, index) => {
          const Icon = icons[item.type] || GlobeIcon
          return (
            <li key={index} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              <span className="text-zinc-700 dark:text-zinc-200">
                <span className="font-medium">{item.label}: </span>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.value}
                </Link>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
