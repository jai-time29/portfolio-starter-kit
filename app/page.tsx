import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Dhatrik Jaikritha I'm a pre-final year developer proficient in C/C++/python/SQL
        dedicated to solving complex technical challenges and scaling machine learning projects. 
        Beyond just training models, I focus on the engineering required to make
        them fast,reliable, and scalable in production environments. 
        I’m always looking forward for the next big projects the tech stack to work on`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
