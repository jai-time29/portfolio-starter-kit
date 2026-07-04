import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl font-semibold tracking-tighter">
        Dhatrik Jaikritha
      </h1>
      <div className="mb-8 mt-1 text-sm text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
        <p>Pre-final Year Student</p>
        <p>Indian Institute of Technology, Jodhpur</p>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
