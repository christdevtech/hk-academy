'use client'
import React, { Suspense } from 'react'
import YouTubeEmbed from '../YouTubeEmbed'
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  cn,
  Image,
  Link,
  Listbox,
  ListboxItem,
  Spinner,
} from '@nextui-org/react'
import { TagIcon } from '../icons/TagIcon'

const HomePage = () => {
  const iconClasses = 'text-3xl text-default-500 pointer-events-none flex-shrink-0'
  return (
    <React.Fragment>
      <div className="text-center py-24 pb-12 bg-gradient-to-tr from-neutral-950 via-black to-zinc-800">
        <div className="flex flex-col gap-3 container-md m-auto">
          <p className="text-2xl">Welcome to HK Academy's official website</p>
          <h3 className="font-black text-6xl text-danger">LEARN AND EARN</h3>
          <h5 className="text-3xl font-semibold">
            Embrace Your Financial Future Through High Income Skills
          </h5>
        </div>
        <div className="grid grid-cols-1 m-auto max-w-[900px] my-16 justify-items-center gap-8">
          <Suspense fallback={<Spinner></Spinner>}>
            <YouTubeEmbed videoUrl="https://www.youtube.com/watch?v=ux3II9_pfNc" />
          </Suspense>
          <Button
            color="danger"
            variant="shadow"
            size="lg"
            as={Link}
            href="/create-account"
            radius="full"
            className="uppercase"
          >
            Join now
          </Button>
        </div>
        <div className="py-8 grid grid-cols-1 gap-8 m-auto max-w-[550px]">
          <h3 className="text-5xl font-bold">WHAT YOU WILL LEARN</h3>
          <p className="text-2xl">
            Making <span className="font-bold">Money</span> is a skill that you can learn inside
            <span className="font-bold"> HK Academy</span>
          </p>
        </div>
        <div className="container m-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-slate-50 border-2 p-8 mx-4 md:mx-8 my-4 rounded-xl gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/img/computer-design-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Graphic Design</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/final-cut-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Video Editing</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/business-bag-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Business Training</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/multimedia-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Content Creation</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/ai-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Artificial Intelligence</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/web-design-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Web Design</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/moneytransfer.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>Road to your first million</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/img/whatsapp-whats-app-svgrepo-com.svg"
                alt="icon"
                width={50}
                height={50}
                as={Image}
                className="invert"
              />
              <p>WhatsApp Marketing</p>
            </div>
          </div>
        </div>
        <p className="text-center text-xl"> And many more money-making skills</p>
        <div className="container max-w-[1200px] m-auto my-16">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1 p-8">
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">
                Road to your first million
              </h3>
              <Image src="/img/img-million.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                In this comprehensive video courseyou are going to learn step by stephow you can
                make your first 1 millionfrancs (1000 Dollars), what to do, how o do it will be
                taught to you inside this course
              </p>
            </Card>
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">business training</h3>
              <Image src="/img/img-business.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                Learn how to start a business from scratch, how to raise capital for your start-up
                and how to start a 6 figure business with no money. This is the most comprehensive
                business lesson.
              </p>
            </Card>
          </div>
          <Button
            color="danger"
            variant="shadow"
            size="lg"
            as={Link}
            href="/create-account"
            radius="full"
            className="md:mt-8 mt-1 uppercase"
          >
            Join now
          </Button>
        </div>
        <div className="container max-w-[1200px] m-auto my-16">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1 p-8">
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">video editing</h3>
              <Image src="/img/img-video.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                With the rise in content creation, morethan ever before the need for videoeditors
                are on a high, in this course youwill learn how to use even a mobilephone to edit
                professional lookingvideos and things like sound effect, b-roll, voice over etc
              </p>
            </Card>
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">Graphic Design</h3>
              <Image src="/img/img-graphic-1.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                In this course, you will learn how to design captivating designs ranging from
                flyers, stickers, banners, YouTube thumbnails, invitation cards, logos and lots more
                plus a dedicated tutorial on how to print money as a graphic designer.
              </p>
            </Card>
          </div>
          <Button
            color="danger"
            variant="shadow"
            size="lg"
            as={Link}
            href="/create-account"
            radius="full"
            className="md:mt-8 mt-1 uppercase"
          >
            Join now
          </Button>
        </div>
        <div className="container max-w-[1200px] m-auto my-16">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1 p-8">
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">Affiliate Marketing</h3>
              <Image src="/img/img-affiliate.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                <b>Affiliate marketing is a trillion dollar business model</b> that is here to
                stay,learn how to start making moneythrough affiliate marketing even withjust your
                mobile phone.
              </p>
            </Card>
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">CONTENT CREATION</h3>
              <Image src="/img/img-content.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                Content creation is the new oil of this generation, this is where generational
                wealth creators are merging front, get a detailed step by step guide to become a
                content creator per excellence even without showing your face.
              </p>
            </Card>
          </div>
          <Button
            color="danger"
            variant="shadow"
            size="lg"
            as={Link}
            href="/create-account"
            radius="full"
            className="md:mt-8 mt-1 uppercase"
          >
            Join now
          </Button>
        </div>
        <div className="container max-w-[1200px] m-auto my-16">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1 p-8">
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">
                Artificial Intelligence
              </h3>
              <Image src="/img/img-ai.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                If you want to earn then the trend must be your friend, learn the cutting edge
                technology that is taking every single industry by storm, get ahead of many with
                this course and position yourself to make millions with AI.
              </p>
            </Card>
            <Card className="light foreground background py-3">
              <h3 className="text-lg px-2 md:text-2xl font-bold uppercase">
                FREE QUALITY MENTORSHIPJOIN
              </h3>
              <Image src="/img/img-business.png" alt="million" />
              <p className="px-8 pb-6 text-xl">
                Let's face it, No one can truly be successful without a mentor. Get free access to
                HK Academy online community as a signed up user. Learn from industry experts and
                connect with like minded individuals with the same money goals as yours.
              </p>
            </Card>
          </div>
          <Button
            color="danger"
            variant="shadow"
            size="lg"
            as={Link}
            href="/create-account"
            radius="full"
            className="md:mt-8 mt-1 uppercase"
          >
            Join now
          </Button>
        </div>

        <div className="container m-auto">
          <h2 className="text-2xl md:text-4xl font-bold">WHAT OUR STUDENTS ARE SAYING</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-8 place-items-center">
            <Image src="/img/testimonial1.jpg" alt="testimonial"></Image>
            <Image src="/img/testimonial2.jpg" alt="testimonial" className="md:mt-24"></Image>
            <Image src="/img/testimonial3.jpg" alt="testimonial"></Image>
          </div>
        </div>

        <div className="m-auto m-8 pt-24">
          <h2 className="text-2xl md:text-4xl font-bold pb-4">HK ACADEMY AFFILIATE PROGRAM</h2>
          <p className="text-xl pb-8">
            <span className="font-bold">HK Academy</span> allows you to{' '}
            <span className="text-danger font-bold">Earn while you Learn</span>
          </p>
          <div className="max-w-[500px] m-auto text-start text-xl">
            <Listbox variant="flat" aria-label="Listbox menu with descriptions">
              <ListboxItem
                key="new"
                textValue="earn"
                startContent={<TagIcon className={cn(iconClasses, 'text-danger')} />}
              >
                <span className="text-xl"> Earn 1000 FCFA per successful referral</span>
              </ListboxItem>
              <ListboxItem
                key="copy"
                textValue="earn"
                startContent={<TagIcon className={cn(iconClasses, 'text-danger')} />}
              >
                <span className="text-xl"> No withdrawal days</span>
              </ListboxItem>
              <ListboxItem
                key="edit"
                textValue="always"
                startContent={<TagIcon className={cn(iconClasses, 'text-danger')} />}
              >
                <span className="text-xl"> Only 3000 Francs Withdrawal Threshold</span>
              </ListboxItem>
              <ListboxItem
                key="delete"
                textValue="withdraw"
                startContent={<TagIcon className={cn(iconClasses, 'text-danger')} />}
              >
                <span className="text-xl"> Withdraw Direct Into Your Mobile Money</span>
              </ListboxItem>
            </Listbox>
          </div>
        </div>
      </div>

      <div className="container m-auto py-24 flex flex-col gap-4">
        <div className="flex justify-center">
          <Button className="text-2xl font-bold md:text-4xl rounded-none" color="danger">
            LIMITED TIME OFFER
          </Button>
        </div>
        <div className="max-w-[500px] m-auto gap-4">
          <p className="text-2xl font-bold text-center">
            Earn up to 2,500 Francs For Every Successful Referral In The Next Three Months (October,
            November & December 2024).
          </p>
          <div className="py-4 flex justify-center">
            <Button
              color="danger"
              variant="solid"
              size="lg"
              as={Link}
              href="/create-account"
              radius="full"
              className="text-2xl uppercase"
            >
              Join now
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center py-24 pb-12 bg-gradient-to-tr from-neutral-950 via-black to-zinc-800">
        <div className="container m-auto">
          <div className="grid grid-cols-8 gap-8 justify-items-center justify-center">
            <div className="col-span-8">
              <h2 className="md:text-4xl text-2xl font-bold">WHY CHOOSE HK ACADEMY ?</h2>
            </div>
            <div className="md:col-span-3 col-span-8">
              <Image src="/img/img-mentorship.png" alt="mentor" />
            </div>
            <div className="col-span-8 md:col-span-5 text-left lg:pt-16">
              <Accordion variant="splitted" defaultExpandedKeys={'1'}>
                <AccordionItem key="1" aria-label="mentor" title="Mentorship">
                  We don’t just train you but we have partnered with seasoned entrepreneurs who will
                  guide you each step of the way, allow our millionaire mentors to hold you by the
                  hand. Lets face it,
                  <span className="text-semibold">
                    “No one could ever succeed without a mentor”
                  </span>
                  .
                </AccordionItem>
                <AccordionItem key="2" aria-label="community" title="Like-Minded Community">
                  Join our community of like minded entrepreneurs around the world where you can
                  interact, network and share problems to similar challenges and be motivated.
                </AccordionItem>
                <AccordionItem key="3" aria-label="flexible" title="Flexible Fee">
                  What we have done with HK Academy is to create a level ground where everyone can
                  join and start making money, with just an entry fee of 6000 francs you get access
                  to skills and businesses you can learn & earn a minimum of $1500 every month.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomePage
