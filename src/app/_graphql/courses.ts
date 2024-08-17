export const COURSES = `
  query Courses {
    Courses(limit: 300){
      docs{
        slug
      }
    }
  }
`

export const COURSE = `
  query Course($slug: string, $draft: boolean){
      Courses(where: {slug:{equals:$slug}}, limit:1, draft: $draft) {
        docs{
            id
            title
            description
            videoUrl
        }
    }
  }
`
