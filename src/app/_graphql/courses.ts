import { MEDIA_FIELDS } from './media'

export const COURSES = `
  query Courses {
    Courses(limit: 300){
      docs{
        slug
      }
    }
  }
`

export const COURSE_FIELDS = `
id
title
description
videoUrl
courseImage{
${MEDIA_FIELDS}
}
`

export const COURSE = `
  query Course($slug: string, $draft: boolean){
      Courses(where: {slug:{equals:$slug}}, limit:1, draft: $draft) {
        docs{
            ${COURSE_FIELDS}
        }
    }
  }
`
