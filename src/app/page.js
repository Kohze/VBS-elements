'use client'
import { SimpleImageCard } from '@/components/application-ui/cards'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <SimpleImageCard
            imageSrc="https://images.unsplash.com/photo-1612828284519-8b8b0b0b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            title="Simple Image Card"
            subtitle="Subtitle"
            description="Description"
            href="/"
            classNames={{
              container: 'w-96',
              imageContainer: 'h-48',
              image: 'rounded-t-lg',
              title: 'text-2xl',
              subtitle: 'text-xl',
              description: 'text-lg',
            }}
            bgColor="#fff"
          />
        </div>
      </main>
    </div>
  )
}

export default Page
