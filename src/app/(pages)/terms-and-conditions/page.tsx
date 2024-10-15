import { Metadata } from 'next'
import React from 'react'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { Gutter } from '../../_components/Gutter'
import classes from './index.module.scss'

const TermsAndConditions = () => {
  return (
    <div>
      <Gutter bg={'https://hkacademy.net/media/20620.jpg'} className={classes.hero}>
        <h1 className="text-4xl md:text-6xl font-bold px-2 text-center"> Terms And Conditions</h1>
      </Gutter>

      <Gutter className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Standard Terms and Conditions for HK Academy (hkacademy.net)
        </h2>
        <h4 className="text-xl md:text-2xl font-bold py-2">1. Introduction</h4>
        <p>
          These Terms and Conditions govern your use of HK Academy (the "Platform"), an online
          learning platform operated by HK Academy. You agree to be bound by these Terms and
          Conditions by accessing or using the Platform. If you disagree, please do not use the
          Platform.
        </p>
        <h4 className="text-xl md:text-2xl font-bold py-2">2. User Accounts</h4>
        <p>
          You may be required to create a user account to access certain features of the Platform,
          such as enrolling in courses or accessing course materials.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          any activities under your account.
        </p>
        <p>
          You agree to notify HK Academy immediately of any unauthorized account use or security
          breach.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">3. Intellectual Property</h4>
        <p>
          All content on the Platform, including but not limited to text, images, videos, course
          materials, and trademarks, is protected by copyright, trademark, and other intellectual
          property laws.
        </p>
        <p>
          You may not reproduce, modify, distribute, or otherwise use any content from the Platform
          without prior written permission from HK Academy.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">4. Course Materials</h4>
        <p>
          Course materials on HK Academy may be subject to additional terms and conditions, which
          will be available to you upon enrollment in a course.
        </p>
        <p>
          You agree to comply with all applicable copyright and intellectual property laws when
          accessing or using course materials.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">5. Payment and Refunds</h4>
        <p>
          Payment for courses on HK Academy will be processed according to the terms and conditions
          of the payment processor used by the Platform. Currently, HK Academy accepts [MTN Mobile
          Money, Orange Money, and Credit Cards].
        </p>
        <p>
          Course refund policies will be available upon enrollment and may vary depending on the
          course. Please refer to our separate Refund Policy for details.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">6. Termination</h4>
        <p>
          HK Academy may terminate your access to the Platform anytime, for any reason, without
          notice. This may include violating these Terms and Conditions, non-payment for courses, or
          any other inappropriate conduct by HK Academy.
        </p>
        <p>Upon termination, you will no longer have access to the Platform or its features.</p>

        <h4 className="text-xl md:text-2xl font-bold py-2">7. Disclaimer of Warranties</h4>
        <p>
          THE PLATFORM AND ALL CONTENT ON THE PLATFORM ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
          BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. &
        </p>
        <p>
          HK ACADEMY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          HK Academy does not warrant that the Platform will be uninterrupted, error-free, or
          virus-free.
        </p>
        <p>
          HK Academy does not warrant that the course materials meet your needs or learning
          objectives.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">8. Limitation of Liability</h4>
        <p>
          IN NO EVENT SHALL HK ACADEMY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF
          PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF HK ACADEMY HAS BEEN
          ADVISED OF THE POSSIBILITY OF SUCH DAMAGES) ARISING OUT OF OR IN CONNECTION WITH THE USE
          OR INABILITY TO USE THE PLATFORM OR COURSE MATERIALS.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">9. Governing Law and Jurisdiction</h4>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws
          of Cameroon.
        </p>
        <p>
          Any dispute arising out of or in connection with these Terms and Conditions shall be
          submitted to the exclusive jurisdiction of the courts of Cameroon.
        </p>

        <h4 className="text-xl md:text-2xl font-bold py-2">10. Changes to Terms and Conditions</h4>
        <p>HK Academy may update these Terms and Conditions from time to time.</p>
        <p>
          Your continued use of the Platform after the effective date of any such changes
          constitutes your acceptance of the revised Terms and Conditions.
        </p>
        <p>We recommend that you review these Terms and Conditions periodically for any updates.</p>
      </Gutter>
    </div>
  )
}

export default TermsAndConditions

export const metadata: Metadata = {
  title: 'Terms and Conditions | HK Academy',
  description: 'These are the terms and conditions of HK Academy.',
  openGraph: mergeOpenGraph({
    title: 'Terms and Conditions | HK Academy',
    url: '/terms-and-conditions',
    images: [
      {
        url: 'https://hkacademy.net/media/20620.jpg',
      },
    ],
  }),
}
