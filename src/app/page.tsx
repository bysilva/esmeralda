'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import portrait from '@/images/portrait.jpg'

import SkillsTable from '@/components/SkillsTable'
import Resume from '@/components/Resume'
import { useTranslation } from '@/context/TranslationContext'
import Courses from '@/components/Courses'
import ContactInfo from '@/components/ContactInfo'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Container className="mt-9">
        <div className="w-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Columna izquierda: Texto */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {t('title')}
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {t('description')}{' '}
                {/* <Link href="/about" className="font-bold underline">
                  {t('about')}
                </Link> */}
              </p>
            </div>

            {/* Columna derecha: Imagen */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={portrait}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-6">
            {/* <SocialLink
              href="https://github.com/bysilva"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://mx.linkedin.com/in/edgar-eduardo-piedra-silva"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <div className="mx-auto w-full max-w-6xl border-t border-gray-300 lg:px-8" />
      <Container className="mt-12 md:mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <SkillsTable />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            {/* <Courses /> */}
            <ContactInfo />
          </div>
        </div>
      </Container>
    </>
  )
}
