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
  slug
  title
  mainDescription
  courseContent{
    description
    videoUrl
    videoTitle
  }
  courseImage{
    ${MEDIA_FIELDS}
  }
  relatedCourses{
    slug
    id
    title
    mainDescription
    courseContent{
      description
      videoUrl
      videoTitle
    }
    courseImage{
      ${MEDIA_FIELDS}
    }
  }
`

export const COURSE = `
  query Course($slug: String, $draft: Boolean){
      Courses(where: {slug:{equals:$slug}}, limit:1, draft: $draft) {
        docs{
          ${COURSE_FIELDS}
      }
    }
  }
`
