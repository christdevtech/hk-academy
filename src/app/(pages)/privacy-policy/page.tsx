import { Metadata } from 'next'
import React from 'react'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { Gutter } from '../../_components/Gutter'
import classes from '../terms-and-conditions/index.module.scss'

const PrivacyPolicy = () => {
  return (
    <div>
      <Gutter bg={'https://hkacademy.net/media/20620.jpg'} className={classes.hero}>
        <h1 className="text-4xl md:text-6xl font-bold">Privacy Policy</h1>
      </Gutter>
      <Gutter className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Privacy Policy for HK Academy (hkacademy.net)
        </h2>
        <h4 className="text-xl md:text-2xl font-bold py-2">1. Introduction</h4>
        <p>
          At HK Academy, we are committed to protecting your privacy and ensuring the security of
          your personal information. This Privacy Policy explains how we collect, use, and disclose
          your personal information.
        </p>
        <h4 className="text-xl md:text-2xl font-bold py-2">2. Information We Collect</h4>
        <p>
          We may collect personal information from you when you use our Platform, such as your name,
          email address, phone number, and payment information.
        </p>
        <h4 className="text-xl md:text-2xl font-bold py-2">3. Use of Information</h4>
        <p>
          The information we collect may be used to provide and improve our services, communicate
          with you, process payments, and ensure the security of our Platform.
        </p>
        <h4 className="text-xl md:text-2xl font-bold py-2">4. Disclosure of Information</h4>
        <p>
          We may disclose your personal information to third parties only when necessary to provide
          our services, comply with legal obligations, or protect our rights and interests.
        </p>
        <h4 className="text-xl md:text-2xl font-bold py-2">5. Security</h4>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access,
          disclosure, or destruction.
        </p>
        <h4 className="text-xl md:text-2xl font-bold py-2">6. Changes to This Privacy Policy</h4>
        <p>
          We may update this Privacy Policy from time to time. Your continued use of our Platform
          after any changes constitutes your acceptance of the revised Privacy Policy. We recommend
          you review this Privacy Policy periodically.
        </p>
      </Gutter>
    </div>
  )
}

export default PrivacyPolicy

export const metadata: Metadata = {
  title: 'Privacy Policy | HK Academy',
  description: 'This is the privacy policy of HK Academy.',
  openGraph: mergeOpenGraph({
    title: 'Privacy Policy | HK Academy',
    url: '/privacy-policy',
    images: [
      {
        url: 'https://hkacademy.net/media/20620.jpg',
      },
    ],
  }),
}
